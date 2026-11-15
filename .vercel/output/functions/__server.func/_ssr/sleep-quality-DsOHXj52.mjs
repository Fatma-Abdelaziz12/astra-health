import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as DashboardShell } from "./DashboardShell-BARGy80N.mjs";
import { n as SleepHeaderTitle, r as SleepQuality, t as SleepHeaderBadge } from "./SleepQuality-C39tFv3F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sleep-quality-DsOHXj52.js
var import_jsx_runtime = require_jsx_runtime();
function SleepQualityRoutePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardShell, {
		headerTitle: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SleepHeaderTitle, {}),
		headerRight: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SleepHeaderBadge, {}),
		statusWeekday: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SleepQuality, {})
	});
}
//#endregion
export { SleepQualityRoutePage as component };
