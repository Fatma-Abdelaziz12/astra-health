//#region node_modules/.nitro/vite/services/ssr/assets/auth-api-DosgRznz.js
var ApiError = class extends Error {
	code;
	status;
	fields;
	constructor(status, code, message, fields = {}) {
		super(message);
		this.name = "ApiError";
		this.status = status;
		this.code = code;
		this.fields = fields;
	}
};
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
var STORAGE_KEY = "astra-session-v1";
async function request(path, options = {}) {
	let res;
	try {
		const headers = {};
		if (options.body !== void 0) headers["Content-Type"] = "application/json";
		if (options.token) headers["Authorization"] = `Bearer ${options.token}`;
		const init = {
			method: options.method ?? (options.body === void 0 ? "GET" : "POST"),
			headers,
			credentials: "omit"
		};
		if (options.body !== void 0) init.body = JSON.stringify(options.body);
		res = await fetch(`${BASE}${path}`, init);
	} catch {
		throw new ApiError(0, "OFFLINE", "Cannot reach the mission server. Check your connection.");
	}
	if (res.status === 204) return void 0;
	let json = {};
	try {
		json = await res.json();
	} catch {}
	if (!res.ok) {
		const e = json.error ?? {};
		throw new ApiError(res.status, e.code ?? "UNKNOWN", e.message ?? "Something went wrong. Try again.", e.fields ?? {});
	}
	return json;
}
function saveSession(tokens) {
	window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(tokens));
}
function loadSession() {
	try {
		const raw = window.sessionStorage.getItem(STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		return parsed.accessToken && parsed.refreshToken ? {
			accessToken: parsed.accessToken,
			refreshToken: parsed.refreshToken
		} : null;
	} catch {
		return null;
	}
}
var authApi = {
	async register(input) {
		const res = await request("/api/auth/register", { body: input });
		saveSession({
			accessToken: res.accessToken,
			refreshToken: res.refreshToken
		});
		return res;
	},
	async login(input) {
		const res = await request("/api/auth/login", { body: input });
		saveSession({
			accessToken: res.accessToken,
			refreshToken: res.refreshToken
		});
		return res;
	},
	/** Rotate the refresh token if the access token lapsed; null when signed out. */
	async refresh() {
		const session = loadSession();
		if (!session) return null;
		try {
			const res = await request("/api/auth/refresh", { body: { refreshToken: session.refreshToken } });
			saveSession(res);
			return res;
		} catch {
			window.sessionStorage.removeItem(STORAGE_KEY);
			return null;
		}
	},
	/** Best-effort server revocation, always clears the local session. */
	async logout() {
		const session = loadSession();
		if (session) try {
			await request("/api/auth/logout", { body: { refreshToken: session.refreshToken } });
		} catch {}
		window.sessionStorage.removeItem(STORAGE_KEY);
	},
	/** The signed-in account, refreshing the access token once on 401. */
	async me() {
		const session = loadSession();
		if (!session) throw new ApiError(401, "UNAUTHORIZED", "Sign in required");
		try {
			return (await request("/api/auth/me", { token: session.accessToken })).user;
		} catch (err) {
			if (err instanceof ApiError && err.status === 401) {
				const fresh = await this.refresh();
				if (fresh) return (await request("/api/auth/me", { token: fresh.accessToken })).user;
			}
			throw err;
		}
	},
	getSession: loadSession
};
if ({
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
}["DEV"] === true && typeof window !== "undefined") window["__astraAuth"] = authApi;
//#endregion
export { authApi as n, ApiError as t };
