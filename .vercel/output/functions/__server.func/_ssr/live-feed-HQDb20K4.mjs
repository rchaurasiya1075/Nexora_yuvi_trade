import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { n as market } from "./router-eJAXCzYG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/live-feed-HQDb20K4.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchLiveQuotes = createServerFn({ method: "GET" }).handler(createSsrRpc("25904f70852851d97d8b3575d36e3bd4815c95d22c31dfb69a761e9f97381261"));
var started = false;
async function refresh() {
	try {
		const merged = await fetchLiveQuotes();
		if (Object.keys(merged).length === 0) {
			market.markFeed(false);
			return;
		}
		for (const [symbol, mid] of Object.entries(merged)) market.anchor(symbol, mid);
	} catch {
		market.markFeed(false);
	}
}
function startLiveFeed() {
	if (started || typeof window === "undefined") return;
	started = true;
	refresh();
	setInterval(() => void refresh(), 12e3);
}
//#endregion
export { startLiveFeed };
