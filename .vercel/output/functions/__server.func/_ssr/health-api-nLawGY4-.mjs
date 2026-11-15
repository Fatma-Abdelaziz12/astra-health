import { n as authApi, t as ApiError } from "./auth-api-DosgRznz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/health-api-nLawGY4-.js
var BASE = ({
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/"
}["VITE_API_URL"] || "http://localhost:3001").replace(/\/+$/, "");
function isSignedIn() {
	return authApi.getSession() !== null;
}
async function authedRequest(path, options = {}) {
	const session = authApi.getSession();
	if (!session) throw new ApiError(401, "UNAUTHORIZED", "Sign in required");
	const send = async (token) => {
		const headers = { Authorization: `Bearer ${token}` };
		const init = {
			method: options.method ?? (options.body === void 0 ? "GET" : "POST"),
			headers,
			credentials: "omit"
		};
		if (options.body !== void 0) {
			headers["Content-Type"] = "application/json";
			init.body = JSON.stringify(options.body);
		}
		const res = await fetch(`${BASE}${path}`, init);
		if (res.status === 401) throw new ApiError(401, "TOKEN_EXPIRED", "Session token expired");
		if (!res.ok) {
			let code = "UNKNOWN";
			let message = "Request failed";
			try {
				const json = await res.json();
				code = json.error?.code ?? code;
				message = json.error?.message ?? message;
			} catch {}
			throw new ApiError(res.status, code, message);
		}
		return await res.json();
	};
	try {
		return await send(session.accessToken);
	} catch (err) {
		if (err instanceof ApiError && err.status === 401) {
			const fresh = await authApi.refresh();
			if (fresh) return send(fresh.accessToken);
		}
		throw err;
	}
}
/** The store payload minus the avatar data-URL (images stay on-device). */
function syncableSnapshot(data) {
	const { avatar, ...rest } = data;
	const { customPhoto: _customPhoto, ...avatarRest } = avatar;
	return {
		...rest,
		avatar: avatarRest
	};
}
/** Reused by the assistant client — one auth/refresh path for the whole app. */
async function apiRequest(path, options) {
	return authedRequest(path, options);
}
async function syncOnboarding(data) {
	await authedRequest("/api/onboarding/sync", { body: syncableSnapshot(data) });
}
async function fetchOnboardingSnapshot() {
	return authedRequest("/api/onboarding/snapshot");
}
//#endregion
export { syncOnboarding as i, fetchOnboardingSnapshot as n, isSignedIn as r, apiRequest as t };
