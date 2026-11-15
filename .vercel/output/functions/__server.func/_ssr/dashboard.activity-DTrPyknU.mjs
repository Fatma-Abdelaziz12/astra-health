import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useOnboarding } from "./onboarding-store-DD2TJWml.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as RunnerIcon } from "./icons-Bx_FMJzK.mjs";
import { c as WEEKLY_ACTIVITY_BARS, l as WEEKLY_ACTIVITY_TOTAL, r as EMG_LABEL, t as BONE_LABEL } from "./health-BbPFK9c3.mjs";
import { B as Dumbbell, G as ChevronUp, J as ChevronDown, L as Flame, Y as Check, c as Timer, lt as ArrowUp, s as Trash2, t as X, v as Plus, x as Pencil } from "../_libs/lucide-react.mjs";
import { r as WeeklyActivityBars } from "./charts-DBtPem6L.mjs";
import { a as InfoRow, i as DashCard, n as DASH_BTN, o as PageHeader, r as DASH_GHOST, t as CardHeading } from "./ui-CjvZ4TQA.mjs";
import { r as workoutApi, t as isAuthIssue } from "./manage-api-B9oWHdxC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.activity-DTrPyknU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NASA_EXERCISE = {
	title: "NASA — Astronaut Exercise (ISS research)",
	url: "https://www.nasa.gov/missions/station/iss-research/astronaut-exercise/"
};
var NASA_BONE = {
	title: "NASA — Risk of Spaceflight-Induced Bone Changes",
	url: "https://www.nasa.gov/reference/risk-of-spaceflight-induced-bone-changes/"
};
var NASA_FITNESS = {
	title: "NASA — Risk of Reduced Cardiorespiratory and Musculoskeletal Fitness",
	url: "https://www.nasa.gov/reference/risk-of-reduced-cardiorespiratory-and-musculoskeletal-fitness/"
};
var NASA_HUMAN_PERF = {
	title: "NASA-STD-3001 countermeasure standards (Human Performance 4.0)",
	url: "https://www.nasa.gov/reference/4-0-human-performance/"
};
var WHO_ACTIVITY = {
	title: "WHO guidelines on physical activity (2020)",
	url: "https://www.who.int/publications/i/item/9789240015128"
};
var GUIDANCE = {
	resistive: {
		benefits: "Heavy squats and deadlifts load the spine and hips the way gravity does on Earth. This is the primary defence against microgravity bone loss and keeps leg, hip and back strength at the level NASA's standards require — at least 80% of your pre-mission baseline — for EVAs, landings and unaided egress.",
		consequences: "Bones in microgravity lose density fastest at exactly these sites (hip and spine; untreated loss averages roughly 1–1.5% per month). If resistive sessions are consistently skipped, countermeasures can no longer offset that drift, and post-flight fracture risk and weakness rise over weeks — not after a single missed workout.",
		supports: [
			"Bone health",
			"Muscle strength",
			"Landing readiness"
		],
		references: [
			NASA_BONE,
			NASA_EXERCISE,
			NASA_HUMAN_PERF
		]
	},
	treadmill: {
		benefits: "Interval running combines impact loading (good for hip and spine bone) with a strong aerobic stimulus. It helps hold your in-mission VO₂max at the standard's fitness-for-duty level (≥32.9 mL/min/kg for microgravity EVAs) and supports heart, circulation and endurance.",
		consequences: "Without regular aerobic impact work, average detraining in orbit is 10–12% of pre-mission fitness, and cardiovascular readjustment can make standing and return-to-gravity transitions harder after landing. The effect accumulates over weeks of skipped sessions.",
		supports: [
			"Cardiovascular fitness",
			"Bone loading",
			"Endurance"
		],
		references: [
			NASA_FITNESS,
			NASA_EXERCISE,
			NASA_HUMAN_PERF
		]
	},
	cycle: {
		benefits: "Cycling on the ergometer raises heart rate and breathing without impact on joints — the sustainable cardio pillar of the daily 2.5-hour countermeasure block. It maintains aerobic capacity and legs' endurance while giving bone and connective tissue a low-impact day.",
		consequences: "Skipping the aerobic sessions lowers weekly cardio volume below what keeps VO₂max at the required in-mission floor; endurance and recovery capacity decline gradually, and every other session must then carry the full aerobic load.",
		supports: [
			"Cardiovascular fitness",
			"Endurance",
			"Joint-friendly load"
		],
		references: [
			NASA_EXERCISE,
			NASA_HUMAN_PERF,
			WHO_ACTIVITY
		]
	},
	core: {
		benefits: "Core and postural work retrains the deep stabilizers that no longer fight gravity in orbit. It protects spinal alignment, supports balanced fluid shifts and keeps the trunk strength you need for suit donning, tethers and translation tasks.",
		consequences: "When postural muscles decondition, back discomfort, reduced trunk control and slower readaptation to gravity become more likely at landing and during lunar or Martian transitions. This follows sustained omission, not occasional rest days.",
		supports: [
			"Postural stability",
			"Spine health",
			"Mobility"
		],
		references: [NASA_FITNESS, NASA_EXERCISE]
	},
	mobility: {
		benefits: "Stretching and joint-range routines preserve flexibility and agility — two of the performance areas NASA documents as declining in microgravity. They also lower injury risk during EVA prep and equipment tasks.",
		consequences: "Flexibility and coordination erode quietly over weeks without deliberate work; routine movements and suited tasks feel stiffer, and injury risk during transitions rises modestly.",
		supports: [
			"Flexibility",
			"Agility",
			"Injury prevention"
		],
		references: [NASA_FITNESS, WHO_ACTIVITY]
	},
	bands: {
		benefits: "Resistance-band work is a portable complement to the main devices: it maintains upper-body pulling and pressing strength and adds muscular endurance with minimal setup time.",
		consequences: "Bands alone cannot fully replace high axial loading for bone, so consistently dropping them mainly costs upper-body strength volume — one of the domains where crew show the largest average losses.",
		supports: [
			"Muscle strength",
			"Upper body",
			"Training volume"
		],
		references: [NASA_FITNESS, NASA_EXERCISE]
	}
};
var FOCUS_FALLBACK = {
	Resistance: "resistive",
	Cardio: "cycle",
	Core: "core",
	Mobility: "mobility"
};
/** Best-matching guidance for a session by name keywords, else by focus. */
function guidanceFor(session) {
	const n = session.name.toLowerCase();
	if (/(band|elastic)/.test(n)) return GUIDANCE["bands"];
	if (/(ared|squat|deadlift|weight|strength|resist)/.test(n)) return GUIDANCE["resistive"];
	if (/(treadmill|run|jog|sprint|t2)/.test(n)) return GUIDANCE["treadmill"];
	if (/(cevis|cycle|ergometer|bike|spin)/.test(n)) return GUIDANCE["cycle"];
	if (/(core|plank|postur|stabil|balance)/.test(n)) return GUIDANCE["core"];
	if (/(stretch|mobility|yoga|flex|warm-?up)/.test(n)) return GUIDANCE["mobility"];
	return GUIDANCE[FOCUS_FALLBACK[session.focus] ?? "resistive"];
}
var FOCUS_OPTIONS = [
	"Resistance",
	"Cardio",
	"Mobility",
	"Core"
];
function todayIso() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function ActivityPage() {
	const { data } = useOnboarding();
	const [sessions, setSessions] = (0, import_react.useState)(null);
	const [loadError, setLoadError] = (0, import_react.useState)(null);
	const [actionError, setActionError] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [duration, setDuration] = (0, import_react.useState)("25");
	const [focus, setFocus] = (0, import_react.useState)("Resistance");
	const [day, setDay] = (0, import_react.useState)(todayIso());
	const [notes, setNotes] = (0, import_react.useState)("");
	const [openGuidanceId, setOpenGuidanceId] = (0, import_react.useState)(null);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [draft, setDraft] = (0, import_react.useState)({
		name: "",
		durationMin: 25
	});
	(0, import_react.useEffect)(() => {
		let alive = true;
		workoutApi.list().then((rows) => alive && (setSessions(rows), setLoadError(null))).catch((err) => {
			if (!alive) return;
			setSessions([]);
			setLoadError(isAuthIssue(err) ? "Sign in to save your training log — changes won't persist without it." : "Could not load your training log. Check the backend connection.");
		});
		return () => {
			alive = false;
		};
	}, []);
	const rows = sessions ?? [];
	const completedCount = rows.filter((s) => s.completed).length;
	const totalLoggedMin = rows.reduce((sum, s) => sum + (s.completed ? s.durationMin : 0), 0);
	const runAction = async (fn, fail) => {
		setActionError(null);
		try {
			await fn();
		} catch (err) {
			setActionError(isAuthIssue(err) ? "Please sign in to save changes." : fail);
		}
	};
	const toggleSession = (s) => runAction(async () => {
		const next = await workoutApi.patch(s.id, { completed: !s.completed });
		setSessions((prev) => (prev ?? []).map((x) => x.id === s.id ? next : x));
	}, "Could not update that session.");
	const removeSession = (s) => runAction(async () => {
		await workoutApi.remove(s.id);
		setSessions((prev) => (prev ?? []).filter((x) => x.id !== s.id));
		setOpenGuidanceId((id) => id === s.id ? null : id);
		setEditingId((id) => id === s.id ? null : id);
	}, "Could not delete that session.");
	const handleAdd = (e) => {
		e.preventDefault();
		const trimmed = name.trim();
		if (!trimmed) return;
		const mins = Math.max(1, Math.min(600, Number(duration) || 25));
		runAction(async () => {
			const created = await workoutApi.create({
				name: trimmed,
				durationMin: mins,
				focus,
				sessionDay: day || todayIso(),
				notes: notes.trim() || null
			});
			setSessions((prev) => [created, ...prev ?? []].sort(byDayDesc));
			setName("");
			setNotes("");
		}, "Could not add that exercise.");
	};
	const startEdit = (s) => {
		setEditingId(s.id);
		setOpenGuidanceId(null);
		setDraft({
			name: s.name,
			focus: s.focus,
			durationMin: s.durationMin,
			sessionDay: s.sessionDay,
			notes: s.notes
		});
	};
	const saveEdit = (s) => runAction(async () => {
		const next = await workoutApi.patch(s.id, draft);
		setSessions((prev) => (prev ?? []).map((x) => x.id === s.id ? next : x));
		setEditingId(null);
	}, "Could not save those changes.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-col gap-[20px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Activity & Exercise",
				subtitle: "Weekly orbital exercise volume, musculoskeletal baseline, and countermeasure training log.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/onboarding/muscle-bone",
					className: DASH_GHOST,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-[16px]" }), "Update Muscle & Bone"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-[16px] sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
						className: "flex flex-col justify-between p-[22px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
								icon: RunnerIcon,
								title: "Weekly Total"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-[14px] flex items-baseline justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[36px] leading-[40px] font-bold tabular-nums text-foreground",
									children: WEEKLY_ACTIVITY_TOTAL.hoursLabel
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-[4px] rounded-full border border-dash-green/45 bg-dash-green/18 px-[10px] py-[2px] text-[13.5px] font-semibold text-dash-green",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
										className: "size-[14px]",
										strokeWidth: 2.8
									}), WEEKLY_ACTIVITY_TOTAL.trendLabel]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[8px] text-[13.5px] text-dash-muted",
								children: "Simulated baseline schedule"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
						className: "flex flex-col justify-between p-[22px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
								icon: Timer,
								title: "Completed Sessions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-[14px] flex items-baseline gap-[8px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[36px] leading-[40px] font-bold tabular-nums text-foreground",
									children: totalLoggedMin
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[16px] font-medium text-dash-ice",
									children: "min"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[8px] text-[13.5px] text-dash-muted",
								children: sessions === null ? "Loading your log…" : `${completedCount} of ${rows.length} sessions checked`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
						className: "flex flex-col justify-between p-[22px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
								icon: Dumbbell,
								title: "Muscle Mass"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-[14px] flex items-baseline gap-[6px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[36px] leading-[40px] font-bold tabular-nums text-foreground",
									children: data.muscle.muscleMass.trim() || "—"
								}), data.muscle.muscleMass.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[16px] font-medium text-dash-ice",
									children: "kg"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[8px] text-[13.5px] text-dash-muted",
								children: data.muscle.muscleMass.trim() ? "From your profile" : "Not entered in setup"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
						className: "flex flex-col justify-between p-[22px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
								icon: Flame,
								title: "Target EMG Focus"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-[14px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[28px] leading-[36px] font-bold text-foreground",
									children: EMG_LABEL[data.muscle.emgGroup]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-[8px] text-[13.5px] text-dash-muted",
								children: ["Bone density: ", BONE_LABEL[data.muscle.boneDensity]]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-[20px] xl:grid-cols-[1.05fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-[20px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
						className: "flex flex-col p-[22px] sm:p-[24px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
								icon: RunnerIcon,
								title: "7-Day Activity Breakdown"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[6px] text-[14.5px] text-dash-muted",
								children: "Daily active training duration across your orbital countermeasure cycle."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-[22px] rounded-[18px] border border-dash-line bg-white/[0.03] px-[16px] pt-[24px] pb-[14px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeeklyActivityBars, {
									bars: WEEKLY_ACTIVITY_BARS,
									height: 150,
									className: "w-full"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-[16px] grid grid-cols-2 gap-[10px] sm:grid-cols-4",
								children: WEEKLY_ACTIVITY_BARS.slice(0, 4).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-[12px] border border-dash-line bg-white/[0.03] px-[12px] py-[8px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[12.5px] text-dash-muted",
										children: b.day
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[16px] font-bold tabular-nums text-foreground",
										children: [Math.round(b.hours * 60), " min"]
									})]
								}, b.day))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
						className: "p-[22px] sm:p-[24px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
							icon: Dumbbell,
							title: "Musculoskeletal Profile"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-[10px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Muscle Mass",
									value: data.muscle.muscleMass.trim() ? `${data.muscle.muscleMass} kg` : "Not entered"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Bone Density (T-score)",
									value: BONE_LABEL[data.muscle.boneDensity]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Primary EMG Group",
									value: EMG_LABEL[data.muscle.emgGroup]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "EMG / DEXA Reports",
									value: data.muscle.emgFile || data.muscle.dexaFile ? [data.muscle.emgFile, data.muscle.dexaFile].filter(Boolean).join(", ") : "None uploaded"
								})
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
					className: "flex flex-col p-[22px] sm:p-[24px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
							icon: Timer,
							title: "Microgravity Countermeasure Log",
							right: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full border border-dash-cyan/45 bg-dash-blue/25 px-[12px] py-[3px] text-[13px] font-medium text-dash-ice tabular-nums",
								children: [
									completedCount,
									"/",
									rows.length,
									" Done"
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-[6px] text-[14.5px] text-dash-muted",
							children: "Track daily ARED resistance and aerobic sessions to prevent bone and muscle loss."
						}),
						(loadError || actionError) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-[10px] rounded-[12px] border border-coral/45 bg-coral/12 px-[14px] py-[8px] text-[13.5px] text-coral",
							children: actionError ?? loadError
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-[16px] flex flex-col gap-[10px]",
							children: sessions === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-[16px] border border-dashed border-dash-line py-[28px] text-center text-[15px] text-dash-muted",
								children: "Loading your training log…"
							}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-[16px] border border-dashed border-dash-line py-[28px] text-center text-[15px] text-dash-muted",
								children: "No sessions logged yet. Add your first countermeasure below — it will be saved to your account."
							}) : rows.map((s) => {
								const guidance = guidanceFor(s);
								const open = openGuidanceId === s.id;
								const editing = editingId === s.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("flex flex-col gap-[10px] rounded-[16px] border px-[14px] py-[12px] transition-colors", s.completed ? "border-dash-green/45 bg-dash-green/10" : "border-dash-line bg-white/[0.03] hover:bg-dash-cyan/[0.06]"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-[12px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => toggleSession(s),
												className: "flex min-w-0 flex-1 items-center gap-[12px] text-left",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn("flex size-[24px] shrink-0 items-center justify-center rounded-[7px] border transition-colors", s.completed ? "border-dash-green bg-dash-green text-onb-ink" : "border-dash-card-border bg-transparent"),
													children: s.completed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
														className: "size-[15px]",
														strokeWidth: 3
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: cn("truncate text-[15.5px] font-semibold", s.completed ? "text-foreground/75 line-through" : "text-foreground"),
														children: s.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-[13px] text-dash-muted",
														children: [
															s.focus,
															" · ",
															s.durationMin,
															" min",
															s.sessionDay ? ` · ${s.sessionDay}` : "",
															s.notes ? ` · ${s.notes}` : ""
														]
													})]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex shrink-0 items-center gap-[4px]",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setOpenGuidanceId(open ? null : s.id),
														"aria-label": open ? `Hide guidance for ${s.name}` : `Why ${s.name} matters`,
														className: "flex size-[34px] items-center justify-center rounded-full text-dash-muted transition-colors hover:bg-white/[0.08] hover:text-dash-ice",
														children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-[16px]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-[16px]" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => editing ? setEditingId(null) : startEdit(s),
														"aria-label": `Edit ${s.name}`,
														className: "flex size-[34px] items-center justify-center rounded-full text-dash-muted transition-colors hover:bg-white/[0.08] hover:text-dash-ice",
														children: editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-[16px]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-[15px]" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => removeSession(s),
														"aria-label": `Remove ${s.name}`,
														className: "flex size-[34px] items-center justify-center rounded-full text-dash-muted transition-colors hover:bg-white/[0.08] hover:text-coral",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-[16px]" })
													})
												]
											})]
										}),
										editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 gap-[10px] rounded-[14px] border border-dash-line bg-white/[0.03] p-[12px] sm:grid-cols-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: draft.name,
													onChange: (e) => setDraft({
														...draft,
														name: e.target.value
													}),
													"aria-label": "Exercise name",
													className: "dash-input h-[42px] px-[12px] text-[14px]"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-[10px]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "number",
														min: 1,
														max: 600,
														value: draft.durationMin ?? 25,
														onChange: (e) => setDraft({
															...draft,
															durationMin: Number(e.target.value) || 0
														}),
														"aria-label": "Duration in minutes",
														className: "dash-input h-[42px] w-1/2 px-[12px] text-[14px] tabular-nums"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
														value: draft.focus ?? "Resistance",
														onChange: (e) => setDraft({
															...draft,
															focus: e.target.value
														}),
														"aria-label": "Exercise focus",
														className: "dash-input h-[42px] w-1/2 px-[10px] text-[14px]",
														children: FOCUS_OPTIONS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: f,
															children: f
														}, f))
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "date",
													value: draft.sessionDay ?? "",
													onChange: (e) => setDraft({
														...draft,
														sessionDay: e.target.value || null
													}),
													"aria-label": "Session date",
													className: "dash-input h-[42px] px-[12px] text-[14px]"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: draft.notes ?? "",
													onChange: (e) => setDraft({
														...draft,
														notes: e.target.value || null
													}),
													placeholder: "Notes (optional)",
													"aria-label": "Session notes",
													className: "dash-input h-[42px] px-[12px] text-[14px]"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-[10px] sm:col-span-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														className: "dash-cta inline-flex h-[44px] items-center justify-center gap-[8px] rounded-full px-[22px] text-[15.5px] font-bold",
														onClick: () => saveEdit(s),
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-[16px]" }), "Save"]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														className: cn("dash-ghost inline-flex h-[44px] items-center justify-center gap-[8px] rounded-full px-[20px] text-[15px] font-medium", "border-dash-card-border"),
														onClick: () => setEditingId(null),
														children: "Cancel"
													})]
												})
											]
										}),
										open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-[10px] rounded-[14px] border border-dash-line bg-white/[0.03] p-[14px]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-[12px] border border-dash-green/35 bg-dash-green/10 px-[12px] py-[10px]",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[12.5px] font-bold tracking-[0.06em] text-dash-green uppercase",
															children: "If you do this exercise"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-[4px] text-[13.5px] leading-[19px] text-foreground/90",
															children: guidance.benefits
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "mt-[6px] text-[12.5px] text-dash-muted",
															children: ["Supports: ", guidance.supports.join(" · ")]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-[12px] border border-dash-amber/40 bg-dash-amber/10 px-[12px] py-[10px]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[12.5px] font-bold tracking-[0.06em] text-dash-amber uppercase",
														children: "If you consistently skip it"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-[4px] text-[13.5px] leading-[19px] text-foreground/90",
														children: guidance.consequences
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap items-center gap-[8px] text-[12px] text-dash-muted",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sources:" }), guidance.references.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
														href: r.url,
														target: "_blank",
														rel: "noreferrer",
														className: "rounded-full border border-dash-line px-[10px] py-[2px] text-dash-ice transition-colors hover:border-dash-cyan",
														children: r.title
													}, r.url))]
												})
											]
										})
									]
								}, s.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
							onSubmit: handleAdd,
							className: "mt-auto pt-[18px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 gap-[10px] rounded-[18px] border border-dash-line bg-white/[0.03] p-[14px] lg:grid-cols-[1.4fr_0.6fr_0.9fr_0.9fr_1fr_auto]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: name,
										onChange: (e) => setName(e.target.value),
										placeholder: "Add exercise (e.g. Resistance Bands)",
										"aria-label": "Exercise name",
										className: "dash-input h-[44px] px-[14px] text-[14.5px]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 1,
										max: 600,
										value: duration,
										onChange: (e) => setDuration(e.target.value),
										"aria-label": "Duration in minutes",
										className: "dash-input h-[44px] px-[12px] text-[14.5px] tabular-nums"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: focus,
										onChange: (e) => setFocus(e.target.value),
										"aria-label": "Exercise focus",
										className: "dash-input h-[44px] px-[12px] text-[14.5px]",
										children: FOCUS_OPTIONS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: f,
											children: f
										}, f))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										value: day,
										onChange: (e) => setDay(e.target.value),
										"aria-label": "Session date",
										className: "dash-input h-[44px] px-[12px] text-[14.5px]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: notes,
										onChange: (e) => setNotes(e.target.value),
										placeholder: "Notes (optional)",
										"aria-label": "Session notes",
										className: "dash-input h-[44px] px-[14px] text-[14.5px]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										className: DASH_BTN,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-[17px]" }), "Add"]
									})
								]
							})
						})
					]
				})]
			})
		]
	});
}
/** Newest day first; rows without a day keep creation order. */
function byDayDesc(a, b) {
	const da = a.sessionDay ?? "";
	const db = b.sessionDay ?? "";
	if (da !== db) return da < db ? 1 : -1;
	return a.createdAt < b.createdAt ? 1 : -1;
}
//#endregion
export { ActivityPage as component };
