import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quotes-CME-65x1.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var BINANCE_MAP = {
	BTCUSD: "BTCUSDT",
	ETHUSD: "ETHUSDT",
	SOLUSD: "SOLUSDT",
	XRPUSD: "XRPUSDT",
	EURUSD: "EURUSDT",
	GBPUSD: "GBPUSDT",
	AUDUSD: "AUDUSDT",
	NZDUSD: "NZDUSDT"
};
var GECKO_MAP = {
	bitcoin: "BTCUSD",
	ethereum: "ETHUSD",
	solana: "SOLUSD",
	ripple: "XRPUSD",
	"pax-gold": "XAUUSD"
};
async function readJson(url) {
	const res = await fetch(url, { signal: AbortSignal.timeout(8e3) });
	if (!res.ok) throw new Error(String(res.status));
	return res.json();
}
async function pullBinance() {
	const rows = await readJson("https://api.binance.com/api/v3/ticker/price");
	const bySym = new Map(rows.map((r) => [r.symbol, Number(r.price)]));
	const out = {};
	for (const [ours, theirs] of Object.entries(BINANCE_MAP)) {
		const px = bySym.get(theirs);
		if (px && Number.isFinite(px) && px > 0) out[ours] = px;
	}
	const paxg = bySym.get("PAXGUSDT");
	if (paxg && Number.isFinite(paxg) && paxg > 0) out.XAUUSD = paxg;
	return out;
}
async function pullFx() {
	const r = (await readJson("https://open.er-api.com/v6/latest/USD")).rates;
	if (!r) return {};
	const eurusd = r.EUR ? 1 / r.EUR : void 0;
	const gbpusd = r.GBP ? 1 / r.GBP : void 0;
	const audusd = r.AUD ? 1 / r.AUD : void 0;
	const nzdusd = r.NZD ? 1 / r.NZD : void 0;
	const out = {};
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
async function pullGecko() {
	const data = await readJson(`https://api.coingecko.com/api/v3/simple/price?ids=${Object.keys(GECKO_MAP).join(",")}&vs_currencies=usd`);
	const out = {};
	for (const [id, symbol] of Object.entries(GECKO_MAP)) {
		const px = data[id]?.usd;
		if (px && px > 0) out[symbol] = px;
	}
	return out;
}
var fetchLiveQuotes_createServerFn_handler = createServerRpc({
	id: "25904f70852851d97d8b3575d36e3bd4815c95d22c31dfb69a761e9f97381261",
	name: "fetchLiveQuotes",
	filename: "src/lib/market/quotes.ts"
}, (opts) => fetchLiveQuotes.__executeServer(opts));
var fetchLiveQuotes = createServerFn({ method: "GET" }).handler(fetchLiveQuotes_createServerFn_handler, async () => {
	const parts = await Promise.all([
		pullFx().catch(() => ({})),
		pullGecko().catch(() => ({})),
		pullBinance().catch(() => ({}))
	]);
	const merged = {};
	for (const part of parts) Object.assign(merged, part);
	return merged;
});
//#endregion
export { fetchLiveQuotes_createServerFn_handler };
