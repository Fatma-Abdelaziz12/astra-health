import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useOnboardingSection } from "./onboarding-store-DD2TJWml.mjs";
import { i as numericOnly, n as convertWeight, r as feetInchesOnly, t as convertHeight } from "./logic-DE2PGe21.mjs";
import { c as StepFooter, l as UnitInput, n as ChipGroup, o as OnboardingScene, r as Field, s as StepCard, u as UnitToggle } from "./StepFooter-BYDPCBJp.mjs";
import { t as WhyWeAsk } from "./WhyWeAsk-B1F1jcCI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/onboarding.basic-info-P78CWPnq.js
var import_jsx_runtime = require_jsx_runtime();
var body_silhouette_jpg_asset_default = {
	version: 1,
	asset_id: "d7b70a08-d320-42e4-9951-927223c060e7",
	project_id: "09e03356-c2f6-4b3d-90a0-8ea0923dde37",
	url: "/__l5e/assets-v1/d7b70a08-d320-42e4-9951-927223c060e7/body-silhouette.jpg",
	r2_key: "a/v1/09e03356-c2f6-4b3d-90a0-8ea0923dde37/d7b70a08-d320-42e4-9951-927223c060e7/body-silhouette.jpg",
	original_filename: "body-silhouette.jpg",
	size: 123966,
	content_type: "image/jpeg",
	created_at: "2026-11-13T17:04:14Z"
};
var SEX_OPTIONS = [
	{
		value: "male",
		label: "Male"
	},
	{
		value: "female",
		label: "Female"
	},
	{
		value: "other",
		label: "Other"
	}
];
var HEIGHT_UNITS = [{
	value: "cm",
	label: "cm"
}, {
	value: "ftin",
	label: "ft/in"
}];
var WEIGHT_UNITS = [{
	value: "kg",
	label: "kg"
}, {
	value: "lb",
	label: "lb"
}];
function BasicInfoPage() {
	const [basic, set] = useOnboardingSection("basic");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OnboardingScene, {
		step: 2,
		aside: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyWeAsk, {
			image: body_silhouette_jpg_asset_default.url,
			imageAlt: "Holographic body silhouette with height measurement scale",
			children: "Age, sex, height and weight set the reference ranges for every metric we track, from heart rate to bone density."
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepCard, {
			title: "Basic",
			accent: "Information",
			subtitle: "Tell us about yourself so we can personalise your baselines.",
			footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepFooter, { step: 2 }),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-x-[26px] gap-y-[16px] sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Age",
						htmlFor: "age",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitInput, {
							id: "age",
							inputMode: "numeric",
							placeholder: "e.g. 34",
							maxLength: 3,
							value: basic.age,
							onChange: (e) => set({ age: numericOnly(e.target.value).replace(".", "") }),
							unit: "years"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Sex",
						hint: "(assigned at birth)",
						labelId: "sex-label",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipGroup, {
							labelledBy: "sex-label",
							options: SEX_OPTIONS,
							value: basic.sex,
							onChange: (sex) => set({ sex })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Height",
						htmlFor: "height",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitInput, {
							id: "height",
							inputMode: basic.heightUnit === "cm" ? "decimal" : "text",
							placeholder: basic.heightUnit === "cm" ? "e.g. 175" : `e.g. 5'9"`,
							value: basic.height,
							onChange: (e) => set({ height: basic.heightUnit === "cm" ? numericOnly(e.target.value) : feetInchesOnly(e.target.value) }),
							unit: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitToggle, {
								label: "Height unit",
								options: HEIGHT_UNITS,
								value: basic.heightUnit,
								onChange: (unit) => set({
									heightUnit: unit,
									height: convertHeight(basic.height, basic.heightUnit, unit)
								})
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Weight",
						htmlFor: "weight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitInput, {
							id: "weight",
							inputMode: "decimal",
							placeholder: basic.weightUnit === "kg" ? "e.g. 70" : "e.g. 154",
							value: basic.weight,
							onChange: (e) => set({ weight: numericOnly(e.target.value) }),
							unit: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitToggle, {
								label: "Weight unit",
								options: WEIGHT_UNITS,
								value: basic.weightUnit,
								onChange: (unit) => set({
									weightUnit: unit,
									weight: convertWeight(basic.weight, basic.weightUnit, unit)
								})
							})
						})
					})
				]
			})
		})
	});
}
//#endregion
export { BasicInfoPage as component };
