import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useOnboardingSection } from "./onboarding-store-DD2TJWml.mjs";
import { a as toggleHeartCondition, i as numericOnly } from "./logic-DE2PGe21.mjs";
import { a as MultiChipGroup, c as StepFooter, l as UnitInput, n as ChipGroup, o as OnboardingScene, r as Field, s as StepCard } from "./StepFooter-BYDPCBJp.mjs";
import { t as WhyWeAsk } from "./WhyWeAsk-B1F1jcCI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/onboarding.heart-recovery-CO_M3WO4.js
var import_jsx_runtime = require_jsx_runtime();
var heart_rate_zones_jpg_asset_default = {
	version: 1,
	asset_id: "60caafc6-495d-4c96-acf7-174f07a28b3f",
	project_id: "09e03356-c2f6-4b3d-90a0-8ea0923dde37",
	url: "/__l5e/assets-v1/60caafc6-495d-4c96-acf7-174f07a28b3f/heart-rate-zones.jpg",
	r2_key: "a/v1/09e03356-c2f6-4b3d-90a0-8ea0923dde37/60caafc6-495d-4c96-acf7-174f07a28b3f/heart-rate-zones.jpg",
	original_filename: "heart-rate-zones.jpg",
	size: 105386,
	content_type: "image/jpeg",
	created_at: "2026-11-13T17:04:17Z"
};
var ALERT_OPTIONS = [{
	value: "off",
	label: "Off"
}, {
	value: "on",
	label: "On"
}];
var CONDITION_OPTIONS = [
	{
		value: "none",
		label: "None"
	},
	{
		value: "arrhythmia",
		label: "Arrhythmia"
	},
	{
		value: "hypertension",
		label: "Hypertension"
	},
	{
		value: "other",
		label: "Other"
	}
];
var SLEEP_OPTIONS = [
	{
		value: "lt5",
		label: "< 5 h"
	},
	{
		value: "5-6",
		label: "5–6 h"
	},
	{
		value: "7-8",
		label: "7–8 h"
	},
	{
		value: "9plus",
		label: "9+ h"
	}
];
var HYDRATION_OPTIONS = [
	{
		value: "lt1",
		label: "< 1 L"
	},
	{
		value: "1-2",
		label: "1–2 L"
	},
	{
		value: "2-3",
		label: "2–3 L"
	},
	{
		value: "3plus",
		label: "3+ L"
	}
];
var bpm = (v) => numericOnly(v).replace(".", "");
function HeartRecoveryPage() {
	const [heart, set] = useOnboardingSection("heart");
	const alertsOff = heart.heartAlert === "off";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OnboardingScene, {
		step: 4,
		aside: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyWeAsk, {
			image: heart_rate_zones_jpg_asset_default.url,
			imageAlt: "Heart-rate training zones 1 to 5 as a percentage of max heart rate",
			children: "Heart alerts watch for rhythm changes. Sleep and hydration strongly affect heart rate, recovery and performance."
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StepCard, {
			title: "Heart &",
			accent: "Recovery",
			subtitle: "Set up heart alerts and your daily recovery habits.",
			footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepFooter, { step: 4 }),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Heart Alert",
					hint: "(notify me about abnormal heart rhythm)",
					labelId: "heart-alert-label",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipGroup, {
						labelledBy: "heart-alert-label",
						options: ALERT_OPTIONS,
						value: heart.heartAlert,
						onChange: (heartAlert) => set({ heartAlert })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-[16px] grid grid-cols-1 gap-x-[26px] gap-y-[16px] sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Resting heart rate",
							htmlFor: "resting-hr",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitInput, {
								id: "resting-hr",
								inputMode: "numeric",
								placeholder: "e.g. 62",
								maxLength: 3,
								value: heart.restingHr,
								onChange: (e) => set({ restingHr: bpm(e.target.value) }),
								unit: "bpm"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Known heart conditions",
							labelId: "conditions-label",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiChipGroup, {
								labelledBy: "conditions-label",
								options: CONDITION_OPTIONS,
								values: heart.conditions,
								onToggle: (c) => set({ conditions: toggleHeartCondition(heart.conditions, c) })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Alert if above",
							htmlFor: "alert-above",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitInput, {
								id: "alert-above",
								inputMode: "numeric",
								placeholder: "e.g. 120",
								maxLength: 3,
								disabled: alertsOff,
								value: heart.alertAbove,
								onChange: (e) => set({ alertAbove: bpm(e.target.value) }),
								unit: "bpm"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Alert if below",
							htmlFor: "alert-below",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitInput, {
								id: "alert-below",
								inputMode: "numeric",
								placeholder: "e.g. 45",
								maxLength: 3,
								disabled: alertsOff,
								value: heart.alertBelow,
								onChange: (e) => set({ alertBelow: bpm(e.target.value) }),
								unit: "bpm"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					className: "mt-[16px]",
					label: "Sleep duration",
					hint: "(average per night)",
					labelId: "sleep-label",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipGroup, {
						labelledBy: "sleep-label",
						options: SLEEP_OPTIONS,
						value: heart.sleep,
						onChange: (sleep) => set({ sleep })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					className: "mt-[15px]",
					label: "Hydration",
					hint: "(water per day)",
					labelId: "hydration-label",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipGroup, {
						labelledBy: "hydration-label",
						options: HYDRATION_OPTIONS,
						value: heart.hydration,
						onChange: (hydration) => set({ hydration })
					})
				})
			]
		})
	});
}
//#endregion
export { HeartRecoveryPage as component };
