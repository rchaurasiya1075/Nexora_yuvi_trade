import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, r as Slot, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as Link, d as useRouterState, g as createRootRoute, h as createFileRoute, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Navigate, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { C as ChartColumn, E as ArrowRight, S as Check, T as Bell, _ as Landmark, a as Smartphone, b as Clock3, c as Settings, d as PanelRight, f as Newspaper, g as LayoutGrid, h as LogOut, i as TrendingUp, l as Search, m as Menu, n as Wallet, o as SlidersHorizontal, p as Minus, r as TriangleAlert, s as Shield, t as X, u as QrCode, v as Crosshair, w as ChartLine, x as CircleHelp, y as Copy } from "../_libs/lucide-react.mjs";
import { a as getApp, o as getApps, s as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import { a as setPersistence, c as updateProfile, i as onAuthStateChanged, n as createUserWithEmailAndPassword, o as signInWithEmailAndPassword, r as getAuth, s as signOut, t as browserLocalPersistence } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
import { a as runTransaction, c as where, d as getFirestore, i as query, l as collection, n as getDocs, o as setDoc, r as limit, s as updateDoc, t as getDoc, u as doc } from "../_libs/@firebase/firestore+[...].mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-eJAXCzYG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var ASSET_LABEL = {
	forex: "Forex",
	crypto: "Crypto",
	metals: "Metals",
	indices: "Indices",
	energy: "Energy",
	shares: "Shares"
};
var INSTRUMENTS = [
	{
		symbol: "EURUSD",
		display: "EUR/USD",
		name: "Euro / US Dollar",
		assetClass: "forex",
		base: 1.1483,
		digits: 5,
		pip: 1e-4,
		spreadStd: 1e-4,
		spreadRaw: 2e-5,
		contractSize: 1e5,
		leverage: 50,
		vol: 22e-5,
		commissionRaw: 3.5,
		hours: "24/5"
	},
	{
		symbol: "GBPUSD",
		display: "GBP/USD",
		name: "Pound / US Dollar",
		assetClass: "forex",
		base: 1.3393,
		digits: 5,
		pip: 1e-4,
		spreadStd: 13e-5,
		spreadRaw: 3e-5,
		contractSize: 1e5,
		leverage: 50,
		vol: 28e-5,
		commissionRaw: 3.5,
		hours: "24/5"
	},
	{
		symbol: "USDJPY",
		display: "USD/JPY",
		name: "US Dollar / Yen",
		assetClass: "forex",
		base: 156.85,
		digits: 3,
		pip: .01,
		spreadStd: .011,
		spreadRaw: .003,
		contractSize: 1e5,
		leverage: 50,
		vol: 2e-4,
		commissionRaw: 3.5,
		hours: "24/5"
	},
	{
		symbol: "USDCHF",
		display: "USD/CHF",
		name: "US Dollar / Swiss Franc",
		assetClass: "forex",
		base: .8218,
		digits: 5,
		pip: 1e-4,
		spreadStd: 15e-5,
		spreadRaw: 4e-5,
		contractSize: 1e5,
		leverage: 50,
		vol: 2e-4,
		commissionRaw: 3.5,
		hours: "24/5"
	},
	{
		symbol: "AUDUSD",
		display: "AUD/USD",
		name: "Aussie / US Dollar",
		assetClass: "forex",
		base: .7117,
		digits: 5,
		pip: 1e-4,
		spreadStd: 12e-5,
		spreadRaw: 3e-5,
		contractSize: 1e5,
		leverage: 50,
		vol: 26e-5,
		commissionRaw: 3.5,
		hours: "24/5"
	},
	{
		symbol: "USDCAD",
		display: "USD/CAD",
		name: "US Dollar / Canadian Dollar",
		assetClass: "forex",
		base: 1.4001,
		digits: 5,
		pip: 1e-4,
		spreadStd: 16e-5,
		spreadRaw: 4e-5,
		contractSize: 1e5,
		leverage: 50,
		vol: 22e-5,
		commissionRaw: 3.5,
		hours: "24/5"
	},
	{
		symbol: "NZDUSD",
		display: "NZD/USD",
		name: "Kiwi / US Dollar",
		assetClass: "forex",
		base: .5723,
		digits: 5,
		pip: 1e-4,
		spreadStd: 16e-5,
		spreadRaw: 5e-5,
		contractSize: 1e5,
		leverage: 50,
		vol: 3e-4,
		commissionRaw: 3.5,
		hours: "24/5"
	},
	{
		symbol: "EURGBP",
		display: "EUR/GBP",
		name: "Euro / Pound",
		assetClass: "forex",
		base: .8571,
		digits: 5,
		pip: 1e-4,
		spreadStd: 12e-5,
		spreadRaw: 4e-5,
		contractSize: 1e5,
		leverage: 50,
		vol: 18e-5,
		commissionRaw: 3.5,
		hours: "24/5"
	},
	{
		symbol: "EURJPY",
		display: "EUR/JPY",
		name: "Euro / Yen",
		assetClass: "forex",
		base: 180.12,
		digits: 3,
		pip: .01,
		spreadStd: .015,
		spreadRaw: .005,
		contractSize: 1e5,
		leverage: 50,
		vol: 24e-5,
		commissionRaw: 3.5,
		hours: "24/5"
	},
	{
		symbol: "GBPJPY",
		display: "GBP/JPY",
		name: "Pound / Yen",
		assetClass: "forex",
		base: 210.08,
		digits: 3,
		pip: .01,
		spreadStd: .02,
		spreadRaw: .007,
		contractSize: 1e5,
		leverage: 50,
		vol: 32e-5,
		commissionRaw: 3.5,
		hours: "24/5"
	},
	{
		symbol: "USDINR",
		display: "USD/INR",
		name: "US Dollar / Indian Rupee",
		assetClass: "forex",
		base: 88.42,
		digits: 3,
		pip: .01,
		spreadStd: .04,
		spreadRaw: .015,
		contractSize: 1e5,
		leverage: 20,
		vol: 12e-5,
		commissionRaw: 3.5,
		hours: "24/5"
	},
	{
		symbol: "BTCUSD",
		display: "BTC/USD",
		name: "Bitcoin",
		assetClass: "crypto",
		base: 77990,
		digits: 1,
		pip: 1,
		spreadStd: 28,
		spreadRaw: 12,
		contractSize: 1,
		leverage: 5,
		vol: .0014,
		commissionRaw: 0,
		hours: "24/7"
	},
	{
		symbol: "ETHUSD",
		display: "ETH/USD",
		name: "Ethereum",
		assetClass: "crypto",
		base: 2505.5,
		digits: 2,
		pip: .1,
		spreadStd: 1.6,
		spreadRaw: .7,
		contractSize: 1,
		leverage: 5,
		vol: .0016,
		commissionRaw: 0,
		hours: "24/7"
	},
	{
		symbol: "SOLUSD",
		display: "SOL/USD",
		name: "Solana",
		assetClass: "crypto",
		base: 94.06,
		digits: 3,
		pip: .01,
		spreadStd: .08,
		spreadRaw: .04,
		contractSize: 1,
		leverage: 5,
		vol: .002,
		commissionRaw: 0,
		hours: "24/7"
	},
	{
		symbol: "XRPUSD",
		display: "XRP/USD",
		name: "XRP",
		assetClass: "crypto",
		base: 1.502,
		digits: 4,
		pip: 1e-4,
		spreadStd: .0024,
		spreadRaw: .001,
		contractSize: 1,
		leverage: 5,
		vol: .0022,
		commissionRaw: 0,
		hours: "24/7"
	},
	{
		symbol: "XAUUSD",
		display: "XAU/USD",
		name: "Spot Gold",
		assetClass: "metals",
		base: 4385.9,
		digits: 2,
		pip: .1,
		spreadStd: .32,
		spreadRaw: .12,
		contractSize: 100,
		leverage: 20,
		vol: 45e-5,
		commissionRaw: 0,
		hours: "7-day"
	},
	{
		symbol: "XAGUSD",
		display: "XAG/USD",
		name: "Spot Silver",
		assetClass: "metals",
		base: 66.27,
		digits: 3,
		pip: .01,
		spreadStd: .028,
		spreadRaw: .012,
		contractSize: 5e3,
		leverage: 10,
		vol: 8e-4,
		commissionRaw: 0,
		hours: "24/5"
	},
	{
		symbol: "XPTUSD",
		display: "XPT/USD",
		name: "Spot Platinum",
		assetClass: "metals",
		base: 1808,
		digits: 2,
		pip: .1,
		spreadStd: 1.4,
		spreadRaw: .6,
		contractSize: 50,
		leverage: 10,
		vol: 7e-4,
		commissionRaw: 0,
		hours: "24/5"
	},
	{
		symbol: "US100",
		display: "US Tech 100",
		name: "Nasdaq 100",
		assetClass: "indices",
		base: 29522,
		digits: 1,
		pip: 1,
		spreadStd: 1.2,
		spreadRaw: .6,
		contractSize: 1,
		leverage: 20,
		vol: 35e-5,
		commissionRaw: 0,
		hours: "Extended"
	},
	{
		symbol: "US30",
		display: "Wall Street 30",
		name: "Dow Jones",
		assetClass: "indices",
		base: 51770,
		digits: 1,
		pip: 1,
		spreadStd: 2.2,
		spreadRaw: 1,
		contractSize: 1,
		leverage: 20,
		vol: 28e-5,
		commissionRaw: 0,
		hours: "Extended"
	},
	{
		symbol: "US500",
		display: "US 500",
		name: "S&P 500",
		assetClass: "indices",
		base: 7650.5,
		digits: 1,
		pip: .1,
		spreadStd: .5,
		spreadRaw: .25,
		contractSize: 1,
		leverage: 20,
		vol: 28e-5,
		commissionRaw: 0,
		hours: "Extended"
	},
	{
		symbol: "GER40",
		display: "Germany 40",
		name: "DAX 40",
		assetClass: "indices",
		base: 25314,
		digits: 1,
		pip: 1,
		spreadStd: 1.6,
		spreadRaw: .8,
		contractSize: 1,
		leverage: 20,
		vol: 32e-5,
		commissionRaw: 0,
		hours: "24/5"
	},
	{
		symbol: "UK100",
		display: "UK 100",
		name: "FTSE 100",
		assetClass: "indices",
		base: 10659,
		digits: 1,
		pip: 1,
		spreadStd: 1.4,
		spreadRaw: .7,
		contractSize: 1,
		leverage: 20,
		vol: 3e-4,
		commissionRaw: 0,
		hours: "24/5"
	},
	{
		symbol: "USOIL",
		display: "US Crude",
		name: "WTI Crude Oil",
		assetClass: "energy",
		base: 95.42,
		digits: 2,
		pip: .01,
		spreadStd: .04,
		spreadRaw: .02,
		contractSize: 100,
		leverage: 10,
		vol: 7e-4,
		commissionRaw: 0,
		hours: "24/5"
	},
	{
		symbol: "UKOIL",
		display: "UK Brent",
		name: "Brent Crude Oil",
		assetClass: "energy",
		base: 103.37,
		digits: 2,
		pip: .01,
		spreadStd: .04,
		spreadRaw: .02,
		contractSize: 100,
		leverage: 10,
		vol: 65e-5,
		commissionRaw: 0,
		hours: "24/5"
	},
	{
		symbol: "NATGAS",
		display: "Natural Gas",
		name: "US Natural Gas",
		assetClass: "energy",
		base: 2.9,
		digits: 3,
		pip: .001,
		spreadStd: .008,
		spreadRaw: .004,
		contractSize: 1e4,
		leverage: 10,
		vol: .0014,
		commissionRaw: 0,
		hours: "24/5"
	},
	{
		symbol: "NVDA",
		display: "NVDA",
		name: "NVIDIA",
		assetClass: "shares",
		base: 178.4,
		digits: 2,
		pip: .01,
		spreadStd: .06,
		spreadRaw: .04,
		contractSize: 1,
		leverage: 5,
		vol: 9e-4,
		commissionRaw: 0,
		hours: "Extended"
	},
	{
		symbol: "TSLA",
		display: "TSLA",
		name: "Tesla",
		assetClass: "shares",
		base: 246.8,
		digits: 2,
		pip: .01,
		spreadStd: .08,
		spreadRaw: .05,
		contractSize: 1,
		leverage: 5,
		vol: .0012,
		commissionRaw: 0,
		hours: "Extended"
	},
	{
		symbol: "AAPL",
		display: "AAPL",
		name: "Apple",
		assetClass: "shares",
		base: 232.15,
		digits: 2,
		pip: .01,
		spreadStd: .04,
		spreadRaw: .03,
		contractSize: 1,
		leverage: 5,
		vol: 55e-5,
		commissionRaw: 0,
		hours: "Extended"
	},
	{
		symbol: "MSFT",
		display: "MSFT",
		name: "Microsoft",
		assetClass: "shares",
		base: 428.6,
		digits: 2,
		pip: .01,
		spreadStd: .06,
		spreadRaw: .04,
		contractSize: 1,
		leverage: 5,
		vol: 5e-4,
		commissionRaw: 0,
		hours: "Extended"
	},
	{
		symbol: "AMZN",
		display: "AMZN",
		name: "Amazon",
		assetClass: "shares",
		base: 221.3,
		digits: 2,
		pip: .01,
		spreadStd: .05,
		spreadRaw: .03,
		contractSize: 1,
		leverage: 5,
		vol: 65e-5,
		commissionRaw: 0,
		hours: "Extended"
	},
	{
		symbol: "GOOGL",
		display: "GOOGL",
		name: "Alphabet",
		assetClass: "shares",
		base: 186.9,
		digits: 2,
		pip: .01,
		spreadStd: .05,
		spreadRaw: .03,
		contractSize: 1,
		leverage: 5,
		vol: 6e-4,
		commissionRaw: 0,
		hours: "Extended"
	}
];
var INSTRUMENT_MAP = new Map(INSTRUMENTS.map((i) => [i.symbol, i]));
function getInstrument(symbol) {
	const inst = INSTRUMENT_MAP.get(symbol);
	if (!inst) throw new Error(`Unknown symbol ${symbol}`);
	return inst;
}
var FEATURED_SYMBOLS = [
	"EURUSD",
	"XAUUSD",
	"BTCUSD",
	"US100",
	"GBPUSD",
	"USOIL"
];
var TIMEFRAMES = [
	{
		id: "1m",
		label: "1m",
		ms: 6e4
	},
	{
		id: "5m",
		label: "5m",
		ms: 3e5
	},
	{
		id: "15m",
		label: "15m",
		ms: 9e5
	},
	{
		id: "30m",
		label: "30m",
		ms: 18e5
	},
	{
		id: "1h",
		label: "1H",
		ms: 36e5
	},
	{
		id: "4h",
		label: "4H",
		ms: 144e5
	},
	{
		id: "1d",
		label: "1D",
		ms: 864e5
	}
];
var HISTORY = 240;
var LIVE_STALE_MS = 45e3;
function mulberry32(seed) {
	let a = seed >>> 0;
	return () => {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function gauss(rng) {
	const u = Math.max(1e-9, rng());
	const v = rng();
	return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
function hashSymbol(symbol) {
	let h = 2166136261;
	for (let i = 0; i < symbol.length; i++) {
		h ^= symbol.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}
function tfMs(tf) {
	return TIMEFRAMES.find((t) => t.id === tf).ms;
}
function buildHistory(inst, tf, now) {
	const rng = mulberry32(hashSymbol(inst.symbol) ^ tfMs(tf));
	const step = tfMs(tf);
	const start = Math.floor(now / step) * step - HISTORY * step;
	const candles = [];
	let price = inst.base * (.96 + rng() * .03);
	const vol = inst.vol * Math.sqrt(step / 6e4);
	for (let i = 0; i < HISTORY; i++) {
		const t = start + i * step;
		const o = price;
		const shock = gauss(rng) * vol;
		const c = Math.max(inst.base * .2, o * (1 + shock));
		const wiggle = Math.abs(gauss(rng)) * vol * .55;
		const h = Math.max(o, c) * (1 + wiggle);
		const l = Math.min(o, c) * (1 - wiggle);
		candles.push({
			t,
			o,
			h,
			l,
			c
		});
		price = c;
	}
	const last = candles[candles.length - 1];
	const scale = inst.base / last.c;
	for (const c of candles) {
		c.o *= scale;
		c.h *= scale;
		c.l *= scale;
		c.c *= scale;
	}
	last.c = inst.base;
	last.h = Math.max(last.h, inst.base);
	last.l = Math.min(last.l, inst.base);
	return candles;
}
var MarketEngine = class {
	quotes = /* @__PURE__ */ new Map();
	candles = /* @__PURE__ */ new Map();
	listeners = /* @__PURE__ */ new Set();
	timer = null;
	pricing = "standard";
	liveTarget = /* @__PURE__ */ new Map();
	liveAt = /* @__PURE__ */ new Map();
	started = false;
	feedLive = false;
	constructor() {
		this.seed();
	}
	seed() {
		const now = Date.now();
		for (const inst of INSTRUMENTS) {
			const byTf = /* @__PURE__ */ new Map();
			for (const tf of TIMEFRAMES) byTf.set(tf.id, buildHistory(inst, tf.id, now));
			this.candles.set(inst.symbol, byTf);
			const m15 = byTf.get("15m");
			const sessionOpen = m15.length > 20 ? m15[m15.length - 20].c : inst.base;
			this.quotes.set(inst.symbol, this.makeQuote(inst, inst.base, sessionOpen, now, false));
		}
	}
	setPricing(mode) {
		this.pricing = mode;
		for (const inst of INSTRUMENTS) {
			const q = this.quotes.get(inst.symbol);
			if (!q) continue;
			this.quotes.set(inst.symbol, this.makeQuote(inst, q.mid, q.open, q.updatedAt, q.live));
		}
		this.emit();
	}
	spreadOf(inst) {
		return this.pricing === "raw" ? inst.spreadRaw : inst.spreadStd;
	}
	makeQuote(inst, mid, open, now, live) {
		const half = this.spreadOf(inst) / 2;
		const change = mid - open;
		const q = this.quotes.get(inst.symbol);
		return {
			symbol: inst.symbol,
			mid,
			bid: mid - half,
			ask: mid + half,
			change,
			changePct: change / open * 100,
			open,
			high: Math.max(mid, q?.high ?? open),
			low: Math.min(mid, q?.low ?? open),
			updatedAt: now,
			live
		};
	}
	start() {
		if (this.started || typeof window === "undefined") return;
		this.started = true;
		this.timer = setInterval(() => this.tick(), 280);
		import("./live-feed-HQDb20K4.mjs").then((m) => m.startLiveFeed());
	}
	stop() {
		if (this.timer) clearInterval(this.timer);
		this.timer = null;
		this.started = false;
	}
	subscribe(fn) {
		this.listeners.add(fn);
		this.start();
		return () => {
			this.listeners.delete(fn);
		};
	}
	emit() {
		for (const fn of this.listeners) fn();
	}
	getQuote(symbol) {
		return this.quotes.get(symbol);
	}
	getQuotes() {
		return INSTRUMENTS.map((i) => this.quotes.get(i.symbol));
	}
	getCandles(symbol, tf) {
		return this.candles.get(symbol)?.get(tf) ?? [];
	}
	getSpark(symbol) {
		return this.getCandles(symbol, "15m").slice(-32).map((x) => x.c);
	}
	isLive(symbol) {
		const at = this.liveAt.get(symbol) ?? 0;
		return Date.now() - at < LIVE_STALE_MS;
	}
	/** Pull the tape toward a real-world mid without wiping the candle history. */
	anchor(symbol, liveMid) {
		if (!Number.isFinite(liveMid) || liveMid <= 0) return;
		const inst = INSTRUMENT_SAFE(symbol);
		if (!inst) return;
		const q = this.quotes.get(symbol);
		if (!q) return;
		const now = Date.now();
		this.liveTarget.set(symbol, liveMid);
		this.liveAt.set(symbol, now);
		this.feedLive = true;
		const next = Math.abs(liveMid - q.mid) / liveMid > .015 ? liveMid : q.mid * .35 + liveMid * .65;
		this.applyMid(inst, next, now, true);
	}
	markFeed(ok) {
		this.feedLive = ok;
	}
	applyMid(inst, next, now, live) {
		const q = this.quotes.get(inst.symbol);
		const half = this.spreadOf(inst) / 2;
		const change = next - q.open;
		this.quotes.set(inst.symbol, {
			...q,
			mid: next,
			bid: next - half,
			ask: next + half,
			change,
			changePct: change / q.open * 100,
			high: Math.max(q.high, next),
			low: Math.min(q.low, next),
			updatedAt: now,
			live
		});
		const byTf = this.candles.get(inst.symbol);
		for (const tf of TIMEFRAMES) {
			const arr = byTf.get(tf.id);
			const last = arr[arr.length - 1];
			const bucket = Math.floor(now / tf.ms) * tf.ms;
			if (bucket > last.t) {
				arr.push({
					t: bucket,
					o: last.c,
					h: next,
					l: next,
					c: next
				});
				if (arr.length > HISTORY) arr.shift();
			} else {
				last.c = next;
				last.h = Math.max(last.h, next);
				last.l = Math.min(last.l, next);
			}
		}
	}
	tick() {
		const now = Date.now();
		const usd = gauss(Math.random) * 12e-6;
		const risk = gauss(Math.random) * 16e-6;
		for (const inst of INSTRUMENTS) {
			const q = this.quotes.get(inst.symbol);
			let drift = gauss(Math.random) * inst.vol * .035;
			if (inst.assetClass === "forex") {
				if (inst.symbol.startsWith("USD")) drift += usd;
				else if (inst.symbol.endsWith("USD")) drift -= usd;
				if (inst.symbol.includes("JPY")) drift += usd * .4;
			} else if (inst.assetClass === "metals") drift -= usd * .7 + risk * .3;
			else if (inst.assetClass === "crypto") drift += risk * 1.4;
			else if (inst.assetClass === "indices" || inst.assetClass === "shares") drift += risk * .6 - usd * .25;
			else if (inst.assetClass === "energy") drift += risk * .5;
			const target = this.liveTarget.get(inst.symbol);
			const live = this.isLive(inst.symbol);
			let next;
			if (target && live) {
				const pull = (target - q.mid) * .12;
				next = Math.max(inst.base * .15, q.mid * (1 + drift * .22) + pull);
			} else next = Math.max(inst.base * .15, q.mid * (1 + drift));
			this.applyMid(inst, next, now, live);
		}
		this.emit();
	}
};
function INSTRUMENT_SAFE(symbol) {
	try {
		return getInstrument(symbol);
	} catch {
		return null;
	}
}
var market = new MarketEngine();
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var app = getApps().length ? getApp() : initializeApp({
	apiKey: "AIzaSyAa5VyqgD_oXcc8V98tBGay3wToOElKoD0",
	authDomain: "nexora-bb654.firebaseapp.com",
	projectId: "nexora-bb654",
	storageBucket: "nexora-bb654.firebasestorage.app",
	messagingSenderId: "984170212851",
	appId: "1:984170212851:web:ca8df57df9f84d75923686"
});
var firebaseAuth = getAuth(app);
var db = getFirestore(app);
var persistenceReady = null;
function ensureAuthPersistence() {
	if (typeof window === "undefined") return Promise.resolve();
	if (!persistenceReady) persistenceReady = setPersistence(firebaseAuth, browserLocalPersistence).then(() => void 0, () => void 0);
	return persistenceReady;
}
function toUsd(amount, unitsPerUsd) {
	return Number((amount / (unitsPerUsd > 0 ? unitsPerUsd : 1)).toFixed(2));
}
function currencySymbol(code) {
	return {
		USD: "$",
		INR: "₹",
		EUR: "€",
		GBP: "£",
		AED: "AED ",
		AUD: "A$",
		CAD: "C$",
		SGD: "S$",
		HKD: "HK$",
		JPY: "¥"
	}[code] ?? `${code} `;
}
function formatAmount(n, code = "USD", digits = 2) {
	const abs = Math.abs(n);
	const locale = code === "INR" ? "en-IN" : "en-US";
	const formatted = abs.toLocaleString(locale, {
		minimumFractionDigits: code === "JPY" ? 0 : digits,
		maximumFractionDigits: code === "JPY" ? 0 : digits
	});
	return `${n < 0 ? "−" : ""}${currencySymbol(code)}${formatted}`;
}
function upiUri(details) {
	const pa = (details.vpa || "").trim();
	const params = new URLSearchParams();
	params.set("pa", pa);
	if (details.payee) params.set("pn", details.payee);
	if (details.currency === "INR" && details.amount && details.amount > 0) {
		params.set("am", details.amount.toFixed(2));
		params.set("cu", "INR");
	}
	if (details.note) params.set("tn", details.note);
	return `upi://pay?${params.toString()}`;
}
var MAX_BALANCE = 1e6;
var META = doc(db, "desk", "meta");
var KINDS = /* @__PURE__ */ new Set([
	"upi",
	"qr",
	"bank",
	"swift"
]);
function emptyBook() {
	return {
		balance: 0,
		status: "active",
		pricing: "standard",
		selected: "EURUSD",
		positions: [],
		pending: [],
		history: []
	};
}
var SEED_METHODS = [
	{
		id: 1,
		kind: "upi",
		title: "UPI",
		currency: "INR",
		details: {
			vpa: "nexora@upi",
			payee: "Nexora Markets",
			note: "NEXORA desk"
		},
		enabled: true,
		sortOrder: 0
	},
	{
		id: 2,
		kind: "qr",
		title: "UPI QR",
		currency: "INR",
		details: {
			vpa: "nexora@upi",
			payee: "Nexora Markets",
			note: "Scan to pay"
		},
		enabled: true,
		sortOrder: 1
	},
	{
		id: 3,
		kind: "bank",
		title: "INR bank transfer",
		currency: "INR",
		details: {
			bankName: "HDFC Bank",
			accountName: "Nexora Markets",
			accountNumber: "50100012345678",
			ifsc: "HDFC0001234",
			branch: "Mumbai"
		},
		enabled: true,
		sortOrder: 2
	},
	{
		id: 4,
		kind: "swift",
		title: "USD wire / SWIFT",
		currency: "USD",
		details: {
			bankName: "Citibank",
			accountName: "Nexora Markets Ltd",
			accountNumber: "409123456789",
			swift: "CITIUS33",
			iban: "US64CITI000000409123456789",
			branch: "New York"
		},
		enabled: true,
		sortOrder: 3
	}
];
var SEED_CCY = [
	{
		code: "USD",
		name: "US Dollar",
		symbol: "$",
		unitsPerUsd: 1,
		enabled: true,
		sortOrder: 0
	},
	{
		code: "INR",
		name: "Indian Rupee",
		symbol: "₹",
		unitsPerUsd: 83.5,
		enabled: true,
		sortOrder: 1
	},
	{
		code: "EUR",
		name: "Euro",
		symbol: "€",
		unitsPerUsd: .92,
		enabled: true,
		sortOrder: 2
	},
	{
		code: "GBP",
		name: "British Pound",
		symbol: "£",
		unitsPerUsd: .78,
		enabled: true,
		sortOrder: 3
	},
	{
		code: "AED",
		name: "UAE Dirham",
		symbol: "AED",
		unitsPerUsd: 3.67,
		enabled: true,
		sortOrder: 4
	},
	{
		code: "AUD",
		name: "Australian Dollar",
		symbol: "A$",
		unitsPerUsd: 1.52,
		enabled: true,
		sortOrder: 5
	},
	{
		code: "CAD",
		name: "Canadian Dollar",
		symbol: "C$",
		unitsPerUsd: 1.36,
		enabled: true,
		sortOrder: 6
	},
	{
		code: "SGD",
		name: "Singapore Dollar",
		symbol: "S$",
		unitsPerUsd: 1.35,
		enabled: true,
		sortOrder: 7
	},
	{
		code: "HKD",
		name: "Hong Kong Dollar",
		symbol: "HK$",
		unitsPerUsd: 7.8,
		enabled: true,
		sortOrder: 8
	},
	{
		code: "JPY",
		name: "Japanese Yen",
		symbol: "¥",
		unitsPerUsd: 148,
		enabled: true,
		sortOrder: 9
	}
];
function asMeta(raw) {
	return {
		seeded: Boolean(raw?.seeded),
		staff: Array.isArray(raw?.staff) ? raw?.staff : [],
		nextMethodId: Number(raw?.nextMethodId) || 5,
		nextDepositId: Number(raw?.nextDepositId) || 1,
		nextLedgerId: Number(raw?.nextLedgerId) || 1,
		methods: Array.isArray(raw?.methods) ? raw?.methods : SEED_METHODS,
		currencies: Array.isArray(raw?.currencies) ? raw?.currencies : SEED_CCY
	};
}
async function ensureDeskSeeded() {
	const snap = await getDoc(META);
	if (snap.exists() && asMeta(snap.data()).seeded) return asMeta(snap.data());
	const seed = {
		seeded: true,
		staff: [],
		nextMethodId: 5,
		nextDepositId: 1,
		nextLedgerId: 1,
		methods: SEED_METHODS,
		currencies: SEED_CCY
	};
	await setDoc(META, seed, { merge: true });
	return seed;
}
async function ensureTraderProfile(user) {
	await ensureDeskSeeded();
	const ref = doc(db, "traders", user.uid);
	const existing = await getDoc(ref);
	const name = user.displayName || user.email?.split("@")[0] || "Trader";
	const email = user.email || "";
	if (!existing.exists()) {
		await setDoc(ref, {
			name,
			email,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			role: "user"
		});
		await setDoc(doc(db, "accounts", user.uid), emptyBook());
		return;
	}
	await setDoc(ref, {
		name,
		email
	}, { merge: true });
}
function requireUid() {
	const uid = firebaseAuth.currentUser?.uid;
	if (!uid) throw new Error("Sign in first.");
	return uid;
}
async function loadMeta() {
	return ensureDeskSeeded();
}
function isAdmin(meta, uid) {
	return meta.staff.includes(uid);
}
async function getMyOps() {
	const uid = requireUid();
	const meta = await loadMeta();
	return {
		userId: uid,
		isAdmin: isAdmin(meta, uid),
		canClaim: meta.staff.length === 0,
		staffCount: meta.staff.length
	};
}
async function claimAdmin() {
	const uid = requireUid();
	await runTransaction(db, async (tx) => {
		const meta = asMeta((await tx.get(META)).data());
		if (meta.staff.length === 0) {
			tx.set(META, {
				staff: [uid],
				seeded: true
			}, { merge: true });
			tx.set(doc(db, "traders", uid), { role: "admin" }, { merge: true });
			return;
		}
		if (!meta.staff.includes(uid)) throw new Error("An admin already exists.");
	});
	return getMyOps();
}
function asRequest(id, data) {
	const status = data.status === "approved" || data.status === "rejected" ? data.status : "pending";
	return {
		id: Number(id) || Number(data.id) || 0,
		userId: String(data.userId || ""),
		userName: data.userName ?? null,
		userEmail: data.userEmail ?? null,
		methodId: data.methodId == null ? null : Number(data.methodId),
		methodKind: String(data.methodKind || ""),
		methodTitle: String(data.methodTitle || ""),
		amount: Number(data.amount) || 0,
		currency: String(data.currency || "USD"),
		usdCredit: Number(data.usdCredit) || 0,
		payerName: String(data.payerName || ""),
		reference: String(data.reference || ""),
		note: data.note ?? null,
		status,
		adminNote: data.adminNote ?? null,
		createdAt: String(data.createdAt || ""),
		reviewedAt: data.reviewedAt ?? null
	};
}
async function getAdminOverview() {
	const uid = requireUid();
	if (!isAdmin(await loadMeta(), uid)) throw new Error("Admin only.");
	const traders = await getDocs(collection(db, "traders"));
	const deposits = await getDocs(collection(db, "deposits"));
	const accounts = await getDocs(collection(db, "accounts"));
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	let paperAum = 0;
	accounts.forEach((d) => {
		paperAum += Number(d.data().balance) || 0;
	});
	let pending = 0;
	let approvedToday = 0;
	deposits.forEach((d) => {
		const row = d.data();
		if (row.status === "pending") pending += 1;
		if (row.status === "approved" && String(row.reviewedAt || "").startsWith(today)) approvedToday += 1;
	});
	return {
		users: traders.size,
		pending,
		paperAum,
		approvedToday
	};
}
async function listCurrencies() {
	requireUid();
	return (await loadMeta()).currencies.slice().sort((a, b) => a.sortOrder - b.sortOrder);
}
async function listPaymentMethods(input) {
	const uid = requireUid();
	const all = input && typeof input === "object" && "data" in input ? Boolean(input.data?.all) : Boolean(input?.all);
	const meta = await loadMeta();
	const admin = isAdmin(meta, uid);
	return (all && admin ? meta.methods : meta.methods.filter((m) => m.enabled)).slice().sort((a, b) => a.sortOrder - b.sortOrder || a.id - b.id);
}
async function listMyDeposits() {
	const uid = requireUid();
	const qy = query(collection(db, "deposits"), where("userId", "==", uid), limit(40));
	return (await getDocs(qy)).docs.map((d) => asRequest(d.id, d.data())).sort((a, b) => b.id - a.id);
}
function dataOf(input) {
	if (input && typeof input === "object" && "data" in input) {
		const inner = input.data;
		if (inner && typeof inner === "object") return inner;
	}
	if (input && typeof input === "object") return input;
	return {};
}
async function createDepositRequest(input) {
	const uid = requireUid();
	const payload = dataOf(input);
	const amount = Number(payload.amount);
	if (!Number.isFinite(amount) || amount <= 0) throw new Error("Enter a valid amount.");
	const payerName = String(payload.payerName || "").trim().slice(0, 80);
	const reference = String(payload.reference || "").trim().slice(0, 80);
	if (payerName.length < 2) throw new Error("Enter the name on the transfer.");
	if (reference.length < 4) throw new Error("Enter UTR / UPI / wire reference.");
	const user = firebaseAuth.currentUser;
	const book = await loadOrCreateAccount(uid);
	if (book.status === "frozen") throw new Error("Account is frozen.");
	if ((await listMyDeposits()).filter((d) => d.status === "pending").length >= 5) throw new Error("You already have 5 pending requests.");
	const meta = await loadMeta();
	const method = meta.methods.find((m) => m.id === Number(payload.methodId) && m.enabled);
	if (!method) throw new Error("That payment method is off.");
	const ccy = meta.currencies.find((c) => c.code === method.currency && c.enabled);
	if (!ccy) throw new Error("Currency is disabled.");
	const usd = toUsd(amount, ccy.unitsPerUsd);
	if (usd < 1) throw new Error("Amount is too small.");
	if (usd > 1e5) throw new Error("Amount is above the $100,000 request cap.");
	if (book.balance + usd > 1e6) throw new Error("This would exceed the wallet cap.");
	return {
		id: await runTransaction(db, async (tx) => {
			const nextId = asMeta((await tx.get(META)).data()).nextDepositId || 1;
			tx.set(META, {
				nextDepositId: nextId + 1,
				seeded: true
			}, { merge: true });
			tx.set(doc(db, "deposits", String(nextId)), {
				id: nextId,
				userId: uid,
				userName: user?.displayName || user?.email?.split("@")[0] || "Trader",
				userEmail: user?.email || "",
				methodId: method.id,
				methodKind: method.kind,
				methodTitle: method.title,
				amount,
				currency: method.currency,
				usdCredit: usd,
				payerName,
				reference,
				note: String(payload.note || "").trim().slice(0, 200) || null,
				status: "pending",
				adminNote: null,
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				reviewedAt: null
			});
			return nextId;
		}),
		usdCredit: usd
	};
}
async function listAllDeposits(input) {
	const uid = requireUid();
	if (!isAdmin(await loadMeta(), uid)) throw new Error("Admin only.");
	const status = dataOf(input)?.status;
	const rows = (await getDocs(query(collection(db, "deposits"), limit(200)))).docs.map((d) => asRequest(d.id, d.data()));
	return (status === "approved" || status === "rejected" || status === "pending" ? rows.filter((d) => d.status === status) : rows).sort((a, b) => b.id - a.id);
}
async function reviewDeposit(input) {
	const uid = requireUid();
	if (!isAdmin(await loadMeta(), uid)) throw new Error("Admin only.");
	const payload = dataOf(input);
	const id = Number(payload.id);
	const ref = doc(db, "deposits", String(id));
	const snap = await getDoc(ref);
	if (!snap.exists()) throw new Error("Request not found.");
	const row = asRequest(snap.id, snap.data());
	if (row.status !== "pending") throw new Error("Already reviewed.");
	const note = String(payload.adminNote || "").trim().slice(0, 200) || null;
	if (payload.action === "reject") {
		await updateDoc(ref, {
			status: "rejected",
			adminNote: note,
			reviewedAt: (/* @__PURE__ */ new Date()).toISOString(),
			adminId: uid
		});
		return {
			ok: true,
			status: "rejected"
		};
	}
	const usd = payload.usdCredit != null && Number.isFinite(Number(payload.usdCredit)) ? Number(Number(payload.usdCredit).toFixed(2)) : row.usdCredit;
	if (usd < 1) throw new Error("Credit is too small.");
	if (usd > 1e5) throw new Error("Credit is above the request cap.");
	await creditUserBalance(row.userId, usd, "deposit", `Approved #${id} · ${row.currency} ${row.amount}`);
	await updateDoc(ref, {
		status: "approved",
		usdCredit: usd,
		adminNote: note,
		reviewedAt: (/* @__PURE__ */ new Date()).toISOString(),
		adminId: uid
	});
	return {
		ok: true,
		status: "approved",
		usdCredit: usd
	};
}
async function listDeskUsers() {
	const uid = requireUid();
	const meta = await loadMeta();
	if (!isAdmin(meta, uid)) throw new Error("Admin only.");
	const traders = await getDocs(collection(db, "traders"));
	const deposits = await getDocs(collection(db, "deposits"));
	const pendingByUser = /* @__PURE__ */ new Map();
	deposits.forEach((d) => {
		const row = d.data();
		if (row.status === "pending") {
			const id = String(row.userId || "");
			pendingByUser.set(id, (pendingByUser.get(id) || 0) + 1);
		}
	});
	const rows = [];
	for (const t of traders.docs) {
		const data = t.data();
		const acc = await getDoc(doc(db, "accounts", t.id));
		const book = acc.exists() ? acc.data() : emptyBook();
		rows.push({
			id: t.id,
			name: String(data.name || "Trader"),
			email: String(data.email || ""),
			createdAt: String(data.createdAt || ""),
			balance: Number(book.balance) || 0,
			status: book.status === "frozen" ? "frozen" : "active",
			role: meta.staff.includes(t.id) ? "admin" : "user",
			pendingDeposits: pendingByUser.get(t.id) || 0,
			openPositions: Array.isArray(book.positions) ? book.positions.length : 0
		});
	}
	return rows.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
async function adminCredit(input) {
	const uid = requireUid();
	if (!isAdmin(await loadMeta(), uid)) throw new Error("Admin only.");
	const payload = dataOf(input);
	const amount = Number(payload.amount);
	if (!Number.isFinite(amount) || amount === 0) throw new Error("Enter a non-zero amount.");
	if (Math.abs(amount) > 1e6) throw new Error("Amount is too large.");
	const target = String(payload.userId || "").slice(0, 80);
	if (!target) throw new Error("Missing user.");
	const note = String(payload.note || "").trim().slice(0, 200) || "Admin adjustment";
	return { balance: await creditUserBalance(target, Number(amount.toFixed(2)), amount > 0 ? "credit" : "debit", note) };
}
async function setUserFrozen(input) {
	const uid = requireUid();
	if (!isAdmin(await loadMeta(), uid)) throw new Error("Admin only.");
	const payload = dataOf(input);
	const target = String(payload.userId || "").slice(0, 80);
	const book = await loadOrCreateAccount(target);
	const status = payload.frozen ? "frozen" : "active";
	await setDoc(doc(db, "accounts", target), {
		...book,
		status
	}, { merge: true });
	return { status };
}
async function setUserAdmin(input) {
	const uid = requireUid();
	if (!isAdmin(await loadMeta(), uid)) throw new Error("Admin only.");
	const payload = dataOf(input);
	const target = String(payload.userId || "").slice(0, 80);
	await runTransaction(db, async (tx) => {
		let staff = [...asMeta((await tx.get(META)).data()).staff];
		if (payload.admin) {
			if (!staff.includes(target)) staff.push(target);
		} else {
			if (target === uid) throw new Error("You cannot demote yourself.");
			if (staff.length <= 1) throw new Error("Keep at least one admin.");
			staff = staff.filter((id) => id !== target);
		}
		tx.set(META, { staff }, { merge: true });
		tx.set(doc(db, "traders", target), { role: payload.admin ? "admin" : "user" }, { merge: true });
	});
	return { role: payload.admin ? "admin" : "user" };
}
async function saveCurrency(input) {
	const uid = requireUid();
	const meta0 = await loadMeta();
	if (!isAdmin(meta0, uid)) throw new Error("Admin only.");
	const payload = dataOf(input);
	const code = String(payload.code || "").trim().toUpperCase().slice(0, 8);
	if (!/^[A-Z]{3,8}$/.test(code)) throw new Error("Use a 3–8 letter currency code.");
	const name = String(payload.name || "").trim().slice(0, 40) || code;
	const symbol = String(payload.symbol || "").trim().slice(0, 8) || code;
	const units = Number(payload.unitsPerUsd);
	if (!Number.isFinite(units) || units <= 0) throw new Error("Rate must be greater than 0.");
	const enabled = Boolean(payload.enabled);
	const currencies = [...meta0.currencies];
	const existing = currencies.find((c) => c.code === code);
	if (existing) {
		existing.name = name;
		existing.symbol = symbol;
		existing.unitsPerUsd = units;
		existing.enabled = enabled;
	} else currencies.push({
		code,
		name,
		symbol,
		unitsPerUsd: units,
		enabled,
		sortOrder: currencies.length
	});
	await setDoc(META, { currencies }, { merge: true });
	return { ok: true };
}
async function savePaymentMethod(input) {
	const uid = requireUid();
	if (!isAdmin(await loadMeta(), uid)) throw new Error("Admin only.");
	const payload = dataOf(input);
	const kind = payload.kind;
	if (!KINDS.has(kind)) throw new Error("Unknown method type.");
	const title = String(payload.title || "").trim().slice(0, 60);
	if (title.length < 2) throw new Error("Give the method a name.");
	const currency = String(payload.currency || "USD").trim().toUpperCase().slice(0, 8);
	const details = payload.details ?? {};
	const enabled = Boolean(payload.enabled);
	let id = Number(payload.id) || 0;
	await runTransaction(db, async (tx) => {
		const m = asMeta((await tx.get(META)).data());
		const methods = [...m.methods];
		if (payload.id) {
			const row = methods.find((x) => x.id === Number(payload.id));
			if (!row) throw new Error("Method not found.");
			row.kind = kind;
			row.title = title;
			row.currency = currency;
			row.details = details;
			row.enabled = enabled;
			id = row.id;
			tx.set(META, { methods }, { merge: true });
			return;
		}
		id = Number(m.nextMethodId) || methods.length + 1;
		methods.push({
			id,
			kind,
			title,
			currency,
			details,
			enabled,
			sortOrder: methods.length
		});
		tx.set(META, {
			methods,
			nextMethodId: id + 1
		}, { merge: true });
	});
	return { id };
}
async function deletePaymentMethod(input) {
	const uid = requireUid();
	const meta0 = await loadMeta();
	if (!isAdmin(meta0, uid)) throw new Error("Admin only.");
	const raw = input && typeof input === "object" && "data" in input ? input.data : input;
	const id = Number(raw);
	const methods = meta0.methods.filter((m) => m.id !== id);
	await setDoc(META, { methods }, { merge: true });
	return { ok: true };
}
async function loadOrCreateAccount(userId) {
	const ref = doc(db, "accounts", userId);
	const snap = await getDoc(ref);
	if (snap.exists()) {
		const d = snap.data();
		return {
			balance: Number(d.balance) || 0,
			status: d.status === "frozen" ? "frozen" : "active",
			pricing: d.pricing === "raw" ? "raw" : "standard",
			selected: String(d.selected || "EURUSD"),
			positions: Array.isArray(d.positions) ? d.positions : [],
			pending: Array.isArray(d.pending) ? d.pending : [],
			history: Array.isArray(d.history) ? d.history : []
		};
	}
	const book = emptyBook();
	await setDoc(ref, book);
	return book;
}
async function creditUserBalance(userId, amount, kind, note) {
	const book = await loadOrCreateAccount(userId);
	const next = Math.max(0, Math.min(MAX_BALANCE, Number((book.balance + amount).toFixed(2))));
	await setDoc(doc(db, "accounts", userId), {
		...book,
		balance: next
	}, { merge: true });
	const id = (await loadMeta()).nextLedgerId || 1;
	await setDoc(doc(db, "ledgers", userId, "entries", String(id)), {
		id,
		kind,
		amount,
		note,
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	});
	await setDoc(META, { nextLedgerId: id + 1 }, { merge: true });
	return next;
}
async function loadAccount() {
	return loadOrCreateAccount(requireUid());
}
async function listLedger() {
	const uid = requireUid();
	return (await getDocs(collection(db, "ledgers", uid, "entries"))).docs.map((d) => {
		const r = d.data();
		return {
			id: Number(r.id) || Number(d.id),
			kind: String(r.kind || ""),
			amount: Number(r.amount) || 0,
			note: r.note ?? null,
			createdAt: String(r.createdAt || "")
		};
	}).sort((a, b) => b.id - a.id).slice(0, 40);
}
async function saveBook(input) {
	const uid = requireUid();
	const book = "data" in input ? input.data : input;
	const current = await loadOrCreateAccount(uid);
	const next = {
		balance: Math.max(0, Math.min(MAX_BALANCE, Number(book.balance) || 0)),
		status: current.status,
		pricing: book.pricing === "raw" ? "raw" : "standard",
		selected: String(book.selected || "EURUSD").slice(0, 16),
		positions: book.positions ?? [],
		pending: book.pending ?? [],
		history: (book.history ?? []).slice(0, 80)
	};
	await setDoc(doc(db, "accounts", uid), next);
	return {
		ok: true,
		status: current.status
	};
}
function firebaseMessage(err) {
	const code = err && typeof err === "object" && "code" in err ? String(err.code) : "";
	const raw = err instanceof Error ? err.message : "Something went wrong.";
	const blob = `${code} ${raw}`;
	if (/CONFIGURATION_NOT_FOUND|configuration-not-found|project-not-found/i.test(blob)) return "Firebase Authentication is not turned on yet. Open Firebase Console → Authentication → Get started, enable Email/Password, create Firestore, then retry.";
	switch (code) {
		case "auth/email-already-in-use": return "That email is already registered.";
		case "auth/invalid-email": return "Enter a valid email.";
		case "auth/weak-password": return "Password must be at least 6 characters.";
		case "auth/invalid-credential":
		case "auth/wrong-password":
		case "auth/user-not-found": return "Email or password is wrong.";
		case "auth/operation-not-allowed": return "Enable Email/Password in Firebase Authentication, then try again.";
		case "auth/unauthorized-domain": return "Add this site’s domain under Firebase Authentication → Settings → Authorized domains.";
		case "permission-denied": return "Firestore rules blocked this. Use test mode or the Nexora rules on project nexora-bb654.";
		case "unavailable": return "Firebase is unreachable. Create the Firestore database for nexora-bb654.";
		default:
			if (/firestore/i.test(raw)) return "Could not reach Firestore. Create the Firestore database in Firebase, then retry.";
			return raw;
	}
}
var Ctx = (0, import_react.createContext)({
	user: null,
	isPending: true,
	error: null,
	signUpEmail: async () => void 0,
	signInEmail: async () => void 0,
	signOutDesk: async () => void 0
});
function toUser(u) {
	return {
		id: u.uid,
		name: u.displayName || u.email?.split("@")[0] || "Trader",
		email: u.email || "",
		image: u.photoURL
	};
}
function FirebaseAuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [isPending, setPending] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let unsub = () => void 0;
		ensureAuthPersistence().then(() => {
			unsub = onAuthStateChanged(firebaseAuth, (next) => {
				setUser(next ? toUser(next) : null);
				setPending(false);
				if (next) ensureTraderProfile(next).catch(() => void 0);
			});
		});
		return () => unsub();
	}, []);
	const signUpEmail = (0, import_react.useCallback)(async (email, password, name) => {
		setError(null);
		try {
			await ensureAuthPersistence();
			const cred = await createUserWithEmailAndPassword(firebaseAuth, email.trim(), password);
			const label = (name || email.split("@")[0] || "Trader").slice(0, 40);
			await updateProfile(cred.user, { displayName: label });
			await ensureTraderProfile(cred.user);
		} catch (err) {
			const message = firebaseMessage(err);
			setError(message);
			throw new Error(message);
		}
	}, []);
	const signInEmail = (0, import_react.useCallback)(async (email, password) => {
		setError(null);
		try {
			await ensureAuthPersistence();
			await ensureTraderProfile((await signInWithEmailAndPassword(firebaseAuth, email.trim(), password)).user);
		} catch (err) {
			const message = firebaseMessage(err);
			setError(message);
			throw new Error(message);
		}
	}, []);
	const signOutDesk = (0, import_react.useCallback)(async () => {
		await signOut(firebaseAuth);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		user,
		isPending,
		error,
		signUpEmail,
		signInEmail,
		signOutDesk
	}), [
		user,
		isPending,
		error,
		signUpEmail,
		signInEmail,
		signOutDesk
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value,
		children
	});
}
function useDeskSession() {
	return (0, import_react.useContext)(Ctx);
}
function useDeskUser() {
	return (0, import_react.useContext)(Ctx).user;
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-BTnlpFeu.css";
var APP_NAME = "Nexora";
var Route$8 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Sign in, request a deposit, and trade forex, gold, crypto, indices and shares on a live demo desk after admin approval."
			},
			{
				name: "theme-color",
				content: "#09090B"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FirebaseAuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					theme: "dark",
					position: "bottom-right",
					toastOptions: { style: {
						background: "#121316",
						border: "1px solid rgba(242,241,237,0.12)",
						color: "#F2F1ED"
					} }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatMoney(n, currency = "USD", digits = 2) {
	const formatted = Math.abs(n).toLocaleString("en-US", {
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	});
	return `${n < 0 ? "−" : ""}${currency === "INR" ? "₹" : "$"}${formatted}`;
}
function formatSigned(n, digits = 2) {
	return `${n > 0 ? "+" : n < 0 ? "−" : ""}${Math.abs(n).toLocaleString("en-US", {
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	})}`;
}
function formatPrice(price, digits) {
	return price.toLocaleString("en-US", {
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-[opacity,background-color,color,transform,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			ghost: "bg-transparent text-fg hover:bg-bg-subtle",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			buy: "bg-buy text-buy-fg hover:opacity-90",
			sell: "bg-sell text-sell-fg hover:opacity-90",
			muted: "bg-bg-subtle text-fg hover:bg-bg-elevated"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-[13px]",
			lg: "h-12 px-5",
			icon: "size-11",
			"icon-sm": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, static: isStatic, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), !isStatic && "active:not-disabled:scale-[0.96]", className),
		...props
	});
}
function SignInGate({ children, fallback }) {
	const { user, isPending } = useDeskSession();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-dvh bg-bg" });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: fallback });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function RedirectToSignIn() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-[40vh] place-items-center px-4 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Sign in to continue."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				children: "Sign in"
			})
		})] })
	});
}
function UserButton() {
	const { user, isPending, signOutDesk } = useDeskSession();
	if (isPending || !user) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate text-sm text-fg",
			children: user.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "flex size-9 items-center justify-center rounded-sm text-muted hover:bg-bg-subtle hover:text-fg",
			"aria-label": "Sign out",
			onClick: () => void signOutDesk(),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" })
		})]
	});
}
function useOps() {
	const { user, isPending } = useDeskSession();
	const userId = user?.id ?? "";
	const [ops, setOps] = (0, import_react.useState)({
		userId: "",
		isAdmin: false,
		canClaim: false,
		staffCount: 0
	});
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [tick, setTick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (isPending) return;
		if (!userId) {
			setOps({
				userId: "",
				isAdmin: false,
				canClaim: false,
				staffCount: 0
			});
			setLoading(false);
			return;
		}
		let live = true;
		setLoading(true);
		getMyOps().then((next) => {
			if (live) setOps(next);
		}).catch(() => {
			if (live) setOps({
				userId,
				isAdmin: false,
				canClaim: false,
				staffCount: 0
			});
		}).finally(() => {
			if (live) setLoading(false);
		});
		return () => {
			live = false;
		};
	}, [
		userId,
		isPending,
		tick
	]);
	return {
		...ops,
		loading,
		reload: () => setTick((n) => n + 1)
	};
}
function AuthSlot() {
	const { user, isPending } = useDeskSession();
	const ops = useOps();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-11 w-24 animate-pulse rounded-sm bg-bg-subtle" });
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			(ops.isAdmin || ops.canClaim) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "sm",
				variant: "ghost",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin",
					children: ops.isAdmin ? "Admin" : "Ops setup"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "sm",
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/account",
					children: "Deposit"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-[160px] truncate text-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		size: "sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/login",
			children: "Sign in"
		})
	});
}
var LINKS = [
	{
		to: "/markets",
		label: "Markets"
	},
	{
		to: "/pricing",
		label: "Pricing"
	},
	{
		to: "/news",
		label: "News"
	},
	{
		to: "/trade",
		label: "Web trader"
	}
];
function Logo({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2.5 text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-8 items-center justify-center rounded-sm bg-fg text-bg font-display text-lg leading-none",
			children: "N"
		}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-xl tracking-tight",
			children: "Nexora"
		})]
	});
}
function SiteHeader({ solid = false }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const ops = useOps();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 border-b border-border", solid ? "bg-bg" : "bg-bg/85 backdrop-blur-md"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-7 md:flex",
					children: [LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: cn("text-sm text-muted transition-colors duration-150 hover:text-fg", pathname === l.to && "text-fg"),
						children: l.label
					}, l.to)), (ops.isAdmin || ops.canClaim) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: cn("text-sm text-muted transition-colors duration-150 hover:text-fg", pathname === "/admin" && "text-fg"),
						children: "Admin"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-2 md:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthSlot, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "flex size-11 items-center justify-center rounded-sm text-fg md:hidden",
					onClick: () => setOpen((v) => !v),
					"aria-label": open ? "Close menu" : "Open menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-bg px-4 py-4 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [
					LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						onClick: () => setOpen(false),
						className: "flex h-11 items-center text-sm text-fg",
						children: l.label
					}, l.to)),
					(ops.isAdmin || ops.canClaim) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						onClick: () => setOpen(false),
						className: "flex h-11 items-center text-sm text-fg",
						children: "Admin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthSlot, {})
					})
				]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: "Nexora is a paper-trading desk for learning global markets. Prices are simulated. Funding is admin-approved paper credit, not a live broker payout."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-8 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-subtle",
							children: "Trade"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/trade",
							className: "text-muted hover:text-fg",
							children: "Web trader"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account",
							className: "text-muted hover:text-fg",
							children: "Account & deposit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/markets",
							className: "text-muted hover:text-fg",
							children: "Markets"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pricing",
							className: "text-muted hover:text-fg",
							children: "Pricing"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-subtle",
							children: "Learn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/news",
							className: "text-muted hover:text-fg",
							children: "News & analysis"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "text-muted hover:text-fg",
							children: "Sign in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							className: "text-muted hover:text-fg",
							children: "Admin"
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border px-4 py-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl text-xs leading-relaxed text-subtle",
				children: "Risk warning: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. This product is a demonstration only. Indian residents: offshore retail forex/CFD trading may be restricted under FEMA/RBI rules — this demo does not open a broker account and does not execute live orders."
			})
		})]
	});
}
function useMarketTick() {
	const [, bump] = (0, import_react.useReducer)((n) => n + 1, 0);
	(0, import_react.useEffect)(() => market.subscribe(bump), []);
}
function uid() {
	return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
}
function notional(inst, lots, price) {
	return inst.contractSize * lots * price;
}
function requiredMargin(inst, lots, price) {
	return notional(inst, lots, price) / inst.leverage;
}
function positionPnl(pos, bid, ask) {
	const inst = getInstrument(pos.symbol);
	const close = pos.side === "buy" ? bid : ask;
	const dir = pos.side === "buy" ? 1 : -1;
	return (close - pos.entry) * dir * inst.contractSize * pos.lots;
}
function spreadCost(inst, lots, pricing) {
	return (pricing === "raw" ? inst.spreadRaw : inst.spreadStd) * inst.contractSize * lots;
}
function commissionCost(inst, lots, pricing) {
	if (pricing !== "raw") return 0;
	return inst.commissionRaw * lots;
}
function openPosition(input, pricing) {
	const inst = getInstrument(input.symbol);
	const q = market.getQuote(input.symbol);
	const entry = input.side === "buy" ? q.ask : q.bid;
	return {
		id: uid(),
		symbol: input.symbol,
		side: input.side,
		lots: input.lots,
		entry,
		sl: input.sl,
		tp: input.tp,
		openedAt: Date.now(),
		commission: commissionCost(inst, input.lots, pricing),
		leverage: inst.leverage
	};
}
var saveTimer = null;
function readPref(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const raw = window.localStorage.getItem(key);
		if (raw == null) return fallback;
		return JSON.parse(raw);
	} catch {
		return fallback;
	}
}
function writePref(key, value) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
function scheduleSave() {
	if (saveTimer) clearTimeout(saveTimer);
	saveTimer = setTimeout(() => {
		const s = useTradeStore.getState();
		saveBook({ data: {
			balance: s.balance,
			status: s.status,
			pricing: s.pricing,
			selected: s.selected,
			positions: s.positions,
			pending: s.pending,
			history: s.history
		} }).catch(() => void 0);
	}, 450);
}
function blocked(state) {
	if (state.status === "frozen") return "Account is frozen. An admin must unlock it.";
	if (state.balance <= 0 && state.positions.length === 0) return "Submit a deposit. Trading unlocks after admin approval.";
	return null;
}
var useTradeStore = create()((set, get) => ({
	hydrated: false,
	balance: 0,
	status: "active",
	pricing: "standard",
	selected: "EURUSD",
	positions: [],
	pending: [],
	history: [],
	lastToast: null,
	oneClick: false,
	clickSize: .1,
	alerts: [],
	setHydrated: () => set({ hydrated: true }),
	applyBook: (book) => {
		market.setPricing(book.pricing);
		set({
			balance: book.balance,
			status: book.status,
			pricing: book.pricing,
			selected: book.selected || get().selected,
			positions: book.positions,
			pending: book.pending,
			history: book.history,
			hydrated: true
		});
	},
	hydrateFromServer: async () => {
		try {
			const book = await loadAccount();
			get().applyBook(book);
		} catch {
			set({ hydrated: true });
		}
	},
	persistNow: () => scheduleSave(),
	loadPrefs: () => {
		set({
			oneClick: readPref("nx-1click", false),
			clickSize: readPref("nx-click-size", .1),
			alerts: readPref("nx-alerts", [])
		});
	},
	select: (symbol) => {
		set({ selected: symbol });
		scheduleSave();
	},
	setPricing: (mode) => {
		market.setPricing(mode);
		set({ pricing: mode });
		scheduleSave();
	},
	resetDemo: () => {
		set({
			positions: [],
			pending: [],
			lastToast: "Open positions flattened. Cash stays on the account."
		});
		scheduleSave();
	},
	placeMarket: (input) => {
		if (input.lots < .01) return {
			ok: false,
			error: "Minimum size is 0.01 lots."
		};
		if (input.lots > 50) return {
			ok: false,
			error: "Maximum size is 50 lots."
		};
		const freeze = blocked(get());
		if (freeze) return {
			ok: false,
			error: freeze
		};
		const inst = getInstrument(input.symbol);
		const q = market.getQuote(input.symbol);
		const entry = input.side === "buy" ? q.ask : q.bid;
		const margin = requiredMargin(inst, input.lots, entry);
		const { equity, free } = snapshot(get());
		if (margin > free) return {
			ok: false,
			error: `Not enough free margin. Need ${margin.toFixed(2)}, free ${free.toFixed(2)}.`
		};
		if (equity <= 0) return {
			ok: false,
			error: "Account is blown. Request another deposit."
		};
		const pos = openPosition(input, get().pricing);
		set({
			positions: [...get().positions, pos],
			balance: get().balance - pos.commission,
			lastToast: `${input.side === "buy" ? "Bought" : "Sold"} ${input.lots} ${inst.display} @ ${entry.toFixed(inst.digits)}`
		});
		scheduleSave();
		return {
			ok: true,
			id: pos.id
		};
	},
	placePending: (input) => {
		if (input.lots < .01) return {
			ok: false,
			error: "Minimum size is 0.01 lots."
		};
		if (input.price <= 0) return {
			ok: false,
			error: "Enter a valid trigger price."
		};
		const freeze = blocked(get());
		if (freeze) return {
			ok: false,
			error: freeze
		};
		const order = {
			id: uid(),
			...input,
			createdAt: Date.now()
		};
		set({
			pending: [...get().pending, order],
			lastToast: `${input.kind} ${input.side} ${input.lots} ${input.symbol} @ ${input.price}`
		});
		scheduleSave();
		return {
			ok: true,
			id: order.id
		};
	},
	closePosition: (id, lots) => {
		const pos = get().positions.find((p) => p.id === id);
		if (!pos) return {
			ok: false,
			error: "Position not found."
		};
		const closeLots = lots && lots < pos.lots - .001 ? lots : pos.lots;
		const inst = getInstrument(pos.symbol);
		const q = market.getQuote(pos.symbol);
		const pnl = positionPnl({
			...pos,
			lots: closeLots
		}, q.bid, q.ask);
		const exit = pos.side === "buy" ? q.bid : q.ask;
		const commission = commissionCost(inst, closeLots, get().pricing);
		const row = {
			id: uid(),
			symbol: pos.symbol,
			side: pos.side,
			lots: closeLots,
			entry: pos.entry,
			exit,
			pnl: pnl - commission,
			commission,
			openedAt: pos.openedAt,
			closedAt: Date.now()
		};
		const remaining = pos.lots - closeLots;
		set({
			balance: get().balance + pnl - commission,
			positions: remaining > .001 ? get().positions.map((p) => p.id === id ? {
				...p,
				lots: remaining
			} : p) : get().positions.filter((p) => p.id !== id),
			history: [row, ...get().history].slice(0, 80),
			lastToast: `Closed ${closeLots} ${inst.display}  P/L ${pnl - commission >= 0 ? "+" : ""}${(pnl - commission).toFixed(2)}`
		});
		scheduleSave();
		return { ok: true };
	},
	updateSlTp: (id, sl, tp) => {
		set({ positions: get().positions.map((p) => p.id === id ? {
			...p,
			sl,
			tp
		} : p) });
		scheduleSave();
	},
	cancelPending: (id) => {
		set({ pending: get().pending.filter((o) => o.id !== id) });
		scheduleSave();
	},
	setOneClick: (on) => {
		writePref("nx-1click", on);
		set({ oneClick: on });
	},
	setClickSize: (n) => {
		const size = Math.min(50, Math.max(.01, n));
		writePref("nx-click-size", size);
		set({ clickSize: size });
	},
	addAlert: (symbol, price, want) => {
		if (!(price > 0)) return;
		const next = [...get().alerts, {
			id: uid(),
			symbol,
			price,
			want,
			createdAt: Date.now()
		}].slice(-24);
		writePref("nx-alerts", next);
		set({
			alerts: next,
			lastToast: `Alert set on ${symbol} ${want} ${price}`
		});
	},
	removeAlert: (id) => {
		const next = get().alerts.filter((a) => a.id !== id);
		writePref("nx-alerts", next);
		set({ alerts: next });
	},
	onTick: () => {
		const state = get();
		if (state.positions.length === 0 && state.pending.length === 0) return;
		const filled = [];
		for (const order of state.pending) {
			const q = market.getQuote(order.symbol);
			if (order.kind === "limit" ? order.side === "buy" ? q.ask <= order.price : q.bid >= order.price : order.side === "buy" ? q.ask >= order.price : q.bid <= order.price) filled.push(order);
		}
		let dirty = false;
		if (filled.length) {
			let positions = state.positions;
			let pending = state.pending;
			let balance = state.balance;
			let toast = state.lastToast;
			for (const order of filled) {
				const inst = getInstrument(order.symbol);
				const q = market.getQuote(order.symbol);
				const entry = order.side === "buy" ? q.ask : q.bid;
				if (requiredMargin(inst, order.lots, entry) > snapshot({
					...state,
					positions,
					balance
				}).free) {
					pending = pending.filter((p) => p.id !== order.id);
					toast = `Order ${order.symbol} cancelled — not enough margin.`;
					dirty = true;
					continue;
				}
				const pos = openPosition(order, state.pricing);
				pos.entry = entry;
				positions = [...positions, pos];
				pending = pending.filter((p) => p.id !== order.id);
				balance -= pos.commission;
				toast = `Filled ${order.kind} ${order.symbol}`;
				dirty = true;
			}
			set({
				positions,
				pending,
				balance,
				lastToast: toast
			});
		}
		const afterFill = get();
		let positions = afterFill.positions;
		let balance = afterFill.balance;
		let history = afterFill.history;
		let toast = afterFill.lastToast;
		const still = [];
		for (const pos of positions) {
			const q = market.getQuote(pos.symbol);
			const bid = q.bid;
			const ask = q.ask;
			const hitSl = pos.sl != null && (pos.side === "buy" ? bid <= pos.sl : ask >= pos.sl);
			const hitTp = pos.tp != null && (pos.side === "buy" ? bid >= pos.tp : ask <= pos.tp);
			if (!hitSl && !hitTp) {
				still.push(pos);
				continue;
			}
			const pnl = positionPnl(pos, bid, ask);
			const exit = pos.side === "buy" ? bid : ask;
			history = [{
				id: uid(),
				symbol: pos.symbol,
				side: pos.side,
				lots: pos.lots,
				entry: pos.entry,
				exit,
				pnl,
				commission: 0,
				openedAt: pos.openedAt,
				closedAt: Date.now()
			}, ...history].slice(0, 80);
			balance += pnl;
			toast = hitSl ? `Stop hit on ${pos.symbol}` : `Take profit hit on ${pos.symbol}`;
			dirty = true;
		}
		if (still.length !== positions.length) set({
			positions: still,
			balance,
			history,
			lastToast: toast
		});
		const live = get();
		const snap = snapshot(live);
		if (live.positions.length && snap.marginLevel < 50 && snap.used > 0) {
			let bal = live.balance;
			let hist = live.history;
			for (const pos of live.positions) {
				const q = market.getQuote(pos.symbol);
				const pnl = positionPnl(pos, q.bid, q.ask);
				bal += pnl;
				hist = [{
					id: uid(),
					symbol: pos.symbol,
					side: pos.side,
					lots: pos.lots,
					entry: pos.entry,
					exit: pos.side === "buy" ? q.bid : q.ask,
					pnl,
					commission: 0,
					openedAt: pos.openedAt,
					closedAt: Date.now()
				}, ...hist];
			}
			set({
				positions: [],
				pending: [],
				balance: bal,
				history: hist.slice(0, 80),
				lastToast: "Stop-out: margin level fell below 50%. All positions closed."
			});
			dirty = true;
		}
		if (dirty) scheduleSave();
		const liveAlerts = get();
		if (liveAlerts.alerts.length) {
			const hit = [];
			for (const alert of liveAlerts.alerts) {
				const q = market.getQuote(alert.symbol);
				if (!q) continue;
				if (alert.want === "above" ? q.mid >= alert.price : q.mid <= alert.price) hit.push(alert);
			}
			if (hit.length) {
				const remain = liveAlerts.alerts.filter((a) => !hit.some((h) => h.id === a.id));
				writePref("nx-alerts", remain);
				const first = hit[0];
				set({
					alerts: remain,
					lastToast: `Price alert: ${first.symbol} ${first.want} ${first.price}`
				});
			}
		}
	}
}));
function snapshot(state) {
	let floating = 0;
	let used = 0;
	for (const pos of state.positions) {
		const q = market.getQuote(pos.symbol);
		const inst = getInstrument(pos.symbol);
		floating += positionPnl(pos, q.bid, q.ask);
		used += requiredMargin(inst, pos.lots, pos.entry);
	}
	const equity = state.balance + floating;
	const free = equity - used;
	const marginLevel = used > 0 ? equity / used * 100 : Infinity;
	return {
		floating,
		used,
		equity,
		free,
		marginLevel
	};
}
function Sparkline({ values, up, className }) {
	if (values.length < 2) return null;
	const min = Math.min(...values);
	const span = Math.max(...values) - min || 1;
	const w = 72;
	const h = 24;
	const d = values.map((v, i) => {
		const x = i / (values.length - 1) * w;
		const y = h - (v - min) / span * h;
		return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
	}).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: `0 0 ${w} ${h}`,
		className,
		width: w,
		height: h,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d,
			fill: "none",
			stroke: up ? "#3D9A78" : "#C45B66",
			strokeWidth: "1.5",
			strokeLinejoin: "round",
			strokeLinecap: "round"
		})
	});
}
function LiveTable({ assetClass }) {
	useMarketTick();
	const select = useTradeStore((s) => s.select);
	const pricing = useTradeStore((s) => s.pricing);
	const rows = assetClass ? INSTRUMENTS.filter((i) => i.assetClass === assetClass) : INSTRUMENTS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[720px] text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "text-[12px] text-subtle",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Market"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Sell"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Buy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Spread"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Change"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-4 py-3 font-medium" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-4 py-3 font-medium" })
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((inst) => {
				const q = market.getQuote(inst.symbol);
				const spread = pricing === "raw" ? inst.spreadRaw : inst.spreadStd;
				const up = q.change >= 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border last:border-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium text-fg",
								children: inst.display
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[12px] text-muted",
								children: [
									inst.name,
									" · ",
									ASSET_LABEL[inst.assetClass]
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 num text-sell",
							children: formatPrice(q.bid, inst.digits)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 num text-buy",
							children: formatPrice(q.ask, inst.digits)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 num text-muted",
							children: spread.toFixed(inst.digits)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: cn("px-4 py-3 num", up ? "text-buy" : "text-sell"),
							children: [
								up ? "+" : "",
								q.changePct.toFixed(2),
								"%"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, {
								values: market.getSpark(inst.symbol),
								up
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 text-right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/trade",
									onClick: () => select(inst.symbol),
									children: "Trade"
								})
							})
						})
					]
				}, inst.symbol);
			}) })]
		})
	});
}
function TickerTape() {
	useMarketTick();
	const items = [
		...FEATURED_SYMBOLS,
		...FEATURED_SYMBOLS,
		...FEATURED_SYMBOLS
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-border bg-bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tape-track flex w-max",
			children: items.map((sym, i) => {
				const inst = getInstrument(sym);
				const q = market.getQuote(sym);
				const up = q.change >= 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 px-6 py-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: inst.display
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "num text-fg",
							children: formatPrice(q.mid, inst.digits)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn("num text-[12px]", up ? "text-buy" : "text-sell"),
							children: [
								up ? "+" : "",
								q.changePct.toFixed(2),
								"%"
							]
						})
					]
				}, `${sym}-${i}`);
			})
		})
	});
}
var ARTICLES = [
	{
		slug: "gold-4400-test",
		kicker: "Metals",
		title: "Gold holds the $4,400 handle as the dollar loses its bid",
		standfirst: "Spot gold recovered toward $4,386 after a softer US 10-year, keeping the 7-day gold book in play for the Asia open.",
		date: "20 Sep 2026",
		body: [
			"XAU/USD spent the weekend bid after Friday’s 0.6% bounce. COMEX last printed $4,385.90 as US 10-year yields cooled to 5.00% and the dollar index faded its post-Fed spike.",
			"The technical test is straightforward: a daily close above $4,400 opens $4,455, the August swing high. Failure there puts $4,310 back in view — the 20-day volume-weighted average.",
			"Nexora’s demo gold book is open seven days. Use smaller size into Sunday gaps; the live spread on XAU/USD typically sits around 0.32 on Standard and 0.12 on RAW."
		]
	},
	{
		slug: "btc-78k",
		kicker: "Crypto",
		title: "Bitcoin reclaims $78,000 despite ETF outflows",
		standfirst: "BTC recovered to the $77.9k area even as spot ETFs saw another $746m leave. ETH is probing $2,500.",
		date: "19 Sep 2026",
		body: [
			"The tape is two-speed: ETFs keep bleeding, but the perpetual basis has normalised and weekend volumes in Asia are supporting the $77k shelf.",
			"ETH’s bull flag still points toward $3,300 if $2,500 holds on a daily close. XRP is a cleaner mean-revert around $1.50.",
			"Crypto CFDs on this desk run 24/7 with 5:1 leverage. Weekend spreads widen — size down, or wait for the Monday London overlap."
		]
	},
	{
		slug: "oil-100",
		kicker: "Energy",
		title: "Brent holds $100 as the complex shrugs off a quiet inventory print",
		standfirst: "Brent last $103.37, WTI $95.42. The complex is up more than 60% year-on-year and positioning is stretched.",
		date: "19 Sep 2026",
		body: [
			"A $100 floor in Brent has become self-reinforcing: refiners restocked into last week’s dip and speculative length remains elevated.",
			"The risk is a stronger dollar plus a hotter US 2-year. Until then, dips toward $98 have been bought.",
			"Energy CFDs here use 10:1 leverage. A $1 move in WTI on 1.00 lot is $100 — same math as a live futures-linked CFD."
		]
	},
	{
		slug: "eurusd-115",
		kicker: "FX",
		title: "EUR/USD parks at 1.15 as US yields stall at 5%",
		standfirst: "The euro is unchanged on the week around 1.1483. Cable is firmer at 1.3393. USD/INR sits near 88.42.",
		date: "20 Sep 2026",
		body: [
			"G10 FX is a range market until the next US labour print. EUR/USD has mean-reverted between 1.1420 and 1.1560 for eleven sessions.",
			"USD/INR remains the cleaner India-linked expression. The pair is heavy under 88.80; exporters typically fade pops toward 88.70–88.90.",
			"Standard EUR/USD spread on this desk is 1.0 pip. RAW is 0.2 pip plus $3.50 per side per lot — all-in cost is usually similar unless you scalp."
		]
	},
	{
		slug: "us-tech-open",
		kicker: "Indices",
		title: "US Tech 100 holds 29,500 into the Monday cash open",
		standfirst: "Nasdaq 100 last 29,522, S&P 500 7,650, Dow 51,770. Extended-hours share CFDs stay live on the desk.",
		date: "20 Sep 2026",
		body: [
			"Index futures digested Friday’s modest bid. Breadth was narrow — a handful of megacaps did the lifting.",
			"Share CFDs in NVDA, TSLA, AAPL, MSFT, AMZN and GOOGL are 0-commission on both account types, with 5:1 leverage and extended hours.",
			"Index stop-outs are brutal when the cash open gaps. Place stops in price, not in hope, and keep margin level above 200% into US hours."
		]
	}
];
var Route$7 = createFileRoute("/")({ component: Home });
function Home() {
	(0, import_react.useEffect)(() => {
		market.start();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TickerTape, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssetStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.18em] text-subtle",
						children: "Live prices"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl md:text-4xl",
						children: "Trade without waiting"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/markets",
							children: "All markets"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveTable, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Platforms, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsTeasers, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "stagger-in text-xs uppercase tracking-[0.2em] text-subtle",
				children: "Nexora web trader"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "stagger-in mt-4 font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.95] text-fg",
				children: [
					"Fast, powerful and",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"live on the tape."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "stagger-in mt-6 max-w-lg text-base text-muted md:text-lg",
				children: "A FOREX.com-style web trader: watchlist, chart, deal ticket, positions and news on one screen. RAW from 0.0 pips plus commission, or Standard spread-only. Sign in, add funds, trade at the live bid and ask."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/trade",
						children: ["Launch web trader", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						children: "Open a demo account"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-10 grid grid-cols-3 gap-4 max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStat, {
						k: "Markets",
						v: "32"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStat, {
						k: "RAW from",
						v: "0.0 pip"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStat, {
						k: "Min size",
						v: "0.01"
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroTicket, {})]
	});
}
function HeroStat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-[11px] uppercase tracking-wide text-subtle",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "font-display text-2xl",
		children: v
	})] });
}
function HeroTicket() {
	useMarketTick();
	const select = useTradeStore((s) => s.select);
	const inst = getInstrument("EURUSD");
	const q = market.getQuote("EURUSD");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl bg-bg-elevated p-2 shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg bg-bg p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-subtle",
							children: "EUR/USD · Standard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-4xl num",
							children: formatPrice(q.mid, inst.digits)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: `mt-1 text-sm num ${q.change >= 0 ? "text-buy" : "text-sell"}`,
							children: [
								q.change >= 0 ? "+" : "",
								q.changePct.toFixed(2),
								"% session"
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-buy/15 px-2 py-1 text-[11px] text-buy",
						children: "Live quote"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/trade",
						onClick: () => select("EURUSD"),
						className: "flex h-14 flex-col items-center justify-center rounded-sm bg-sell text-sell-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[11px] opacity-80",
							children: ["Sell ", formatPrice(q.bid, 5)]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: "SELL"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/trade",
						onClick: () => select("EURUSD"),
						className: "flex h-14 flex-col items-center justify-center rounded-sm bg-buy text-buy-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[11px] opacity-80",
							children: ["Buy ", formatPrice(q.ask, 5)]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: "BUY"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-[12px] leading-relaxed text-muted",
					children: [
						"Spread ",
						inst.spreadStd.toFixed(5),
						" · 50:1 leverage · 0.10 lots ≈ $230 margin"
					]
				})
			]
		})
	});
}
function AssetStrip() {
	const cards = [
		{
			symbol: FEATURED_SYMBOLS[0],
			title: "Raw FX",
			copy: "Majors from 0.2 pips on RAW, or 1.0 pip spread-only on Standard."
		},
		{
			symbol: "BTCUSD",
			title: "24/7 crypto",
			copy: "Bitcoin, ether, solana and XRP. Weekend book stays open."
		},
		{
			symbol: "XAUUSD",
			title: "Spot gold",
			copy: "XAU/USD near $4,386 with a 7-day session on the demo desk."
		},
		{
			symbol: "NVDA",
			title: "0-commission shares",
			copy: "NVDA, Tesla, Apple and the rest — share CFDs, no ticket fee."
		},
		{
			symbol: "US100",
			title: "Indices",
			copy: "US Tech 100, Wall Street 30, US 500, Germany 40, UK 100."
		},
		{
			symbol: "USOIL",
			title: "Energy",
			copy: "WTI, Brent and nat gas with $1-per-tick math on 1.00 lot WTI."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-3",
			children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssetCard, { ...c }, c.title))
		})
	});
}
function AssetCard({ symbol, title, copy }) {
	useMarketTick();
	const inst = getInstrument(symbol);
	const q = market.getQuote(symbol);
	const select = useTradeStore((s) => s.select);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/trade",
		onClick: () => select(symbol),
		className: "bg-bg-elevated p-6 transition-colors duration-150 hover:bg-bg-subtle",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-wide text-subtle",
				children: inst.display
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-2xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: copy
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 num text-sm text-fg",
				children: formatPrice(q.mid, inst.digits)
			})
		]
	});
}
function Why() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.18em] text-subtle",
				children: "Why this desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 max-w-xl font-display text-3xl md:text-4xl",
				children: "Built to feel like a broker, without the $100 deposit."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-2",
				children: [
					{
						icon: SlidersHorizontal,
						title: "Two pricing books",
						copy: "Standard is spread-only. RAW is tighter quotes plus $3.50 per side per FX lot — the same shape as a live RAW account."
					},
					{
						icon: ChartLine,
						title: "Working execution",
						copy: "Market, limit and stop orders. Stop-loss, take-profit, partial close, margin call at 100% and stop-out at 50%."
					},
					{
						icon: Clock3,
						title: "Hours that match the product",
						copy: "FX 24/5 feel, gold 7-day, crypto 24/7, US share CFDs with extended hours. The demo tape never sleeps so Sunday still trades."
					},
					{
						icon: Shield,
						title: "Risk is visible",
						copy: "Every ticket shows required margin, spread cost and the rupee equivalent using live USD/INR."
					}
				].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "size-5 text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-2xl",
							children: it.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: it.copy
						})
					]
				}, it.title))
			})
		]
	});
}
function Platforms() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-subtle",
					children: "Web trader"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl md:text-4xl",
					children: "Default workspace. Watchlist, chart, positions, news."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted md:text-base",
					children: "The same chrome as a professional FX web trader: account strip with equity and margin, Sell/Buy on every market, 1-click fill, MACD on the chart, and a deal ticket when you want size, stop and limit."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-3 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "mt-0.5 size-4 shrink-0 text-accent" }), "Phone: markets, chart, positions, ticket — 44px targets"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, { className: "mt-0.5 size-4 shrink-0 text-accent" }), "1m to daily candles, live last price, MACD, crosshair"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "mt-0.5 size-4 shrink-0 text-accent" }), "Admin-only deposits. Your login stays on Firebase."]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-bg p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-wide text-subtle",
					children: "Account bar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-2 gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md bg-bg-subtle p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-subtle",
								children: "Available to trade"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "num text-lg",
								children: "Free margin"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md bg-bg-subtle p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-subtle",
								children: "Unrealised P/L"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "num text-lg",
								children: "Live"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md bg-bg-subtle p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-subtle",
								children: "1-click"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "num text-lg",
								children: "Off / On"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md bg-bg-subtle p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-subtle",
								children: "Min lot"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "num text-lg",
								children: "0.01"
							})]
						})
					]
				})]
			})]
		})
	});
}
function NewsTeasers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.18em] text-subtle",
				children: "Desk notes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl",
				children: "This week’s tape"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/news",
					children: "All notes"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-3",
			children: ARTICLES.slice(0, 3).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/news",
				className: "rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] transition-colors duration-150 hover:bg-bg-subtle",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] uppercase tracking-wide text-subtle",
						children: [
							a.kicker,
							" · ",
							a.date
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-xl leading-snug",
						children: a.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: a.standfirst
					})
				]
			}, a.slug))
		})]
	});
}
function Cta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl md:text-4xl",
				children: "Open the web trader"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md text-sm text-muted",
				children: "Sign in, request UPI or bank funding, then trade after admin approval. Live quotes on FX, gold and crypto. Paper fills — admin stays with you."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/trade",
					children: ["Launch web trader", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})]
		})
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-sm bg-bg-subtle px-3 text-sm text-fg num shadow-[var(--shadow-border)] outline-none transition-[box-shadow] duration-150 placeholder:text-subtle focus-visible:shadow-[var(--shadow-border-hover)] focus-visible:ring-2 focus-visible:ring-ring/50", className),
		...props
	});
}
function Badge({ className, tone = "neutral", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium tracking-wide", tone === "neutral" && "bg-bg-subtle text-muted", tone === "buy" && "bg-buy/15 text-buy", tone === "sell" && "bg-sell/15 text-sell", tone === "warn" && "bg-accent/12 text-accent", className),
		children
	});
}
function QrCode$1({ value, size = 196 }) {
	const [src, setSrc] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!value) {
			setSrc("");
			return;
		}
		let live = true;
		import("../_libs/qrcode.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())).then((mod) => mod.toDataURL(value, {
			width: size,
			margin: 1,
			color: {
				dark: "#09090b",
				light: "#f2f1ed"
			}
		})).then((url) => {
			if (live) setSrc(url);
		}).catch(() => {
			if (live) setSrc("");
		});
		return () => {
			live = false;
		};
	}, [value, size]);
	if (!src) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid place-items-center rounded-sm bg-fg text-xs text-bg",
		style: {
			width: size,
			height: size
		},
		children: "QR"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt: "Payment QR",
		width: size,
		height: size,
		className: "rounded-sm bg-fg"
	});
}
var QUICK = {
	INR: [
		1e3,
		5e3,
		1e4,
		25e3,
		5e4,
		1e5
	],
	USD: [
		50,
		100,
		500,
		1e3,
		2500,
		5e3
	],
	EUR: [
		50,
		100,
		500,
		1e3,
		2500
	],
	GBP: [
		50,
		100,
		500,
		1e3
	],
	AED: [
		200,
		500,
		1e3,
		5e3
	]
};
function DepositDesk({ compact = false }) {
	const balance = useTradeStore((s) => s.balance);
	const hydrateFromServer = useTradeStore((s) => s.hydrateFromServer);
	const [currencies, setCurrencies] = (0, import_react.useState)([]);
	const [methods, setMethods] = (0, import_react.useState)([]);
	const [mine, setMine] = (0, import_react.useState)([]);
	const [methodId, setMethodId] = (0, import_react.useState)(null);
	const [amount, setAmount] = (0, import_react.useState)("5000");
	const [payerName, setPayerName] = (0, import_react.useState)("");
	const [reference, setReference] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(null);
	async function reload() {
		const [c, m, r] = await Promise.all([
			listCurrencies(),
			listPaymentMethods({ data: {} }),
			listMyDeposits()
		]);
		setCurrencies(c.filter((x) => x.enabled));
		setMethods(m);
		setMine(r);
		setMethodId((id) => id && m.some((x) => x.id === id) ? id : m[0]?.id ?? null);
		if (r.find((row) => row.status === "approved")) hydrateFromServer();
	}
	(0, import_react.useEffect)(() => {
		reload().catch(() => toast.error("Could not load payment rails."));
	}, []);
	(0, import_react.useEffect)(() => {
		if (!mine.some((r) => r.status === "pending")) return;
		const t = setInterval(() => {
			listMyDeposits().then((rows) => {
				setMine(rows);
				if (rows.some((r) => r.status === "approved")) hydrateFromServer();
			}).catch(() => void 0);
		}, 8e3);
		return () => clearInterval(t);
	}, [mine, hydrateFromServer]);
	const method = methods.find((m) => m.id === methodId) ?? null;
	const ccy = currencies.find((c) => c.code === method?.currency);
	const amt = Number(amount) || 0;
	const usd = ccy ? toUsd(amt, ccy.unitsPerUsd) : 0;
	const payload = (0, import_react.useMemo)(() => {
		if (!method) return "";
		if (method.details.payload) return method.details.payload;
		if (method.kind === "upi" || method.kind === "qr") return upiUri({
			vpa: method.details.vpa,
			payee: method.details.payee,
			note: method.details.note,
			amount: amt,
			currency: method.currency
		});
		return "";
	}, [method, amt]);
	async function copy(label, value) {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(label);
			toast.success(`Copied ${label}`);
			setTimeout(() => setCopied(null), 1200);
		} catch {
			toast.error("Copy failed");
		}
	}
	async function submit() {
		if (!method) return;
		setBusy(true);
		try {
			const res = await createDepositRequest({ data: {
				methodId: method.id,
				amount: amt,
				payerName,
				reference,
				note
			} });
			toast.success(`Request in. ${formatMoney(res.usdCredit)} after admin approval.`);
			setReference("");
			setNote("");
			await reload();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not submit.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: compact ? "p-4" : "p-6",
		children: [
			!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-subtle",
					children: "Funding"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl",
					children: "Request a deposit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Pick UPI, QR or bank, send the amount, then paste the UTR. An admin credits paper USD to this login — not a live broker payout."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: ["Cash on account: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "num text-fg",
					children: formatMoney(balance)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-2",
				children: [methods.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setMethodId(m.id),
					className: cn("flex min-h-11 items-center gap-3 rounded-md px-3 py-3 text-left shadow-[var(--shadow-border)] transition-[box-shadow] duration-150", methodId === m.id && "shadow-[var(--shadow-border-hover)] bg-bg-subtle"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodIcon, { kind: m.kind }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-fg",
							children: m.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[11px] text-muted",
							children: [
								m.currency,
								" · ",
								m.kind.toUpperCase()
							]
						})]
					})]
				}, m.id)), methods.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No payment methods yet. An admin must add rails."
				})]
			}),
			method && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-[11px] uppercase tracking-wide text-subtle",
							children: [
								"Amount (",
								method.currency,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "mt-1",
							inputMode: "decimal",
							value: amount,
							onChange: (e) => setAmount(e.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-1.5",
							children: (QUICK[method.currency] ?? QUICK.USD).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setAmount(String(n)),
								className: "h-8 rounded-sm bg-bg-subtle px-2.5 text-[12px] text-muted hover:text-fg",
								children: formatAmount(n, method.currency, 0)
							}, n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: [
								"After approval you receive",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fg num",
									children: formatMoney(usd)
								}),
								" paper USD",
								ccy ? ` · 1 USD = ${ccy.unitsPerUsd} ${method.currency}` : null
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-xl bg-bg-subtle p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-wide text-subtle",
							children: "Send to"
						}),
						(method.kind === "upi" || method.kind === "qr") && payload && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-col items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode$1, {
								value: payload,
								size: compact ? 160 : 196
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-[11px] text-muted",
								children: "Scan with any UPI app"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 space-y-2 text-sm",
							children: [
								method.details.vpa && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyRow, {
									label: "UPI ID",
									value: method.details.vpa,
									copied,
									onCopy: copy
								}),
								method.details.payee && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyRow, {
									label: "Payee",
									value: method.details.payee,
									copied,
									onCopy: copy
								}),
								method.details.bankName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyRow, {
									label: "Bank",
									value: method.details.bankName,
									copied,
									onCopy: copy
								}),
								method.details.accountName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyRow, {
									label: "Name",
									value: method.details.accountName,
									copied,
									onCopy: copy
								}),
								method.details.accountNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyRow, {
									label: "Account",
									value: method.details.accountNumber,
									copied,
									onCopy: copy
								}),
								method.details.ifsc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyRow, {
									label: "IFSC",
									value: method.details.ifsc,
									copied,
									onCopy: copy
								}),
								method.details.swift && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyRow, {
									label: "SWIFT",
									value: method.details.swift,
									copied,
									onCopy: copy
								}),
								method.details.iban && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyRow, {
									label: "IBAN",
									value: method.details.iban,
									copied,
									onCopy: copy
								}),
								method.details.branch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyRow, {
									label: "Branch",
									value: method.details.branch,
									copied,
									onCopy: copy
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] uppercase tracking-wide text-subtle",
							children: "Payer name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "mt-1",
							value: payerName,
							onChange: (e) => setPayerName(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] uppercase tracking-wide text-subtle",
							children: "UTR / UPI / wire ref"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "mt-1",
							value: reference,
							onChange: (e) => setReference(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] uppercase tracking-wide text-subtle",
							children: "Note (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "mt-1",
							value: note,
							onChange: (e) => setNote(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full",
							disabled: busy || !method,
							onClick: () => void submit(),
							children: busy ? "Submitting…" : "Submit for admin approval"
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: "Your requests"
				}), mine.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "None yet."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 divide-y divide-border rounded-xl bg-bg-subtle",
					children: mine.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "px-3 py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-fg",
								children: [
									formatAmount(row.amount, row.currency),
									" → ",
									formatMoney(row.usdCredit)
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: row.status })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-[12px] text-muted",
							children: [
								row.methodTitle,
								" · ",
								row.reference,
								row.adminNote ? ` · ${row.adminNote}` : ""
							]
						})]
					}, row.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-[12px] text-subtle",
				children: "Paper desk only. Admin approval credits a demo wallet. This is not a licensed forex deposit, UPI collection app, or FEMA-compliant broker."
			})
		]
	});
}
function MethodIcon({ kind }) {
	const cls = "size-4 text-muted";
	if (kind === "upi") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: cls });
	if (kind === "qr") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: cls });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: cls });
}
function CopyRow({ label, value, copied, onCopy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
			className: "flex min-w-0 items-center gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate num text-fg",
				children: value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "flex size-9 items-center justify-center text-muted hover:text-fg",
				onClick: () => onCopy(label, value),
				"aria-label": `Copy ${label}`,
				children: copied === label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" })
			})]
		})]
	});
}
function StatusBadge({ status }) {
	if (status === "approved") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: "buy",
		children: "Approved"
	});
	if (status === "rejected") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: "sell",
		children: "Rejected"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: "warn",
		children: "Pending"
	});
}
var Route$6 = createFileRoute("/account")({ component: AccountPage });
function AccountPage() {
	const { user, isPending } = useDeskSession();
	const hydrateFromServer = useTradeStore((s) => s.hydrateFromServer);
	const balance = useTradeStore((s) => s.balance);
	const positions = useTradeStore((s) => s.positions);
	const pricing = useTradeStore((s) => s.pricing);
	const [ledger, setLedger] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (!user) return;
		hydrateFromServer();
		listLedger().then(setLedger).catch(() => setLedger([]));
	}, [user, hydrateFromServer]);
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl px-4 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-48 animate-pulse rounded-sm bg-bg-subtle" })
		})]
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	const snap = snapshot({
		balance,
		positions
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-3xl px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.18em] text-subtle",
						children: "Account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl",
						children: user.name || user.email || "Your desk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Signed in. Submit a UPI, QR or bank request. After an admin approves, paper USD hits this login — not a guest stash."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-8 grid grid-cols-2 gap-3 md:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$2, {
								k: "Cash",
								v: formatMoney(balance)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$2, {
								k: "Equity",
								v: formatMoney(snap.equity)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$2, {
								k: "Open",
								v: String(positions.length)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$2, {
								k: "Book",
								v: pricing === "raw" ? "RAW" : "Standard"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DepositDesk, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Funding history"
						}), ledger.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: "No deposits yet."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 divide-y divide-border rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]",
							children: ledger.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between px-4 py-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted",
									children: [
										row.kind,
										" · ",
										new Date(row.createdAt).toLocaleString()
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "num text-fg",
									children: formatMoney(row.amount)
								})]
							}, row.id))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Stat$2({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-wide text-subtle",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 font-display text-2xl num",
			children: v
		})]
	});
}
var Tabs = Root2;
function TabsList({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
		className: cn("inline-flex items-center gap-0.5 rounded-md bg-bg-subtle p-1", className),
		...props
	});
}
function TabsTrigger({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		className: cn("inline-flex h-8 items-center justify-center rounded-sm px-3 text-[13px] font-medium text-muted transition-[background-color,color] duration-150 data-[state=active]:bg-bg-elevated data-[state=active]:text-fg", className),
		...props
	});
}
var TabsContent = Content;
function AdminDeposits({ onChange }) {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [filter, setFilter] = (0, import_react.useState)("pending");
	const [busy, setBusy] = (0, import_react.useState)(null);
	const [notes, setNotes] = (0, import_react.useState)({});
	const [usd, setUsd] = (0, import_react.useState)({});
	async function load() {
		const data = await listAllDeposits({ data: { status: filter === "all" ? void 0 : filter } });
		setRows(data);
	}
	(0, import_react.useEffect)(() => {
		load().catch(() => toast.error("Could not load deposits."));
	}, [filter]);
	async function act(row, action) {
		setBusy(row.id);
		try {
			const override = usd[row.id];
			await reviewDeposit({ data: {
				id: row.id,
				action,
				usdCredit: override ? Number(override) : void 0,
				adminNote: notes[row.id]
			} });
			toast.success(action === "approve" ? "Credited to user wallet." : "Rejected.");
			await load();
			onChange();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Review failed.");
		} finally {
			setBusy(null);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-1.5",
		children: [
			"pending",
			"all",
			"approved",
			"rejected"
		].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setFilter(f),
			className: `h-9 rounded-sm px-3 text-[13px] capitalize ${filter === f ? "bg-bg-subtle text-fg" : "text-muted hover:text-fg"}`,
			children: f
		}, f))
	}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-8 text-sm text-muted",
		children: "No requests in this view."
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-3",
		children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-xl",
						children: [
							formatAmount(row.amount, row.currency),
							" → ",
							formatMoney(row.usdCredit)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							row.userName || row.userEmail || row.userId,
							" · ",
							row.methodTitle,
							" · ",
							row.payerName
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-[12px] text-subtle",
						children: [
							"Ref ",
							row.reference,
							row.note ? ` · ${row.note}` : "",
							" · #",
							row.id
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, { status: row.status })]
			}), row.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-2 sm:grid-cols-[1fr_140px_auto_auto]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Admin note",
						value: notes[row.id] ?? "",
						onChange: (e) => setNotes((s) => ({
							...s,
							[row.id]: e.target.value
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "USD override",
						value: usd[row.id] ?? "",
						onChange: (e) => setUsd((s) => ({
							...s,
							[row.id]: e.target.value
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "buy",
						disabled: busy === row.id,
						onClick: () => void act(row, "approve"),
						children: "Approve"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "sell",
						disabled: busy === row.id,
						onClick: () => void act(row, "reject"),
						children: "Reject"
					})
				]
			})]
		}, row.id))
	})] });
}
function Status({ status }) {
	if (status === "approved") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: "buy",
		children: "Approved"
	});
	if (status === "rejected") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: "sell",
		children: "Rejected"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: "warn",
		children: "Pending"
	});
}
function AdminUsers({ onChange }) {
	const me = useDeskUser();
	const hydrateFromServer = useTradeStore((s) => s.hydrateFromServer);
	const [rows, setRows] = (0, import_react.useState)([]);
	const [q, setQ] = (0, import_react.useState)("");
	const [amounts, setAmounts] = (0, import_react.useState)({});
	const [busy, setBusy] = (0, import_react.useState)(null);
	async function load() {
		setRows(await listDeskUsers());
	}
	(0, import_react.useEffect)(() => {
		load().catch(() => toast.error("Could not load users."));
	}, []);
	const filtered = rows.filter((u) => {
		return `${u.name} ${u.email} ${u.id}`.toLowerCase().includes(q.trim().toLowerCase());
	});
	async function credit(user, amount) {
		setBusy(user.id);
		try {
			await adminCredit({ data: {
				userId: user.id,
				amount,
				note: "Admin wallet credit"
			} });
			toast.success(`${amount > 0 ? "Credited" : "Debited"} ${user.email}`);
			await load();
			onChange();
			if (me?.id === user.id) await hydrateFromServer();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Credit failed.");
		} finally {
			setBusy(null);
		}
	}
	async function freeze(user, frozen) {
		setBusy(user.id);
		try {
			await setUserFrozen({ data: {
				userId: user.id,
				frozen
			} });
			await load();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Update failed.");
		} finally {
			setBusy(null);
		}
	}
	async function promote(user, admin) {
		setBusy(user.id);
		try {
			await setUserAdmin({ data: {
				userId: user.id,
				admin
			} });
			await load();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Role update failed.");
		} finally {
			setBusy(null);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		placeholder: "Search name or email",
		value: q,
		onChange: (e) => setQ(e.target.value)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-3",
		children: filtered.map((user) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-fg",
						children: user.name || "Trader"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] text-muted",
						children: user.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-2xl num",
						children: formatMoney(user.balance)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-[12px] text-subtle",
						children: [
							user.openPositions,
							" open · ",
							user.pendingDeposits,
							" pending"
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1.5",
					children: [user.role === "admin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "warn",
						children: "Admin"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "User" }), user.status === "frozen" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "sell",
						children: "Frozen"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "buy",
						children: "Live"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "w-32",
						placeholder: "USD",
						value: amounts[user.id] ?? "",
						onChange: (e) => setAmounts((s) => ({
							...s,
							[user.id]: e.target.value
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "buy",
						disabled: busy === user.id,
						onClick: () => void credit(user, Number(amounts[user.id] || 1e3)),
						children: "Credit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						disabled: busy === user.id,
						onClick: () => void credit(user, 1e4),
						children: "+$10k"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						disabled: busy === user.id,
						onClick: () => void freeze(user, user.status !== "frozen"),
						children: user.status === "frozen" ? "Unfreeze" : "Freeze"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						disabled: busy === user.id || user.id === me?.id,
						onClick: () => void promote(user, user.role !== "admin"),
						children: user.role === "admin" ? "Remove admin" : "Make admin"
					})
				]
			})]
		}, user.id))
	})] });
}
var EMPTY = {
	vpa: "",
	payee: "",
	note: "",
	bankName: "",
	accountName: "",
	accountNumber: "",
	ifsc: "",
	swift: "",
	iban: "",
	branch: ""
};
function AdminRails() {
	const [currencies, setCurrencies] = (0, import_react.useState)([]);
	const [methods, setMethods] = (0, import_react.useState)([]);
	const [editing, setEditing] = (0, import_react.useState)(null);
	async function load() {
		const [c, m] = await Promise.all([listCurrencies(), listPaymentMethods({ data: { all: true } })]);
		setCurrencies(c);
		setMethods(m);
	}
	(0, import_react.useEffect)(() => {
		load().catch(() => toast.error("Could not load rails."));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-[1fr_1.1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Currencies"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Units per 1 USD. Used to credit paper dollars."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2",
				children: currencies.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrencyRowEditor, {
					row: c,
					onSaved: () => void load()
				}, c.code))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewCurrency, { onSaved: () => void load() })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Payment methods"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: () => setEditing({
						id: 0,
						kind: "upi",
						title: "New UPI",
						currency: "INR",
						details: { ...EMPTY },
						enabled: true,
						sortOrder: 0
					}),
					children: "Add rail"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2",
				children: methods.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-3 rounded-xl bg-bg-elevated px-4 py-3 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-fg",
						children: m.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[12px] text-muted",
						children: [
							m.kind.toUpperCase(),
							" · ",
							m.currency
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [m.enabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "buy",
							children: "On"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Off" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => setEditing(m),
							children: "Edit"
						})]
					})]
				}, m.id))
			}),
			editing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodEditor, {
				method: editing,
				currencies,
				onClose: () => setEditing(null),
				onSaved: () => {
					setEditing(null);
					load();
				}
			})
		] })]
	});
}
function CurrencyRowEditor({ row, onSaved }) {
	const [units, setUnits] = (0, import_react.useState)(String(row.unitsPerUsd));
	const [enabled, setEnabled] = (0, import_react.useState)(row.enabled);
	(0, import_react.useEffect)(() => {
		setUnits(String(row.unitsPerUsd));
		setEnabled(row.enabled);
	}, [row]);
	async function save() {
		try {
			await saveCurrency({ data: {
				code: row.code,
				name: row.name,
				symbol: row.symbol,
				unitsPerUsd: Number(units),
				enabled
			} });
			toast.success(`${row.code} saved`);
			onSaved();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Save failed.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "grid grid-cols-[72px_1fr_auto_auto] items-center gap-2 rounded-xl bg-bg-elevated px-3 py-2 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-fg",
				children: row.code
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: units,
				onChange: (e) => setUnits(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-[12px] text-muted hover:text-fg",
				onClick: () => setEnabled((v) => !v),
				children: enabled ? "On" : "Off"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "ghost",
				onClick: () => void save(),
				children: "Save"
			})
		]
	});
}
function NewCurrency({ onSaved }) {
	const [code, setCode] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [units, setUnits] = (0, import_react.useState)("1");
	async function add() {
		try {
			await saveCurrency({ data: {
				code,
				name: name || code,
				symbol: code,
				unitsPerUsd: Number(units),
				enabled: true
			} });
			setCode("");
			setName("");
			setUnits("1");
			onSaved();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not add currency.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				placeholder: "CODE",
				value: code,
				onChange: (e) => setCode(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				placeholder: "Name",
				value: name,
				onChange: (e) => setName(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				placeholder: "Per USD",
				value: units,
				onChange: (e) => setUnits(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: () => void add(),
				children: "Add"
			})
		]
	});
}
function MethodEditor({ method, currencies, onClose, onSaved }) {
	const [title, setTitle] = (0, import_react.useState)(method.title);
	const [kind, setKind] = (0, import_react.useState)(method.kind);
	const [currency, setCurrency] = (0, import_react.useState)(method.currency);
	const [enabled, setEnabled] = (0, import_react.useState)(method.enabled);
	const [details, setDetails] = (0, import_react.useState)({
		...EMPTY,
		...method.details
	});
	const [busy, setBusy] = (0, import_react.useState)(false);
	function set(key, value) {
		setDetails((d) => ({
			...d,
			[key]: value
		}));
	}
	async function save() {
		setBusy(true);
		try {
			await savePaymentMethod({ data: {
				id: method.id || void 0,
				kind,
				title,
				currency,
				details,
				enabled
			} });
			toast.success("Rail saved");
			onSaved();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Save failed.");
		} finally {
			setBusy(false);
		}
	}
	async function remove() {
		if (!method.id) return;
		setBusy(true);
		try {
			await deletePaymentMethod({ data: method.id });
			toast.success("Rail removed");
			onSaved();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Delete failed.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5 rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl",
				children: method.id ? "Edit rail" : "New rail"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Title",
						value: title,
						onChange: setTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] uppercase tracking-wide text-subtle",
						children: "Type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "mt-1 h-11 w-full rounded-sm bg-bg-subtle px-3 text-sm text-fg shadow-[var(--shadow-border)]",
						value: kind,
						onChange: (e) => setKind(e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "upi",
								children: "UPI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "qr",
								children: "QR"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "bank",
								children: "Bank"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "swift",
								children: "SWIFT / wire"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[11px] uppercase tracking-wide text-subtle",
						children: "Currency"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "mt-1 h-11 w-full rounded-sm bg-bg-subtle px-3 text-sm text-fg shadow-[var(--shadow-border)]",
						value: currency,
						onChange: (e) => setCurrency(e.target.value),
						children: currencies.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: c.code,
							children: [
								c.code,
								" · ",
								c.name
							]
						}, c.code))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "self-end h-11 text-sm text-muted hover:text-fg",
						onClick: () => setEnabled((v) => !v),
						children: enabled ? "Enabled" : "Disabled"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "UPI ID / VPA",
						value: details.vpa ?? "",
						onChange: (v) => set("vpa", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Payee name",
						value: details.payee ?? "",
						onChange: (v) => set("payee", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Bank",
						value: details.bankName ?? "",
						onChange: (v) => set("bankName", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Account name",
						value: details.accountName ?? "",
						onChange: (v) => set("accountName", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Account number",
						value: details.accountNumber ?? "",
						onChange: (v) => set("accountNumber", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "IFSC",
						value: details.ifsc ?? "",
						onChange: (v) => set("ifsc", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "SWIFT",
						value: details.swift ?? "",
						onChange: (v) => set("swift", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "IBAN",
						value: details.iban ?? "",
						onChange: (v) => set("iban", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Branch",
						value: details.branch ?? "",
						onChange: (v) => set("branch", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Note",
						value: details.note ?? "",
						onChange: (v) => set("note", v)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						disabled: busy,
						onClick: () => void save(),
						children: "Save rail"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: onClose,
						children: "Cancel"
					}),
					method.id > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "sell",
						disabled: busy,
						onClick: () => void remove(),
						children: "Delete"
					})
				]
			})
		]
	});
}
function Field$1({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-[11px] uppercase tracking-wide text-subtle",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		className: "mt-1",
		value,
		onChange: (e) => onChange(e.target.value)
	})] });
}
function AdminDesk() {
	const ops = useOps();
	const [overview, setOverview] = (0, import_react.useState)(null);
	const [claiming, setClaiming] = (0, import_react.useState)(false);
	async function loadOverview() {
		try {
			setOverview(await getAdminOverview());
		} catch {
			setOverview(null);
		}
	}
	(0, import_react.useEffect)(() => {
		if (ops.isAdmin) loadOverview();
	}, [ops.isAdmin]);
	async function claim() {
		setClaiming(true);
		try {
			await claimAdmin();
			ops.reload();
			toast.success("You are the desk admin.");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not claim admin.");
		} finally {
			setClaiming(false);
		}
	}
	if (ops.loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-dvh place-items-center bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Loading ops…"
		})
	});
	if (!ops.isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-4 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-subtle",
					children: "Operations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl",
					children: ops.canClaim ? "Set up the desk" : "Staff only"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: ops.canClaim ? "No admin yet. The first operator to claim this desk can approve deposits, manage rails, and credit wallets." : "This login is not an admin. Ask the desk operator to promote you."
				}),
				ops.canClaim && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-8 w-full",
					disabled: claiming,
					onClick: () => void claim(),
					children: claiming ? "Claiming…" : "Become desk admin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/trade",
					className: "mt-6 text-sm text-muted hover:text-fg",
					children: "Back to trader"
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-4 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-subtle",
							children: "Operations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-4xl",
							children: "Admin desk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm text-muted",
							children: "Approve funding, manage users, and edit UPI / QR / bank rails. Credits land as paper USD on the trader’s account."
						})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 grid grid-cols-2 gap-3 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
							k: "Users",
							v: String(overview?.users ?? "—")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
							k: "Pending",
							v: String(overview?.pending ?? "—")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
							k: "Paper AUM",
							v: overview ? formatMoney(overview.paperAum) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
							k: "Approved today",
							v: String(overview?.approvedToday ?? "—")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					defaultValue: "deposits",
					className: "mt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "deposits",
								children: "Deposits"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "users",
								children: "Users"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "rails",
								children: "Rails"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "deposits",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDeposits, { onChange: () => void loadOverview() })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "users",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminUsers, { onChange: () => void loadOverview() })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "rails",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminRails, {})
						})
					]
				})
			]
		})]
	});
}
function AdminBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center gap-3 px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { compact: true }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg",
					children: "Ops"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "ml-4 hidden items-center gap-4 text-sm text-muted sm:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/trade",
						className: "hover:text-fg",
						children: "Trader"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/account",
						className: "hover:text-fg",
						children: "Account"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ml-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
				})
			]
		})
	});
}
function Stat$1({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-wide text-subtle",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 font-display text-2xl num",
			children: v
		})]
	});
}
function LoginForm({ callbackURL = "/trade" }) {
	const router = useRouter();
	const { signInEmail, signUpEmail } = useDeskSession();
	const [mode, setMode] = (0, import_react.useState)("in");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(false);
	async function onEmail(e) {
		e.preventDefault();
		setError(null);
		setPending(true);
		try {
			if (mode === "up") await signUpEmail(email, password, email.split("@")[0] || "Trader");
			else await signInEmail(email, password);
			await router.invalidate();
			await router.navigate({ to: callbackURL });
		} catch (err) {
			setError(err instanceof Error ? err.message : "Sign-in failed.");
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full max-w-sm space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: onEmail,
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-[12px] text-muted",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "email",
							autoComplete: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-[12px] text-muted",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "password",
							autoComplete: mode === "up" ? "new-password" : "current-password",
							required: true,
							minLength: 6,
							value: password,
							onChange: (e) => setPassword(e.target.value)
						})]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-sell",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						disabled: pending,
						children: pending ? "Please wait…" : mode === "up" ? "Create account" : "Sign in"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "w-full text-sm text-muted hover:text-fg",
				onClick: () => {
					setMode((m) => m === "in" ? "up" : "in");
					setError(null);
				},
				children: mode === "in" ? "New here? Create an account" : "Already registered? Sign in"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-[11px] text-subtle",
				children: "Firebase Auth · nexora-bb654"
			})
		]
	});
}
var Route$5 = createFileRoute("/admin")({ component: AdminPage });
function AdminPage() {
	const { isPending } = useDeskSession();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-dvh place-items-center bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Loading ops…"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignInGate, {
		fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLocked, {}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDesk, {})
	});
}
function AdminLocked() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col items-center justify-center bg-bg px-4 text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-8 max-w-md text-center font-display text-4xl",
				children: "Sign in for ops"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md text-center text-sm text-muted",
				children: "Admin tools are tied to your login."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginForm, { callbackURL: "/admin" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 text-sm text-muted hover:text-fg",
				children: "Back"
			})
		]
	});
}
var Route$4 = createFileRoute("/login")({ component: LoginPage });
function LoginPage() {
	const { user, isPending } = useDeskSession();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-11 w-48 animate-pulse rounded-sm bg-bg-subtle" })
	});
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/trade" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center bg-bg px-4 text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-8 font-display text-4xl",
					children: "Sign in to trade"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Firebase login. After you sign in, submit UPI/bank details. An admin credits paper USD, then you trade. Books stay on this account across devices."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginForm, { callbackURL: "/trade" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-center text-sm text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-fg",
						children: "Back to markets"
					})
				})
			]
		})
	});
}
var Route$3 = createFileRoute("/markets")({ component: MarketsPage });
var TABS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "forex",
		label: ASSET_LABEL.forex
	},
	{
		id: "crypto",
		label: ASSET_LABEL.crypto
	},
	{
		id: "metals",
		label: ASSET_LABEL.metals
	},
	{
		id: "indices",
		label: ASSET_LABEL.indices
	},
	{
		id: "energy",
		label: ASSET_LABEL.energy
	},
	{
		id: "shares",
		label: ASSET_LABEL.shares
	}
];
function MarketsPage() {
	(0, import_react.useEffect)(() => {
		market.start();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TickerTape, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.18em] text-subtle",
						children: "Markets"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl md:text-5xl",
						children: "32 markets, one account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted",
						children: "Indicative demo prices. Spreads follow the book you pick on the trader — Standard or RAW. Tap Trade to load the symbol on the desk."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
						defaultValue: "all",
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
							className: "flex flex-wrap",
							children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: t.id,
								children: t.label
							}, t.id))
						}), TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: t.id,
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveTable, { assetClass: t.id === "all" ? void 0 : t.id })
						}, t.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm text-muted",
						children: [
							"Want the cost of a 0.10 lot? See the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pricing",
								className: "text-fg underline decoration-border-strong",
								children: "pricing desk"
							}),
							"."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var Route$2 = createFileRoute("/news")({ component: NewsPage });
function NewsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-3xl px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.18em] text-subtle",
						children: "News & analysis"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl md:text-5xl",
						children: "Desk notes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Written against the 19–20 September 2026 tape so the numbers on the trader and the numbers in the copy agree."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 space-y-14",
						children: ARTICLES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "border-t border-border pt-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] uppercase tracking-wide text-subtle",
									children: [
										a.kicker,
										" · ",
										a.date
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-3xl",
									children: a.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-base text-muted",
									children: a.standfirst
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 space-y-3 text-sm leading-relaxed text-muted",
									children: a.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24)))
								})
							]
						}, a.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/trade",
								children: "Trade from the notes"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/markets",
								children: "Open prices"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var Route$1 = createFileRoute("/pricing")({ component: PricingPage });
function PricingPage() {
	(0, import_react.useEffect)(() => {
		market.start();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.18em] text-subtle",
						children: "Pricing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 max-w-3xl font-display text-4xl md:text-5xl",
						children: "This desk is free. A live broker is not."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted",
						children: "Three numbers matter: what Nexora costs (nothing), what a real FOREX.com-style account costs to open, and what each trade costs in spread. All rupee figures use live USD/INR on this desk."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-4 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostCard, {
								kicker: "Nexora demo",
								title: "₹0",
								copy: "Sign in, request UPI/bank funding, wait for admin approval. Paper USD only. No live withdrawal."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostCard, {
								kicker: "Live broker min. deposit",
								title: "~$100",
								copy: "Typical FOREX.com-style minimum. About ₹8,800 at 88.4. They recommend $2,500 (≈ ₹2.2 lakh) so margin actually works."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostCard, {
								kicker: "1.00 lot EUR/USD",
								title: "~$10",
								copy: "Standard 1.0 pip. RAW is ~0.2 pip + $7 round-turn. Same ballpark unless you scalp."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Books, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RealWorld, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndiaNote, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/trade",
								children: "Trade the demo"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/markets",
								children: "View live prices"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function CostCard({ kicker, title, copy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-wide text-subtle",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: copy
			})
		]
	});
}
function Calculator() {
	useMarketTick();
	const [symbol, setSymbol] = (0, import_react.useState)("EURUSD");
	const [lots, setLots] = (0, import_react.useState)("0.10");
	const inst = getInstrument(symbol);
	const size = Math.max(0, Number(lots) || 0);
	const usdInr = market.getQuote("USDINR").mid;
	const q = market.getQuote(symbol);
	const rows = (0, import_react.useMemo)(() => {
		const stdSpread = spreadCost(inst, size, "standard");
		const rawSpread = spreadCost(inst, size, "raw");
		const rawComm = commissionCost(inst, size, "raw") * 2;
		const margin = requiredMargin(inst, size, q.ask);
		return {
			stdSpread,
			rawSpread,
			rawComm,
			rawAllIn: rawSpread + rawComm,
			margin
		};
	}, [
		inst,
		size,
		q.ask
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-16 rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Cost of one trade"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm text-muted",
				children: "Pick a market and a lot size. This is the money that leaves the account the moment you click Buy or Sell — spread you pay immediately, plus RAW commission."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 md:grid-cols-[1.4fr_0.6fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1.5 block text-[12px] text-muted",
						children: "Market"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: symbol,
						onChange: (e) => setSymbol(e.target.value),
						className: "h-11 w-full rounded-sm bg-bg-subtle px-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none",
						children: INSTRUMENTS.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: i.symbol,
							children: [
								i.display,
								" — ",
								i.name
							]
						}, i.symbol))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1.5 block text-[12px] text-muted",
						children: "Lots"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: lots,
						onChange: (e) => setLots(e.target.value),
						inputMode: "decimal"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[560px] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-[12px] text-subtle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 font-medium",
									children: "Book"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 font-medium",
									children: "USD"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 font-medium",
									children: "INR"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
						className: "num",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalcRow, {
								k: "Standard — spread only",
								usd: rows.stdSpread,
								inr: rows.stdSpread * usdInr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalcRow, {
								k: "RAW — spread + round-turn commission",
								usd: rows.rawAllIn,
								inr: rows.rawAllIn * usdInr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalcRow, {
								k: "Margin to open",
								usd: rows.margin,
								inr: rows.margin * usdInr
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-[12px] text-subtle",
				children: [
					"USD/INR ",
					usdInr.toFixed(3),
					" · ",
					inst.leverage,
					":1 · contract ",
					inst.contractSize.toLocaleString(),
					" ",
					"per lot. P/L after entry is separate — this table is the friction, not the market bet."
				]
			})
		]
	});
}
function CalcRow({ k, usd, inr }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
		className: "border-b border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "py-3 text-muted",
				children: k
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "py-3 text-fg",
				children: formatMoney(usd)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
				className: "py-3 text-fg",
				children: ["₹", inr.toLocaleString("en-IN", { maximumFractionDigits: 0 })]
			})
		]
	});
}
function Books() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-16 grid gap-4 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-wide text-subtle",
					children: "Standard"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-3xl",
					children: "Spread only"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "EUR/USD typical 1.0 pip · GBP/USD 1.3 · XAU/USD $0.32" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Share CFDs 0 commission" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Better if you trade infrequently" })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-wide text-subtle",
					children: "RAW"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-3xl",
					children: "From 0.2 pips + $3.50/side"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "$7 round-turn per FX lot ($3.50 each way), modelled on live RAW books" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Gold and indices: tighter spread, no extra ticket" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Better if you scalp majors" })
					]
				})
			]
		})]
	});
}
function RealWorld() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "If you opened a live account like FOREX.com"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[640px] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-[12px] text-subtle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Item"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Typical live cost"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "INR (indicative)"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
						className: "text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: "Account opening"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-fg",
										children: "$0"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: "₹0"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: "Minimum deposit"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-fg",
										children: "$100 (they prefer $2,500)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: "₹8,800 / ₹2.21 lakh"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: "Deposit fee"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-fg",
										children: "Usually $0 (card / local)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: "₹0"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: "International wire out"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-fg",
										children: "$25–$40"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: "₹2,200–₹3,500"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: "Inactivity (after ~12 months)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-fg",
										children: "~$15 / month"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: "₹1,300 / month"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: "Platform (web / MT5)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-fg",
									children: "$0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: "₹0"
								})
							] })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[12px] text-subtle",
				children: "Live figures are typical 2026 retail terms for a FOREX.com-style broker, not a quote. Spreads move with the tape."
			})
		]
	});
}
function IndiaNote() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-16 rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] md:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl",
			children: "From India, Gurugram"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 space-y-3 text-sm text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Retail offshore forex/CFD accounts are generally not permitted for Indian residents under FEMA and RBI rules. Sending money to an overseas broker for leveraged FX is the expensive part — and often the illegal one. This demo does not open that door." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Building a real licensed broker is a different universe: regulatory capital (often $1 lakh+ equivalent abroad, far more for a bank-grade India licence), liquidity, and a dealing desk. Software alone is the cheap line item. Nexora is the software line item, running as paper." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you only wanted to learn the buttons, the tape, and what a pip costs in rupees — you are already on the right product. Hit Start trading. Risk $0." })
			]
		})]
	});
}
function AccountBar({ onDeposit }) {
	useMarketTick();
	const { user, signOutDesk } = useDeskSession();
	const ops = useOps();
	const balance = useTradeStore((s) => s.balance);
	const positions = useTradeStore((s) => s.positions);
	const pricing = useTradeStore((s) => s.pricing);
	const setPricing = useTradeStore((s) => s.setPricing);
	const oneClick = useTradeStore((s) => s.oneClick);
	const setOneClick = useTradeStore((s) => s.setOneClick);
	const status = useTradeStore((s) => s.status);
	const alerts = useTradeStore((s) => s.alerts);
	const snap = snapshot({
		balance,
		positions
	});
	const warn = Number.isFinite(snap.marginLevel) && snap.marginLevel < 100;
	const acctNo = user?.id ? `NX-${user.id.slice(-8).toUpperCase()}` : "NX-DEMO";
	const live = market.feedLive;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-12 shrink-0 items-center gap-3 bg-desk px-3 text-desk-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { compact: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "hidden font-display text-base tracking-tight sm:block",
				children: "Nexora"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden items-center gap-2 border-l border-desk-line pl-3 lg:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-buy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "leading-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-desk-fg",
						children: user?.name ?? "Trader"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[10px] text-desk-muted",
						children: [
							status === "frozen" ? "Frozen" : "Active",
							" · ",
							acctNo
						]
					})]
				})]
			}),
			live && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden rounded-sm bg-buy/20 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-buy md:inline",
				children: "Live"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ml-auto flex min-w-0 items-center gap-4 overflow-x-auto text-[11px] num",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Available to trade",
						value: formatMoney(Math.max(0, snap.free))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Net equity",
						value: formatMoney(snap.equity),
						tone: snap.floating >= 0 ? "buy" : "sell"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Cash (USD)",
						value: formatMoney(balance),
						className: "hidden md:flex"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Unrealised P/L",
						value: formatSigned(snap.floating),
						tone: snap.floating >= 0 ? "buy" : "sell"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Total margin",
						value: formatMoney(snap.used),
						className: "hidden lg:flex",
						tone: warn ? "sell" : void 0
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden items-center rounded-sm bg-desk-line p-0.5 sm:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setPricing("standard");
						toast.message("Standard — spread only");
					},
					className: cn("h-7 rounded-sm px-2 text-[11px] text-desk-muted", pricing === "standard" && "bg-bg-subtle text-desk-fg"),
					children: "Standard"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setPricing("raw");
						toast.message("RAW — from 0.0 pips + commission");
					},
					className: cn("h-7 rounded-sm px-2 text-[11px] text-desk-muted", pricing === "raw" && "bg-bg-subtle text-desk-fg"),
					children: "RAW"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "buy",
				className: "h-8 shrink-0 px-3 text-[12px]",
				onClick: onDeposit,
				children: "+ Add funds"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => {
					setOneClick(!oneClick);
					toast.message(oneClick ? "1-click trading off" : "1-click trading on — tap Sell/Buy to fill");
				},
				className: "hidden items-center gap-2 sm:flex",
				"aria-pressed": oneClick,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("relative h-5 w-9 rounded-full transition-colors duration-150", oneClick ? "bg-buy" : "bg-desk-line"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-0.5 size-4 rounded-full bg-desk-fg transition-transform duration-150", oneClick ? "translate-x-4" : "translate-x-0.5") })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[10px] uppercase tracking-wide text-desk-muted",
					children: ["1-click ", oneClick ? "on" : "off"]
				})]
			}),
			ops.isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/admin",
				className: "hidden text-[11px] text-desk-muted hover:text-desk-fg lg:block",
				children: "Admin"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/account",
				className: "relative flex size-8 items-center justify-center rounded-sm text-desk-muted hover:text-desk-fg",
				"aria-label": "Alerts",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" }), alerts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-1 top-1 size-1.5 rounded-full bg-sell" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/news",
				className: "hidden size-8 items-center justify-center rounded-sm text-desk-muted hover:text-desk-fg md:flex",
				"aria-label": "Help",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleHelp, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "flex size-8 items-center justify-center rounded-sm text-desk-muted hover:text-desk-fg",
				"aria-label": "Sign out",
				onClick: () => void signOutDesk(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" })
			})
		]
	});
}
function Stat({ label, value, tone, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex min-w-0 flex-col leading-tight", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate text-[10px] text-desk-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("truncate text-[12px] text-desk-fg", tone === "buy" && "text-buy", tone === "sell" && "text-sell"),
			children: value
		})]
	});
}
function CandleChart({ symbol, onTrade }) {
	useMarketTick();
	const canvasRef = (0, import_react.useRef)(null);
	const wrapRef = (0, import_react.useRef)(null);
	const drawRef = (0, import_react.useRef)(() => {});
	const hoverRef = (0, import_react.useRef)(null);
	const [tf, setTf] = (0, import_react.useState)("15m");
	const [macdOn, setMacdOn] = (0, import_react.useState)(true);
	const [tool, setTool] = (0, import_react.useState)("cross");
	const [hover, setHover] = (0, import_react.useState)(null);
	const inst = getInstrument(symbol);
	const quote = market.getQuote(symbol);
	const candles = market.getCandles(symbol, tf);
	const oneClick = useTradeStore((s) => s.oneClick);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		if (!canvas || !wrap) return;
		const draw = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const w = wrap.clientWidth;
			const h = wrap.clientHeight;
			if (w < 8 || h < 8) return;
			canvas.width = Math.floor(w * dpr);
			canvas.height = Math.floor(h * dpr);
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;
			const ctx = canvas.getContext("2d");
			if (!ctx) return;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.clearRect(0, 0, w, h);
			const padL = 8;
			const padR = 64;
			const padT = 8;
			const macdH = macdOn ? Math.max(64, h * .22) : 0;
			const padB = 18 + macdH;
			const data = market.getCandles(symbol, tf);
			if (data.length === 0) return;
			const visible = data.slice(-120);
			const highs = visible.map((c) => c.h);
			const lows = visible.map((c) => c.l);
			let min = Math.min(...lows);
			let max = Math.max(...highs);
			const pad = (max - min) * .08 || visible[0].c * .002;
			min -= pad;
			max += pad;
			const plotW = w - padL - padR;
			const plotH = h - padT - padB;
			const slot = plotW / visible.length;
			const yOf = (p) => padT + (max - p) / (max - min) * plotH;
			ctx.strokeStyle = "rgba(242,241,237,0.06)";
			ctx.lineWidth = 1;
			ctx.font = "11px IBM Plex Sans, sans-serif";
			ctx.fillStyle = "#6E6E76";
			const steps = 5;
			for (let i = 0; i <= steps; i++) {
				const p = min + (max - min) * i / steps;
				const y = yOf(p);
				ctx.beginPath();
				ctx.moveTo(padL, y);
				ctx.lineTo(w - padR, y);
				ctx.stroke();
				ctx.fillText(formatPrice(p, inst.digits), w - padR + 8, y + 4);
			}
			visible.forEach((c, i) => {
				const x = padL + i * slot + slot / 2;
				const up = c.c >= c.o;
				ctx.strokeStyle = up ? "#2F9E6B" : "#D05660";
				ctx.fillStyle = up ? "#2F9E6B" : "#D05660";
				ctx.beginPath();
				ctx.moveTo(x, yOf(c.h));
				ctx.lineTo(x, yOf(c.l));
				ctx.stroke();
				const y1 = yOf(Math.max(c.o, c.c));
				const y2 = yOf(Math.min(c.o, c.c));
				const bh = Math.max(1, y2 - y1);
				const bw = Math.max(2, slot * .62);
				ctx.fillRect(x - bw / 2, y1, bw, bh);
			});
			const q = market.getQuote(symbol);
			const py = yOf(q.mid);
			ctx.setLineDash([4, 4]);
			ctx.strokeStyle = "rgba(197,202,211,0.45)";
			ctx.beginPath();
			ctx.moveTo(padL, py);
			ctx.lineTo(w - padR, py);
			ctx.stroke();
			ctx.setLineDash([]);
			ctx.fillStyle = q.change >= 0 ? "#2F9E6B" : "#D05660";
			ctx.fillRect(w - padR + 4, py - 9, 56, 16);
			ctx.fillStyle = "#09090B";
			ctx.fillText(formatPrice(q.mid, inst.digits), w - padR + 8, py + 3);
			if (macdOn) {
				const macd = macdOf(visible.map((c) => c.c));
				const macdTop = h - macdH;
				ctx.strokeStyle = "rgba(242,241,237,0.08)";
				ctx.beginPath();
				ctx.moveTo(padL, macdTop);
				ctx.lineTo(w - padR, macdTop);
				ctx.stroke();
				const vals = macd.flatMap((m) => [
					m.macd,
					m.signal,
					m.hist
				]);
				const mMax = Math.max(1e-5, ...vals.map((v) => Math.abs(v)));
				const my = (v) => macdTop + 8 + (mMax - v) / (mMax * 2) * (macdH - 16);
				visible.forEach((_, i) => {
					const x = padL + i * slot + slot / 2;
					const hist = macd[i].hist;
					ctx.fillStyle = hist >= 0 ? "rgba(47,158,107,0.55)" : "rgba(208,86,96,0.55)";
					const y0 = my(0);
					const y1 = my(hist);
					ctx.fillRect(x - slot * .28, Math.min(y0, y1), slot * .56, Math.abs(y1 - y0) || 1);
				});
				ctx.beginPath();
				visible.forEach((_, i) => {
					const x = padL + i * slot + slot / 2;
					const y = my(macd[i].macd);
					if (i === 0) ctx.moveTo(x, y);
					else ctx.lineTo(x, y);
				});
				ctx.strokeStyle = "#C5CAD3";
				ctx.stroke();
				ctx.beginPath();
				visible.forEach((_, i) => {
					const x = padL + i * slot + slot / 2;
					const y = my(macd[i].signal);
					if (i === 0) ctx.moveTo(x, y);
					else ctx.lineTo(x, y);
				});
				ctx.strokeStyle = "#D05660";
				ctx.stroke();
				ctx.fillStyle = "#6E6E76";
				ctx.fillText("MACD 12,26,9", padL, macdTop + 12);
			}
			const hoverNow = hoverRef.current;
			if (hoverNow && hoverNow.i >= 0 && hoverNow.i < visible.length) {
				const c = visible[hoverNow.i];
				const x = padL + hoverNow.i * slot + slot / 2;
				ctx.strokeStyle = "rgba(242,241,237,0.2)";
				ctx.beginPath();
				ctx.moveTo(x, padT);
				ctx.lineTo(x, h - 18);
				if (tool === "cross") {
					ctx.moveTo(padL, hoverNow.y);
					ctx.lineTo(w - padR, hoverNow.y);
				}
				ctx.stroke();
				const boxW = 176;
				const boxX = Math.min(Math.max(8, x - boxW / 2), w - boxW - 72);
				ctx.fillStyle = "rgba(18,19,22,0.94)";
				ctx.fillRect(boxX, 8, boxW, 52);
				ctx.strokeStyle = "rgba(242,241,237,0.12)";
				ctx.strokeRect(boxX, 8, boxW, 52);
				ctx.fillStyle = "#F2F1ED";
				ctx.fillText(`O ${formatPrice(c.o, inst.digits)}  H ${formatPrice(c.h, inst.digits)}`, boxX + 8, 28);
				ctx.fillText(`L ${formatPrice(c.l, inst.digits)}  C ${formatPrice(c.c, inst.digits)}`, boxX + 8, 46);
			}
		};
		drawRef.current = draw;
		draw();
		const ro = new ResizeObserver(draw);
		ro.observe(wrap);
		const unsub = market.subscribe(draw);
		return () => {
			ro.disconnect();
			unsub();
		};
	}, [
		symbol,
		tf,
		inst.digits,
		macdOn,
		tool
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-10 shrink-0 items-center gap-2 border-b border-border px-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-1 text-sm font-medium text-fg",
						children: inst.display
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex rounded-sm bg-bg-subtle p-0.5",
						children: TIMEFRAMES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setTf(t.id),
							className: cn("h-7 min-w-8 rounded-sm px-1.5 text-[11px] font-medium text-muted", tf === t.id && "bg-bg-elevated text-fg"),
							children: t.label
						}, t.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setMacdOn((v) => !v),
						className: cn("hidden h-7 items-center gap-1 rounded-sm px-2 text-[11px] text-muted md:flex", macdOn && "bg-bg-subtle text-fg"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "size-3.5" }), "MACD"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-[11px] uppercase tracking-wide text-subtle lg:inline",
						children: "MID"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden num text-[12px] text-fg lg:inline",
						children: formatPrice(quote.mid, inst.digits)
					}),
					quote.live && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-[10px] uppercase tracking-wide text-buy md:inline",
						children: "Live"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onTrade?.("sell"),
							className: "flex h-8 min-w-20 flex-col items-center justify-center rounded-sm bg-sell px-2 text-sell-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] leading-none opacity-80",
								children: "Sell"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "num text-[12px] font-medium leading-tight",
								children: formatPrice(quote.bid, inst.digits)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onTrade?.("buy"),
							className: "flex h-8 min-w-20 flex-col items-center justify-center rounded-sm bg-buy px-2 text-buy-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] leading-none opacity-80",
								children: "Buy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "num text-[12px] font-medium leading-tight",
								children: formatPrice(quote.ask, inst.digits)
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden w-9 flex-col items-center gap-1 border-r border-border py-2 text-subtle md:flex",
					children: [
						[
							"cross",
							Crosshair,
							"Crosshair"
						],
						[
							"hline",
							Minus,
							"Horizontal"
						],
						[
							"trend",
							TrendingUp,
							"Trend"
						]
					].map(([id, Icon, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						title: label,
						"aria-label": label,
						onClick: () => setTool(id),
						className: cn("flex size-7 items-center justify-center rounded-sm", tool === id ? "bg-bg-subtle text-fg" : "hover:text-fg"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" })
					}, id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: wrapRef,
					className: "relative min-h-[180px] flex-1",
					onMouseMove: (e) => {
						const rect = e.currentTarget.getBoundingClientRect();
						const x = e.clientX - rect.left;
						const y = e.clientY - rect.top;
						const plotW = rect.width - 72;
						const next = {
							x,
							y,
							i: Math.min(119, Math.max(0, Math.floor(x / plotW * Math.min(120, candles.length))))
						};
						hoverRef.current = next;
						setHover(next);
						drawRef.current();
					},
					onMouseLeave: () => {
						hoverRef.current = null;
						setHover(null);
						drawRef.current();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
							ref: canvasRef,
							className: "absolute inset-0 size-full"
						}),
						hover ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "sr-only",
							children: ["Crosshair on candle ", hover.i + 1]
						}) : null,
						oneClick && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pointer-events-none absolute right-2 top-2 text-[10px] uppercase tracking-wide text-subtle",
							children: "1-click"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-6 shrink-0 items-center gap-3 border-t border-border px-3 text-[11px] num text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["O ", formatPrice(quote.open, inst.digits)] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["H ", formatPrice(quote.high, inst.digits)] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["L ", formatPrice(quote.low, inst.digits)] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: quote.change >= 0 ? "text-buy" : "text-sell",
						children: [
							"C ",
							formatPrice(quote.mid, inst.digits),
							" ",
							quote.change >= 0 ? "+" : "",
							quote.changePct.toFixed(2),
							"%"
						]
					})
				]
			})
		]
	});
}
function ema(values, period) {
	const k = 2 / (period + 1);
	const out = [];
	let prev = values[0] ?? 0;
	for (let i = 0; i < values.length; i++) {
		const v = values[i];
		prev = i === 0 ? v : v * k + prev * (1 - k);
		out.push(prev);
	}
	return out;
}
function macdOf(closes) {
	const e12 = ema(closes, 12);
	const e26 = ema(closes, 26);
	const macd = e12.map((v, i) => v - e26[i]);
	const signal = ema(macd, 9);
	return macd.map((v, i) => ({
		macd: v,
		signal: signal[i],
		hist: v - signal[i]
	}));
}
function NewsDesk() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col bg-bg-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border px-3 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] font-medium text-fg",
				children: "News"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/news",
				className: "text-[11px] text-muted hover:text-fg",
				children: "All headlines"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "min-h-0 flex-1 overflow-y-auto",
			children: ARTICLES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border-b border-border px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[10px] uppercase tracking-wide text-subtle",
						children: [
							a.kicker,
							" · ",
							a.date
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13px] leading-snug text-fg",
						children: a.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 line-clamp-2 text-[12px] text-muted",
						children: a.standfirst
					})
				]
			}, a.slug))
		})]
	});
}
function OrderTicket() {
	useMarketTick();
	const symbol = useTradeStore((s) => s.selected);
	const pricing = useTradeStore((s) => s.pricing);
	const placeMarket = useTradeStore((s) => s.placeMarket);
	const placePending = useTradeStore((s) => s.placePending);
	const balance = useTradeStore((s) => s.balance);
	const positions = useTradeStore((s) => s.positions);
	const inst = getInstrument(symbol);
	const quote = market.getQuote(symbol);
	const [lots, setLots] = (0, import_react.useState)("0.10");
	const [kind, setKind] = (0, import_react.useState)("market");
	const [price, setPrice] = (0, import_react.useState)("");
	const [sl, setSl] = (0, import_react.useState)("");
	const [tp, setTp] = (0, import_react.useState)("");
	const size = Number(lots) || 0;
	const trigger = Number(price) || 0;
	const slN = sl ? Number(sl) : null;
	const tpN = tp ? Number(tp) : null;
	const stats = (0, import_react.useMemo)(() => {
		const px = kind === "market" ? quote.ask : trigger || quote.ask;
		const margin = size > 0 ? requiredMargin(inst, size, px) : 0;
		const spread = size > 0 ? spreadCost(inst, size, pricing) : 0;
		const comm = size > 0 ? commissionCost(inst, size, pricing) : 0;
		return {
			margin,
			spread,
			comm,
			total: spread + comm
		};
	}, [
		inst,
		size,
		quote.ask,
		kind,
		trigger,
		pricing
	]);
	const snap = snapshot({
		balance,
		positions
	});
	const usdInr = market.getQuote("USDINR").mid;
	function submit(side) {
		const parsed = Number(lots);
		if (!Number.isFinite(parsed) || parsed < .01) {
			toast.error("Enter at least 0.01 lots.");
			return;
		}
		const result = kind === "market" ? placeMarket({
			symbol,
			side,
			lots: parsed,
			sl: slN && slN > 0 ? slN : null,
			tp: tpN && tpN > 0 ? tpN : null
		}) : placePending({
			symbol,
			side,
			kind,
			lots: parsed,
			price: trigger,
			sl: slN && slN > 0 ? slN : null,
			tp: tpN && tpN > 0 ? tpN : null
		});
		if (!result.ok) toast.error(result.error);
		else toast.success(useTradeStore.getState().lastToast ?? "Order accepted");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wide text-subtle",
						children: "Order ticket"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-xl text-fg",
						children: inst.display
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							inst.name,
							" · ",
							inst.leverage,
							":1"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					value: kind,
					onValueChange: (v) => setKind(v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "market",
								className: "flex-1",
								children: "Market"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "limit",
								className: "flex-1",
								children: "Limit"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "stop",
								className: "flex-1",
								children: "Stop"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: kind,
						className: "mt-4 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-[12px] text-muted",
									children: "Size (lots)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									inputMode: "decimal",
									value: lots,
									onChange: (e) => setLots(e.target.value),
									"aria-label": "Size in lots"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex gap-1",
									children: [
										"0.01",
										"0.10",
										"0.50",
										"1.00"
									].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setLots(n),
										className: "h-8 flex-1 rounded-sm bg-bg-subtle text-[12px] text-muted hover:text-fg",
										children: n
									}, n))
								})
							] }),
							kind !== "market" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Trigger price",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									inputMode: "decimal",
									placeholder: formatPrice(quote.mid, inst.digits),
									value: price,
									onChange: (e) => setPrice(e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Stop loss",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										inputMode: "decimal",
										placeholder: "Optional",
										value: sl,
										onChange: (e) => setSl(e.target.value)
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Take profit",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										inputMode: "decimal",
										placeholder: "Optional",
										value: tp,
										onChange: (e) => setTp(e.target.value)
									})
								})]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 space-y-1.5 text-[12px] text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Required margin",
							v: formatMoney(stats.margin)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Spread cost",
							v: formatMoney(stats.spread)
						}),
						pricing === "raw" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Commission / side",
							v: formatMoney(stats.comm)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Est. entry cost",
							v: formatMoney(stats.total)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "In rupees",
							v: `₹${(stats.total * usdInr).toFixed(0)}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Free margin",
							v: formatMoney(snap.free)
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2 border-t border-border p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "sell",
					className: "h-12 flex-col gap-0 py-1",
					onClick: () => submit("sell"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[11px] font-normal opacity-80",
						children: ["Sell ", formatPrice(quote.bid, inst.digits)]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SELL" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "buy",
					className: "h-12 flex-col gap-0 py-1",
					onClick: () => submit("buy"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[11px] font-normal opacity-80",
						children: ["Buy ", formatPrice(quote.ask, inst.digits)]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BUY" })]
				})]
			})
		]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-[12px] text-muted",
			children: label
		}), children]
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: k }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "num text-fg",
			children: v
		})]
	});
}
function PositionsPanel() {
	useMarketTick();
	const positions = useTradeStore((s) => s.positions);
	const pending = useTradeStore((s) => s.pending);
	const history = useTradeStore((s) => s.history);
	const alerts = useTradeStore((s) => s.alerts);
	const closePosition = useTradeStore((s) => s.closePosition);
	const cancelPending = useTradeStore((s) => s.cancelPending);
	const select = useTradeStore((s) => s.select);
	const lastToast = useTradeStore((s) => s.lastToast);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
		defaultValue: "open",
		className: "flex h-full min-h-0 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border px-2 py-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					className: "bg-transparent p-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
							value: "open",
							children: [
								"Positions (",
								positions.length,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
							value: "pending",
							children: [
								"Orders (",
								pending.length,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
							value: "alerts",
							children: [
								"Price alerts (",
								alerts.length,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "history",
							children: "History"
						})
					]
				}), lastToast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hidden truncate text-[11px] text-muted lg:block",
					children: lastToast
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "open",
				className: "min-h-0 flex-1 overflow-auto",
				children: positions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "No open positions. Tap Sell or Buy on the watchlist or chart." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[720px] text-left text-[12px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "sticky top-0 bg-bg-elevated text-subtle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							"Market",
							"Side",
							"Lots",
							"Entry",
							"Mark",
							"P/L",
							"SL / TP",
							""
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2 font-medium",
							children: h
						}, h)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: positions.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenRow, {
						pos: p,
						onClose: () => {
							const r = closePosition(p.id);
							if (!r.ok) toast.error(r.error);
							else toast.success(useTradeStore.getState().lastToast ?? "Closed");
						},
						onFocus: () => select(p.symbol)
					}, p.id)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "pending",
				className: "min-h-0 flex-1 overflow-auto",
				children: pending.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "No working orders. Switch the ticket to Limit or Stop." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border",
					children: pending.map((o) => {
						const inst = getInstrument(o.symbol);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-3 px-3 py-3 text-[12px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "text-left",
								onClick: () => select(o.symbol),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-medium text-fg",
									children: [
										inst.display,
										" · ",
										o.kind,
										" ",
										o.side
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-muted",
									children: [
										o.lots,
										" lots @ ",
										formatPrice(o.price, inst.digits)
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => cancelPending(o.id),
								children: "Cancel"
							})]
						}, o.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "alerts",
				className: "min-h-0 flex-1 overflow-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDesk, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "history",
				className: "min-h-0 flex-1 overflow-auto",
				children: history.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "Closed trades will land here with realised P/L." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border",
					children: history.map((h) => {
						const inst = getInstrument(h.symbol);
						const up = h.pnl >= 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-3 px-3 py-3 text-[12px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-medium text-fg",
								children: [
									inst.display,
									" · ",
									h.side,
									" ",
									h.lots
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted",
								children: [
									formatPrice(h.entry, inst.digits),
									" → ",
									formatPrice(h.exit, inst.digits)
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("num font-medium", up ? "text-buy" : "text-sell"),
								children: formatSigned(h.pnl)
							})]
						}, h.id);
					})
				})
			})
		]
	});
}
function AlertDesk() {
	const symbol = useTradeStore((s) => s.selected);
	const alerts = useTradeStore((s) => s.alerts);
	const addAlert = useTradeStore((s) => s.addAlert);
	const removeAlert = useTradeStore((s) => s.removeAlert);
	const inst = getInstrument(symbol);
	const q = market.getQuote(symbol);
	const [price, setPrice] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mb-1 block text-[11px] text-muted",
					children: [
						"Alert on ",
						inst.display,
						" (now ",
						formatPrice(q.mid, inst.digits),
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					inputMode: "decimal",
					value: price,
					onChange: (e) => setPrice(e.target.value),
					placeholder: formatPrice(q.mid, inst.digits),
					className: "h-9 w-40"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "outline",
				onClick: () => {
					const px = Number(price) || q.mid;
					addAlert(symbol, px, px >= q.mid ? "above" : "below");
					setPrice("");
				},
				children: "Set alert"
			})]
		}), alerts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-muted",
			children: "No price alerts. Set a level to get a toast when the tape crosses it."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 divide-y divide-border",
			children: alerts.map((a) => {
				const aInst = getInstrument(a.symbol);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between py-2 text-[12px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						aInst.display,
						" ",
						a.want,
						" ",
						formatPrice(a.price, aInst.digits)
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: () => removeAlert(a.id),
						children: "Remove"
					})]
				}, a.id);
			})
		})]
	});
}
function OpenRow({ pos, onClose, onFocus }) {
	const inst = getInstrument(pos.symbol);
	const q = market.getQuote(pos.symbol);
	const pnl = positionPnl(pos, q.bid, q.ask);
	const mark = pos.side === "buy" ? q.bid : q.ask;
	const up = pnl >= 0;
	const updateSlTp = useTradeStore((s) => s.updateSlTp);
	const [sl, setSl] = (0, import_react.useState)(pos.sl?.toString() ?? "");
	const [tp, setTp] = (0, import_react.useState)(pos.tp?.toString() ?? "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
		className: "border-t border-border text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3 py-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onFocus,
					className: "text-left font-medium",
					children: inst.display
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: cn("px-3 py-2 uppercase", pos.side === "buy" ? "text-buy" : "text-sell"),
				children: pos.side
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3 py-2 num",
				children: pos.lots.toFixed(2)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3 py-2 num",
				children: formatPrice(pos.entry, inst.digits)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3 py-2 num",
				children: formatPrice(mark, inst.digits)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: cn("px-3 py-2 num font-medium", up ? "text-buy" : "text-sell"),
				children: formatMoney(pnl)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3 py-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: sl,
						onChange: (e) => setSl(e.target.value),
						onBlur: () => updateSlTp(pos.id, sl ? Number(sl) : null, tp ? Number(tp) : pos.tp),
						className: "h-8 w-20 px-2",
						placeholder: "SL"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: tp,
						onChange: (e) => setTp(e.target.value),
						onBlur: () => updateSlTp(pos.id, sl ? Number(sl) : pos.sl, tp ? Number(tp) : null),
						className: "h-8 w-20 px-2",
						placeholder: "TP"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3 py-2 text-right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: onClose,
					children: "Close"
				})
			})
		]
	});
}
function Empty({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "px-4 py-8 text-center text-sm text-muted",
		children: text
	});
}
var CLASSES = [
	"all",
	"forex",
	"crypto",
	"metals",
	"indices",
	"energy",
	"shares"
];
var POPULAR = [
	"EURUSD",
	"GBPUSD",
	"USDJPY",
	"XAUUSD",
	"BTCUSD",
	"US100",
	"USOIL"
];
function Watchlist({ onPick, onTrade }) {
	useMarketTick();
	const selected = useTradeStore((s) => s.selected);
	const select = useTradeStore((s) => s.select);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const rows = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return INSTRUMENTS.filter((i) => {
			if (filter !== "all" && i.assetClass !== filter) return false;
			if (!query) return true;
			return i.symbol.toLowerCase().includes(query) || i.display.toLowerCase().includes(query) || i.name.toLowerCase().includes(query);
		});
	}, [filter, q]);
	const grouped = filter === "all" && !q.trim() ? [{
		label: "Popular markets",
		items: rows.filter((i) => POPULAR.includes(i.symbol))
	}, {
		label: "All markets",
		items: rows.filter((i) => !POPULAR.includes(i.symbol))
	}] : [{
		label: filter === "all" ? "Markets" : ASSET_LABEL[filter],
		items: rows
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col bg-bg-elevated",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search markets",
						className: "h-9 w-full rounded-sm bg-bg pl-8 pr-3 text-[12px] text-fg outline-none shadow-[var(--shadow-border)] placeholder:text-subtle"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex gap-1 overflow-x-auto",
					children: CLASSES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(c),
						className: cn("h-7 shrink-0 rounded-sm px-2 text-[11px] text-muted", filter === c && "bg-bg-subtle text-fg"),
						children: c === "all" ? "All" : ASSET_LABEL[c]
					}, c))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[minmax(0,1fr)_72px_72px_56px] border-b border-border px-3 py-1.5 text-[10px] uppercase tracking-wide text-subtle",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Market" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-right",
						children: "Sell"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-right",
						children: "Buy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-right",
						children: "Chg"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto",
				children: [grouped.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sticky top-0 z-10 bg-bg-elevated px-3 py-1.5 text-[10px] uppercase tracking-wide text-subtle",
					children: g.label
				}), g.items.map((inst) => {
					const quote = market.getQuote(inst.symbol);
					const active = selected === inst.symbol;
					const up = quote.change >= 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("grid grid-cols-[minmax(0,1fr)_72px_72px_56px] items-center border-b border-border px-3 py-1.5 text-[12px]", active && "bg-bg-subtle"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "min-w-0 text-left",
								onClick: () => {
									select(inst.symbol);
									onPick?.();
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-medium text-fg",
									children: inst.display
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block text-[10px] text-subtle",
									children: [ASSET_LABEL[inst.assetClass], quote.live ? " · Live" : ""]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-right num text-sell hover:underline",
								onClick: () => onTrade?.(inst.symbol, "sell"),
								children: formatPrice(quote.bid, inst.digits)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-right num text-buy hover:underline",
								onClick: () => onTrade?.(inst.symbol, "buy"),
								children: formatPrice(quote.ask, inst.digits)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: cn("text-right num", up ? "text-buy" : "text-sell"),
								children: [up ? "+" : "", quote.changePct.toFixed(2)]
							})
						]
					}, inst.symbol);
				})] }, g.label)), rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-4 py-8 text-center text-sm text-muted",
					children: "No markets match."
				})]
			})
		]
	});
}
var Sheet = Dialog;
function SheetContent({ className, children, side = "bottom", title, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-bg/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: cn("fixed z-50 flex flex-col bg-bg-elevated text-fg shadow-[var(--shadow-border)] outline-none", side === "bottom" && "inset-x-0 bottom-0 max-h-[86dvh] rounded-t-xl pb-[env(safe-area-inset-bottom)]", side === "right" && "inset-y-0 right-0 h-full w-[min(100%,380px)]", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "font-display text-lg",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
				className: "flex size-11 items-center justify-center rounded-sm text-muted hover:text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Close"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 flex-1 overflow-y-auto",
			children
		})]
	})] });
}
function Terminal() {
	const selected = useTradeStore((s) => s.selected);
	const select = useTradeStore((s) => s.select);
	const onTick = useTradeStore((s) => s.onTick);
	const hydrated = useTradeStore((s) => s.hydrated);
	const hydrateFromServer = useTradeStore((s) => s.hydrateFromServer);
	const loadPrefs = useTradeStore((s) => s.loadPrefs);
	const balance = useTradeStore((s) => s.balance);
	const positions = useTradeStore((s) => s.positions);
	const oneClick = useTradeStore((s) => s.oneClick);
	const clickSize = useTradeStore((s) => s.clickSize);
	const placeMarket = useTradeStore((s) => s.placeMarket);
	const lastToast = useTradeStore((s) => s.lastToast);
	const [ticketOpen, setTicketOpen] = (0, import_react.useState)(false);
	const [depositOpen, setDepositOpen] = (0, import_react.useState)(false);
	const [workspace, setWorkspace] = (0, import_react.useState)("default");
	const [mobile, setMobile] = (0, import_react.useState)("markets");
	const needsFunds = hydrated && balance <= 0 && positions.length === 0;
	const inst = getInstrument(selected);
	(0, import_react.useEffect)(() => {
		market.start();
		loadPrefs();
		hydrateFromServer();
	}, [hydrateFromServer, loadPrefs]);
	(0, import_react.useEffect)(() => {
		if (needsFunds) setDepositOpen(true);
	}, [needsFunds]);
	(0, import_react.useEffect)(() => {
		return market.subscribe(() => onTick());
	}, [onTick]);
	(0, import_react.useEffect)(() => {
		if (lastToast) toast.message(lastToast);
	}, [lastToast]);
	function trade(symbol, side) {
		select(symbol);
		if (oneClick) {
			const result = placeMarket({
				symbol,
				side,
				lots: clickSize,
				sl: null,
				tp: null
			});
			if (!result.ok) toast.error(result.error);
			return;
		}
		setTicketOpen(true);
		setMobile("trade");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountBar, { onDeposit: () => setDepositOpen(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: depositOpen,
				onOpenChange: setDepositOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
					title: "Add funds",
					side: "right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DepositDesk, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceTabs, {
				workspace,
				onWorkspace: setWorkspace,
				symbol: inst.display
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden min-h-0 flex-1 lg:grid lg:grid-cols-[280px_minmax(0,1fr)_260px] lg:grid-rows-[minmax(0,1fr)_220px]",
				children: [
					(workspace === "default" || workspace === "browse") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "min-h-0 border-r border-border [grid-column:1] [grid-row:1/3]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Watchlist, { onTrade: trade })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: cn("flex min-h-0 flex-col [grid-row:1]", workspace === "analysis" || workspace === "settings" ? "[grid-column:1/4]" : "[grid-column:2/4]"),
						children: workspace === "settings" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatformSettings, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandleChart, {
							symbol: selected,
							onTrade: (side) => trade(selected, side)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("min-h-0 border-t border-border bg-bg-elevated [grid-row:2]", workspace === "analysis" || workspace === "settings" ? "[grid-column:1/3]" : "[grid-column:2]"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PositionsPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "min-h-0 border-l border-t border-border [grid-column:3] [grid-row:2]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsDesk, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: ticketOpen,
				onOpenChange: setTicketOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
					title: `Deal ticket · ${inst.display}`,
					side: "right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderTicket, {})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1 flex-col lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-0 flex-1",
					children: [
						mobile === "markets" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Watchlist, { onTrade: trade }),
						mobile === "chart" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandleChart, {
							symbol: selected,
							onTrade: (side) => trade(selected, side)
						}),
						mobile === "positions" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-bg-elevated",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PositionsPanel, {})
						}),
						mobile === "trade" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderTicket, {}),
						mobile === "more" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "w-full",
									onClick: () => setDepositOpen(true),
									children: "Add funds"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "w-full",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/account",
										children: "Account"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "w-full",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/news",
										children: "News"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "w-full",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/admin",
										children: "Admin"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatformSettings, {})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "grid grid-cols-5 border-t border-border bg-bg pb-[env(safe-area-inset-bottom)]",
					children: [
						[
							"markets",
							LayoutGrid,
							"Markets"
						],
						[
							"chart",
							ChartColumn,
							"Chart"
						],
						[
							"positions",
							Newspaper,
							"Positions"
						],
						[
							"trade",
							PanelRight,
							"Trade"
						],
						[
							"more",
							Wallet,
							"More"
						]
					].map(([id, Icon, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setMobile(id),
						className: cn("flex h-14 flex-col items-center justify-center gap-0.5 text-[10px] text-muted", mobile === id && "text-fg"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), label]
					}, id))
				})]
			}),
			!hydrated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Loading account"
			})
		]
	});
}
function WorkspaceTabs({ workspace, onWorkspace, symbol }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden h-9 shrink-0 items-center gap-1 overflow-x-auto border-b border-border bg-bg-elevated px-2 lg:flex",
		children: [
			{
				id: "browse",
				label: "Browse markets"
			},
			{
				id: "default",
				label: "Default workspace"
			},
			{
				id: "analysis",
				label: symbol
			},
			{
				id: "settings",
				label: "Platform settings"
			}
		].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onWorkspace(t.id),
			className: cn("h-7 shrink-0 rounded-sm px-3 text-[12px] text-muted", workspace === t.id && "bg-bg text-fg shadow-[var(--shadow-border)]"),
			children: t.label
		}, t.id))
	});
}
function PlatformSettings() {
	const pricing = useTradeStore((s) => s.pricing);
	const setPricing = useTradeStore((s) => s.setPricing);
	const oneClick = useTradeStore((s) => s.oneClick);
	const setOneClick = useTradeStore((s) => s.setOneClick);
	const clickSize = useTradeStore((s) => s.clickSize);
	const setClickSize = useTradeStore((s) => s.setClickSize);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 overflow-y-auto p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-wide text-subtle",
				children: "Platform settings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-2xl",
				children: "How this desk fills"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] text-muted",
				children: "Pricing book"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: pricing === "standard" ? "default" : "outline",
					size: "sm",
					onClick: () => setPricing("standard"),
					children: "Standard"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: pricing === "raw" ? "default" : "outline",
					size: "sm",
					onClick: () => setPricing("raw"),
					children: "RAW"
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] text-muted",
					children: "1-click trading"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-2",
					variant: oneClick ? "buy" : "outline",
					size: "sm",
					onClick: () => setOneClick(!oneClick),
					children: oneClick ? "On" : "Off"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-sm text-[12px] text-muted",
					children: "When on, tapping Sell or Buy on the watchlist or chart fills immediately at the live bid/ask using the size below."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block max-w-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1.5 block text-[12px] text-muted",
					children: "1-click size (lots)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					inputMode: "decimal",
					value: String(clickSize),
					onChange: (e) => setClickSize(Number(e.target.value) || .01)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 text-[12px] text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-3.5" }), "Layouts save on this device. Orders save to your signed-in account."]
			})
		]
	});
}
var Route = createFileRoute("/trade")({ component: TradePage });
function TradePage() {
	const { isPending } = useDeskSession();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-dvh bg-bg text-fg" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignInGate, {
		fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TradeLocked, {}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {})
	});
}
function TradeLocked() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col items-center justify-center bg-bg px-4 text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-8 max-w-md text-center font-display text-4xl",
				children: "Sign in, deposit, then trade"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md text-center text-sm text-muted",
				children: "The desk is tied to your account. After login, request a deposit via UPI, QR or bank. Admin approval credits paper USD. Tickets fill at the live bid/ask."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginForm, { callbackURL: "/trade" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 text-sm text-muted hover:text-fg",
				children: "Back to markets"
			})
		]
	});
}
var rootRouteChildren = {
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AccountRoute: Route$6.update({
		id: "/account",
		path: "/account",
		getParentRoute: () => Route$8
	}),
	AdminRoute: Route$5.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$8
	}),
	LoginRoute: Route$4.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$8
	}),
	MarketsRoute: Route$3.update({
		id: "/markets",
		path: "/markets",
		getParentRoute: () => Route$8
	}),
	NewsRoute: Route$2.update({
		id: "/news",
		path: "/news",
		getParentRoute: () => Route$8
	}),
	PricingRoute: Route$1.update({
		id: "/pricing",
		path: "/pricing",
		getParentRoute: () => Route$8
	}),
	TradeRoute: Route.update({
		id: "/trade",
		path: "/trade",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { market as n, router_exports as t };
