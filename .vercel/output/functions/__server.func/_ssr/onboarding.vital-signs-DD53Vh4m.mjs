import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useOnboardingSection } from "./onboarding-store-DD2TJWml.mjs";
import { i as numericOnly } from "./logic-DE2PGe21.mjs";
import { c as StepFooter, i as FieldLabel, l as UnitInput, o as OnboardingScene, r as Field, s as StepCard, t as CheckRow } from "./StepFooter-BYDPCBJp.mjs";
import { t as WhyWeAsk } from "./WhyWeAsk-B1F1jcCI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/onboarding.vital-signs-DD53Vh4m.js
var import_jsx_runtime = require_jsx_runtime();
var pulse_oximeter_jpg_asset_default = {
	version: 1,
	asset_id: "0d48618d-9d68-422f-86b1-5f0e077bd7e5",
	project_id: "09e03356-c2f6-4b3d-90a0-8ea0923dde37",
	url: "/__l5e/assets-v1/0d48618d-9d68-422f-86b1-5f0e077bd7e5/pulse-oximeter.jpg",
	r2_key: "a/v1/09e03356-c2f6-4b3d-90a0-8ea0923dde37/0d48618d-9d68-422f-86b1-5f0e077bd7e5/pulse-oximeter.jpg",
	original_filename: "pulse-oximeter.jpg",
	size: 124810,
	content_type: "image/jpeg",
	created_at: "2026-11-13T17:04:23Z"
};
var rangeOnly = (v) => v.replace(/[^\d.\-–]/g, "");
function VitalSignsPage() {
	const [vitals, set] = useOnboardingSection("vitals");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OnboardingScene, {
		step: 3,
		aside: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WhyWeAsk, {
			image: pulse_oximeter_jpg_asset_default.url,
			imageAlt: "Astronaut glove wearing a pulse oximeter reading 98%",
			children: [
				"Blood pressure, respiratory rate and SpO",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
				" are early indicators of stress, altitude and oxygen changes during missions."
			]
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StepCard, {
			title: "Vital",
			accent: "Signs",
			subtitle: "Enter your latest readings. Not sure? Tick “I don’t know”.",
			footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepFooter, { step: 3 }),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					hint: "(mmHg)",
					id: "bp-label",
					children: "Blood Pressure"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "group",
					"aria-labelledby": "bp-label",
					className: "mt-[6px] grid grid-cols-1 gap-x-[26px] gap-y-[14px] sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Systolic (top)",
						htmlFor: "systolic",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitInput, {
							id: "systolic",
							inputMode: "numeric",
							placeholder: "120",
							maxLength: 3,
							disabled: vitals.bpUnknown,
							value: vitals.systolic,
							onChange: (e) => set({ systolic: numericOnly(e.target.value).replace(".", "") }),
							unit: "mmHg"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Diastolic (bottom)",
						htmlFor: "diastolic",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitInput, {
							id: "diastolic",
							inputMode: "numeric",
							placeholder: "80",
							maxLength: 3,
							disabled: vitals.bpUnknown,
							value: vitals.diastolic,
							onChange: (e) => set({ diastolic: numericOnly(e.target.value).replace(".", "") }),
							unit: "mmHg"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
					className: "mt-[12px]",
					checked: vitals.bpUnknown,
					onChange: (bpUnknown) => set({ bpUnknown }),
					children: "I don’t know my blood pressure"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-[18px] grid grid-cols-1 gap-x-[26px] gap-y-[14px] sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Respiratory Rate",
						htmlFor: "respiratory-rate",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitInput, {
							id: "respiratory-rate",
							inputMode: "decimal",
							placeholder: "12–20",
							value: vitals.respiratoryRate,
							onChange: (e) => set({ respiratoryRate: rangeOnly(e.target.value) }),
							unit: "breaths/min"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"SpO",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
							" (blood oxygen)"
						] }),
						htmlFor: "spo2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitInput, {
							id: "spo2",
							inputMode: "decimal",
							placeholder: "95–100",
							value: vitals.spo2,
							onChange: (e) => set({ spo2: rangeOnly(e.target.value) }),
							unit: "%"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
					className: "mt-[20px]",
					checked: vitals.measuredWithDevice,
					onChange: (measuredWithDevice) => set({ measuredWithDevice }),
					children: "Measured with a pulse oximeter / wearable"
				})
			]
		})
	});
}
//#endregion
export { VitalSignsPage as component };
