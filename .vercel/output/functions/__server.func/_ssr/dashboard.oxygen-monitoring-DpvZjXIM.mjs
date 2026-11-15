import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { Q as ChartColumn, V as Droplet, mt as Activity, ut as ArrowUpDown } from "../_libs/lucide-react.mjs";
import { a as Area, i as XAxis, l as ResponsiveContainer, r as YAxis, s as CartesianGrid, t as AreaChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.oxygen-monitoring-DpvZjXIM.js
var import_jsx_runtime = require_jsx_runtime();
var OXYGEN_DEMO_SNAPSHOT = {
	isDemo: true,
	spo2Current: 98,
	spo2Status: "Normal",
	pulseRateBpm: 72,
	spo2Average: 97,
	spo2Max: 100,
	spo2Min: 95,
	trend24h: [
		{
			time: "00:00",
			spo2: 97,
			isMajorTick: true
		},
		{
			time: "02:00",
			spo2: 96
		},
		{
			time: "04:00",
			spo2: 96
		},
		{
			time: "06:00",
			spo2: 97,
			isMajorTick: true
		},
		{
			time: "08:00",
			spo2: 98
		},
		{
			time: "10:00",
			spo2: 99
		},
		{
			time: "12:00",
			spo2: 98,
			isMajorTick: true
		},
		{
			time: "14:00",
			spo2: 99
		},
		{
			time: "16:00",
			spo2: 100
		},
		{
			time: "18:00",
			spo2: 98,
			isMajorTick: true
		},
		{
			time: "20:00",
			spo2: 97
		},
		{
			time: "22:00",
			spo2: 95
		},
		{
			time: "24:00",
			spo2: 98,
			isMajorTick: true
		}
	]
};
var MAJOR_TICKS = [
	"00:00",
	"06:00",
	"12:00",
	"18:00",
	"24:00"
];
function OxygenTooltip({ active, payload, label }) {
	if (!active || !payload?.length) return null;
	const value = payload[0]?.value;
	if (value === void 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[12px] border border-dash-cyan/70 bg-[oklch(0.2_0.09_262_/_92%)] px-[12px] py-[8px] shadow-[0_0_18px_oklch(0.8_0.135_228_/_40%)] backdrop-blur-[10px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-[12px] font-medium text-dash-muted",
			children: [label, " UTC · Demo"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-[2px] text-[16px] font-bold text-foreground",
			children: [
				value,
				"% ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[13px] font-medium text-dash-cyan",
					children: "SpO2"
				})
			]
		})]
	});
}
/**
* Oxygen Monitoring (SpO2) page rendered inside the unified Astra Health DashboardShell.
* Uses organized demo values from OXYGEN_DEMO_SNAPSHOT until a live oximeter is connected.
*/
function OxygenMonitoringView() {
	const snapshot = OXYGEN_DEMO_SNAPSHOT;
	const chartData = [...snapshot.trend24h];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-1 flex-col gap-[20px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-[16px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-[16px] sm:gap-[20px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "h-[46px] w-[2.5px] shrink-0 rounded-full bg-dash-cyan shadow-[0_0_12px_var(--dash-cyan)] sm:h-[52px]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-[10px] sm:gap-[12px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-[26px] leading-[32px] font-bold tracking-[-0.01em] text-foreground sm:text-[34px] sm:leading-[40px]",
								children: "Oxygen Monitoring (SpO2)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-dash-cyan/45 bg-dash-blue/25 px-[10px] py-[2px] text-[12px] font-medium text-dash-ice",
								children: "Demo Telemetry"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-[3px] text-[14px] leading-[20px] text-dash-muted sm:text-[14.5px]",
							children: "Blood oxygen saturation & pulse rate overview · Simulated reference values"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-label": "O2 Oxygen Sensor Emblem",
					className: "dash-ring flex size-[54px] shrink-0 items-center justify-center bg-[radial-gradient(circle_at_50%_35%,oklch(0.45_0.16_248)_0%,oklch(0.22_0.1_264)_78%)] sm:size-[64px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[20px] font-bold tracking-tight text-dash-ice drop-shadow-[0_0_10px_var(--dash-cyan)] sm:text-[22px]",
						children: ["O", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", {
							className: "text-[13px] font-bold",
							children: "2"
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-[14px] sm:grid-cols-2 xl:grid-cols-[1.45fr_1fr_1fr_1.1fr] xl:gap-[18px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dash-card flex min-h-[168px] items-center gap-[18px] rounded-[20px] px-[20px] py-[18px] sm:gap-[20px] sm:px-[22px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dash-ring flex size-[86px] shrink-0 items-center justify-center bg-[radial-gradient(circle_at_50%_35%,oklch(0.45_0.16_248)_0%,oklch(0.22_0.1_264)_80%)] sm:size-[94px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplet, {
								className: "size-[42px] text-dash-ice drop-shadow-[0_0_12px_var(--dash-cyan)] sm:size-[46px]",
								fill: "currentColor",
								strokeWidth: 0
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 flex-col items-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-[7px] rounded-full border border-dash-green/50 bg-[oklch(0.42_0.12_155_/_45%)] px-[13px] py-[3px] text-[13.5px] font-semibold text-foreground shadow-[0_0_12px_oklch(0.75_0.18_148_/_25%)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "size-[9px] rounded-full bg-dash-green shadow-[0_0_8px_var(--dash-green)]"
									}), snapshot.spo2Status]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-[10px] flex items-baseline whitespace-nowrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[40px] leading-[42px] font-bold tabular-nums text-foreground sm:text-[44px] sm:leading-[46px]",
										children: snapshot.spo2Current
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-[3px] text-[22px] font-semibold text-dash-ice sm:text-[24px]",
										children: "%"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-[4px] text-[15.5px] font-medium text-dash-ice/90",
									children: "SpO2"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dash-card flex min-h-[168px] flex-col items-center justify-center rounded-[20px] px-[16px] py-[18px] text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
								className: "size-[40px] text-dash-cyan drop-shadow-[0_0_10px_var(--dash-cyan)]",
								strokeWidth: 2.2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-[12px] flex items-baseline justify-center whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[36px] leading-[40px] font-bold tabular-nums text-foreground sm:text-[38px] sm:leading-[42px]",
									children: snapshot.pulseRateBpm
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-[6px] text-[16px] font-semibold text-dash-ice sm:text-[17px]",
									children: "BPM"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[6px] text-[15px] font-medium text-dash-muted",
								children: "Pulse Rate"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dash-card flex min-h-[168px] flex-col items-center justify-center rounded-[20px] px-[16px] py-[18px] text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
								className: "size-[40px] text-dash-cyan drop-shadow-[0_0_10px_var(--dash-cyan)]",
								strokeWidth: 2.2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-[12px] flex items-baseline justify-center whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[36px] leading-[40px] font-bold tabular-nums text-foreground sm:text-[38px] sm:leading-[42px]",
									children: snapshot.spo2Average
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-[3px] text-[20px] font-semibold text-dash-ice sm:text-[22px]",
									children: "%"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[6px] text-[15px] font-medium text-dash-muted",
								children: "Average SpO2"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dash-card flex min-h-[168px] flex-col items-center justify-center rounded-[20px] px-[16px] py-[18px] text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, {
								className: "size-[38px] text-dash-cyan drop-shadow-[0_0_10px_var(--dash-cyan)]",
								strokeWidth: 2.2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[12px] flex items-baseline justify-center whitespace-nowrap",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[30px] leading-[38px] font-bold tabular-nums text-foreground sm:text-[34px] sm:leading-[42px]",
									children: [
										snapshot.spo2Max,
										"% / ",
										snapshot.spo2Min,
										"%"
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[6px] text-[15px] font-medium text-dash-muted",
								children: "Max / Min SpO2"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Oxygen Trend",
				className: "dash-card flex min-h-[340px] flex-1 flex-col rounded-[20px] px-[18px] pt-[18px] pb-[16px] sm:px-[26px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-[12px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-[12px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
							className: "size-[26px] text-dash-cyan drop-shadow-[0_0_8px_var(--dash-cyan)] sm:size-[28px]",
							strokeWidth: 2.2
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[20px] leading-[26px] font-bold text-foreground sm:text-[21px]",
							children: "Oxygen Trend"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-[18px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-[8px] text-[15px] font-medium text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "size-[12px] rounded-full bg-dash-cyan shadow-[0_0_10px_var(--dash-cyan)]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SpO2" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[12.5px] text-dash-muted",
							children: "24-hour demo curve"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-[14px] flex min-h-[280px] flex-1 flex-col rounded-[18px] border border-dash-cyan/30 bg-[oklch(0.18_0.08_263_/_55%)] px-[10px] pt-[14px] pb-[8px] shadow-[inset_0_0_24px_oklch(0.24_0.1_260_/_55%)] sm:px-[14px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[260px] w-full min-w-0 sm:h-[300px] lg:h-full lg:flex-1 lg:min-h-[270px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							minHeight: 250,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: chartData,
								margin: {
									top: 10,
									right: 18,
									left: 0,
									bottom: 4
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "spo2AreaGradient",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "#38d9ff",
											stopOpacity: .32
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "#38d9ff",
											stopOpacity: .02
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
										id: "spo2LineGlow",
										x: "-10%",
										y: "-30%",
										width: "120%",
										height: "160%",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
											dx: "0",
											dy: "0",
											stdDeviation: "4",
											floodColor: "#38d9ff"
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										stroke: "rgba(120, 195, 255, 0.18)",
										strokeDasharray: "3 3",
										vertical: true,
										horizontal: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "time",
										ticks: MAJOR_TICKS,
										stroke: "rgba(160, 210, 255, 0.35)",
										tick: {
											fill: "#e6f2ff",
											fontSize: 14,
											fontWeight: 500
										},
										tickLine: { stroke: "rgba(160, 210, 255, 0.35)" },
										tickMargin: 10
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										domain: [85, 100],
										ticks: [
											85,
											90,
											95,
											100
										],
										tickFormatter: (val) => `${val}%`,
										stroke: "rgba(160, 210, 255, 0.35)",
										tick: {
											fill: "#e6f2ff",
											fontSize: 14,
											fontWeight: 500
										},
										tickLine: false,
										width: 54
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OxygenTooltip, {}),
										cursor: {
											stroke: "rgba(56, 217, 255, 0.45)",
											strokeWidth: 1.5
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "spo2",
										stroke: "#38d9ff",
										strokeWidth: 3.2,
										fill: "url(#spo2AreaGradient)",
										filter: "url(#spo2LineGlow)",
										dot: {
											r: 5,
											fill: "#5ee7ff",
											stroke: "#ffffff",
											strokeWidth: 1.5
										},
										activeDot: {
											r: 7.5,
											fill: "#ffffff",
											stroke: "#38d9ff",
											strokeWidth: 3
										}
									})
								]
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-[4px] px-[8px] text-right text-[12px] text-dash-muted",
						children: "Demo readings shown for layout preview — live sensor integration will replace these values automatically."
					})]
				})]
			})
		]
	});
}
function OxygenMonitoringPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OxygenMonitoringView, {});
}
//#endregion
export { OxygenMonitoringPage as component };
