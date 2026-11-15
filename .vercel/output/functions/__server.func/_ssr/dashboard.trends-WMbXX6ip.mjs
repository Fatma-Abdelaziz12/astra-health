import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useOnboarding } from "./onboarding-store-DD2TJWml.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as LungsIcon } from "./icons-Bx_FMJzK.mjs";
import { d as buildHealthTrendsSeries } from "./health-BbPFK9c3.mjs";
import { N as HeartPulse, Q as ChartColumn, V as Droplet, dt as ArrowRight, l as Thermometer, ot as BedDouble } from "../_libs/lucide-react.mjs";
import { t as LiveHealthTrendsChart } from "./charts-DBtPem6L.mjs";
import { i as DashCard, o as PageHeader, t as CardHeading } from "./ui-CjvZ4TQA.mjs";
import { n as TrendsLegend } from "./Overview-BlYyRFxn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.trends-WMbXX6ip.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HealthTrendsPage() {
	const { data } = useOnboarding();
	const [visible, setVisible] = (0, import_react.useState)({
		hr: true,
		spo2: true,
		activity: true
	});
	const series = (0, import_react.useMemo)(() => buildHealthTrendsSeries(data), [data]);
	const stats = (0, import_react.useMemo)(() => {
		const avg = (vals) => Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
		return {
			hrAvg: avg(series.map((p) => p.hr)),
			hrMax: Math.max(...series.map((p) => p.hr)),
			spo2Avg: avg(series.map((p) => p.spo2)),
			spo2Min: Math.min(...series.map((p) => p.spo2)),
			actAvg: avg(series.map((p) => p.activity)),
			actMax: Math.max(...series.map((p) => p.activity))
		};
	}, [series]);
	const toggleSeries = (key) => {
		setVisible((prev) => {
			const next = {
				...prev,
				[key]: !prev[key]
			};
			if (!next.hr && !next.spo2 && !next.activity) return prev;
			return next;
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-col gap-[20px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Health Trends",
				subtitle: "Combined 24-hour multi-metric telemetry normalized around your saved baselines."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-[16px] md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
						className: "flex items-center justify-between gap-[16px] p-[20px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] font-medium text-dash-muted",
								children: "Heart Rate (24h Avg)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-[6px] text-[34px] leading-[38px] font-bold tabular-nums text-foreground",
								children: [
									stats.hrAvg,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[16px] font-medium text-dash-blue",
										children: "index"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-[4px] text-[13px] text-dash-ice/80",
								children: ["Peak window: ", stats.hrMax]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {
							className: "size-[40px] shrink-0 text-dash-blue",
							strokeWidth: 1.9
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
						className: "flex items-center justify-between gap-[16px] p-[20px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] font-medium text-dash-muted",
								children: "SpO₂ Stability (24h Avg)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-[6px] text-[34px] leading-[38px] font-bold tabular-nums text-foreground",
								children: [
									stats.spo2Avg,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[16px] font-medium text-dash-cyan",
										children: "index"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-[4px] text-[13px] text-dash-ice/80",
								children: ["Low floor: ", stats.spo2Min]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplet, {
							className: "size-[40px] shrink-0 text-dash-cyan",
							strokeWidth: 1.9
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
						className: "flex items-center justify-between gap-[16px] p-[20px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] font-medium text-dash-muted",
								children: "Activity Index (24h Avg)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-[6px] text-[34px] leading-[38px] font-bold tabular-nums text-foreground",
								children: [
									stats.actAvg,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[16px] font-medium text-dash-pink",
										children: "index"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-[4px] text-[13px] text-dash-ice/80",
								children: ["Peak effort: ", stats.actMax]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
							className: "size-[40px] shrink-0 text-dash-pink",
							strokeWidth: 1.9
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
				className: "flex flex-col p-[20px] sm:p-[26px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
						icon: ChartColumn,
						title: "24-Hour Comparative Telemetry",
						right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendsLegend, {
							visible,
							onToggle: toggleSeries
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-[6px] text-[14px] text-dash-muted",
						children: "Click any legend item on the right to isolate or compare curves over the 24-hour UTC cycle."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-[16px] h-[300px] w-full sm:h-[360px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveHealthTrendsChart, {
							data: series,
							visible
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-[14px] sm:grid-cols-2 xl:grid-cols-5",
				children: [
					{
						to: "/heart-rate",
						label: "Heart Rate",
						sub: "ECG & HRV waveform",
						icon: HeartPulse
					},
					{
						to: "/dashboard/oxygen-monitoring",
						label: "SpO₂ Oxygen",
						sub: "Blood saturation",
						icon: Droplet
					},
					{
						to: "/respiratory",
						label: "Respiratory",
						sub: "Breathing cadence",
						icon: LungsIcon
					},
					{
						to: "/body-temperature",
						label: "Body Temp",
						sub: "Thermal stability",
						icon: Thermometer
					},
					{
						to: "/sleep-quality",
						label: "Sleep Quality",
						sub: "7D & 30D recovery",
						icon: BedDouble
					}
				].map((item) => {
					const IconCmp = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						className: "dash-card dash-card-link flex items-center justify-between gap-[12px] rounded-[18px] px-[18px] py-[16px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-[12px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCmp, { className: "size-[26px] shrink-0 text-dash-cyan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-[15.5px] font-bold text-foreground",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-[12.5px] text-dash-muted",
									children: item.sub
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-[17px] shrink-0 text-dash-ice" })]
					}, item.to);
				})
			})
		]
	});
}
//#endregion
export { HealthTrendsPage as component };
