const BINANCE_MAP: Record<string, string> = {
  BTCUSD: "BTCUSDT",
  ETHUSD: "ETHUSDT",
  SOLUSD: "SOLUSDT",
  XRPUSD: "XRPUSDT",
  EURUSD: "EURUSDT",
  GBPUSD: "GBPUSDT",
  AUDUSD: "AUDUSDT",
  NZDUSD: "NZDUSDT",
};

const GECKO_MAP: Record<string, string> = {
  bitcoin: "BTCUSD",
  ethereum: "ETHUSD",
  solana: "SOLUSD",
  ripple: "XRPUSD",
  "pax-gold": "XAUUSD",
};

const COINCAP_MAP: Record<string, string> = {
  bitcoin: "BTCUSD",
  ethereum: "ETHUSD",
  solana: "SOLUSD",
  xrp: "XRPUSD",
  "pax-gold": "XAUUSD",
};

async function readJson(url: string): Promise<unknown> {
  const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(String(res.status));
  return res.json();
}

export async function pullBinance(): Promise<Record<string, number>> {
  const rows = (await readJson(
    "https://api.binance.com/api/v3/ticker/price",
  )) as Array<{ symbol: string; price: string }>;
  const bySym = new Map(rows.map((r) => [r.symbol, Number(r.price)]));
  const out: Record<string, number> = {};
  for (const [ours, theirs] of Object.entries(BINANCE_MAP)) {
    const px = bySym.get(theirs);
    if (px && Number.isFinite(px) && px > 0) out[ours] = px;
  }
  const paxg = bySym.get("PAXGUSDT");
  if (paxg && Number.isFinite(paxg) && paxg > 0) out.XAUUSD = paxg;
  return out;
}

export async function pullFx(): Promise<Record<string, number>> {
  const data = (await readJson("https://open.er-api.com/v6/latest/USD")) as {
    rates?: Record<string, number>;
  };
  const r = data.rates;
  if (!r) return {};
  const eurusd = r.EUR ? 1 / r.EUR : undefined;
  const gbpusd = r.GBP ? 1 / r.GBP : undefined;
  const audusd = r.AUD ? 1 / r.AUD : undefined;
  const nzdusd = r.NZD ? 1 / r.NZD : undefined;
  const out: Record<string, number> = {};
  if (eurusd) out.EURUSD = eurusd;
  if (gbpusd) out.GBPUSD = gbpusd;
  if (r.JPY) out.USDJPY = r.JPY;
  if (r.CHF) out.USDCHF = r.CHF;
  if (audusd) out.AUDUSD = audusd;
  if (r.CAD) out.USDCAD = r.CAD;
  if (nzdusd) out.NZDUSD = nzdusd;
  if (r.INR) out.USDINR = r.INR;
  if (eurusd && gbpusd) out.EURGBP = eurusd / gbpusd;
  if (eurusd && r.JPY) out.EURJPY = eurusd * r.JPY;
  if (gbpusd && r.JPY) out.GBPJPY = gbpusd * r.JPY;
  return out;
}

export async function pullGecko(): Promise<Record<string, number>> {
  const ids = Object.keys(GECKO_MAP).join(",");
  const data = (await readJson(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`,
  )) as Record<string, { usd?: number }>;
  const out: Record<string, number> = {};
  for (const [id, symbol] of Object.entries(GECKO_MAP)) {
    const px = data[id]?.usd;
    if (px && px > 0) out[symbol] = px;
  }
  return out;
}

export async function pullCoincap(): Promise<Record<string, number>> {
  const ids = Object.keys(COINCAP_MAP).join(",");
  const data = (await readJson(
    `https://api.coincap.io/v2/assets?ids=${ids}`,
  )) as { data?: Array<{ id: string; priceUsd: string }> };
  const out: Record<string, number> = {};
  for (const row of data.data ?? []) {
    const symbol = COINCAP_MAP[row.id];
    const px = Number(row.priceUsd);
    if (symbol && Number.isFinite(px) && px > 0) out[symbol] = px;
  }
  return out;
}

export async function pullQuotes(): Promise<Record<string, number>> {
  const parts = await Promise.all([
    pullFx().catch(() => ({}) as Record<string, number>),
    pullGecko().catch(() => ({}) as Record<string, number>),
    pullCoincap().catch(() => ({}) as Record<string, number>),
    pullBinance().catch(() => ({}) as Record<string, number>),
  ]);
  const merged: Record<string, number> = {};
  for (const part of parts) Object.assign(merged, part);
  return merged;
}
