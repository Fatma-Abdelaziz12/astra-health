import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { O as Lightbulb, Q as ChartColumn, mt as Activity, ot as BedDouble, w as MoonStar } from "../_libs/lucide-react.mjs";
import { a as Area, i as XAxis, l as ResponsiveContainer, r as YAxis, s as CartesianGrid, t as AreaChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SleepQuality-C39tFv3F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SLEEP_30D_RECORDS = [
	{
		isoDate: "2026-10-18",
		weekday: "Sun",
		shortDate: "Oct 18",
		fullDate: "Sun, Oct 18, 2026",
		hours: 7.6,
		totalMinutes: 456,
		efficiency: 91,
		score: 84,
		deepMinutes: 105
	},
	{
		isoDate: "2026-10-19",
		weekday: "Mon",
		shortDate: "Oct 19",
		fullDate: "Mon, Oct 19, 2026",
		hours: 7.4,
		totalMinutes: 444,
		efficiency: 90,
		score: 82,
		deepMinutes: 100
	},
	{
		isoDate: "2026-10-20",
		weekday: "Tue",
		shortDate: "Oct 20",
		fullDate: "Tue, Oct 20, 2026",
		hours: 7.9,
		totalMinutes: 474,
		efficiency: 92,
		score: 86,
		deepMinutes: 112
	},
	{
		isoDate: "2026-10-21",
		weekday: "Wed",
		shortDate: "Oct 21",
		fullDate: "Wed, Oct 21, 2026",
		hours: 8.1,
		totalMinutes: 486,
		efficiency: 93,
		score: 87,
		deepMinutes: 116
	},
	{
		isoDate: "2026-10-22",
		weekday: "Thu",
		shortDate: "Oct 22",
		fullDate: "Thu, Oct 22, 2026",
		hours: 7.5,
		totalMinutes: 450,
		efficiency: 91,
		score: 83,
		deepMinutes: 104
	},
	{
		isoDate: "2026-10-23",
		weekday: "Fri",
		shortDate: "Oct 23",
		fullDate: "Fri, Oct 23, 2026",
		hours: 8.4,
		totalMinutes: 504,
		efficiency: 94,
		score: 90,
		deepMinutes: 122
	},
	{
		isoDate: "2026-10-24",
		weekday: "Sat",
		shortDate: "Oct 24",
		fullDate: "Sat, Oct 24, 2026",
		hours: 6.4,
		totalMinutes: 384,
		efficiency: 81,
		score: 68,
		deepMinutes: 76
	},
	{
		isoDate: "2026-10-25",
		weekday: "Sun",
		shortDate: "Oct 25",
		fullDate: "Sun, Oct 25, 2026",
		hours: 5.5,
		totalMinutes: 330,
		efficiency: 74,
		score: 56,
		deepMinutes: 60
	},
	{
		isoDate: "2026-10-26",
		weekday: "Mon",
		shortDate: "Oct 26",
		fullDate: "Mon, Oct 26, 2026",
		hours: 6.8,
		totalMinutes: 408,
		efficiency: 84,
		score: 72,
		deepMinutes: 86
	},
	{
		isoDate: "2026-10-27",
		weekday: "Tue",
		shortDate: "Oct 27",
		fullDate: "Tue, Oct 27, 2026",
		hours: 7.2,
		totalMinutes: 432,
		efficiency: 88,
		score: 78,
		deepMinutes: 94
	},
	{
		isoDate: "2026-10-28",
		weekday: "Wed",
		shortDate: "Oct 28",
		fullDate: "Wed, Oct 28, 2026",
		hours: 7.8,
		totalMinutes: 468,
		efficiency: 92,
		score: 85,
		deepMinutes: 110
	},
	{
		isoDate: "2026-10-29",
		weekday: "Thu",
		shortDate: "Oct 29",
		fullDate: "Thu, Oct 29, 2026",
		hours: 8.3,
		totalMinutes: 498,
		efficiency: 94,
		score: 89,
		deepMinutes: 120
	},
	{
		isoDate: "2026-10-30",
		weekday: "Fri",
		shortDate: "Oct 30",
		fullDate: "Fri, Oct 30, 2026",
		hours: 8,
		totalMinutes: 480,
		efficiency: 92,
		score: 86,
		deepMinutes: 114
	},
	{
		isoDate: "2026-10-31",
		weekday: "Sat",
		shortDate: "Oct 31",
		fullDate: "Sat, Oct 31, 2026",
		hours: 8.6,
		totalMinutes: 516,
		efficiency: 95,
		score: 91,
		deepMinutes: 126
	},
	{
		isoDate: "2026-11-01",
		weekday: "Sun",
		shortDate: "Nov 1",
		fullDate: "Sun, Nov 1, 2026",
		hours: 8.1,
		totalMinutes: 486,
		efficiency: 93,
		score: 87,
		deepMinutes: 116
	},
	{
		isoDate: "2026-11-02",
		weekday: "Mon",
		shortDate: "Nov 2",
		fullDate: "Mon, Nov 2, 2026",
		hours: 7.5,
		totalMinutes: 450,
		efficiency: 91,
		score: 83,
		deepMinutes: 106
	},
	{
		isoDate: "2026-11-03",
		weekday: "Tue",
		shortDate: "Nov 3",
		fullDate: "Tue, Nov 3, 2026",
		hours: 7.9,
		totalMinutes: 474,
		efficiency: 93,
		score: 86,
		deepMinutes: 114
	},
	{
		isoDate: "2026-11-04",
		weekday: "Wed",
		shortDate: "Nov 4",
		fullDate: "Wed, Nov 4, 2026",
		hours: 7.4,
		totalMinutes: 444,
		efficiency: 90,
		score: 82,
		deepMinutes: 102
	},
	{
		isoDate: "2026-11-05",
		weekday: "Thu",
		shortDate: "Nov 5",
		fullDate: "Thu, Nov 5, 2026",
		hours: 8.5,
		totalMinutes: 510,
		efficiency: 94,
		score: 90,
		deepMinutes: 124
	},
	{
		isoDate: "2026-11-06",
		weekday: "Fri",
		shortDate: "Nov 6",
		fullDate: "Fri, Nov 6, 2026",
		hours: 8.2,
		totalMinutes: 492,
		efficiency: 93,
		score: 88,
		deepMinutes: 118
	},
	{
		isoDate: "2026-11-07",
		weekday: "Sat",
		shortDate: "Nov 7",
		fullDate: "Sat, Nov 7, 2026",
		hours: 8.7,
		totalMinutes: 522,
		efficiency: 95,
		score: 91,
		deepMinutes: 128
	},
	{
		isoDate: "2026-11-08",
		weekday: "Sun",
		shortDate: "Nov 8",
		fullDate: "Sun, Nov 8, 2026",
		hours: 8,
		totalMinutes: 480,
		efficiency: 92,
		score: 86,
		deepMinutes: 114
	},
	{
		isoDate: "2026-11-09",
		weekday: "Mon",
		shortDate: "Nov 9",
		fullDate: "Mon, Nov 9, 2026",
		hours: 7.7,
		totalMinutes: 462,
		efficiency: 91,
		score: 85,
		deepMinutes: 109
	},
	{
		isoDate: "2026-11-10",
		weekday: "Mon",
		shortDate: "Nov 10",
		fullDate: "Mon, Nov 10, 2026",
		hours: 7.8,
		totalMinutes: 468,
		efficiency: 94,
		score: 88,
		deepMinutes: 112
	},
	{
		isoDate: "2026-11-11",
		weekday: "Tue",
		shortDate: "Nov 11",
		fullDate: "Tue, Nov 11, 2026",
		hours: 8.6,
		totalMinutes: 516,
		efficiency: 95,
		score: 90,
		deepMinutes: 125
	},
	{
		isoDate: "2026-11-12",
		weekday: "Wed",
		shortDate: "Nov 12",
		fullDate: "Wed, Nov 12, 2026",
		hours: 7.8,
		totalMinutes: 468,
		efficiency: 92,
		score: 85,
		deepMinutes: 108
	},
	{
		isoDate: "2026-11-13",
		weekday: "Thu",
		shortDate: "Nov 13",
		fullDate: "Thu, Nov 13, 2026",
		hours: 9.1,
		totalMinutes: 546,
		efficiency: 96,
		score: 94,
		deepMinutes: 136
	},
	{
		isoDate: "2026-11-14",
		weekday: "Fri",
		shortDate: "Nov 14",
		fullDate: "Fri, Nov 14, 2026",
		hours: 8.8,
		totalMinutes: 528,
		efficiency: 95,
		score: 91,
		deepMinutes: 128
	},
	{
		isoDate: "2026-11-15",
		weekday: "Sat",
		shortDate: "Nov 15",
		fullDate: "Sat, Nov 15, 2026",
		hours: 8.5,
		totalMinutes: 510,
		efficiency: 94,
		score: 89,
		deepMinutes: 122
	},
	{
		isoDate: "2026-11-16",
		weekday: "Sun",
		shortDate: "Nov 16",
		fullDate: "Sun, Nov 16, 2026",
		hours: 8.2,
		totalMinutes: 492,
		efficiency: 93,
		score: 87,
		deepMinutes: 118
	}
];
var SLEEP_MIN_DATE = SLEEP_30D_RECORDS[0]?.isoDate ?? "2026-10-18";
var SLEEP_MAX_DATE = SLEEP_30D_RECORDS[SLEEP_30D_RECORDS.length - 1]?.isoDate ?? "2026-11-16";
function formatSleepMinutes(minutes) {
	const safe = Math.max(0, Math.round(minutes));
	return `${Math.floor(safe / 60)}h ${safe % 60}m`;
}
function filterSleepRecords(range, customFrom, customTo) {
	if (range === "7D") return SLEEP_30D_RECORDS.slice(-7);
	if (range === "30D") return SLEEP_30D_RECORDS;
	const from = customFrom <= customTo ? customFrom : customTo;
	const to = customFrom <= customTo ? customTo : customFrom;
	const filtered = SLEEP_30D_RECORDS.filter((r) => r.isoDate >= from && r.isoDate <= to);
	return filtered.length > 0 ? filtered : SLEEP_30D_RECORDS.slice(-7);
}
function computeSleepSummary(records, range) {
	const source = records.length > 0 ? records : SLEEP_30D_RECORDS.slice(-7);
	const targetList = range === "7D" && source[0] ? [source[0]] : source;
	const avgTotalMin = Math.round(targetList.reduce((acc, r) => acc + r.totalMinutes, 0) / targetList.length);
	const avgEfficiency = Math.round(targetList.reduce((acc, r) => acc + r.efficiency, 0) / targetList.length);
	const avgScore = Math.round(targetList.reduce((acc, r) => acc + r.score, 0) / targetList.length);
	const avgDeepMin = Math.round(targetList.reduce((acc, r) => acc + r.deepMinutes, 0) / targetList.length);
	const deepPercent = avgTotalMin > 0 ? Math.round(avgDeepMin / avgTotalMin * 100) : 0;
	const badge = avgScore >= 80 ? {
		label: "Good",
		tone: "green"
	} : avgScore >= 60 ? {
		label: "Fair",
		tone: "amber"
	} : {
		label: "Poor",
		tone: "red"
	};
	const tip = avgScore >= 80 ? "Your sleep is on track! Keep it up. 🌙" : avgScore >= 60 ? "Decent sleep, try to keep a steady bedtime. 😴" : "Your sleep needs attention, try to rest earlier tonight. ⚠️";
	return {
		totalLabel: formatSleepMinutes(avgTotalMin),
		efficiency: avgEfficiency,
		score: avgScore,
		deepLabel: formatSleepMinutes(avgDeepMin),
		deepPercent,
		badge,
		tip
	};
}
var RANGE_OPTIONS = [
	"7D",
	"30D",
	"Custom"
];
/** Segmented 7D / 30D / Custom range selector with an inline custom date picker. */
function RangeToggle({ value, onChange, customFrom, customTo, onCustomChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-[10px]",
		children: [value === "Custom" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-[8px] rounded-full border border-dash-card-border bg-[oklch(0.22_0.09_264_/_75%)] px-[12px] py-[4px] text-[13px] text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-[6px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-dash-muted",
						children: "From"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						value: customFrom,
						min: SLEEP_MIN_DATE,
						max: SLEEP_MAX_DATE,
						onChange: (e) => onCustomChange(e.target.value, customTo),
						className: "bg-transparent text-foreground focus:outline-none [color-scheme:dark]"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "text-dash-muted",
					children: "–"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-[6px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-dash-muted",
						children: "To"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						value: customTo,
						min: SLEEP_MIN_DATE,
						max: SLEEP_MAX_DATE,
						onChange: (e) => onCustomChange(customFrom, e.target.value),
						className: "bg-transparent text-foreground focus:outline-none [color-scheme:dark]"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "tablist",
			"aria-label": "Sleep trend range",
			className: "inline-flex items-center rounded-full border border-dash-card-border bg-[oklch(0.22_0.09_263_/_72%)] p-[3px] shadow-[inset_0_1px_0_oklch(1_0_0_/_8%)]",
			children: RANGE_OPTIONS.map((opt) => {
				const active = value === opt;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-selected": active,
					onClick: () => onChange(opt),
					className: cn("cursor-pointer rounded-full px-[18px] py-[6px] text-[14.5px] font-semibold transition-all", active ? "dash-nav-active text-foreground" : "text-dash-ice/85 hover:text-foreground"),
					children: opt
				}, opt);
			})
		})]
	});
}
function SleepTooltip({ active, payload }) {
	const rec = payload?.[0]?.payload;
	if (!active || !rec) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[12px] border border-dash-cyan/70 bg-[oklch(0.2_0.09_262_/_94%)] px-[14px] py-[9px] shadow-[0_0_18px_oklch(0.8_0.135_228_/_40%)] backdrop-blur-[10px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[12.5px] font-medium text-dash-muted",
			children: rec.fullDate
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-[2px] text-[16px] font-bold tabular-nums text-foreground",
			children: [
				formatSleepMinutes(rec.totalMinutes),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[13px] font-medium text-dash-cyan",
					children: [
						"· Score ",
						rec.score,
						"/100"
					]
				})
			]
		})]
	});
}
function TwoLineDateTick({ x = 0, y = 0, payload, byIso }) {
	const iso = payload?.value ?? "";
	const rec = byIso.get(iso);
	if (!rec) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		transform: `translate(${x},${y})`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: 0,
			y: 14,
			textAnchor: "middle",
			fill: "#e6f2ff",
			fontSize: 14,
			fontWeight: 500,
			children: rec.weekday
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: 0,
			y: 32,
			textAnchor: "middle",
			fill: "#b8d4f4",
			fontSize: 13,
			fontWeight: 400,
			children: rec.shortDate
		})]
	});
}
/** Recharts area/line chart displaying sleep hours across 7D, 30D, or Custom ranges. */
function SleepTrendChart({ data, range }) {
	const chartData = [...data];
	const byIso = new Map(chartData.map((d) => [d.isoDate, d]));
	const majorTicks = chartData.length <= 10 ? chartData.map((d) => d.isoDate) : chartData.filter((_, idx) => idx % 5 === 0 || idx === chartData.length - 1).map((d) => d.isoDate);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-[270px] w-full min-w-0 sm:h-[310px] lg:h-full lg:min-h-[260px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			minHeight: 250,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data: chartData,
				margin: {
					top: 14,
					right: 26,
					left: 4,
					bottom: 26
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "sleepAreaGradient",
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
						id: "sleepLineGlow",
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
						dataKey: "isoDate",
						ticks: majorTicks,
						interval: 0,
						stroke: "rgba(160, 210, 255, 0.35)",
						tickLine: { stroke: "rgba(160, 210, 255, 0.35)" },
						tick: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TwoLineDateTick, { byIso }),
						height: 44
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						domain: [4, 10],
						ticks: [
							4,
							6,
							8,
							10
						],
						tickFormatter: (v) => `${v}h`,
						stroke: "rgba(160, 210, 255, 0.35)",
						tick: {
							fill: "#e6f2ff",
							fontSize: 15,
							fontWeight: 500
						},
						tickLine: { stroke: "rgba(160, 210, 255, 0.35)" },
						width: 46
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SleepTooltip, {}),
						cursor: {
							stroke: "rgba(0, 229, 255, 0.45)",
							strokeWidth: 1.5
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "hours",
						stroke: "#2de5ff",
						strokeWidth: 3,
						fill: "url(#sleepAreaGradient)",
						filter: "url(#sleepLineGlow)",
						animationDuration: 450,
						dot: {
							r: chartData.length > 14 ? 3.2 : 5,
							fill: "#b2f9ff",
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
			}, `${range}-${chartData.length}-${chartData[0]?.isoDate ?? ""}`)
		})
	});
}
function SparkleIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 28 28",
		fill: "none",
		"aria-hidden": true,
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M14 2.5C14.7 9.4 18.6 13.3 25.5 14C18.6 14.7 14.7 18.6 14 25.5C13.3 18.6 9.4 14.7 2.5 14C9.4 13.3 13.3 9.4 14 2.5Z",
			fill: "currentColor"
		})
	});
}
/** Full-width bottom glass tip bar dynamically reflecting the current Sleep Score. */
function TipBanner({ message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dash-card flex min-h-[58px] items-center justify-between gap-[14px] rounded-[20px] px-[22px] py-[12px] duration-500 animate-in fade-in slide-in-from-bottom-3 [animation-delay:280ms]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-[14px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, {
				className: "size-[24px] shrink-0 text-dash-ice drop-shadow-[0_0_8px_var(--dash-cyan)]",
				strokeWidth: 1.9
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[16.5px] leading-[22px] font-medium text-foreground",
				children: message
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SparkleIcon, { className: "size-[22px] shrink-0 text-dash-ice/90 drop-shadow-[0_0_10px_var(--dash-cyan)]" })]
	});
}
/** Glowing crescent moon with floating "zz" icon used in Card 1 and the top-right header badge. */
function MoonZzzIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		fill: "none",
		"aria-hidden": true,
		className: cn("text-dash-cyan", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M36.5 14C24.9 14 15.5 23.4 15.5 35C15.5 46.6 24.9 56 36.5 56C43.2 56 49.2 52.8 53 47.9C44.1 48.2 36.5 41.2 36.5 32.1C36.5 24.9 40.9 18.7 47.2 16C43.9 14.7 40.3 14 36.5 14Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "38",
				y: "25",
				fill: "currentColor",
				fontSize: "12",
				fontWeight: "700",
				fontFamily: "system-ui, sans-serif",
				children: "z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "47",
				y: "17",
				fill: "currentColor",
				fontSize: "15",
				fontWeight: "700",
				fontFamily: "system-ui, sans-serif",
				children: "z"
			})
		]
	});
}
/** Header title block: bed icon + "Sleep Quality" + subtitle underneath. */
function SleepHeaderTitle() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-[14px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, {
			className: "size-[36px] shrink-0 text-dash-cyan drop-shadow-[0_0_12px_var(--dash-cyan)] sm:size-[42px]",
			strokeWidth: 2
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-[24px] leading-[28px] font-bold tracking-[-0.005em] text-foreground sm:text-[31px] sm:leading-[34px]",
				children: "Sleep Quality"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-[2px] text-[13.5px] leading-[18px] font-normal text-dash-ice/90 sm:text-[14.5px]",
				children: [
					"Track your sleep and get better rest",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "text-dash-ice",
						children: "♡"
					})
				]
			})]
		})]
	});
}
/** Circular glowing moon-with-"zz" button at the far right of the Sleep Quality header. */
function SleepHeaderBadge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-label": "Sleep Telemetry",
		className: "dash-ring flex size-[54px] shrink-0 items-center justify-center bg-[radial-gradient(circle_at_50%_35%,oklch(0.45_0.16_248)_0%,oklch(0.22_0.1_264)_78%)] lg:size-[68px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonZzzIcon, { className: "size-[32px] text-foreground drop-shadow-[0_0_10px_var(--dash-cyan)] lg:size-[42px]" })
	});
}
/**
* Sleep Quality page: 4 responsive top summary cards (computed from sleepData),
* 7D / 30D / Custom Sleep Trend chart, and dynamic bottom TipBanner.
*/
function SleepQuality() {
	const [range, setRange] = (0, import_react.useState)("7D");
	const [customFrom, setCustomFrom] = (0, import_react.useState)(SLEEP_MIN_DATE);
	const [customTo, setCustomTo] = (0, import_react.useState)(SLEEP_MAX_DATE);
	const visibleRecords = (0, import_react.useMemo)(() => filterSleepRecords(range, customFrom, customTo), [
		range,
		customFrom,
		customTo
	]);
	const summary = (0, import_react.useMemo)(() => computeSleepSummary(visibleRecords, range), [visibleRecords, range]);
	const badgeToneClass = summary.badge.tone === "green" ? "border-dash-green/45 bg-dash-green/22 text-foreground" : summary.badge.tone === "amber" ? "border-dash-amber/45 bg-dash-amber/22 text-dash-amber" : "border-coral/45 bg-coral/22 text-coral";
	const dotToneClass = summary.badge.tone === "green" ? "bg-dash-green shadow-[0_0_8px_var(--dash-green)]" : summary.badge.tone === "amber" ? "bg-dash-amber shadow-[0_0_8px_var(--dash-amber)]" : "bg-coral shadow-[0_0_8px_var(--coral)]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-1 flex-col gap-[18px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-[14px] sm:grid-cols-2 xl:grid-cols-[1.28fr_1fr_1fr_1fr] xl:gap-[18px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dash-card flex min-h-[168px] items-center rounded-[24px] px-[20px] py-[18px] duration-500 animate-in fade-in slide-in-from-bottom-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dash-float flex shrink-0 items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonZzzIcon, { className: "size-[72px] drop-shadow-[0_0_18px_var(--dash-cyan)] sm:size-[80px]" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-[16px] flex min-w-0 flex-1 flex-col items-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("inline-flex items-center gap-[8px] rounded-full border px-[14px] py-[4px] text-[14px] leading-[18px] font-semibold sm:px-[16px] sm:text-[15px]", badgeToneClass),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: cn("size-[9px] rounded-full", dotToneClass)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: summary.badge.label })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-[10px] text-[36px] leading-[40px] font-bold whitespace-nowrap tabular-nums text-foreground sm:text-[40px] sm:leading-[44px]",
									children: summary.totalLabel
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-[4px] text-[15px] leading-[20px] font-medium text-dash-ice/90 sm:text-[16px]",
									children: "Total Sleep"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dash-card flex min-h-[168px] flex-col items-center justify-center rounded-[24px] px-[18px] py-[16px] text-center duration-500 animate-in fade-in slide-in-from-bottom-3 [animation-delay:75ms]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, {
								className: "size-[42px] shrink-0 text-dash-cyan drop-shadow-[0_0_12px_var(--dash-cyan)]",
								strokeWidth: 2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-[10px] text-[38px] leading-[42px] font-bold tabular-nums text-foreground sm:text-[42px] sm:leading-[46px]",
								children: [summary.efficiency, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[4px] text-[15px] leading-[20px] font-medium text-dash-ice/90 sm:text-[16px]",
								children: "Sleep Efficiency"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dash-card flex min-h-[168px] flex-col items-center justify-center rounded-[24px] px-[18px] py-[16px] text-center duration-500 animate-in fade-in slide-in-from-bottom-3 [animation-delay:150ms]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
								className: "size-[40px] shrink-0 text-dash-cyan drop-shadow-[0_0_12px_var(--dash-cyan)]",
								strokeWidth: 2.2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[10px] text-[15px] leading-[20px] font-medium text-dash-ice/90 sm:text-[16px]",
								children: "Sleep Score"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-[4px] flex items-baseline justify-center whitespace-nowrap tabular-nums",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[38px] leading-[42px] font-bold text-foreground sm:text-[42px] sm:leading-[46px]",
									children: summary.score
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-[7px] text-[22px] font-normal text-dash-ice/80 sm:text-[24px]",
									children: "/ 100"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dash-card flex min-h-[168px] flex-col items-center justify-center rounded-[24px] px-[18px] py-[16px] text-center duration-500 animate-in fade-in slide-in-from-bottom-3 [animation-delay:225ms]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonStar, {
								className: "size-[38px] shrink-0 text-dash-cyan drop-shadow-[0_0_12px_var(--dash-cyan)]",
								strokeWidth: 2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[10px] text-[15px] leading-[20px] font-medium text-dash-ice/90 sm:text-[16px]",
								children: "Deep Sleep"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[4px] text-[34px] leading-[38px] font-bold whitespace-nowrap tabular-nums text-foreground sm:text-[36px] sm:leading-[40px]",
								children: summary.deepLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-[2px] text-[14.5px] leading-[18px] font-medium tabular-nums text-dash-ice/80",
								children: [
									"(",
									summary.deepPercent,
									"%)"
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Sleep Trend",
				className: "dash-card flex min-h-[340px] flex-1 flex-col rounded-[24px] px-[18px] pt-[16px] pb-[14px] sm:px-[26px] duration-500 animate-in fade-in slide-in-from-bottom-3 [animation-delay:250ms]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-[12px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-[12px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
							className: "size-[26px] text-dash-cyan drop-shadow-[0_0_8px_var(--dash-cyan)] sm:size-[28px]",
							strokeWidth: 2.2
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[20px] leading-[26px] font-bold text-foreground sm:text-[22px]",
							children: "Sleep Trend"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeToggle, {
						value: range,
						onChange: setRange,
						customFrom,
						customTo,
						onCustomChange: (from, to) => {
							setCustomFrom(from);
							setCustomTo(to);
						}
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-[12px] flex min-h-[280px] flex-1 flex-col rounded-[18px] border border-dash-cyan/25 bg-[oklch(0.19_0.08_263_/_52%)] px-[10px] pt-[10px] pb-[6px] shadow-[inset_0_0_24px_oklch(0.24_0.1_260_/_50%)] sm:px-[14px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-0 flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SleepTrendChart, {
							data: visibleRecords,
							range
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TipBanner, { message: summary.tip })
		]
	});
}
//#endregion
export { SleepHeaderTitle as n, SleepQuality as r, SleepHeaderBadge as t };
