import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useOnboarding } from "./onboarding-store-DD2TJWml.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as parseReading, b as reportedSleep, n as CONDITION_LABEL, o as SEX_LABEL, r as EMG_LABEL, t as BONE_LABEL, u as bmi, v as profileCompleteness, y as reportedHydration } from "./health-BbPFK9c3.mjs";
import { N as HeartPulse, U as ClipboardCheck, i as UserCheck, mt as Activity, p as ShieldCheck, x as Pencil } from "../_libs/lucide-react.mjs";
import { n as RingGauge } from "./charts-DBtPem6L.mjs";
import { a as InfoRow, i as DashCard, o as PageHeader, r as DASH_GHOST, s as RangeBar, t as CardHeading } from "./ui-CjvZ4TQA.mjs";
import { t as useAccountName } from "./use-account-name-Ci6-Qn6E.mjs";
import { r as computeHealthScore } from "./profileData-D2dIui5F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.analytics-BFNzLr1j.js
var import_jsx_runtime = require_jsx_runtime();
function AnalyticsPage() {
	const { account: signedIn } = useAccountName();
	const { data } = useOnboarding();
	const { account, basic, vitals, heart, muscle } = data;
	const completeness = profileCompleteness(data);
	const completionPct = Math.round(completeness.filled / completeness.total * 100);
	const healthScore = computeHealthScore(data);
	const bmiValue = bmi(basic);
	const sleep = reportedSleep(data);
	const hydration = reportedHydration(data);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-col gap-[20px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Health Analytics",
				subtitle: "Biometric evaluation computed from your Astra Health onboarding profile and telemetry baselines.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/onboarding/basic-info",
					className: DASH_GHOST,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-[16px]" }), "Edit Health Profile"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-[18px] md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
						className: "flex items-center justify-between gap-[16px] p-[22px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
									icon: ShieldCheck,
									title: "Readiness Score"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-[12px] text-[36px] leading-[40px] font-bold tabular-nums text-foreground",
									children: [healthScore, "%"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-[4px] text-[13.5px] text-dash-muted",
									children: "Composite score from vitals & rest"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RingGauge, {
							size: 88,
							stroke: 9,
							fraction: healthScore / 100,
							label: `Readiness ${healthScore}%`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[16px] font-bold tabular-nums text-foreground",
								children: [healthScore, "%"]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
						className: "flex items-center justify-between gap-[16px] p-[22px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
									icon: ClipboardCheck,
									title: "Profile Setup"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-[12px] text-[36px] leading-[40px] font-bold tabular-nums text-foreground",
									children: [
										completeness.filled,
										"/",
										completeness.total
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-[4px] text-[13.5px] text-dash-muted",
									children: [completionPct, "% of baseline fields saved"]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RingGauge, {
							size: 88,
							stroke: 9,
							fraction: completeness.filled / completeness.total,
							label: `Profile completion ${completionPct}%`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[16px] font-bold tabular-nums text-foreground",
								children: [completionPct, "%"]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
						className: "flex items-center justify-between gap-[16px] p-[22px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
									icon: UserCheck,
									title: "Body Mass Index"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-[12px] text-[36px] leading-[40px] font-bold tabular-nums text-foreground",
									children: bmiValue ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-[4px] text-[13.5px] text-dash-muted",
									children: bmiValue ? "Derived from height & weight" : "Add height & weight to compute"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RingGauge, {
							size: 88,
							stroke: 9,
							fraction: bmiValue ? Math.min(1, bmiValue / 35) : null,
							label: bmiValue ? `BMI ${bmiValue}` : "BMI not computed",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[14px] font-bold text-dash-ice",
								children: "BMI"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-[20px] xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
					className: "flex flex-col gap-[18px] p-[22px] sm:p-[24px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
						icon: Activity,
						title: "Physiological Reference Ranges"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-[18px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-[6px] flex items-center justify-between text-[14.5px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: "Body Mass Index (BMI)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-dash-ice",
									children: bmiValue ? `${bmiValue} kg/m²` : "Not entered"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeBar, {
								min: 15,
								max: 35,
								low: 18.5,
								high: 24.9,
								value: bmiValue,
								caption: "Healthy range 18.5–24.9"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-[6px] flex items-center justify-between text-[14.5px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: "Resting Heart Rate"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-dash-ice",
									children: heart.restingHr.trim() ? `${heart.restingHr} bpm` : "Not entered"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeBar, {
								min: 40,
								max: 120,
								low: 60,
								high: 100,
								value: parseReading(heart.restingHr),
								caption: "Resting adult range 60–100 bpm"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-[6px] flex items-center justify-between text-[14.5px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: "SpO₂ Blood Oxygen"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-dash-ice",
									children: vitals.spo2.trim() ? `${vitals.spo2}%` : "Not entered"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeBar, {
								min: 85,
								max: 100,
								low: 95,
								high: 100,
								value: parseReading(vitals.spo2),
								caption: "Target orbital range 95–100%"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-[6px] flex items-center justify-between text-[14.5px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: "Respiratory Rate"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-dash-ice",
									children: vitals.respiratoryRate.trim() ? `${vitals.respiratoryRate} br/min` : "Not entered"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeBar, {
								min: 8,
								max: 28,
								low: 12,
								high: 20,
								value: parseReading(vitals.respiratoryRate),
								caption: "Resting range 12–20 br/min"
							})] })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
					className: "flex flex-col p-[22px] sm:p-[24px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
						icon: HeartPulse,
						title: "Astronaut Biometric Profile"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-[10px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								label: "Crew Member",
								value: signedIn?.fullName || account.fullName.trim() || "Astronaut"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								label: "Astronaut ID",
								value: account.astronautId.trim() || signedIn?.astronautId || "Not assigned"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								label: "Age",
								value: basic.age.trim() ? `${basic.age} years` : "Not entered"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								label: "Sex (assigned at birth)",
								value: SEX_LABEL[basic.sex]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								label: "Height & Weight",
								value: basic.height.trim() && basic.weight.trim() ? `${basic.height} ${basic.heightUnit === "cm" ? "cm" : ""} · ${basic.weight} ${basic.weightUnit}` : "Not entered"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								label: "Sleep Window",
								value: sleep?.label ?? "7–8 h (default)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								label: "Daily Hydration",
								value: hydration ?? "2–3 L (default)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								label: "Heart Conditions",
								value: heart.conditions.map((c) => CONDITION_LABEL[c]).join(", ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
								label: "Muscle / Bone",
								value: `${muscle.muscleMass.trim() ? `${muscle.muscleMass} kg` : "—"} · ${BONE_LABEL[muscle.boneDensity]} · ${EMG_LABEL[muscle.emgGroup]}`
							})
						]
					})]
				})]
			})
		]
	});
}
//#endregion
export { AnalyticsPage as component };
