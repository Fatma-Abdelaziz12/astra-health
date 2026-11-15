import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useOnboarding } from "./onboarding-store-DD2TJWml.mjs";
import { f as buildNotifications } from "./health-BbPFK9c3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notifications-context-B3xN85g4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Small piece of dashboard state saved in this browser (planner tasks, read notifications).
* Reads after mount so server and first client render match.
*/
function useStoredState(key, initial) {
	const [value, setValue] = (0, import_react.useState)(initial);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = window.localStorage.getItem(key);
			if (raw) setValue(JSON.parse(raw));
		} catch {}
		setHydrated(true);
	}, [key]);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch {}
	}, [
		key,
		value,
		hydrated
	]);
	return [
		value,
		(0, import_react.useCallback)((next) => setValue(next), []),
		hydrated
	];
}
var NOTIFICATIONS_KEY = "astra-notifications-read-v1";
var NotificationsContext = (0, import_react.createContext)(null);
/** Shares the notice list and its read state between the sidebar badge and the page. */
function NotificationsProvider({ children }) {
	const { data, hydrated } = useOnboarding();
	const [readIds, setReadIds, readHydrated] = useStoredState(NOTIFICATIONS_KEY, []);
	const items = (0, import_react.useMemo)(() => buildNotifications(data), [data]);
	const isRead = (0, import_react.useCallback)((id) => readIds.includes(id), [readIds]);
	const markRead = (0, import_react.useCallback)((id) => setReadIds((prev) => prev.includes(id) ? prev : [...prev, id]), [setReadIds]);
	const markAllRead = (0, import_react.useCallback)(() => setReadIds((prev) => Array.from(/* @__PURE__ */ new Set([...prev, ...items.map((i) => i.id)]))), [items, setReadIds]);
	const unread = hydrated && readHydrated ? items.filter((i) => !readIds.includes(i.id)).length : 0;
	const value = (0, import_react.useMemo)(() => ({
		items,
		unread,
		isRead,
		markRead,
		markAllRead
	}), [
		items,
		unread,
		isRead,
		markRead,
		markAllRead
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationsContext.Provider, {
		value,
		children
	});
}
function useNotifications() {
	const ctx = (0, import_react.useContext)(NotificationsContext);
	if (!ctx) throw new Error("useNotifications must be used inside <NotificationsProvider>");
	return ctx;
}
//#endregion
export { useNotifications as n, useStoredState as r, NotificationsProvider as t };
