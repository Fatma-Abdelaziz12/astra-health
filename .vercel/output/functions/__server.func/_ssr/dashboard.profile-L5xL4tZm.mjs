import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as loadProfilePreferences, n as applyDocumentPreferences, o as saveProfilePreferences, t as DEFAULT_PROFILE_PREFERENCES } from "./profileData-D2dIui5F.mjs";
import { t as Profile } from "./Profile-sQ1K7MfS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.profile-L5xL4tZm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DashboardProfilePage() {
	const [prefs, setPrefs] = (0, import_react.useState)(DEFAULT_PROFILE_PREFERENCES);
	(0, import_react.useEffect)(() => {
		const loaded = loadProfilePreferences();
		setPrefs(loaded);
		applyDocumentPreferences(loaded);
	}, []);
	const handleUpdatePrefs = (0, import_react.useCallback)((patch) => {
		setPrefs((prev) => {
			const next = {
				...prev,
				...patch
			};
			saveProfilePreferences(next);
			applyDocumentPreferences(next);
			return next;
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Profile, {
		prefs,
		onUpdatePrefs: handleUpdatePrefs
	});
}
//#endregion
export { DashboardProfilePage as component };
