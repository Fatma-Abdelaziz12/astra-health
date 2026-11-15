import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { r as useStoredState } from "./notifications-context-B3xN85g4.mjs";
import { H as Clock, K as ChevronRight, M as Heart, O as Lightbulb, S as Pause, Y as Check, _ as Rocket, d as Star, dt as ArrowRight, et as Calendar, f as Sparkles, g as RotateCcw, nt as CalendarCheck2, q as ChevronLeft, t as X, y as Play } from "../_libs/lucide-react.mjs";
import { n as dashboard_earth_scene_jpg_asset_default, t as DashboardShell } from "./DashboardShell-BARGy80N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/physical-activity-BcfQPKR6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** White athletic astronaut figure in a lunge-punch pose surrounded by a coral orbit ring. */
function AthleteOrbitBadge({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 116 88",
		fill: "none",
		"aria-hidden": true,
		className: cn("shrink-0 overflow-visible", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "pa-orbit-coral",
				x1: "8",
				y1: "68",
				x2: "108",
				y2: "26",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "#F0734F"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "#FF8A65"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M22 45C10 56 8 69 20 74C35 80 76 66 98 43C109 31 110 21 101 18",
				stroke: "url(#pa-orbit-coral)",
				strokeWidth: "4.2",
				strokeLinecap: "round",
				opacity: "0.92"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "#FFFFFF",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "62",
						cy: "14",
						r: "6.8"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M55 23C59 22 65 23 68 27L62 46C58 47 52 46 49 42L55 23Z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M54 25L41 31L46 41L52 38L49 32L56 29Z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 25L86 24L90 26L87 30L64 30Z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M60 44L75 56L72 74L66 74L68 59L54 48Z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M51 44L34 62L25 76L31 78L40 65L57 48Z" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M14 66C18 76 47 73 75 55C93 43 106 29 104 21",
				stroke: "url(#pa-orbit-coral)",
				strokeWidth: "4.4",
				strokeLinecap: "round"
			})
		]
	});
}
/** Coral flexed muscle arm icon for the Your Progress card. */
function CoralMuscleIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		fill: "none",
		"aria-hidden": true,
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "pa-muscle-grad",
				x1: "8",
				y1: "54",
				x2: "54",
				y2: "10",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "#F0734F"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "#FF8A65"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M15 47C11 40 12 27 19 18L24 12C27 9 32 10 34 14C35 17 34 21 31 23L28 26C32 25 36 27 38 30C42 29 48 30 51 35C54 41 51 49 43 52C34 55 21 55 15 47Z",
				fill: "url(#pa-muscle-grad)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M27 25C24 28 22 33 23 38",
				stroke: "#0b2054",
				strokeWidth: "2.4",
				strokeLinecap: "round",
				opacity: "0.55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M34 39C38 38 42 39 44 42",
				stroke: "#0b2054",
				strokeWidth: "2.2",
				strokeLinecap: "round",
				opacity: "0.45"
			})
		]
	});
}
/**
* Light-blue upper/full-body exercise illustrations matching the screenshot.
* Supports `animated` mode inside the full-screen Workout Player.
*/
function ExerciseFigure({ exerciseId, animated = false, className }) {
	if (exerciseId === "palm-press") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 160 128",
		fill: "none",
		"aria-hidden": true,
		className: cn("overflow-visible", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "pa-fig-blue-1",
				x1: "40",
				y1: "12",
				x2: "115",
				y2: "120",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "#8AC4FF"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "#4FA3FF"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "52",
				cy: "30",
				r: "14",
				fill: "url(#pa-fig-blue-1)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M36 52C36 46 43 44 52 44C61 44 68 48 70 56L72 114H33L36 52Z",
				fill: "url(#pa-fig-blue-1)",
				opacity: "0.92"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				className: animated ? "pa-anim-palm-left" : void 0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M44 56L72 78L94 64L98 51C99 48 103 48 104 51L103 70C102 74 99 77 95 79L71 89C66 91 61 90 57 86L38 69Z",
					fill: "#6EB5FF"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				className: animated ? "pa-anim-palm-right" : void 0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M52 58L78 82L101 66L106 49C107 46 112 47 112 51L109 72C108 77 105 80 100 82L76 93C71 95 65 93 61 89L44 70Z",
					fill: "#93CAFF"
				})
			}),
			animated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "pa-anim-tension",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "104",
					cy: "56",
					r: "14",
					stroke: "#FF8A65",
					strokeWidth: "2.5",
					strokeDasharray: "4 4"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M84 56H92M116 56H124",
					stroke: "#FF8A65",
					strokeWidth: "2.5",
					strokeLinecap: "round"
				})]
			})
		]
	});
	if (exerciseId === "arm-curl") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 160 128",
		fill: "none",
		"aria-hidden": true,
		className: cn("overflow-visible", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "pa-fig-blue-2",
				x1: "50",
				y1: "10",
				x2: "110",
				y2: "120",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "#8AC4FF"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "#4FA3FF"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "80",
				cy: "27",
				r: "13.5",
				fill: "url(#pa-fig-blue-2)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M54 52C57 45 68 42 80 42C92 42 103 45 106 52L101 114H59L54 52Z",
				fill: "url(#pa-fig-blue-2)",
				opacity: "0.9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M56 52C49 56 47 68 53 76L79 92C83 94 87 92 88 88L65 71L62 56Z",
				fill: "#69B2FF"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: animated ? "pa-anim-curl" : void 0,
				style: { transformOrigin: "102px 62px" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M104 52C111 56 113 69 107 77L80 94C76 96 72 93 72 89L95 72L98 56Z",
					fill: "#93CAFF"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "77",
					cy: "91",
					r: "5",
					fill: "#BEE0FF"
				})]
			}),
			animated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M119 58C125 68 123 82 115 90",
				stroke: "#FF8A65",
				strokeWidth: "2.8",
				strokeLinecap: "round",
				strokeDasharray: "4 4",
				className: "pa-anim-tension"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 180 128",
		fill: "none",
		"aria-hidden": true,
		className: cn("overflow-visible", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "pa-fig-blue-3",
				x1: "20",
				y1: "20",
				x2: "160",
				y2: "115",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "#8AC4FF"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "#4FA3FF"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 110H162",
				stroke: "#4FA3FF",
				strokeOpacity: "0.28",
				strokeWidth: "2.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: animated ? "pa-anim-crunch-torso" : void 0,
				style: { transformOrigin: "84px 96px" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "48",
						cy: "36",
						r: "12.5",
						fill: "url(#pa-fig-blue-3)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M44 50C50 48 58 51 64 59L86 88C90 94 86 102 78 103L65 103C56 101 47 89 40 72C36 62 37 53 44 50Z",
						fill: "url(#pa-fig-blue-3)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M55 56L72 64L83 56C86 54 90 57 88 61L75 73C71 76 66 76 62 73L49 63Z",
						fill: "#9ED0FF"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				className: animated ? "pa-anim-crunch-legs" : void 0,
				style: { transformOrigin: "88px 98px" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M82 93L116 61C122 55 130 57 134 65L152 103C154 107 149 111 144 109L134 105L122 76L91 104C84 107 78 101 82 93Z",
					fill: "#78BAFF"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M84 62C91 56 101 56 107 63",
				stroke: animated ? "#FF8A65" : "#4FA3FF",
				strokeWidth: "2.6",
				strokeLinecap: "round",
				className: animated ? "pa-anim-tension" : void 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M104 56L108 64L100 64",
				stroke: animated ? "#FF8A65" : "#4FA3FF",
				strokeWidth: "2.4",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		]
	});
}
/**
* Mission launch date used to compute live Mission Day counts relative to the current date.
* Calibrated so Nov 13, 2026 corresponds to Mission Day 42 (matching mission telemetry).
*/
var MISSION_START_ISO = "2026-10-03";
function getMissionDayAndDate(now = /* @__PURE__ */ new Date()) {
	const [yearStr, monthStr, dayStr] = MISSION_START_ISO.split("-");
	const startUtc = Date.UTC(Number(yearStr), Number(monthStr) - 1, Number(dayStr));
	const todayUtc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
	const diffDays = Math.floor((todayUtc - startUtc) / 864e5) + 1;
	const formattedDate = new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	}).format(now);
	return {
		missionDay: Math.max(1, diffDays),
		formattedDate
	};
}
var PHYSICAL_ACTIVITY_STATS = {
	progressPercent: 78,
	todayMinutes: 25,
	todayGoalMinutes: 45,
	weeklyCompletedDays: 5,
	weeklyTotalDays: 7,
	weeklyDotCount: 6
};
var TODAY_EXERCISES = [
	{
		id: "palm-press",
		name: "Palm Press",
		durationSec: 30,
		category: "Isometric Upper Body",
		targetMuscles: "Chest, Shoulders & Forearms",
		cue: "Press both palms firmly together at chest height while keeping your shoulders relaxed and core braced.",
		inTodaysMission: true
	},
	{
		id: "arm-curl",
		name: "Self-Resistance Arm Curl",
		durationSec: 30,
		category: "Self-Resistance",
		targetMuscles: "Biceps, Triceps & Stabilizers",
		cue: "Use one arm to apply steady downward resistance while curling the opposite arm smoothly upward.",
		inTodaysMission: true
	},
	{
		id: "core-contraction",
		name: "Core Contraction",
		durationSec: 30,
		category: "Microgravity Core",
		targetMuscles: "Abdominals & Hip Flexors",
		cue: "Draw ribs toward knees in a slow, controlled contraction to stabilize spinal posture in zero-G.",
		inTodaysMission: true
	}
];
var ALL_MICROGRAVITY_EXERCISES = [
	...TODAY_EXERCISES,
	{
		id: "calf-raise",
		name: "Foot-Loop Calf Raise",
		durationSec: 45,
		category: "Lower Limb Countermeasure",
		targetMuscles: "Calves & Achilles Tendon",
		cue: "Anchor feet into deck restraints and press onto toes smoothly for lower-limb bone loading.",
		inTodaysMission: false
	},
	{
		id: "scapular-squeeze",
		name: "Orbital Scapular Squeeze",
		durationSec: 30,
		category: "Postural Mobility",
		targetMuscles: "Upper Back & Rhomboids",
		cue: "Pull shoulder blades gently back and down, holding each squeeze for two seconds.",
		inTodaysMission: false
	},
	{
		id: "neck-glide",
		name: "Cervical Alignment Hold",
		durationSec: 30,
		category: "Mobility & Balance",
		targetMuscles: "Deep Neck Flexors",
		cue: "Tuck chin slightly back to counter microgravity forward-head drift.",
		inTodaysMission: false
	}
];
function WorkoutPlayerModal({ open, exercises, initialIndex = 0, completedIds, onCompleteExercise, onClose }) {
	const [index, setIndex] = (0, import_react.useState)(initialIndex);
	const current = exercises[index] ?? exercises[0];
	const [secondsLeft, setSecondsLeft] = (0, import_react.useState)(current?.durationSec ?? 30);
	const [playing, setPlaying] = (0, import_react.useState)(true);
	const [finished, setFinished] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const startIdx = Math.max(0, Math.min(initialIndex, exercises.length - 1));
		setIndex(startIdx);
		setSecondsLeft(exercises[startIdx]?.durationSec ?? 30);
		setPlaying(true);
		setFinished(false);
	}, [
		open,
		initialIndex,
		exercises
	]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKeyDown = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open, onClose]);
	(0, import_react.useEffect)(() => {
		if (!open || !playing || finished || !current) return;
		const timer = window.setInterval(() => {
			setSecondsLeft((prev) => {
				if (prev <= 1) {
					onCompleteExercise(current.id);
					if (index < exercises.length - 1) {
						const nextIdx = index + 1;
						setIndex(nextIdx);
						return exercises[nextIdx]?.durationSec ?? 30;
					}
					setPlaying(false);
					setFinished(true);
					return 0;
				}
				return prev - 1;
			});
		}, 1e3);
		return () => window.clearInterval(timer);
	}, [
		open,
		playing,
		finished,
		current,
		index,
		exercises,
		onCompleteExercise
	]);
	if (!open || !current) return null;
	const totalSec = current.durationSec || 30;
	const ringSize = 112;
	const stroke = 7;
	const radius = 105 / 2;
	const circumference = 2 * Math.PI * radius;
	const progressFraction = Math.max(0, Math.min(1, (totalSec - secondsLeft) / totalSec));
	const goToExercise = (nextIdx) => {
		const clamped = Math.max(0, Math.min(nextIdx, exercises.length - 1));
		setIndex(clamped);
		setSecondsLeft(exercises[clamped]?.durationSec ?? 30);
		setFinished(false);
		setPlaying(true);
	};
	const handleCompleteAndNext = () => {
		onCompleteExercise(current.id);
		if (index < exercises.length - 1) goToExercise(index + 1);
		else {
			setPlaying(false);
			setFinished(true);
		}
	};
	const handleRestartAll = () => {
		setIndex(0);
		setSecondsLeft(exercises[0]?.durationSec ?? 30);
		setFinished(false);
		setPlaying(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Workout Player",
		className: "fixed inset-0 z-50 flex flex-col items-center justify-between overflow-y-auto bg-[#040c22]/90 px-[18px] py-[22px] backdrop-blur-xl sm:px-[32px] sm:py-[28px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: dashboard_earth_scene_jpg_asset_default.url,
				alt: "",
				"aria-hidden": true,
				className: "pointer-events-none fixed inset-0 h-full w-full object-cover object-left-bottom opacity-35 select-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex w-full max-w-[920px] flex-col gap-[14px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-[16px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-[12px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-[8px] rounded-full border border-[#FF8A65]/40 bg-[#F0734F]/15 px-[14px] py-[5px] text-[14.5px] font-semibold text-[#FF8A65]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-[8px] rounded-full bg-[#FF8A65] shadow-[0_0_8px_#F0734F]" }), finished ? "Mission Complete" : `Exercise ${index + 1} of ${exercises.length}`]
						}), !finished && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-[14.5px] text-[#7FB8FF] sm:inline",
							children: current.category
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						"aria-label": "Close workout player",
						className: "flex size-[44px] items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white transition-colors hover:border-[#7FB8FF] hover:bg-white/[0.16]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-[22px]" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-label": "Workout progress",
					className: "grid grid-cols-3 gap-[10px]",
					children: exercises.map((ex, i) => {
						const isCompleted = completedIds.includes(ex.id) || finished || i < index;
						const isActive = !finished && i === index;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => goToExercise(i),
							"aria-label": `Jump to ${ex.name}`,
							className: "group flex flex-col gap-[6px] text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-[8px] w-full overflow-hidden rounded-full bg-white/15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("h-full rounded-full transition-all duration-500", isCompleted ? "w-full bg-gradient-to-r from-[#F0734F] to-[#FF8A65] shadow-[0_0_12px_rgba(240,115,79,0.6)]" : isActive ? "bg-gradient-to-r from-[#F0734F] to-[#FF8A65] shadow-[0_0_12px_rgba(240,115,79,0.55)]" : "w-0"),
									style: isActive && !isCompleted ? { width: `${Math.max(12, Math.round(progressFraction * 100))}%` } : void 0
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: cn("truncate text-[12.5px] transition-colors", isActive ? "font-semibold text-white" : isCompleted ? "text-[#FF8A65]" : "text-white/55 group-hover:text-white/80"),
								children: [
									i + 1,
									". ",
									ex.name
								]
							})]
						}, ex.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dash-card relative z-10 my-auto flex w-full max-w-[920px] flex-col items-center rounded-[28px] px-[24px] py-[28px] sm:px-[40px] sm:py-[36px]",
				children: finished ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex max-w-[520px] flex-col items-center py-[24px] text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-[78px] items-center justify-center rounded-full border border-[#FF8A65]/50 bg-gradient-to-br from-[#F0734F]/30 to-[#FF8A65]/15 text-[#FF8A65] shadow-[0_0_30px_rgba(240,115,79,0.45)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-[38px]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-[20px] text-[30px] font-bold text-white sm:text-[34px]",
							children: "Today's Mission Complete!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-[10px] text-[16px] leading-[24px] text-[#7FB8FF]",
							children: "All 3 microgravity exercises completed. Consistent orbital training preserves bone density and muscle strength."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-[28px] flex flex-wrap items-center justify-center gap-[14px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleRestartAll,
								className: "inline-flex h-[48px] items-center gap-[8px] rounded-[14px] border border-blue-300/35 bg-white/[0.06] px-[20px] text-[15.5px] font-medium text-white transition-colors hover:bg-white/[0.12]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-[18px]" }), "Repeat Workout"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: onClose,
								className: "inline-flex h-[48px] items-center gap-[8px] rounded-[14px] bg-gradient-to-r from-[#F0734F] to-[#FF8A65] px-[24px] text-[16px] font-bold text-white shadow-[0_0_24px_rgba(240,115,79,0.55)] transition-transform hover:scale-[1.02]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-[19px]",
									strokeWidth: 2.6
								}), "Back to Physical Activity"]
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid w-full grid-cols-1 items-center gap-[28px] md:grid-cols-[1.05fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center rounded-[22px] border border-blue-400/30 bg-[#071842]/70 px-[20px] py-[28px] shadow-[inset_0_0_32px_rgba(79,163,255,0.16)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExerciseFigure, {
							exerciseId: current.id,
							animated: playing,
							className: "h-[190px] w-[240px] sm:h-[220px] sm:w-[270px]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-[12px] inline-flex items-center gap-[7px] rounded-full border border-[#4FA3FF]/35 bg-[#4FA3FF]/12 px-[12px] py-[4px] text-[13px] font-medium text-[#7FB8FF]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-[7px] rounded-full", playing ? "animate-pulse bg-[#34d399]" : "bg-[#FF8A65]") }), playing ? "Live Motion Guide" : "Paused"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center md:items-start md:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[13.5px] font-semibold tracking-wide text-[#7FB8FF] uppercase",
								children: current.targetMuscles
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-[6px] text-[28px] leading-[34px] font-bold text-white sm:text-[32px]",
								children: current.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[10px] text-[15.5px] leading-[23px] text-white/80",
								children: current.cue
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-[22px] flex flex-wrap items-center justify-center gap-[20px] md:justify-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center justify-center",
									style: {
										width: ringSize,
										height: ringSize
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										width: ringSize,
										height: ringSize,
										className: "-rotate-90",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: ringSize / 2,
											cy: ringSize / 2,
											r: radius,
											fill: "none",
											stroke: "rgba(255,255,255,0.14)",
											strokeWidth: stroke
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: ringSize / 2,
											cy: ringSize / 2,
											r: radius,
											fill: "none",
											stroke: "#F0734F",
											strokeWidth: stroke,
											strokeLinecap: "round",
											strokeDasharray: `${circumference * (1 - progressFraction)} ${circumference}`,
											className: "transition-[stroke-dasharray] duration-500"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute flex flex-col items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[30px] leading-none font-bold tabular-nums text-white",
											children: secondsLeft
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-[2px] text-[12px] text-[#7FB8FF]",
											children: "sec"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-[10px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-[10px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setPlaying((p) => !p),
											className: "inline-flex h-[48px] items-center gap-[10px] rounded-[15px] bg-gradient-to-r from-[#F0734F] to-[#FF8A65] px-[22px] text-[16px] font-bold text-white shadow-[0_0_20px_rgba(240,115,79,0.5)] transition-transform hover:scale-[1.02]",
											children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-[18px] fill-white" }), "Pause"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-[18px] fill-white" }), "Resume"] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setSecondsLeft(totalSec),
											"aria-label": "Reset timer",
											className: "flex size-[48px] items-center justify-center rounded-[15px] border border-blue-300/35 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.14]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-[18px]" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-[8px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											disabled: index === 0,
											onClick: () => goToExercise(index - 1),
											className: "inline-flex h-[40px] items-center gap-[4px] rounded-[12px] border border-white/15 bg-white/[0.05] px-[14px] text-[14px] font-medium text-white transition-colors hover:bg-white/[0.12] disabled:cursor-not-allowed disabled:opacity-40",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-[16px]" }), "Previous"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: handleCompleteAndNext,
											className: "inline-flex h-[40px] items-center gap-[6px] rounded-[12px] border border-[#4FA3FF]/45 bg-[#4FA3FF]/20 px-[16px] text-[14px] font-semibold text-white transition-colors hover:bg-[#4FA3FF]/35",
											children: index < exercises.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Next Exercise", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-[16px]" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-[16px]" }), "Finish Workout"] })
										})]
									})]
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative z-10 h-[8px]" })
		]
	});
}
function AllExercisesModal({ open, onClose, onStartWorkout }) {
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKeyDown = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open, onClose]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "All Orbital Exercises",
		className: "fixed inset-0 z-50 flex items-center justify-center bg-[#040c22]/80 px-[16px] py-[24px] backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dash-card relative flex max-h-[85vh] w-full max-w-[740px] flex-col rounded-[24px] p-[24px] sm:p-[28px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-[12px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[22px] font-bold text-white sm:text-[24px]",
						children: "All Microgravity Exercises"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-[2px] text-[14.5px] text-[#7FB8FF]",
						children: "Full orbital countermeasure library for muscle and bone preservation."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						"aria-label": "Close exercise list",
						className: "flex size-[40px] items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.14]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-[20px]" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dash-scroll mt-[18px] grid grid-cols-1 gap-[12px] overflow-y-auto pr-[4px] sm:grid-cols-2",
					children: ALL_MICROGRAVITY_EXERCISES.map((ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-[14px] rounded-[18px] border border-blue-400/25 bg-[#0c2766]/55 p-[16px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-[56px] shrink-0 items-center justify-center rounded-[14px] border border-[#4FA3FF]/30 bg-[#071842]/70 p-[6px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExerciseFigure, {
								exerciseId: ex.id,
								className: "h-full w-full"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-[8px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "truncate text-[16px] font-semibold text-white",
										children: ex.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "shrink-0 text-[13px] font-medium text-[#7FB8FF]",
										children: [
											"• ",
											ex.durationSec,
											" sec"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-[2px] text-[12.5px] text-[#FF8A65]",
									children: ex.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-[6px] text-[13.5px] leading-[19px] text-white/75",
									children: ex.cue
								})
							]
						})]
					}, ex.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-[20px] flex justify-end gap-[12px] border-t border-white/10 pt-[16px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "h-[44px] rounded-[14px] border border-white/20 px-[18px] text-[15px] font-medium text-white transition-colors hover:bg-white/[0.08]",
						children: "Close"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							onClose();
							onStartWorkout();
						},
						className: "inline-flex h-[44px] items-center gap-[8px] rounded-[14px] bg-gradient-to-r from-[#F0734F] to-[#FF8A65] px-[20px] text-[15px] font-bold text-white shadow-[0_0_20px_rgba(240,115,79,0.45)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-[16px] fill-white" }), "Start Today's Workout"]
					})]
				})
			]
		})
	});
}
var COMPLETED_EXERCISES_KEY = "astra-physical-activity-completed-v1";
var DEFAULT_MISSION_SNAPSHOT = {
	missionDay: 42,
	formattedDate: "Nov 13, 2026"
};
function PhysicalActivity() {
	const [missionInfo, setMissionInfo] = (0, import_react.useState)(DEFAULT_MISSION_SNAPSHOT);
	const [completedIds, setCompletedIds] = useStoredState(COMPLETED_EXERCISES_KEY, []);
	const [playerOpen, setPlayerOpen] = (0, import_react.useState)(false);
	const [playerStartIndex, setPlayerStartIndex] = (0, import_react.useState)(0);
	const [viewAllOpen, setViewAllOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const update = () => setMissionInfo(getMissionDayAndDate(/* @__PURE__ */ new Date()));
		update();
		const interval = window.setInterval(update, 6e4);
		return () => window.clearInterval(interval);
	}, []);
	const toggleCompleted = (id) => {
		setCompletedIds((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
	};
	const markCompleted = (id) => {
		setCompletedIds((prev) => prev.includes(id) ? prev : [...prev, id]);
	};
	const openPlayerAt = (index) => {
		setPlayerStartIndex(index);
		setPlayerOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-1 flex-col gap-[20px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-[12px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-[16px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-[16px] sm:gap-[20px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AthleteOrbitBadge, { className: "h-[66px] w-[88px] sm:h-[78px] sm:w-[104px]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "h-[58px] w-[1.5px] shrink-0 bg-white/30"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-[30px] leading-[36px] font-bold tracking-[-0.01em] text-white sm:text-[36px] sm:leading-[42px]",
									children: "Physical Activity"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-[4px] flex items-center gap-[8px] text-[16px] italic text-[#7FB8FF] sm:text-[18.5px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Move more. Live healthier." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
										className: "size-[18px] shrink-0 text-[#7FB8FF]",
										strokeWidth: 1.9
									})]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dash-pill inline-flex h-[46px] shrink-0 items-center gap-[14px] px-[18px] text-[14.5px] font-medium text-white sm:px-[22px] sm:text-[15px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-[9px] whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "size-[11px] rounded-full bg-dash-green shadow-[0_0_10px_var(--dash-green)]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Mission Day ", missionInfo.missionDay] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "h-[18px] w-[1px] bg-white/35"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-[8px] whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
									className: "size-[17px] text-[#7FB8FF]",
									strokeWidth: 1.9
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: missionInfo.formattedDate })]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pl-[104px] sm:pl-[124px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-full bg-gradient-to-r from-[#4FA3FF]/55 via-[#4FA3FF]/25 to-transparent shadow-[0_0_10px_rgba(79,163,255,0.4)]" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Activity summary",
				className: "grid grid-cols-1 gap-[18px] md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dash-card flex min-h-[146px] items-center gap-[20px] rounded-[24px] px-[24px] py-[20px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoralMuscleIcon, { className: "size-[58px] shrink-0 drop-shadow-[0_0_12px_rgba(240,115,79,0.4)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[15.5px] font-medium text-white/85",
									children: "Your Progress"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-[2px] text-[34px] leading-[40px] font-bold tabular-nums text-white",
									children: [PHYSICAL_ACTIVITY_STATS.progressPercent, "%"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-[10px] h-[11px] w-full overflow-hidden rounded-full bg-white/15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full bg-gradient-to-r from-[#F0734F] to-[#FF8A65] shadow-[0_0_12px_rgba(240,115,79,0.55)]",
										style: { width: `${PHYSICAL_ACTIVITY_STATS.progressPercent}%` }
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dash-card flex min-h-[146px] items-center gap-[20px] rounded-[24px] px-[24px] py-[20px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
							className: "size-[54px] shrink-0 text-[#7FB8FF] drop-shadow-[0_0_12px_rgba(79,163,255,0.45)]",
							strokeWidth: 1.8
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[15.5px] font-medium text-white/85",
									children: "Today's Exercise"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-[2px] text-[34px] leading-[40px] font-bold tabular-nums text-white",
									children: [PHYSICAL_ACTIVITY_STATS.todayMinutes, " min"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-[10px] h-[11px] w-full overflow-hidden rounded-full bg-white/15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full bg-gradient-to-r from-[#4FA3FF] to-[#7FB8FF] shadow-[0_0_12px_rgba(79,163,255,0.5)]",
										style: { width: `${Math.round(PHYSICAL_ACTIVITY_STATS.todayMinutes / PHYSICAL_ACTIVITY_STATS.todayGoalMinutes * 100)}%` }
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dash-card flex min-h-[146px] items-center gap-[20px] rounded-[24px] px-[24px] py-[20px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
							className: "size-[54px] shrink-0 fill-[#F0734F] text-[#FF8A65] drop-shadow-[0_0_12px_rgba(240,115,79,0.45)]",
							strokeWidth: 1.5
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[15.5px] font-medium text-white/85",
									children: "Weekly Consistency"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-[2px] text-[34px] leading-[40px] font-bold tabular-nums text-white",
									children: [
										PHYSICAL_ACTIVITY_STATS.weeklyCompletedDays,
										" /",
										" ",
										PHYSICAL_ACTIVITY_STATS.weeklyTotalDays
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-[10px] flex items-center gap-[10px]",
									"aria-label": "5 of 6 dots active",
									children: Array.from({ length: PHYSICAL_ACTIVITY_STATS.weeklyDotCount }).map((_, idx) => {
										const filled = idx < PHYSICAL_ACTIVITY_STATS.weeklyCompletedDays;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-[16px] rounded-full", filled ? "bg-gradient-to-br from-[#F0734F] to-[#FF8A65] shadow-[0_0_10px_rgba(240,115,79,0.55)]" : "border-2 border-[#7FB8FF] bg-transparent") }, idx);
									})
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Today's Mission",
				className: "dash-card flex flex-col gap-[20px] rounded-[24px] px-[22px] py-[22px] sm:px-[26px] sm:py-[24px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-[12px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-[12px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck2, {
							className: "size-[28px] shrink-0 text-white/95 drop-shadow-[0_0_8px_rgba(79,163,255,0.45)]",
							strokeWidth: 1.9
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[22px] leading-[28px] font-bold text-white sm:text-[24px]",
							children: "Today's Mission"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setViewAllOpen(true),
						className: "inline-flex h-[40px] items-center gap-[8px] rounded-full border border-[#4FA3FF]/45 bg-white/[0.06] px-[18px] text-[15px] font-medium text-[#7FB8FF] transition-colors hover:border-[#7FB8FF] hover:bg-white/[0.12] hover:text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View All" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-[16px]" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 items-center gap-[16px] xl:grid-cols-[1fr_1fr_1fr_auto]",
					children: [TODAY_EXERCISES.map((ex, idx) => {
						const done = completedIds.includes(ex.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => openPlayerAt(idx),
							role: "button",
							tabIndex: 0,
							onKeyDown: (e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									openPlayerAt(idx);
								}
							},
							className: cn("group relative flex min-h-[214px] cursor-pointer flex-col items-center justify-between rounded-[20px] border px-[18px] pt-[18px] pb-[18px] text-center transition-all hover:-translate-y-[2px]", done ? "border-[#FF8A65]/55 bg-[#0c2766]/65 shadow-[0_0_20px_rgba(240,115,79,0.2)]" : "border-[#4FA3FF]/30 bg-[#0b235c]/50 hover:border-[#7FB8FF]/70 hover:bg-[#102c6f]/65 hover:shadow-[0_0_20px_rgba(79,163,255,0.22)]"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: (e) => {
										e.stopPropagation();
										toggleCompleted(ex.id);
									},
									"aria-pressed": done,
									"aria-label": `Mark ${ex.name} as ${done ? "incomplete" : "complete"}`,
									className: cn("absolute top-[14px] right-[14px] flex size-[24px] items-center justify-center rounded-full border-2 transition-colors", done ? "border-[#FF8A65] bg-gradient-to-br from-[#F0734F] to-[#FF8A65] text-white shadow-[0_0_10px_rgba(240,115,79,0.5)]" : "border-[#7FB8FF]/80 bg-transparent hover:border-white"),
									children: done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "size-[14px]",
										strokeWidth: 3
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-1 items-center justify-center py-[4px]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExerciseFigure, {
										exerciseId: ex.id,
										className: "h-[118px] w-[148px] transition-transform duration-200 group-hover:scale-[1.04]"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[17px] leading-[22px] font-semibold text-white",
									children: ex.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-[3px] text-[14.5px] text-white/75",
									children: [
										"• ",
										ex.durationSec,
										" sec"
									]
								})] })
							]
						}, ex.id);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => openPlayerAt(0),
						className: "flex h-[68px] w-full items-center justify-center gap-[12px] rounded-[18px] bg-gradient-to-r from-[#F0734F] to-[#FF8A65] px-[28px] text-[19px] font-bold text-white shadow-[0_0_26px_rgba(240,115,79,0.55),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_34px_rgba(255,138,101,0.75)] active:scale-[0.99] xl:h-[74px] xl:min-w-[215px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-[22px] fill-white text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Start Workout" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dash-card relative flex min-h-[70px] items-center justify-between gap-[16px] overflow-hidden rounded-[22px] px-[22px] py-[14px] sm:px-[26px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 flex items-center gap-[16px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, {
							className: "size-[30px] shrink-0 text-[#F0734F] drop-shadow-[0_0_10px_rgba(240,115,79,0.55)]",
							strokeWidth: 2
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[16px] leading-[23px] font-medium text-white/95 sm:text-[17.5px]",
							children: "A short workout today helps prevent muscle loss in space."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 flex shrink-0 items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, {
							className: "size-[32px] rotate-[12deg] text-[#7FB8FF] drop-shadow-[0_0_10px_rgba(79,163,255,0.55)]",
							strokeWidth: 1.9
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 260 64",
						fill: "none",
						"aria-hidden": true,
						className: "pointer-events-none absolute right-[12px] bottom-0 h-[56px] w-[240px] opacity-75",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "pa-rocket-trail",
							x1: "0",
							y1: "60",
							x2: "240",
							y2: "12",
							gradientUnits: "userSpaceOnUse",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#4FA3FF",
									stopOpacity: "0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "65%",
									stopColor: "#4FA3FF",
									stopOpacity: "0.6"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#7FB8FF",
									stopOpacity: "0.95"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M8 62C88 58 175 40 232 16",
							stroke: "url(#pa-rocket-trail)",
							strokeWidth: "2.4",
							strokeLinecap: "round"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkoutPlayerModal, {
				open: playerOpen,
				exercises: TODAY_EXERCISES,
				initialIndex: playerStartIndex,
				completedIds,
				onCompleteExercise: markCompleted,
				onClose: () => setPlayerOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AllExercisesModal, {
				open: viewAllOpen,
				onClose: () => setViewAllOpen(false),
				onStartWorkout: () => openPlayerAt(0)
			})
		]
	});
}
function PhysicalActivityRoutePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardShell, {
		hideDesktopHeader: true,
		headerTitle: "Physical Activity",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhysicalActivity, {})
	});
}
//#endregion
export { PhysicalActivityRoutePage as component };
