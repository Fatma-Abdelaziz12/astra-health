import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useOnboarding } from "./onboarding-store-DD2TJWml.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as LungsIcon } from "./icons-Bx_FMJzK.mjs";
import { _ as parseReading } from "./health-BbPFK9c3.mjs";
import { F as Gauge, N as HeartPulse, V as Droplet, dt as ArrowRight, l as Thermometer, st as BatteryMedium, x as Pencil } from "../_libs/lucide-react.mjs";
import { c as SourceTag, i as DashCard, o as PageHeader, r as DASH_GHOST, s as RangeBar, t as CardHeading } from "./ui-CjvZ4TQA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.vital-signs-MUNibmTl.js
var import_jsx_runtime = require_jsx_runtime();
function VitalSignsPage() {
	const { data } = useOnboarding();
	const { vitals, heart } = data;
	const bp = vitals.systolic.trim() && vitals.diastolic.trim();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-col gap-[20px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Vital Signs",
				subtitle: "Baseline vitals saved in your mission profile alongside quick links to dedicated telemetry monitors.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/onboarding/vital-signs",
					className: DASH_GHOST,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-[16px]" }), "Update vital signs"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-[18px] md:grid-cols-2 2xl:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(VitalCard, {
						icon: Gauge,
						title: "Blood Pressure",
						state: bp ? "entered" : "missing",
						value: bp ? `${vitals.systolic} / ${vitals.diastolic}` : vitals.bpUnknown ? "Unknown" : null,
						unit: "mmHg",
						note: vitals.bpUnknown && !bp ? "You said you don't know your blood pressure." : void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeBar, {
							min: 80,
							max: 180,
							low: 90,
							high: 120,
							value: parseReading(vitals.systolic),
							caption: "Systolic · typical adult 90–120"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-[12px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeBar, {
								min: 50,
								max: 110,
								low: 60,
								high: 80,
								value: parseReading(vitals.diastolic),
								caption: "Diastolic · typical adult 60–80"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitalCard, {
						icon: HeartPulse,
						title: "Resting Heart Rate",
						state: heart.restingHr.trim() ? "entered" : "missing",
						value: heart.restingHr.trim() || null,
						unit: "bpm",
						editTo: "/onboarding/heart-recovery",
						monitorTo: "/heart-rate",
						monitorLabel: "Open Heart Rate Monitor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeBar, {
							min: 40,
							max: 120,
							low: 60,
							high: 100,
							value: parseReading(heart.restingHr),
							caption: "Typical adult resting 60–100"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitalCard, {
						icon: Droplet,
						title: "SpO₂ (blood oxygen)",
						state: vitals.spo2.trim() ? "entered" : "missing",
						value: vitals.spo2.trim() || null,
						unit: "%",
						monitorTo: "/dashboard/oxygen-monitoring",
						monitorLabel: "Open Oxygen Monitor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeBar, {
							min: 85,
							max: 100,
							low: 95,
							high: 100,
							value: parseReading(vitals.spo2),
							caption: "Typical 95–100"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitalCard, {
						icon: LungsIcon,
						title: "Breathing Rate",
						state: vitals.respiratoryRate.trim() ? "entered" : "missing",
						value: vitals.respiratoryRate.trim() || null,
						unit: "br/min",
						monitorTo: "/respiratory",
						monitorLabel: "Open Respiratory Monitor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeBar, {
							min: 8,
							max: 28,
							low: 12,
							high: 20,
							value: parseReading(vitals.respiratoryRate),
							caption: "Typical adult resting 12–20"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitalCard, {
						icon: Thermometer,
						title: "Body Temperature",
						state: "no-sensor",
						value: null,
						unit: "°C",
						monitorTo: "/body-temperature",
						monitorLabel: "Open Temperature Telemetry",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeBar, {
							min: 35,
							max: 39,
							low: 36.1,
							high: 37.2,
							value: null,
							caption: "Typical 36.1–37.2 °C"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitalCard, {
						icon: BatteryMedium,
						title: "Energy Readiness",
						state: "no-sensor",
						value: null,
						unit: "%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[14px] leading-[20px] text-dash-muted",
							children: "Energy readiness combines heart rate variability, sleep recovery, and daily activity. Connect a wearable sensor for live tracking."
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashCard, {
				className: "px-[22px] py-[18px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[15px] leading-[22px] text-dash-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-foreground",
							children: "How these were measured: "
						}),
						vitals.measuredWithDevice ? "recorded using a pulse oximeter or wearable device." : "self-reported baseline (no active wearable device selected).",
						" ",
						"Reference ranges are general adult resting values for orientation only and do not constitute medical diagnosis."
					]
				})
			})
		]
	});
}
function VitalCard({ icon: IconCmp, title, state, value, unit, note, editTo = "/onboarding/vital-signs", monitorTo, monitorLabel, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
		className: "flex flex-col px-[22px] pt-[18px] pb-[20px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
				icon: IconCmp,
				title,
				right: state === "no-sensor" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceTag, { state: "no-sensor" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: editTo,
					className: "text-[14px] text-dash-cyan underline-offset-4 hover:underline",
					children: state === "missing" ? "Add" : "Edit"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-[12px] flex items-baseline gap-[6px]",
				children: state === "no-sensor" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[28px] font-bold text-dash-muted",
					children: "No sensor"
				}) : value ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[36px] leading-[42px] font-bold tabular-nums text-foreground sm:text-[40px] sm:leading-[46px]",
					children: value
				}), value !== "Unknown" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[18px] text-foreground",
					children: unit
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[28px] leading-[44px] font-bold text-dash-amber",
					children: "Not entered"
				})
			}),
			state !== "no-sensor" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mb-[14px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceTag, { state }), note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-[8px] text-[13.5px] text-dash-muted",
					children: note
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-auto pt-[6px]",
				children
			}),
			monitorTo && monitorLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: monitorTo,
				className: "mt-[14px] inline-flex items-center gap-[6px] border-t border-dash-line pt-[12px] text-[14px] font-medium text-dash-cyan transition-colors hover:text-dash-ice",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: monitorLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-[15px]" })]
			})
		]
	});
}
//#endregion
export { VitalSignsPage as component };
