import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { M as Heart, N as HeartPulse, Q as ChartColumn, Y as Check, mt as Activity, ut as ArrowUpDown } from "../_libs/lucide-react.mjs";
import { t as DashboardShell } from "./DashboardShell-BARGy80N.mjs";
import { c as ReferenceLine, i as XAxis, l as ResponsiveContainer, n as LineChart, o as Line, r as YAxis, s as CartesianGrid, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/heart-rate-AFWl9ZeN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Animated glowing cyan ECG (P-Q-R-S-T) waveform scrolling continuously from right to left.
* Scroll speed adapts smoothly to the current simulated BPM.
*/
function EcgMonitor({ bpm }) {
	const canvasRef = (0, import_react.useRef)(null);
	const bpmRef = (0, import_react.useRef)(bpm);
	bpmRef.current = bpm;
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let rafId = 0;
		let phase = 0;
		let lastTs = performance.now();
		const resize = () => {
			const parent = canvas.parentElement;
			if (!parent) return;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const w = parent.clientWidth;
			const h = parent.clientHeight;
			if (w <= 0 || h <= 0) return;
			canvas.width = Math.round(w * dpr);
			canvas.height = Math.round(h * dpr);
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		resize();
		const ro = new ResizeObserver(resize);
		if (canvas.parentElement) ro.observe(canvas.parentElement);
		const pqrst = (t) => {
			if (t >= .1 && t < .2) {
				const u = (t - .1) / .1;
				return .15 * Math.sin(u * Math.PI);
			}
			if (t >= .26 && t < .29) {
				const u = (t - .26) / .03;
				return -.18 * Math.sin(u * Math.PI);
			}
			if (t >= .29 && t < .34) {
				const u = (t - .29) / .05;
				return u < .5 ? u / .5 * 1 : (1 - u) / .5 * 1;
			}
			if (t >= .34 && t < .38) {
				const u = (t - .34) / .04;
				return -.34 * Math.sin(u * Math.PI);
			}
			if (t >= .48 && t < .65) {
				const u = (t - .48) / .17;
				return .25 * Math.sin(u * Math.PI);
			}
			return .012 * Math.sin(t * Math.PI * 6);
		};
		const draw = (now) => {
			const dt = Math.min(.05, (now - lastTs) / 1e3);
			lastTs = now;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const w = canvas.width / dpr;
			const h = canvas.height / dpr;
			if (w > 0 && h > 0) {
				ctx.clearRect(0, 0, w, h);
				const beatsPerSec = Math.max(.7, bpmRef.current / 60);
				const pxPerBeat = 190;
				phase = (phase + dt * beatsPerSec * pxPerBeat) % pxPerBeat;
				const baselineY = h * .58;
				const ampScale = h * .44;
				ctx.save();
				ctx.beginPath();
				for (let x = 0; x <= w; x += 2) {
					const t = ((x + phase) % pxPerBeat + pxPerBeat) % pxPerBeat / pxPerBeat;
					const y = baselineY - pqrst(t) * ampScale;
					if (x === 0) ctx.moveTo(x, y);
					else ctx.lineTo(x, y);
				}
				ctx.strokeStyle = "#00e5ff";
				ctx.lineWidth = 2.6;
				ctx.lineJoin = "round";
				ctx.lineCap = "round";
				ctx.shadowColor = "#00e5ff";
				ctx.shadowBlur = 14;
				ctx.stroke();
				ctx.shadowBlur = 0;
				ctx.strokeStyle = "#9ff7ff";
				ctx.lineWidth = 1.25;
				ctx.stroke();
				ctx.restore();
			}
			rafId = window.requestAnimationFrame(draw);
		};
		rafId = window.requestAnimationFrame(draw);
		return () => {
			window.cancelAnimationFrame(rafId);
			ro.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "ECG Monitoring",
		className: "dash-card flex flex-col rounded-[20px] px-[24px] pt-[14px] pb-[14px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-[12px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-[10px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
						className: "size-[26px] text-dash-cyan drop-shadow-[0_0_8px_var(--dash-cyan)]",
						strokeWidth: 2.2
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[20px] leading-[24px] font-bold text-foreground",
						children: "ECG Monitoring"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-[8px] text-[15px] font-semibold text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "size-[11px] rounded-full bg-dash-green shadow-[0_0_10px_var(--dash-green)]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Live" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mt-[10px] h-[165px] w-full overflow-hidden rounded-[14px] border border-dash-cyan/30 bg-[oklch(0.18_0.08_263_/_68%)] shadow-[inset_0_0_24px_oklch(0.22_0.09_262_/_60%)]",
				style: {
					backgroundImage: "linear-gradient(to right, rgba(56, 178, 255, 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 178, 255, 0.14) 1px, transparent 1px)",
					backgroundSize: "24px 24px"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					"aria-label": "Animated electrocardiogram signal waveform",
					className: "block h-full w-full"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-[10px] flex flex-wrap items-center justify-between gap-[10px] text-[13.5px] text-dash-ice/90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-[10px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex h-[24px] items-center rounded-[6px] border border-dash-cyan/45 bg-dash-blue/25 px-[8px] text-dash-cyan",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
							className: "size-[15px]",
							strokeWidth: 2.2
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Electrocardiogram Signal (Demo Simulation)"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium tabular-nums text-dash-muted",
					children: "25 mm/s \xA0|\xA0 10 mm/mV"
				})]
			})
		]
	});
}
var HEART_RATE_DEMO_STATS = {
	initialBpm: 72,
	hrvMs: 48,
	restingHrBpm: 62,
	averageHrBpm: 78,
	maxHrBpm: 118,
	minHrBpm: 54,
	healthyRange: {
		min: 60,
		max: 100
	},
	normalChartBand: {
		low: 50,
		high: 85
	}
};
var HEART_RATE_24H_SERIES = [
	{
		time: "00:00",
		bpm: 60
	},
	{
		time: "01:30",
		bpm: 61
	},
	{
		time: "03:00",
		bpm: 66
	},
	{
		time: "04:30",
		bpm: 71
	},
	{
		time: "06:00",
		bpm: 72
	},
	{
		time: "07:30",
		bpm: 67
	},
	{
		time: "09:00",
		bpm: 63
	},
	{
		time: "10:30",
		bpm: 67
	},
	{
		time: "12:00",
		bpm: 72
	},
	{
		time: "13:30",
		bpm: 76
	},
	{
		time: "15:00",
		bpm: 79
	},
	{
		time: "16:30",
		bpm: 79
	},
	{
		time: "18:00",
		bpm: 77
	},
	{
		time: "19:30",
		bpm: 71
	},
	{
		time: "21:00",
		bpm: 65
	},
	{
		time: "22:30",
		bpm: 65
	},
	{
		time: "24:00",
		bpm: 68
	}
];
var HEART_RATE_MAJOR_TICKS = [
	"00:00",
	"06:00",
	"12:00",
	"18:00",
	"24:00"
];
function evaluateHeartRateStatus(bpm, range = HEART_RATE_DEMO_STATS.healthyRange) {
	if (bpm >= range.min && bpm <= range.max) return {
		label: "Normal",
		tone: "normal"
	};
	if (bpm >= range.min - 10 && bpm < range.min || bpm > range.max && bpm <= range.max + 15) return {
		label: "Elevated",
		tone: "amber"
	};
	return {
		label: "Alert",
		tone: "critical"
	};
}
/** Generates a small realistic simulated variation around 68–76 BPM. */
function nextSimulatedBpm(prev) {
	const candidate = prev + (Math.floor(Math.random() * 5) - 2);
	if (candidate < 68) return 68 + Math.floor(Math.random() * 3);
	if (candidate > 76) return 76 - Math.floor(Math.random() * 3);
	return candidate;
}
function HeartChartTooltip({ active, payload, label }) {
	if (!active || !payload?.length) return null;
	const bpm = payload[0]?.value;
	if (bpm === void 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[10px] border border-dash-cyan/70 bg-[oklch(0.2_0.09_262_/_94%)] px-[11px] py-[7px] shadow-[0_0_16px_oklch(0.8_0.135_228_/_40%)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-[11.5px] text-dash-muted",
			children: [label, " UTC"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-[15px] font-bold text-foreground",
			children: [
				bpm,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[12.5px] font-medium text-dash-cyan",
					children: "BPM"
				})
			]
		})]
	});
}
/** 24-hour Recharts heart rate curve with Normal Range dashed bounds (50 and 85 BPM). */
function HeartRateChart({ data, normalLow = 50, normalHigh = 85 }) {
	const chartData = [...data];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-[170px] w-full min-w-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data: chartData,
				margin: {
					top: 8,
					right: 16,
					left: -12,
					bottom: 2
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
						id: "hrLineGlow",
						x: "-10%",
						y: "-30%",
						width: "120%",
						height: "160%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
							dx: "0",
							dy: "0",
							stdDeviation: "4",
							floodColor: "#00e5ff"
						})
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: "rgba(120, 195, 255, 0.16)",
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "time",
						ticks: HEART_RATE_MAJOR_TICKS,
						stroke: "rgba(160, 210, 255, 0.35)",
						tick: {
							fill: "#e6f2ff",
							fontSize: 13.5,
							fontWeight: 500
						},
						tickLine: { stroke: "rgba(160, 210, 255, 0.35)" },
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
						stroke: "rgba(160, 210, 255, 0.35)",
						tick: {
							fill: "#e6f2ff",
							fontSize: 13.5,
							fontWeight: 500
						},
						tickLine: false,
						axisLine: false,
						width: 44
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartChartTooltip, {}),
						cursor: {
							stroke: "rgba(0, 229, 255, 0.4)",
							strokeWidth: 1.5
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
						y: normalHigh,
						stroke: "#38d9ff",
						strokeOpacity: .68,
						strokeDasharray: "6 6",
						strokeWidth: 1.5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
						y: normalLow,
						stroke: "#38d9ff",
						strokeOpacity: .68,
						strokeDasharray: "6 6",
						strokeWidth: 1.5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "bpm",
						stroke: "#1fe3ff",
						strokeWidth: 3,
						filter: "url(#hrLineGlow)",
						dot: {
							r: 4,
							fill: "#9ff7ff",
							stroke: "#00d4ff",
							strokeWidth: 2
						},
						activeDot: {
							r: 6.5,
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
/** Semicircular segmented cyan gauge displaying the current BPM. */
function HeartRateGauge({ bpm, min = 40, max = 120 }) {
	const segments = 6;
	const fraction = (Math.min(max, Math.max(min, bpm)) - min) / (max - min);
	const activeSegments = Math.max(1, Math.round(fraction * segments));
	const cx = 130;
	const cy = 126;
	const radius = 94;
	const segDeg = 164 / segments;
	const polar = (angleDeg) => {
		const rad = (180 - angleDeg) * Math.PI / 180;
		return {
			x: cx + radius * Math.cos(rad),
			y: cy - radius * Math.sin(rad)
		};
	};
	const arcPath = (startDeg, endDeg) => {
		const start = polar(startDeg);
		const end = polar(endDeg);
		return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${radius} ${radius} 0 0 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex w-[250px] shrink-0 flex-col items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 260 144",
			className: "w-[240px] overflow-visible",
			role: "img",
			"aria-label": `Current heart rate gauge: ${bpm} BPM`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
				id: "gaugeGlow",
				x: "-20%",
				y: "-20%",
				width: "140%",
				height: "140%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
					dx: "0",
					dy: "0",
					stdDeviation: "4",
					floodColor: "#00e5ff"
				})
			}) }), Array.from({ length: segments }).map((_, i) => {
				const start = i * 30.53333333333333;
				const end = start + segDeg;
				const isActive = i < activeSegments;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: arcPath(start, end),
					fill: "none",
					stroke: isActive ? "#1fe3ff" : "rgba(95, 155, 235, 0.35)",
					strokeWidth: 18,
					strokeLinecap: "butt",
					filter: isActive ? "url(#gaugeGlow)" : void 0,
					className: "transition-all duration-500"
				}, i);
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "-mt-[86px] flex flex-col items-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
					className: "size-[28px] text-dash-ice drop-shadow-[0_0_10px_var(--dash-cyan)]",
					fill: "currentColor",
					strokeWidth: 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-[4px] flex items-baseline whitespace-nowrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[34px] leading-[38px] font-bold tabular-nums text-foreground",
						children: bpm
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-[5px] text-[15px] font-semibold text-dash-ice",
						children: "BPM"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-[2px] text-[14.5px] font-medium text-dash-muted",
					children: "Current"
				})
			]
		})]
	});
}
/** Reusable glassmorphism summary card for Heart Rate Monitoring metrics. */
function StatCard({ icon, value, unit, label, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("dash-card flex min-h-[152px] flex-col items-center justify-center rounded-[20px] px-[14px] py-[16px] text-center sm:min-h-[168px]", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-[42px] items-center justify-center",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-[10px] flex items-baseline justify-center whitespace-nowrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[36px] leading-[40px] font-bold tabular-nums text-foreground",
					children: value
				}), unit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-[6px] text-[16px] font-semibold text-dash-ice",
					children: unit
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-[6px] text-[15px] leading-[20px] font-medium text-dash-muted",
				children: label
			})
		]
	});
}
/** Circular glowing heart-pulse icon shown on the top-right of the Heart Rate Monitoring header. */
function HeartRateHeaderBadge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-label": "Heart Rate Telemetry",
		className: "dash-ring flex size-[54px] shrink-0 items-center justify-center bg-[radial-gradient(circle_at_50%_35%,oklch(0.45_0.16_248)_0%,oklch(0.22_0.1_264)_78%)] lg:size-[68px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {
			className: "size-[26px] text-dash-ice drop-shadow-[0_0_10px_var(--dash-cyan)] lg:size-[34px]",
			strokeWidth: 2
		})
	});
}
/**
* Heart Rate Monitoring page: responsive 5 top stat cards (live 2s simulated BPM),
* animated ECG waveform, and 3-part Heart Rate Statistics.
*/
function HeartRate() {
	const [bpm, setBpm] = (0, import_react.useState)(HEART_RATE_DEMO_STATS.initialBpm);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			setBpm((prev) => nextSimulatedBpm(prev));
		}, 2e3);
		return () => window.clearInterval(id);
	}, []);
	const status = evaluateHeartRateStatus(bpm);
	const badgeToneClass = status.tone === "normal" ? "border-dash-green/50 bg-[oklch(0.42_0.12_155_/_55%)] shadow-[0_0_12px_oklch(0.75_0.18_148_/_25%)]" : status.tone === "amber" ? "border-dash-amber/60 bg-[oklch(0.45_0.12_78_/_55%)]" : "border-coral/70 bg-[oklch(0.42_0.16_28_/_60%)]";
	const dotToneClass = status.tone === "normal" ? "bg-dash-green shadow-[0_0_8px_var(--dash-green)]" : status.tone === "amber" ? "bg-dash-amber shadow-[0_0_8px_var(--dash-amber)]" : "bg-coral shadow-[0_0_8px_var(--coral)]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-1 flex-col gap-[18px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.65fr_0.9fr_1fr_1fr_1.15fr] xl:gap-[16px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dash-card relative flex min-h-[164px] items-center rounded-[20px] px-[18px] py-[16px] sm:col-span-2 xl:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dash-ring flex size-[98px] shrink-0 items-center justify-center bg-[radial-gradient(circle_at_50%_35%,oklch(0.45_0.16_248)_0%,oklch(0.22_0.1_264)_80%)] sm:size-[116px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {
								className: "size-[48px] text-dash-ice drop-shadow-[0_0_12px_var(--dash-cyan)] sm:size-[56px]",
								strokeWidth: 1.9
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-[16px] flex min-w-0 flex-1 flex-col items-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("inline-flex items-center gap-[8px] rounded-full border px-[14px] py-[4px] text-[13.5px] font-semibold text-foreground", badgeToneClass),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: cn("size-[9px] rounded-full", dotToneClass)
									}), status.label]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-[10px] flex items-baseline whitespace-nowrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[40px] leading-[42px] font-bold tabular-nums text-foreground sm:text-[44px] sm:leading-[46px]",
										children: bpm
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-[8px] text-[18px] font-semibold text-dash-ice sm:text-[20px]",
										children: "BPM"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-[4px] text-[14.5px] font-medium text-dash-ice/90",
									children: "Current Heart Rate"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
							className: "size-[38px] text-dash-cyan drop-shadow-[0_0_10px_var(--dash-cyan)]",
							strokeWidth: 2.2
						}),
						value: HEART_RATE_DEMO_STATS.hrvMs,
						unit: "ms",
						label: "HRV"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							className: "size-[38px] text-dash-ice drop-shadow-[0_0_12px_var(--dash-cyan)]",
							fill: "currentColor",
							strokeWidth: 0
						}),
						value: HEART_RATE_DEMO_STATS.restingHrBpm,
						unit: "BPM",
						label: "Resting HR"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
							className: "size-[38px] text-dash-cyan drop-shadow-[0_0_10px_var(--dash-cyan)]",
							strokeWidth: 2.2
						}),
						value: HEART_RATE_DEMO_STATS.averageHrBpm,
						unit: "BPM",
						label: "Average HR"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, {
							className: "size-[36px] text-dash-cyan drop-shadow-[0_0_10px_var(--dash-cyan)]",
							strokeWidth: 2.2
						}),
						value: `${HEART_RATE_DEMO_STATS.maxHrBpm} / ${HEART_RATE_DEMO_STATS.minHrBpm}`,
						unit: "BPM",
						label: "Max / Min HR"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EcgMonitor, { bpm }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Heart Rate Statistics",
				className: "dash-card flex flex-1 flex-col rounded-[20px] px-[20px] py-[16px] sm:px-[24px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-[12px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-[10px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
							className: "size-[26px] text-dash-cyan drop-shadow-[0_0_8px_var(--dash-cyan)]",
							strokeWidth: 2.2
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[20px] leading-[24px] font-bold text-foreground",
							children: "Heart Rate Statistics"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-[18px] text-[14px] font-medium text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-[8px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "size-[11px] rounded-full bg-dash-blue shadow-[0_0_8px_var(--dash-blue)]"
							}), "Heart Rate"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-[8px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "w-[18px] border-t-[2px] border-dashed border-dash-cyan"
							}), "Normal Range"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-[12px] flex min-h-0 flex-1 flex-col items-stretch gap-[20px] lg:flex-row lg:items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex shrink-0 justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartRateGauge, { bpm })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "hidden h-[155px] w-[1px] shrink-0 bg-dash-line lg:block"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-w-0 flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartRateChart, {
								data: HEART_RATE_24H_SERIES,
								normalLow: HEART_RATE_DEMO_STATS.normalChartBand.low,
								normalHigh: HEART_RATE_DEMO_STATS.normalChartBand.high
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex w-full shrink-0 flex-col justify-between rounded-[18px] border border-dash-cyan/35 bg-[oklch(0.24_0.1_260_/_55%)] px-[20px] py-[16px] shadow-[inset_0_1px_0_oklch(1_0_0_/_12%)] lg:h-[146px] lg:w-[238px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-[12px] border-b border-dash-line pb-[12px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
									className: "size-[26px] shrink-0 text-dash-ice drop-shadow-[0_0_10px_var(--dash-cyan)]",
									fill: "currentColor",
									strokeWidth: 0
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[17px] font-semibold text-foreground",
									children: "Healthy Range"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-[12px] flex items-center justify-between gap-[10px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-baseline whitespace-nowrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[28px] leading-[32px] font-bold text-foreground",
										children: [
											HEART_RATE_DEMO_STATS.healthyRange.min,
											" -",
											" ",
											HEART_RATE_DEMO_STATS.healthyRange.max
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-[6px] text-[15px] font-semibold text-dash-ice",
										children: "BPM"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-label": "Within healthy range",
									className: "flex size-[28px] shrink-0 items-center justify-center rounded-full bg-dash-green text-onb-ink shadow-[0_0_12px_var(--dash-green)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "size-[17px]",
										strokeWidth: 3
									})
								})]
							})]
						})
					]
				})]
			})
		]
	});
}
function HeartRateRoutePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardShell, {
		headerTitle: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Heart Rate",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"Monitoring"
		] }),
		headerRight: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartRateHeaderBadge, {}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartRate, {})
	});
}
//#endregion
export { HeartRateRoutePage as component };
