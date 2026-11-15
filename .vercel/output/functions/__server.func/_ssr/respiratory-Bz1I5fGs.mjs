import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { Q as ChartColumn, lt as ArrowUp, mt as Activity, pt as ArrowDown, ut as ArrowUpDown } from "../_libs/lucide-react.mjs";
import { t as DashboardShell } from "./DashboardShell-BARGy80N.mjs";
import { a as Area, i as XAxis, l as ResponsiveContainer, r as YAxis, s as CartesianGrid, t as AreaChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/respiratory-Bz1I5fGs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RESPIRATORY_MAJOR_TICKS = [
	"00:00",
	"06:00",
	"12:00",
	"18:00",
	"24:00"
];
var RESPIRATORY_NORMAL_RANGE = {
	min: 12,
	max: 20
};
var RESPIRATORY_24H_SERIES = [
	{
		time: "00:00",
		rr: 15
	},
	{
		time: "01:00",
		rr: 15
	},
	{
		time: "02:00",
		rr: 16
	},
	{
		time: "03:00",
		rr: 15
	},
	{
		time: "04:00",
		rr: 14
	},
	{
		time: "05:00",
		rr: 15
	},
	{
		time: "06:00",
		rr: 16
	},
	{
		time: "07:00",
		rr: 17
	},
	{
		time: "08:00",
		rr: 16
	},
	{
		time: "09:00",
		rr: 14
	},
	{
		time: "10:00",
		rr: 16
	},
	{
		time: "11:00",
		rr: 19
	},
	{
		time: "12:00",
		rr: 22
	},
	{
		time: "13:00",
		rr: 18
	},
	{
		time: "14:00",
		rr: 15
	},
	{
		time: "15:00",
		rr: 14
	},
	{
		time: "16:00",
		rr: 15
	},
	{
		time: "17:00",
		rr: 15
	},
	{
		time: "18:00",
		rr: 16
	},
	{
		time: "19:00",
		rr: 14
	},
	{
		time: "20:00",
		rr: 13
	},
	{
		time: "21:00",
		rr: 12
	},
	{
		time: "22:00",
		rr: 13
	},
	{
		time: "23:00",
		rr: 12
	},
	{
		time: "24:00",
		rr: 14
	}
];
function computeRespiratoryStats(series) {
	if (series.length === 0) return {
		average: 0,
		max: 0,
		min: 0
	};
	let sum = 0;
	let max = -Infinity;
	let min = Infinity;
	for (const pt of series) {
		sum += pt.rr;
		if (pt.rr > max) max = pt.rr;
		if (pt.rr < min) min = pt.rr;
	}
	return {
		average: Math.round(sum / series.length),
		max,
		min
	};
}
function evaluateRespiratoryStatus(rr, range = RESPIRATORY_NORMAL_RANGE) {
	if (rr >= range.min && rr <= range.max) return "normal";
	if (rr >= range.min - 2 && rr < range.min || rr > range.max && rr <= range.max + 4) return "amber";
	return "critical";
}
/** Generates a small simulated variation in 14–18 br/min with a non-zero delta. */
function nextSimulatedRespiratoryRate(prev) {
	const candidate = prev + (Math.random() < .5 ? -1 : 1);
	if (candidate < 14) return prev + 1;
	if (candidate > 18) return prev - 1;
	return candidate;
}
function RespiratoryTooltip({ active, payload, label }) {
	if (!active || !payload?.length) return null;
	const rr = payload[0]?.value;
	if (rr === void 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[12px] border border-dash-cyan/70 bg-[oklch(0.2_0.09_262_/_94%)] px-[12px] py-[8px] shadow-[0_0_18px_oklch(0.8_0.135_228_/_40%)] backdrop-blur-[10px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-[12px] font-medium text-dash-muted",
			children: [label, " UTC · Demo"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-[2px] text-[16px] font-bold text-foreground",
			children: [
				rr,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[13px] font-medium text-dash-cyan",
					children: "br/min"
				})
			]
		})]
	});
}
/** 24-hour Recharts Respiratory Rate area/line chart (Y: 6–30, X: 00:00–24:00). */
function RRTrendChart({ data }) {
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
					left: 0,
					bottom: 6
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "rrAreaGradient",
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
						id: "rrLineGlow",
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
						ticks: RESPIRATORY_MAJOR_TICKS,
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
						domain: [6, 30],
						ticks: [
							6,
							12,
							18,
							24,
							30
						],
						stroke: "rgba(160, 210, 255, 0.35)",
						tick: {
							fill: "#e6f2ff",
							fontSize: 15,
							fontWeight: 500
						},
						tickLine: { stroke: "rgba(160, 210, 255, 0.35)" },
						width: 44
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RespiratoryTooltip, {}),
						cursor: {
							stroke: "rgba(0, 229, 255, 0.45)",
							strokeWidth: 1.5
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "rr",
						stroke: "#1fe3ff",
						strokeWidth: 3,
						fill: "url(#rrAreaGradient)",
						filter: "url(#rrLineGlow)",
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
/** Glowing outlined lungs SVG matching the futuristic respiratory telemetry badge. */
function LungsOutlineIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2.5,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": true,
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 10v19" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 25l-7 5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 25l7 5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M27 23c-3.5-4.5-9-4-12.5 1-3.8 5.4-6.5 15.5-6.5 23.5 0 4.8 3.2 7.5 8 7.5 5 0 9.5-2.3 11-5.8V23Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M22 33c-3 2-5.5 5.5-6.5 9.5",
				opacity: .7
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M23 40c-2.5 1.8-4 4-4.5 6.8",
				opacity: .65
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M37 23c3.5-4.5 9-4 12.5 1 3.8 5.4 6.5 15.5 6.5 23.5 0 4.8-3.2 7.5-8 7.5-5 0-9.5-2.3-11-5.8V23Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M42 33c3 2 5.5 5.5 6.5 9.5",
				opacity: .7
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M41 40c2.5 1.8 4 4 4.5 6.8",
				opacity: .65
			})
		]
	});
}
/** Circular glowing lungs icon button shown on the top-right of the Respiratory Monitoring header. */
function RespiratoryHeaderBadge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-label": "Respiratory Telemetry",
		className: "dash-ring flex size-[54px] shrink-0 items-center justify-center bg-[radial-gradient(circle_at_50%_35%,oklch(0.45_0.16_248)_0%,oklch(0.22_0.1_264)_78%)] lg:size-[68px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LungsOutlineIcon, { className: "size-[30px] text-dash-ice drop-shadow-[0_0_10px_var(--dash-cyan)] lg:size-[38px]" })
	});
}
/**
* Respiratory Monitoring page: 3 responsive top summary cards (with live 3s simulated RR &
* breathing-synced pulsing lungs ring) and a fluid 24-hour RR Trend Recharts area/line panel.
*/
function Respiratory() {
	const [rr, setRr] = (0, import_react.useState)(16);
	const [delta, setDelta] = (0, import_react.useState)(1);
	const stats = (0, import_react.useMemo)(() => computeRespiratoryStats(RESPIRATORY_24H_SERIES), []);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			setRr((prev) => {
				const next = nextSimulatedRespiratoryRate(prev);
				setDelta(next - prev);
				return next;
			});
		}, 3e3);
		return () => window.clearInterval(id);
	}, []);
	const statusTone = evaluateRespiratoryStatus(rr);
	const breathCycleSec = (60 / Math.max(8, rr)).toFixed(2);
	const statusValueColor = statusTone === "normal" ? "text-foreground" : statusTone === "amber" ? "text-dash-amber" : "text-coral";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-1 flex-col gap-[20px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-[16px] md:grid-cols-3 xl:grid-cols-[1.22fr_1fr_1fr] xl:gap-[20px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dash-card flex min-h-[176px] items-center rounded-[20px] px-[20px] py-[18px] sm:px-[22px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex size-[104px] shrink-0 items-center justify-center sm:size-[122px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: cn("absolute inset-0 animate-pulse rounded-full border-[3.5px] bg-[radial-gradient(circle_at_50%_35%,oklch(0.45_0.16_248)_0%,oklch(0.22_0.1_264)_80%)]", statusTone === "normal" ? "border-dash-cyan shadow-[0_0_24px_oklch(0.8_0.135_228_/_75%),inset_0_0_18px_oklch(0.8_0.135_228_/_45%)]" : statusTone === "amber" ? "border-dash-amber shadow-[0_0_24px_oklch(0.84_0.15_78_/_75%),inset_0_0_18px_oklch(0.84_0.15_78_/_40%)]" : "border-coral shadow-[0_0_24px_oklch(0.7_0.18_29_/_75%),inset_0_0_18px_oklch(0.7_0.18_29_/_40%)]"),
								style: { animationDuration: `${breathCycleSec}s` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "pointer-events-none absolute inset-[8px] rounded-full border border-dash-ice/35"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LungsOutlineIcon, { className: "relative z-10 size-[52px] text-dash-ice drop-shadow-[0_0_14px_var(--dash-cyan)] sm:size-[62px]" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-[18px] flex min-w-0 flex-1 flex-col items-start sm:ml-[22px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[16px] leading-[21px] font-medium text-foreground sm:text-[17px]",
								children: "Respiratory Rate (RR)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-[6px] flex items-baseline whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("text-[42px] leading-[46px] font-bold tabular-nums sm:text-[48px] sm:leading-[52px]", statusValueColor),
									children: rr
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-[8px] text-[19px] font-medium text-dash-ice sm:text-[21px]",
									children: "br/min"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: cn("mt-[6px] inline-flex items-center gap-[4px] text-[15.5px] font-semibold tabular-nums sm:text-[16px]", delta >= 0 ? "text-dash-green" : "text-dash-amber"),
								children: [delta >= 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
									className: "size-[17px]",
									strokeWidth: 2.8
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
									className: "size-[17px]",
									strokeWidth: 2.8
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [delta >= 0 ? `+${delta}` : delta, "/min"] })]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dash-card flex min-h-[176px] items-center justify-center gap-[18px] rounded-[20px] px-[20px] py-[18px] sm:gap-[22px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
						className: "size-[46px] shrink-0 text-dash-cyan drop-shadow-[0_0_12px_var(--dash-cyan)] sm:size-[52px]",
						strokeWidth: 2.2
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[16.5px] leading-[22px] font-medium text-dash-ice/90",
							children: "Average RR"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-[8px] flex items-baseline whitespace-nowrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[40px] leading-[44px] font-bold tabular-nums text-foreground sm:text-[46px] sm:leading-[50px]",
								children: stats.average
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-[8px] text-[18px] font-medium text-dash-ice sm:text-[20px]",
								children: "br/min"
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dash-card flex min-h-[176px] items-center justify-center gap-[18px] rounded-[20px] px-[20px] py-[18px] sm:gap-[22px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, {
						className: "size-[44px] shrink-0 text-dash-cyan drop-shadow-[0_0_12px_var(--dash-cyan)] sm:size-[50px]",
						strokeWidth: 2.2
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[16.5px] leading-[22px] font-medium text-dash-ice/90",
							children: "Max / Min RR"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-[8px] flex items-baseline whitespace-nowrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[40px] leading-[44px] font-bold tabular-nums text-foreground sm:text-[46px] sm:leading-[50px]",
								children: [
									stats.max,
									" / ",
									stats.min
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-[8px] text-[18px] font-medium text-dash-ice sm:text-[20px]",
								children: "br/min"
							})]
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			"aria-label": "RR Trend",
			className: "dash-card flex min-h-[360px] flex-1 flex-col rounded-[20px] px-[18px] py-[18px] sm:px-[26px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-[12px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-[12px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
						className: "size-[26px] text-dash-cyan drop-shadow-[0_0_8px_var(--dash-cyan)] sm:size-[28px]",
						strokeWidth: 2.2
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[20px] leading-[26px] font-bold text-foreground sm:text-[22px]",
						children: "RR Trend"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-[10px] text-[15px] font-medium text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "size-[12px] rounded-full bg-dash-cyan shadow-[0_0_10px_var(--dash-cyan)]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Respiratory Rate" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-[14px] flex min-h-[290px] flex-1 flex-col rounded-[18px] border border-dash-cyan/25 bg-[oklch(0.19_0.08_263_/_52%)] px-[10px] pt-[12px] pb-[8px] shadow-[inset_0_0_24px_oklch(0.24_0.1_260_/_50%)] sm:px-[14px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RRTrendChart, { data: RESPIRATORY_24H_SERIES })
				})
			})]
		})]
	});
}
function RespiratoryRoutePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardShell, {
		headerTitle: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Respiratory",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"Monitoring"
		] }),
		headerRight: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RespiratoryHeaderBadge, {}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Respiratory, {})
	});
}
//#endregion
export { RespiratoryRoutePage as component };
