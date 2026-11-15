import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useOnboardingSection } from "./onboarding-store-DD2TJWml.mjs";
import { i as numericOnly } from "./logic-DE2PGe21.mjs";
import { c as StepFooter, d as UploadDrop, l as UnitInput, n as ChipGroup, o as OnboardingScene, r as Field, s as StepCard } from "./StepFooter-BYDPCBJp.mjs";
import { t as WhyWeAsk } from "./WhyWeAsk-B1F1jcCI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/onboarding.muscle-bone-DHLKmdbN.js
var import_jsx_runtime = require_jsx_runtime();
var muscle_group_map_jpg_asset_default = {
	version: 1,
	asset_id: "decda6c8-b298-4892-9919-106929a5fbc2",
	project_id: "09e03356-c2f6-4b3d-90a0-8ea0923dde37",
	url: "/__l5e/assets-v1/decda6c8-b298-4892-9919-106929a5fbc2/muscle-group-map.jpg",
	r2_key: "a/v1/09e03356-c2f6-4b3d-90a0-8ea0923dde37/decda6c8-b298-4892-9919-106929a5fbc2/muscle-group-map.jpg",
	original_filename: "muscle-group-map.jpg",
	size: 169997,
	content_type: "image/jpeg",
	created_at: "2026-11-13T17:04:20Z"
};
var BONE_OPTIONS = [
	{
		value: "normal",
		label: "Normal"
	},
	{
		value: "osteopenia",
		label: "Osteopenia"
	},
	{
		value: "osteoporosis",
		label: "Osteoporosis"
	},
	{
		value: "unknown",
		label: "Unknown"
	}
];
var EMG_GROUPS = [
	{
		value: "biceps",
		label: "Biceps"
	},
	{
		value: "quadriceps",
		label: "Quadriceps"
	},
	{
		value: "calf",
		label: "Calf"
	},
	{
		value: "core",
		label: "Core"
	},
	{
		value: "forearm",
		label: "Forearm"
	}
];
function MuscleBonePage() {
	const [muscle, set] = useOnboardingSection("muscle");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OnboardingScene, {
		step: 5,
		aside: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyWeAsk, {
			image: muscle_group_map_jpg_asset_default.url,
			imageAlt: "Astronaut in a spacesuit with glowing EMG sensor points on the arm, core, thigh and calf",
			children: "Muscle mass, EMG and bone density help track muscle and bone loss, which matters most in microgravity."
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StepCard, {
			title: "Muscle &",
			accent: "Bone",
			subtitle: "Optional body-composition data, upload reports if you have them.",
			footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepFooter, { step: 5 }),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-x-[26px] gap-y-[16px] sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Muscle Mass",
						htmlFor: "muscle-mass",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitInput, {
							id: "muscle-mass",
							inputMode: "decimal",
							placeholder: "e.g. 32",
							value: muscle.muscleMass,
							onChange: (e) => set({ muscleMass: numericOnly(e.target.value) }),
							unit: "kg"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Bone Density (T-score)",
						labelId: "bone-label",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipGroup, {
							labelledBy: "bone-label",
							options: BONE_OPTIONS,
							value: muscle.boneDensity,
							onChange: (boneDensity) => set({ boneDensity })
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					className: "mt-[15px]",
					label: "EMG recording / report",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UploadDrop, {
						title: "Upload EMG waveform or report",
						fileName: muscle.emgFile,
						onFile: (emgFile) => set({ emgFile })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					className: "mt-[15px]",
					label: "Bone density scan (DEXA)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UploadDrop, {
						title: "Upload DEXA scan",
						fileName: muscle.dexaFile,
						onFile: (dexaFile) => set({ dexaFile })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					className: "mt-[15px]",
					label: "EMG muscle group",
					hint: "(where the EMG was taken)",
					labelId: "emg-group-label",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipGroup, {
						labelledBy: "emg-group-label",
						options: EMG_GROUPS,
						value: muscle.emgGroup,
						onChange: (emgGroup) => set({ emgGroup })
					})
				})
			]
		})
	});
}
//#endregion
export { MuscleBonePage as component };
