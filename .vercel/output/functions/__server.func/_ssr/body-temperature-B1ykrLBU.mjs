import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { Q as ChartColumn, l as Thermometer, lt as ArrowUp, pt as ArrowDown, ut as ArrowUpDown } from "../_libs/lucide-react.mjs";
import { t as DashboardShell } from "./DashboardShell-BARGy80N.mjs";
import { a as Area, i as XAxis, l as ResponsiveContainer, r as YAxis, s as CartesianGrid, t as AreaChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/body-temperature-B1ykrLBU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TEMPERATURE_MAJOR_TICKS = [
	"00:00",
	"06:00",
	"12:00",
	"18:00",
	"24:00"
];
var TEMPERATURE_Y_TICKS = [
	35.5,
	36,
	36.5,
	37,
	37.5,
	38
];
var TEMPERATURE_DOMAIN = {
	min: 35.5,
	max: 38
};
var TEMPERATURE_NORMAL_RANGE = {
	min: 36.1,
	max: 37.2
};
var INITIAL_BODY_TEMPERATURE = 36.6;
var INITIAL_TEMPERATURE_DELTA = .1;
var TEMPERATURE_24H_SERIES = [
	{
		time: "00:00",
		temp: 36.2
	},
	{
		time: "01:00",
		temp: 36.3
	},
	{
		time: "02:00",
		temp: 36.4
	},
	{
		time: "03:00",
		temp: 36
	},
	{
		time: "04:00",
		temp: 35.8
	},
	{
		time: "05:00",
		temp: 36.1
	},
	{
		time: "06:00",
		temp: 36.2
	},
	{
		time: "07:00",
		temp: 36.5
	},
	{
		time: "08:00",
		temp: 36.9
	},
	{
		time: "09:00",
		temp: 36.8
	},
	{
		time: "10:00",
		temp: 36.5
	},
	{
		time: "11:00",
		temp: 36.3
	},
	{
		time: "12:00",
		temp: 36.2
	},
	{
		time: "13:00",
		temp: 36.3
	},
	{
		time: "14:00",
		temp: 36.5
	},
	{
		time: "15:00",
		temp: 36.5
	},
	{
		time: "16:00",
		temp: 36.3
	},
	{
		time: "17:00",
		temp: 36.5
	},
	{
		time: "18:00",
		temp: 37
	},
	{
		time: "19:00",
		temp: 36.4
	},
	{
		time: "20:00",
		temp: 36.2
	},
	{
		time: "21:00",
		temp: 36.4
	},
	{
		time: "22:00",
		temp: 37.1
	},
	{
		time: "23:00",
		temp: 36.5
	},
	{
		time: "24:00",
		temp: 36.4
	}
];
function computeTemperatureStats(series) {
	if (series.length === 0) return {
		average: 0,
		max: 0,
		min: 0
	};
	let sum = 0;
	let max = -Infinity;
	let min = Infinity;
	for (const pt of series) {
		sum += pt.temp;
		if (pt.temp > max) max = pt.temp;
		if (pt.temp < min) min = pt.temp;
	}
	return {
		average: Math.round(sum / series.length * 10) / 10,
		max: Math.round(max * 10) / 10,
		min: Math.round(min * 10) / 10
	};
}
function evaluateTemperatureStatus(temp, range = TEMPERATURE_NORMAL_RANGE) {
	if (temp >= range.min && temp <= range.max) return "normal";
	if (temp > 38) return "critical";
	return "amber";
}
/** Progress ring fill fraction inside the 35.5°C – 38.0°C display range. */
function temperatureRingFraction(temp) {
	const span = TEMPERATURE_DOMAIN.max - TEMPERATURE_DOMAIN.min;
	const normalized = (temp - TEMPERATURE_DOMAIN.min) / span;
	return Math.min(1, Math.max(.06, normalized));
}
/** Generates a small simulated variation within 36.4°C – 36.8°C. */
function nextSimulatedTemperature(prev) {
	const steps = [
		-.1,
		0,
		.1
	];
	const pick = steps[Math.floor(Math.random() * steps.length)] ?? 0;
	const candidate = Math.round((prev + pick) * 10) / 10;
	if (candidate < 36.4) return 36.5;
	if (candidate > 36.8) return 36.7;
	return candidate;
}
function TemperatureTooltip({ active, payload, label }) {
	if (!active || !payload?.length) return null;
	const temp = payload[0]?.value;
	if (temp === void 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[12px] border border-dash-cyan/70 bg-[oklch(0.2_0.09_262_/_94%)] px-[12px] py-[8px] shadow-[0_0_18px_oklch(0.8_0.135_228_/_40%)] backdrop-blur-[10px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-[12px] font-medium text-dash-muted",
			children: [label, " UTC · Demo"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-[2px] text-[16px] font-bold tabular-nums text-foreground",
			children: [
				temp.toFixed(1),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[13px] font-medium text-dash-cyan",
					children: "°C"
				})
			]
		})]
	});
}
/** 24-hour Recharts Body Temperature area/line chart (Y: 35.5–38.0°C, X: 00:00–24:00). */
function TemperatureTrendChart({ data }) {
	const chartData = [...data];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-[280px] w-full min-w-0 sm:h-[320px] lg:h-full lg:min-h-[280px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			minHeight: 260,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data: chartData,
				margin: {
					top: 14,
					right: 20,
					left: 4,
					bottom: 6
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "tempAreaGradient",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "#00e5ff",
							stopOpacity: .34
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "#00e5ff",
							stopOpacity: .02
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
						id: "tempLineGlow",
						x: "-10%",
						y: "-30%",
						width: "120%",
						height: "160%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
							dx: "0",
							dy: "0",
							stdDeviation: "4.5",
							floodColor: "#00e5ff"
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: "rgba(120, 195, 255, 0.16)",
						vertical: true,
						horizontal: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "time",
						ticks: TEMPERATURE_MAJOR_TICKS,
						stroke: "rgba(160, 210, 255, 0.35)",
						tick: {
							fill: "#e6f2ff",
							fontSize: 14.5,
							fontWeight: 500
						},
						tickLine: { stroke: "rgba(160, 210, 255, 0.35)" },
						tickMargin: 10
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						domain: [TEMPERATURE_DOMAIN.min, TEMPERATURE_DOMAIN.max],
						ticks: TEMPERATURE_Y_TICKS,
						tickFormatter: (v) => v.toFixed(1),
						stroke: "rgba(160, 210, 255, 0.35)",
						tick: {
							fill: "#e6f2ff",
							fontSize: 15,
							fontWeight: 500
						},
						tickLine: { stroke: "rgba(160, 210, 255, 0.35)" },
						width: 48
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemperatureTooltip, {}),
						cursor: {
							stroke: "rgba(0, 229, 255, 0.45)",
							strokeWidth: 1.5
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "temp",
						stroke: "#1fe3ff",
						strokeWidth: 3,
						fill: "url(#tempAreaGradient)",
						filter: "url(#tempLineGlow)",
						dot: {
							r: 4.5,
							fill: "#9ff7ff",
							stroke: "#00d4ff",
							strokeWidth: 2
						},
						activeDot: {
							r: 7,
							fill: "#ffffff",
							stroke: "#00e5ff",
							strokeWidth: 2.5
						}
					})
				]
			})
		})
	});
}
/** Circular glowing thermometer icon badge shown on the top-right of the Body Temperature header. */
function BodyTemperatureHeaderBadge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-label": "Body Temperature Telemetry",
		className: "dash-ring flex size-[54px] shrink-0 items-center justify-center bg-[radial-gradient(circle_at_50%_35%,oklch(0.45_0.16_248)_0%,oklch(0.22_0.1_264)_78%)] lg:size-[68px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thermometer, {
			className: "size-[28px] text-dash-ice drop-shadow-[0_0_10px_var(--dash-cyan)] lg:size-[36px]",
			strokeWidth: 2.1
		})
	});
}
/**
* Body Temperature monitoring page: 3 responsive top summary cards (with live 3s simulation,
* progress ring & status color coding) and a fluid 24-hour Temperature Trend Recharts area/line panel.
*/
function BodyTemperature() {
	const [temp, setTemp] = (0, import_react.useState)(INITIAL_BODY_TEMPERATURE);
	const [delta, setDelta] = (0, import_react.useState)(INITIAL_TEMPERATURE_DELTA);
	const stats = (0, import_react.useMemo)(() => computeTemperatureStats(TEMPERATURE_24H_SERIES), []);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			setTemp((prev) => {
				const next = nextSimulatedTemperature(prev);
				setDelta(Math.round((next - prev) * 10) / 10);
				return next;
			});
		}, 3e3);
		return () => window.clearInterval(id);
	}, []);
	const statusTone = evaluateTemperatureStatus(temp);
	const fraction = temperatureRingFraction(temp);
	const ringSize = 118;
	const ringStroke = 7;
	const radius = 111 / 2;
	const circumference = 2 * Math.PI * radius;
	const arcStrokeClass = statusTone === "normal" ? "stroke-dash-cyan drop-shadow-[0_0_8px_var(--dash-cyan)]" : statusTone === "amber" ? "stroke-dash-amber drop-shadow-[0_0_8px_var(--dash-amber)]" : "stroke-coral drop-shadow-[0_0_8px_var(--coral)]";
	const haloBorderClass = statusTone === "normal" ? "border-dash-cyan/55 shadow-[0_0_24px_oklch(0.8_0.135_228_/_55%)]" : statusTone === "amber" ? "border-dash-amber/60 shadow-[0_0_24px_oklch(0.84_0.15_78_/_55%)]" : "border-coral/65 shadow-[0_0_24px_oklch(0.7_0.18_29_/_55%)]";
	const valueColorClass = statusTone === "normal" ? "text-foreground" : statusTone === "amber" ? "text-dash-amber" : "text-coral";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-1 flex-col gap-[20px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-[16px] md:grid-cols-3 xl:grid-cols-[1.22fr_1fr_1fr] xl:gap-[20px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dash-card flex min-h-[176px] items-center rounded-[20px] px-[20px] py-[18px] sm:px-[22px] duration-500 animate-in fade-in slide-in-from-bottom-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex shrink-0 items-center justify-center",
						style: {
							width: ringSize,
							height: ringSize
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: cn("pointer-events-none absolute inset-[2px] animate-pulse rounded-full border bg-[radial-gradient(circle_at_50%_35%,oklch(0.42_0.15_248)_0%,oklch(0.21_0.1_264)_80%)]", haloBorderClass)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								width: ringSize,
								height: ringSize,
								className: "relative z-10 -rotate-90",
								role: "img",
								"aria-label": `Temperature range progress for ${temp.toFixed(1)} °C`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: ringSize / 2,
									cy: ringSize / 2,
									r: radius,
									fill: "none",
									strokeWidth: ringStroke,
									className: "stroke-dash-track"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: ringSize / 2,
									cy: ringSize / 2,
									r: radius,
									fill: "none",
									strokeWidth: ringStroke,
									strokeLinecap: "round",
									strokeDasharray: `${circumference * fraction} ${circumference}`,
									className: cn("transition-[stroke-dasharray] duration-700", arcStrokeClass)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thermometer, {
								className: "pointer-events-none absolute z-20 size-[48px] text-dash-ice drop-shadow-[0_0_14px_var(--dash-cyan)]",
								strokeWidth: 2
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-[18px] flex min-w-0 flex-1 flex-col items-start sm:ml-[22px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[16px] leading-[21px] font-medium text-foreground sm:text-[17px]",
								children: "Current Temperature"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-[6px] flex items-baseline whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("text-[42px] leading-[46px] font-bold tabular-nums sm:text-[48px] sm:leading-[52px]", valueColorClass),
									children: temp.toFixed(1)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-[2px] text-[26px] font-semibold text-foreground sm:text-[30px]",
									children: "°C"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("mt-[8px] inline-flex items-center gap-[5px] rounded-full border px-[14px] py-[4px] text-[14.5px] leading-[18px] font-semibold tabular-nums", delta > 0 ? "border-dash-green/40 bg-dash-green/20 text-dash-green" : delta < 0 ? "border-dash-amber/40 bg-dash-amber/20 text-dash-amber" : "border-dash-ice/30 bg-dash-ice/14 text-dash-ice"),
								children: delta > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
									className: "size-[15px]",
									strokeWidth: 2.8
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"+",
									delta.toFixed(1),
									"°C"
								] })] }) : delta < 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
									className: "size-[15px]",
									strokeWidth: 2.8
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [delta.toFixed(1), "°C"] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Stable" })
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dash-card flex min-h-[176px] items-center justify-center gap-[18px] rounded-[20px] px-[20px] py-[18px] sm:gap-[22px] duration-500 animate-in fade-in slide-in-from-bottom-3 [animation-delay:75ms]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
						className: "size-[46px] shrink-0 text-dash-cyan drop-shadow-[0_0_12px_var(--dash-cyan)] sm:size-[52px]",
						strokeWidth: 2.2
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[16.5px] leading-[22px] font-medium text-dash-ice/90",
							children: "Average Temperature"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-[8px] flex items-baseline whitespace-nowrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[40px] leading-[44px] font-bold tabular-nums text-foreground sm:text-[46px] sm:leading-[50px]",
								children: stats.average.toFixed(1)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-[2px] text-[24px] font-semibold text-foreground sm:text-[28px]",
								children: "°C"
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dash-card flex min-h-[176px] items-center justify-center gap-[18px] rounded-[20px] px-[20px] py-[18px] sm:gap-[20px] duration-500 animate-in fade-in slide-in-from-bottom-3 [animation-delay:150ms]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, {
						className: "size-[44px] shrink-0 text-dash-cyan drop-shadow-[0_0_12px_var(--dash-cyan)] sm:size-[48px]",
						strokeWidth: 2.2
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[16.5px] leading-[22px] font-medium text-dash-ice/90",
							children: "Max / Min Temperature"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-[8px] flex items-baseline whitespace-nowrap text-[30px] leading-[38px] font-bold tabular-nums text-foreground sm:text-[36px] sm:leading-[44px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: stats.max.toFixed(1) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[20px] font-semibold sm:text-[24px]",
									children: "°C"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-[6px] font-normal text-dash-ice/80 sm:mx-[8px]",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: stats.min.toFixed(1) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[20px] font-semibold sm:text-[24px]",
									children: "°C"
								})
							]
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			"aria-label": "Temperature Trend",
			className: "dash-card flex min-h-[360px] flex-1 flex-col rounded-[20px] px-[18px] py-[18px] sm:px-[26px] duration-500 animate-in fade-in slide-in-from-bottom-3 [animation-delay:225ms]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-[12px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-[12px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thermometer, {
						className: "size-[26px] text-dash-cyan drop-shadow-[0_0_8px_var(--dash-cyan)] sm:size-[28px]",
						strokeWidth: 2.2
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[20px] leading-[26px] font-bold text-foreground sm:text-[22px]",
						children: "Temperature Trend"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-[10px] text-[15px] font-medium text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "size-[12px] rounded-full bg-dash-cyan shadow-[0_0_10px_var(--dash-cyan)]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Temperature (°C)" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-[14px] flex min-h-[290px] flex-1 flex-col rounded-[18px] border border-dash-cyan/25 bg-[oklch(0.19_0.08_263_/_52%)] px-[10px] pt-[12px] pb-[8px] shadow-[inset_0_0_24px_oklch(0.24_0.1_260_/_50%)] sm:px-[14px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemperatureTrendChart, { data: TEMPERATURE_24H_SERIES })
				})
			})]
		})]
	});
}
function BodyTemperatureRoutePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardShell, {
		headerTitle: "Body Temperature",
		headerRight: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyTemperatureHeaderBadge, {}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyTemperature, {})
	});
}
//#endregion
export { BodyTemperatureRoutePage as component };
