import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useOnboarding } from "./onboarding-store-DD2TJWml.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as AvatarPortrait, r as ai_assistant_robot_png_asset_default, t as AvatarFigure } from "./AvatarArt-D7xQMTcX.mjs";
import { n as RunnerIcon, t as LungsIcon } from "./icons-Bx_FMJzK.mjs";
import { c as WEEKLY_ACTIVITY_BARS, d as buildHealthTrendsSeries, g as greetingFor, l as WEEKLY_ACTIVITY_TOTAL, m as displayName, p as dashboardOverviewCards, x as sleepQualitySummary } from "./health-BbPFK9c3.mjs";
import { M as Heart, Q as ChartColumn, V as Droplet, dt as ArrowRight, l as Thermometer, lt as ArrowUp, ot as BedDouble, st as BatteryMedium } from "../_libs/lucide-react.mjs";
import { n as RingGauge, r as WeeklyActivityBars, t as LiveHealthTrendsChart } from "./charts-DBtPem6L.mjs";
import { t as CardHeading } from "./ui-CjvZ4TQA.mjs";
import { t as useAccountName } from "./use-account-name-Ci6-Qn6E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Overview-BlYyRFxn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Main dashboard: responsive astronaut greeting & avatar on the left, health overview grid on the right. */
function DashboardOverview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full flex-1 grid-cols-1 gap-[22px] xl:grid-cols-[minmax(340px,0.84fr)_1.48fr] xl:items-stretch xl:gap-[26px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-[18px] lg:gap-[20px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-[12px] sm:grid-cols-3 md:grid-cols-5 xl:gap-[16px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HealthCards, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-[16px] md:grid-cols-[0.82fr_1.18fr] xl:gap-[22px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SleepCard, { className: "min-h-[172px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityCard, { className: "min-h-[172px]" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendsCard, { className: "flex flex-1 flex-col" })
			]
		})]
	});
}
function useGreeting() {
	const { data } = useOnboarding();
	const { account } = useAccountName();
	return {
		greeting: greetingFor((/* @__PURE__ */ new Date()).getHours()),
		name: account?.first ?? displayName(data)
	};
}
function Greeting() {
	const { greeting, name } = useGreeting();
	const long = name.length > 10;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "font-bold tracking-[-0.01em]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "block text-[26px] leading-[32px] text-foreground sm:text-[32px] sm:leading-[38px] xl:text-[38px] xl:leading-[44px]",
				children: [greeting, ","]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("block break-words text-dash-cyan", long ? "text-[28px] leading-[34px] sm:text-[32px] sm:leading-[38px] xl:text-[34px] xl:leading-[40px]" : "text-[32px] leading-[38px] sm:text-[38px] sm:leading-[44px] xl:text-[42px] xl:leading-[48px]"),
				children: [
					name,
					"!",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						role: "img",
						"aria-label": "waving hand",
						children: "👋"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-[6px] text-[15px] leading-[21px] text-foreground sm:mt-[10px] sm:text-[17px] sm:leading-[24px] xl:text-[19px]",
			children: "Here's your health overview today."
		})]
	});
}
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Astronaut Overview",
		className: "flex min-w-0 flex-col items-center justify-between gap-[16px] py-[4px] xl:items-start",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex w-full items-center gap-[16px] sm:gap-[20px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarPortrait, {
					size: 118,
					className: "sm:size-[136px] xl:size-[146px]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Greeting, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-full flex-1 items-center justify-center py-[4px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFigure, {
					height: 420,
					className: "h-[310px] w-auto sm:h-[370px] xl:h-[430px]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssistantTeaser, { className: "self-center xl:self-start" })
		]
	});
}
function AssistantTeaser({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/dashboard/assistant",
		"aria-label": "Open the AI Assistant",
		className: cn("group z-30 flex items-start", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dash-ring relative size-[70px] shrink-0 overflow-hidden transition-transform group-hover:scale-105 sm:size-[78px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: ai_assistant_robot_png_asset_default.url,
					alt: "",
					className: "absolute top-[6px] left-1/2 h-[64px] w-auto -translate-x-1/2 sm:h-[72px]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				"aria-hidden": true,
				className: "mt-[38px] flex items-center sm:mt-[42px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[1.5px] w-[14px] bg-dash-cyan/80" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-[8px] rounded-full bg-dash-cyan shadow-[0_0_8px_var(--dash-cyan)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[1.5px] w-[10px] bg-dash-cyan/80" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-[8px] flex flex-col items-start sm:mt-[10px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "dash-pill rounded-[20px] px-[18px] py-[8px] text-[15px] leading-[21px] text-foreground transition-colors group-hover:border-dash-cyan sm:px-[22px] sm:py-[10px] sm:text-[16.5px] sm:leading-[23px]",
					children: [
						"Exploring Space,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Caring for You",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							role: "img",
							"aria-label": "rocket",
							children: "🚀"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-[6px] ml-[5px] flex items-center gap-[7px] rounded-full border-[1.5px] border-dash-cyan/70 bg-dash-blue/55 px-[12px] py-[2px] text-[12.5px] font-bold text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-[8px] rounded-full bg-dash-green" }), "AI Assistant"]
				})]
			})
		]
	});
}
var CARD_ICON = {
	heart: {
		icon: Heart,
		filled: true
	},
	spo2: {
		icon: Droplet,
		filled: true
	},
	breathing: {
		icon: LungsIcon,
		filled: true
	},
	temperature: {
		icon: Thermometer,
		filled: false
	},
	energy: {
		icon: BatteryMedium,
		filled: false
	}
};
function HealthCards() {
	const { data } = useOnboarding();
	return dashboardOverviewCards(data).map((card, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HealthCard, {
		card,
		className: index === 4 ? "col-span-2 sm:col-span-1" : void 0
	}, card.id));
}
function HealthCard({ card, className }) {
	const { icon: Icon, filled } = CARD_ICON[card.id];
	const targetTo = card.id === "heart" ? "/heart-rate" : card.id === "spo2" ? "/dashboard/oxygen-monitoring" : card.id === "breathing" ? "/respiratory" : card.id === "temperature" ? "/body-temperature" : "/dashboard/vital-signs";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: targetTo,
		"aria-label": `${card.label}: ${card.value} ${card.unit}`,
		className: cn("dash-card dash-card-link flex min-h-[168px] min-w-0 cursor-pointer flex-col items-center rounded-[20px] px-[10px] pt-[16px] pb-[14px] text-center hover:-translate-y-[2px]", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-[42px] shrink-0 text-dash-ice drop-shadow-[0_0_10px_var(--dash-cyan)] xl:size-[46px]",
				...filled ? {
					fill: "currentColor",
					strokeWidth: 0
				} : { strokeWidth: 2 }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-[10px] flex h-[38px] items-baseline justify-center whitespace-nowrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "max-w-[96px] truncate text-[28px] leading-[36px] font-bold tabular-nums text-foreground xl:text-[31px] xl:leading-[40px]",
					children: card.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("text-foreground", card.compactUnit ? "ml-[2px] text-[19px] font-bold xl:text-[21px]" : "ml-[4px] text-[14.5px] xl:text-[15.5px]"),
					children: card.unit
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-[2px] text-[14.5px] leading-[19px] text-foreground xl:text-[15px]",
				children: card.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("mt-auto inline-flex items-center gap-[3px] pt-[6px] text-[14px] leading-[18px] font-semibold tabular-nums", card.trendTone === "up" ? "text-dash-green" : "text-dash-ice/90"),
				children: [card.trendTone === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
					className: "size-[14px]",
					strokeWidth: 2.8
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "size-[14px]",
					strokeWidth: 2.4
				}), card.trendLabel]
			})
		]
	});
}
function SleepCard({ className }) {
	const { data } = useOnboarding();
	const sleep = sleepQualitySummary(data);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/sleep-quality",
		className: cn("dash-card dash-card-link flex cursor-pointer flex-col rounded-[20px] px-[22px] pt-[16px] pb-[16px] hover:-translate-y-[2px]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
			icon: BedDouble,
			title: "Sleep Quality"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-auto flex items-end justify-between gap-[12px] pt-[12px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[34px] leading-[40px] font-bold whitespace-nowrap tabular-nums text-foreground xl:text-[36px]",
					children: [sleep.score, "%"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-[6px] inline-flex items-center gap-[4px] text-[15px] leading-[20px] font-semibold tabular-nums text-dash-green",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
						className: "size-[15px]",
						strokeWidth: 2.8
					}), sleep.trendLabel]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RingGauge, {
				size: 88,
				stroke: 9,
				fraction: sleep.score / 100,
				label: `Sleep quality ${sleep.score}%`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, {
					className: "size-[32px] text-foreground",
					strokeWidth: 1.8
				})
			})]
		})]
	});
}
function ActivityCard({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/physical-activity",
		className: cn("dash-card dash-card-link flex cursor-pointer flex-col justify-between gap-[16px] rounded-[20px] px-[22px] pt-[16px] pb-[14px] hover:-translate-y-[2px] sm:flex-row sm:items-stretch", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
				icon: RunnerIcon,
				title: "Activity (Exercises)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto pt-[12px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[32px] leading-[38px] font-bold whitespace-nowrap tabular-nums text-foreground xl:text-[34px]",
					children: WEEKLY_ACTIVITY_TOTAL.hoursLabel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-[6px] inline-flex items-center gap-[4px] text-[15px] leading-[20px] font-semibold tabular-nums text-dash-green",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
						className: "size-[15px]",
						strokeWidth: 2.8
					}), WEEKLY_ACTIVITY_TOTAL.trendLabel]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeeklyActivityBars, {
			bars: WEEKLY_ACTIVITY_BARS,
			height: 78,
			className: "w-full shrink-0 self-end sm:ml-auto sm:w-[220px] xl:w-[258px]"
		})]
	});
}
function TrendsCard({ className }) {
	const { data } = useOnboarding();
	const [visible, setVisible] = (0, import_react.useState)({
		hr: true,
		spo2: true,
		activity: true
	});
	const seriesData = (0, import_react.useMemo)(() => buildHealthTrendsSeries(data), [data]);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Health Trends",
		className: cn("dash-card dash-card-link flex min-h-[260px] flex-col rounded-[20px] px-[22px] pt-[14px] pb-[12px]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
			icon: ChartColumn,
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/dashboard/trends",
				className: "underline-offset-4 hover:underline",
				children: "Health Trends"
			}),
			right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendsLegend, {
				visible,
				onToggle: toggleSeries
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-[8px] flex min-h-[205px] flex-1 flex-col",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveHealthTrendsChart, {
				data: seriesData,
				visible
			})
		})]
	});
}
function TrendsLegend({ visible, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-wrap items-center gap-x-[16px] gap-y-[4px]",
		children: [
			{
				key: "hr",
				label: "Heart Rate",
				className: "bg-dash-blue"
			},
			{
				key: "spo2",
				label: "SpO₂",
				className: "bg-dash-cyan"
			},
			{
				key: "activity",
				label: "Activity",
				className: "bg-dash-pink"
			}
		].map((i) => {
			const isOn = visible ? visible[i.key] : true;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onToggle?.(i.key),
				"aria-pressed": isOn,
				className: cn("flex items-center gap-[7px] text-[14px] text-foreground transition-opacity sm:text-[15px]", !isOn && "opacity-45"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: cn("size-[12px] rounded-full sm:size-[14px]", i.className)
				}), i.label]
			}) }, i.key);
		})
	});
}
//#endregion
export { TrendsLegend as n, DashboardOverview as t };
