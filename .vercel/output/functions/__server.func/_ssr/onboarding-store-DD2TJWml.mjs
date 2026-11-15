import { i as __toESM } from "../_runtime.mjs";
import { i as syncOnboarding, n as fetchOnboardingSnapshot, r as isSignedIn } from "./health-api-nLawGY4-.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/onboarding-store-DD2TJWml.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* True when saved storage contains at least one real answer. The persistence
* effect rewrites empty defaults, so mere presence of the key means nothing —
* content does. Used to decide whether a server-side restore is appropriate.
*/
function hasMeaningfulContent(raw) {
	if (!raw) return false;
	try {
		const p = JSON.parse(raw);
		return Object.keys(p.progress ?? {}).length > 0 || Boolean(p.account?.astronautId) || Boolean(p.account?.email) || Boolean(p.basic?.age) || Boolean(p.vitals?.systolic) || Boolean(p.avatar?.callsign);
	} catch {
		return false;
	}
}
/** Starting selections match the states shown in the step designs. */
var DEFAULT_ONBOARDING = {
	account: {
		fullName: "",
		email: "",
		astronautId: "",
		joinDate: ""
	},
	basic: {
		age: "",
		sex: "male",
		height: "",
		heightUnit: "cm",
		weight: "",
		weightUnit: "kg"
	},
	vitals: {
		systolic: "",
		diastolic: "",
		bpUnknown: false,
		respiratoryRate: "",
		spo2: "",
		measuredWithDevice: false
	},
	heart: {
		heartAlert: "on",
		restingHr: "",
		conditions: ["none"],
		alertAbove: "",
		alertBelow: "",
		sleep: "7-8",
		hydration: "2-3"
	},
	muscle: {
		muscleMass: "",
		boneDensity: "unknown",
		emgFile: null,
		dexaFile: null,
		emgGroup: "quadriceps"
	},
	avatar: {
		character: "explorer",
		skin: "purple",
		accent: "red",
		callsign: "",
		fromPhoto: false,
		suit: "eva-white",
		visor: "clear",
		customPhoto: ""
	},
	progress: {}
};
var STORAGE_KEY = "astra-onboarding-v1";
var AVATAR_STORAGE_KEY = "astra_selected_avatar";
var ASTRA_USER_STORAGE_KEY = "astra_user";
var VALID_CHARACTERS = /* @__PURE__ */ new Set([
	"explorer",
	"pilot",
	"scientist",
	"commander",
	"medic"
]);
var OnboardingContext = (0, import_react.createContext)(null);
function mergeSaved(saved) {
	const merged = { ...DEFAULT_ONBOARDING };
	for (const key of Object.keys(DEFAULT_ONBOARDING)) merged[key] = {
		...DEFAULT_ONBOARDING[key],
		...saved[key] ?? {}
	};
	return merged;
}
function readSaved() {
	return window.localStorage.getItem("astra-onboarding-v1") ?? window.sessionStorage.getItem("astra-onboarding-v1");
}
/**
* Holds every answer from Sign Up, the health-profile steps and the dashboard settings.
* Mirrored to local storage so a refresh or a new visit on this device keeps them.
*/
function OnboardingProvider({ children }) {
	const [data, setData] = (0, import_react.useState)(DEFAULT_ONBOARDING);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const localHadData = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = readSaved();
			const savedAvatar = window.localStorage.getItem(AVATAR_STORAGE_KEY);
			const savedUserRaw = window.localStorage.getItem(ASTRA_USER_STORAGE_KEY);
			const savedUser = savedUserRaw ? JSON.parse(savedUserRaw) : null;
			if (hasMeaningfulContent(raw)) localHadData.current = true;
			if (raw) {
				const parsed = mergeSaved(JSON.parse(raw));
				if (savedAvatar && VALID_CHARACTERS.has(savedAvatar) && !parsed.progress.avatar) parsed.avatar = {
					...parsed.avatar,
					character: savedAvatar
				};
				if (savedUser) {
					if (!parsed.account.fullName && savedUser.name && savedUser.name !== "Astronaut") parsed.account = {
						...parsed.account,
						fullName: savedUser.name
					};
					if (!parsed.account.joinDate && savedUser.joinDate) parsed.account = {
						...parsed.account,
						joinDate: savedUser.joinDate
					};
					if (!parsed.avatar.customPhoto && savedUser.customPhoto) parsed.avatar = {
						...parsed.avatar,
						customPhoto: savedUser.customPhoto
					};
					if (savedUser.avatarId && VALID_CHARACTERS.has(savedUser.avatarId) && !parsed.progress.avatar) parsed.avatar = {
						...parsed.avatar,
						character: savedUser.avatarId
					};
				}
				setData(parsed);
			} else if (savedAvatar || savedUser) setData((prev) => ({
				...prev,
				account: {
					...prev.account,
					fullName: savedUser?.name && savedUser.name !== "Astronaut" ? savedUser.name : prev.account.fullName,
					joinDate: savedUser?.joinDate ?? prev.account.joinDate
				},
				avatar: {
					...prev.avatar,
					character: savedUser?.avatarId && VALID_CHARACTERS.has(savedUser.avatarId) ? savedUser.avatarId : savedAvatar && VALID_CHARACTERS.has(savedAvatar) ? savedAvatar : prev.avatar.character,
					customPhoto: savedUser?.customPhoto ?? prev.avatar.customPhoto
				}
			}));
		} catch {}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		try {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
			window.localStorage.setItem(AVATAR_STORAGE_KEY, data.avatar.character);
			const astraUser = {
				name: data.account.fullName.trim() || data.avatar.callsign.trim(),
				avatarId: data.avatar.character,
				joinDate: data.account.joinDate?.trim() || "Nov 11, 2026",
				customPhoto: data.avatar.customPhoto || ""
			};
			window.localStorage.setItem(ASTRA_USER_STORAGE_KEY, JSON.stringify(astraUser));
		} catch {}
	}, [data, hydrated]);
	(0, import_react.useEffect)(() => {
		if (!hydrated || localHadData.current || !isSignedIn()) return;
		localHadData.current = true;
		fetchOnboardingSnapshot().then((remote) => {
			if (remote.hasData && remote.snapshot) setData(mergeSaved(remote.snapshot));
		}).catch(() => void 0);
	}, [hydrated]);
	const lastSynced = (0, import_react.useRef)("");
	(0, import_react.useEffect)(() => {
		if (!hydrated || !isSignedIn()) return;
		if (!(Object.keys(data.progress).length > 0 || data.account.astronautId !== "" || data.avatar.callsign !== "")) return;
		const payload = JSON.stringify(data);
		if (payload === lastSynced.current) return;
		const timer = window.setTimeout(() => {
			lastSynced.current = payload;
			syncOnboarding(data).catch(() => void 0);
		}, 800);
		return () => window.clearTimeout(timer);
	}, [data, hydrated]);
	const update = (0, import_react.useCallback)((section, patch) => {
		setData((prev) => ({
			...prev,
			[section]: {
				...prev[section],
				...patch
			}
		}));
	}, []);
	const reset = (0, import_react.useCallback)(() => {
		try {
			window.sessionStorage.removeItem(STORAGE_KEY);
			window.localStorage.removeItem(AVATAR_STORAGE_KEY);
			window.localStorage.removeItem(ASTRA_USER_STORAGE_KEY);
		} catch {}
		setData(DEFAULT_ONBOARDING);
	}, []);
	const logout = (0, import_react.useCallback)(() => {
		try {
			window.sessionStorage.clear();
			window.localStorage.removeItem(STORAGE_KEY);
			window.localStorage.removeItem(AVATAR_STORAGE_KEY);
			window.localStorage.removeItem(ASTRA_USER_STORAGE_KEY);
		} catch {}
		setData(DEFAULT_ONBOARDING);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		data,
		hydrated,
		update,
		reset,
		logout
	}), [
		data,
		hydrated,
		update,
		reset,
		logout
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OnboardingContext.Provider, {
		value,
		children
	});
}
function useOnboarding() {
	const ctx = (0, import_react.useContext)(OnboardingContext);
	if (!ctx) throw new Error("useOnboarding must be used inside <OnboardingProvider>");
	return ctx;
}
/** Shorthand for one section: its values and a patch setter. */
function useOnboardingSection(section) {
	const { data, update } = useOnboarding();
	const set = (0, import_react.useCallback)((patch) => update(section, patch), [section, update]);
	return [data[section], set];
}
//#endregion
export { useOnboarding as n, useOnboardingSection as r, OnboardingProvider as t };
