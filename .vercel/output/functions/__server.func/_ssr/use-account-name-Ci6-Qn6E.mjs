import { i as __toESM } from "../_runtime.mjs";
import { n as authApi } from "./auth-api-DosgRznz.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as firstName } from "./health-BbPFK9c3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-account-name-Ci6-Qn6E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* The registered name of the currently authenticated user, fetched from
* the account itself (`GET /api/auth/me`) — never hardcoded. `settled`
* flips once the lookup has finished (or immediately when signed out),
* so views can defer seeding text until the real name is known.
*/
function useAccountName() {
	const [account, setAccount] = (0, import_react.useState)(null);
	const [settled, setSettled] = (0, import_react.useState)(() => authApi.getSession() === null);
	(0, import_react.useEffect)(() => {
		if (settled) return;
		let alive = true;
		authApi.me().then((user) => {
			if (!alive) return;
			const full = user.fullName.trim();
			if (full) setAccount({
				first: firstName(full) ?? full,
				fullName: full,
				astronautId: user.astronautId.trim()
			});
		}).catch(() => {}).finally(() => {
			if (alive) setSettled(true);
		});
		return () => {
			alive = false;
		};
	}, [settled]);
	return {
		account,
		settled
	};
}
//#endregion
export { useAccountName as t };
