import "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { i as HEALTH_TREND_TICKS } from "./health-BbPFK9c3.mjs";
import { i as XAxis, l as ResponsiveContainer, n as LineChart, o as Line, r as YAxis, s as CartesianGrid, u as Tooltip } from "../_libs/recharts+[...].mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
/** Circular gauge; `fraction` null draws an empty ring. */
function RingGauge({ size, stroke, fraction, children, label }) {
	const r = (size - stroke) / 2;
	const c = 2 * Math.PI * r;
	const f = fraction === null ? 0 : Math.min(1, Math.max(0, fraction));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative shrink-0",
		style: {
			width: size,
			height: size
		},
		role: "img",
		"aria-label": label,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			className: "-rotate-90",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				fill: "none",
				strokeWidth: stroke,
				className: "stroke-dash-track"
			}), fraction !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				fill: "none",
				strokeWidth: stroke,
				strokeLinecap: "round",
				strokeDasharray: `${c * f} ${c}`,
				className: "stroke-dash-cyan drop-shadow-[0_0_6px_var(--dash-cyan)] transition-[stroke-dasharray] duration-700"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 flex items-center justify-center",
			children
		})]
	});
}
/** Seven glowing cyan-blue gradient vertical bars (Mon–Sun) matching the Activity card. */
function WeeklyActivityBars({ bars, height, className }) {
	const maxHours = Math.max(1, ...bars.map((b) => b.hours));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex items-end justify-between gap-[10px]", className),
		children: bars.map((b) => {
			const barH = Math.max(18, Math.round(b.hours / maxHours * height));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				title: `${b.day}: ${b.hours.toFixed(1)} h`,
				className: "flex flex-1 flex-col items-center gap-[5px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-full items-end justify-center",
					style: { height },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "w-full max-w-[28px] rounded-t-[6px] rounded-b-[2px] bg-[linear-gradient(180deg,#a6f7ff_0%,#42d4ff_42%,#2478e8_100%)] shadow-[0_0_12px_oklch(0.75_0.16_230_/_45%)] transition-all duration-300",
						style: { height: barH }
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[13px] leading-[16px] text-foreground/90",
					children: b.day
				})]
			}, b.day);
		})
	});
}
function HealthTrendsTooltip({ active, payload, label }) {
	if (!active || !payload?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[12px] border border-dash-cyan/60 bg-[oklch(0.2_0.09_262_/_94%)] px-[12px] py-[8px] shadow-[0_0_18px_oklch(0.8_0.135_228_/_35%)] backdrop-blur-[10px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-[12px] font-medium text-dash-muted",
			children: [label, " UTC"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-[4px] flex flex-col gap-[2px]",
			children: payload.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-[8px] text-[13.5px] font-semibold text-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-[8px] rounded-full",
						style: { backgroundColor: entry.color ?? "#38bdf8" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-dash-ice/90",
						children: [entry.name, ":"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: entry.value
					})
				]
			}, entry.name))
		})]
	});
}
/** Smooth 3-series 24-hour Recharts line graph matching the Health Trends panel. */
function LiveHealthTrendsChart({ data, height, visible, className }) {
	const chartData = [...data];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("w-full min-w-0", !height && "h-full min-h-[210px]", className),
		style: height ? { height } : void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			minHeight: height ?? 210,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data: chartData,
				margin: {
					top: 10,
					right: 14,
					left: -12,
					bottom: 2
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
						id: "dashTrendGlow",
						x: "-10%",
						y: "-30%",
						width: "120%",
						height: "160%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
							dx: "0",
							dy: "0",
							stdDeviation: "3",
							floodColor: "#38bdf8",
							floodOpacity: "0.6"
						})
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: "rgba(130, 195, 255, 0.14)",
						vertical: true,
						horizontal: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "time",
						ticks: HEALTH_TREND_TICKS,
						stroke: "rgba(160, 210, 255, 0.25)",
						tick: {
							fill: "#e6f2ff",
							fontSize: 14,
							fontWeight: 500
						},
						tickLine: false,
						axisLine: { stroke: "rgba(160, 210, 255, 0.25)" },
						tickMargin: 8
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						domain: [40, 100],
						ticks: [
							40,
							60,
							80,
							100
						],
						stroke: "rgba(160, 210, 255, 0.25)",
						tick: {
							fill: "#e6f2ff",
							fontSize: 14,
							fontWeight: 500
						},
						tickLine: false,
						axisLine: false,
						width: 44
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HealthTrendsTooltip, {}),
						cursor: {
							stroke: "rgba(0, 229, 255, 0.35)",
							strokeWidth: 1.5
						}
					}),
					visible.hr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "hr",
						name: "Heart Rate",
						stroke: "#338dff",
						strokeWidth: 2.75,
						filter: "url(#dashTrendGlow)",
						dot: {
							r: 3.5,
							fill: "#70b4ff",
							stroke: "#338dff",
							strokeWidth: 1.5
						},
						activeDot: {
							r: 5.5,
							fill: "#ffffff",
							stroke: "#338dff",
							strokeWidth: 2
						},
						isAnimationActive: false
					}),
					visible.spo2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "spo2",
						name: "SpO₂",
						stroke: "#3ce8ff",
						strokeWidth: 2.75,
						filter: "url(#dashTrendGlow)",
						dot: {
							r: 3.5,
							fill: "#a6f9ff",
							stroke: "#3ce8ff",
							strokeWidth: 1.5
						},
						activeDot: {
							r: 5.5,
							fill: "#ffffff",
							stroke: "#3ce8ff",
							strokeWidth: 2
						},
						isAnimationActive: false
					}),
					visible.activity && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "activity",
						name: "Activity",
						stroke: "#eb3ec8",
						strokeWidth: 2.75,
						dot: {
							r: 3.5,
							fill: "#ff8ae6",
							stroke: "#eb3ec8",
							strokeWidth: 1.5
						},
						activeDot: {
							r: 5.5,
							fill: "#ffffff",
							stroke: "#eb3ec8",
							strokeWidth: 2
						},
						isAnimationActive: false
					})
				]
			})
		})
	});
}
//#endregion
export { RingGauge as n, WeeklyActivityBars as r, LiveHealthTrendsChart as t };
