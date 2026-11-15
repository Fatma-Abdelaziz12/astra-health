import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { G as ChevronUp, H as Clock, J as ChevronDown, Y as Check, _ as Rocket, s as Trash2, t as X, v as Plus } from "../_libs/lucide-react.mjs";
import { i as DashCard, n as DASH_BTN, o as PageHeader, t as CardHeading } from "./ui-CjvZ4TQA.mjs";
import { n as plannerApi, t as isAuthIssue } from "./manage-api-B9oWHdxC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.mission-planner-BVziS5s6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	"Vital Check",
	"Exercise",
	"Nutrition",
	"EVA Prep",
	"Rest"
];
var PRIORITIES = [
	"low",
	"medium",
	"high"
];
var STATUSES = [
	"pending",
	"in_progress",
	"done"
];
var CATEGORY_STYLE = {
	"Vital Check": "border-dash-cyan/45 bg-dash-cyan/15 text-dash-ice",
	Exercise: "border-dash-green/45 bg-dash-green/15 text-dash-green",
	Nutrition: "border-dash-amber/45 bg-dash-amber/15 text-dash-amber",
	"EVA Prep": "border-coral/45 bg-coral/15 text-coral",
	Rest: "border-dash-blue/50 bg-dash-blue/20 text-dash-ice"
};
var PRIORITY_STYLE = {
	low: "border-dash-line text-dash-muted",
	medium: "border-dash-cyan/40 text-dash-ice",
	high: "border-coral/50 text-coral"
};
var STATUS_LABEL = {
	pending: "Pending",
	in_progress: "In progress",
	done: "Done"
};
function MissionPlannerPage() {
	const [missions, setMissions] = (0, import_react.useState)(null);
	const [loadError, setLoadError] = (0, import_react.useState)(null);
	const [actionError, setActionError] = (0, import_react.useState)(null);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [title, setTitle] = (0, import_react.useState)("");
	const [timeUtc, setTimeUtc] = (0, import_react.useState)("16:00 UTC");
	const [category, setCategory] = (0, import_react.useState)("Vital Check");
	const [priority, setPriority] = (0, import_react.useState)("medium");
	const [duration, setDuration] = (0, import_react.useState)("");
	const [openDetailsId, setOpenDetailsId] = (0, import_react.useState)(null);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [draft, setDraft] = (0, import_react.useState)({ title: "" });
	(0, import_react.useEffect)(() => {
		let alive = true;
		plannerApi.list().then((rows) => alive && (setMissions(rows), setLoadError(null))).catch((err) => {
			if (!alive) return;
			setMissions([]);
			setLoadError(isAuthIssue(err) ? "Sign in to save your mission plan — changes won't persist without it." : "Could not load your mission plan. Check the backend connection.");
		});
		return () => {
			alive = false;
		};
	}, []);
	const rows = missions ?? [];
	const isDone = (m) => m.status === "done";
	const doneCount = rows.filter(isDone).length;
	const pct = rows.length ? Math.round(doneCount / rows.length * 100) : 0;
	const visible = rows.filter((m) => filter === "all" ? true : filter === "done" ? isDone(m) : !isDone(m));
	const runAction = async (fn, fail) => {
		setActionError(null);
		try {
			await fn();
		} catch (err) {
			setActionError(isAuthIssue(err) ? "Please sign in to save changes." : fail);
		}
	};
	const replace = (m) => setMissions((prev) => (prev ?? []).map((x) => x.id === m.id ? m : x));
	const toggleDone = (m) => runAction(async () => {
		replace(await plannerApi.patch(m.id, { status: isDone(m) ? "pending" : "done" }));
	}, "Could not update that task.");
	const removeTask = (m) => runAction(async () => {
		await plannerApi.remove(m.id);
		setMissions((prev) => (prev ?? []).filter((x) => x.id !== m.id));
		setOpenDetailsId((id) => id === m.id ? null : id);
		setEditingId((id) => id === m.id ? null : id);
	}, "Could not delete that task.");
	const handleAdd = (e) => {
		e.preventDefault();
		const trimmed = title.trim();
		if (!trimmed) return;
		runAction(async () => {
			const created = await plannerApi.create({
				title: trimmed,
				timeUtc: timeUtc.trim() || "12:00 UTC",
				category,
				priority,
				durationMin: duration ? Math.max(1, Math.min(1440, Number(duration))) : null
			});
			setMissions((prev) => [...prev ?? [], created].sort(bySchedule));
			setTitle("");
		}, "Could not add that task.");
	};
	const startEdit = (m) => {
		setEditingId(m.id);
		setOpenDetailsId(m.id);
		setDraft({
			title: m.title,
			description: m.description,
			category: m.category,
			timeUtc: m.timeUtc,
			scheduledDay: m.scheduledDay,
			durationMin: m.durationMin,
			priority: m.priority,
			status: m.status
		});
	};
	const saveEdit = (m) => runAction(async () => {
		const payload = {
			...draft,
			title: (draft.title ?? "").trim() || m.title
		};
		replace(await plannerApi.patch(m.id, payload));
		setEditingId(null);
		setMissions((prev) => (prev ?? []).slice().sort(bySchedule));
	}, "Could not save those changes.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-col gap-[20px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Mission Planner",
				subtitle: "Organize daily vital checks, exercise countermeasures, supplements, and EVA preparation. Everything here is saved to your account."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-[18px] lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
					className: "flex flex-col justify-between p-[22px] sm:p-[24px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
							icon: Rocket,
							title: "Daily Mission Progress",
							right: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[20px] font-bold tabular-nums text-dash-cyan",
								children: [pct, "%"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-[16px] h-[12px] w-full overflow-hidden rounded-full bg-dash-track",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-[linear-gradient(90deg,#38bdf8_0%,#00e5ff_100%)] shadow-[0_0_14px_var(--dash-cyan)] transition-all duration-500",
								style: { width: `${pct}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-[10px] text-[14px] text-dash-muted",
							children: missions === null ? "Loading your plan…" : `${doneCount} of ${rows.length} scheduled mission blocks completed`
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
					className: "flex flex-col justify-between p-[22px] sm:p-[24px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
						icon: Clock,
						title: "Schedule Filters"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-[14px] flex flex-wrap gap-[10px]",
						children: [
							{
								id: "all",
								label: `All (${rows.length})`
							},
							{
								id: "pending",
								label: `Pending (${rows.length - doneCount})`
							},
							{
								id: "done",
								label: `Completed (${doneCount})`
							}
						].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setFilter(tab.id),
							className: cn("h-[42px] rounded-full border px-[18px] text-[14px] font-semibold transition-colors", filter === tab.id ? "dash-nav-active border-dash-cyan text-foreground" : "border-dash-card-border bg-white/[0.04] text-dash-muted hover:text-foreground"),
							children: tab.label
						}, tab.id))
					})]
				})]
			}),
			(loadError || actionError) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-[12px] border border-coral/45 bg-coral/12 px-[16px] py-[10px] text-[14px] text-coral",
				children: actionError ?? loadError
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashCard, {
				className: "p-[18px] sm:p-[22px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleAdd,
					className: "grid grid-cols-1 gap-[12px] md:grid-cols-2 xl:grid-cols-[1.6fr_0.85fr_0.95fr_0.7fr_0.65fr_auto]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: title,
							onChange: (e) => setTitle(e.target.value),
							placeholder: "Add a mission task (e.g. Cabin O₂ Calibration)",
							"aria-label": "Mission task title",
							className: "dash-input h-[46px] px-[16px] text-[15px]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: timeUtc,
							onChange: (e) => setTimeUtc(e.target.value),
							placeholder: "16:00 UTC",
							"aria-label": "Scheduled UTC time",
							className: "dash-input h-[46px] px-[16px] text-[15px] tabular-nums"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: category,
							onChange: (e) => setCategory(e.target.value),
							"aria-label": "Task category",
							className: "dash-input h-[46px] px-[14px] text-[15px]",
							children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c,
								children: c
							}, c))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: priority,
							onChange: (e) => setPriority(e.target.value),
							"aria-label": "Task priority",
							className: "dash-input h-[46px] px-[14px] text-[15px]",
							children: PRIORITIES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: p,
								children: p
							}, p))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: 1,
							max: 1440,
							value: duration,
							onChange: (e) => setDuration(e.target.value),
							placeholder: "min",
							"aria-label": "Duration in minutes (optional)",
							className: "dash-input h-[46px] px-[14px] text-[15px] tabular-nums"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: cn(DASH_BTN, "h-[46px]"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-[18px]" }), "Add Task"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
				className: "p-[18px] sm:p-[24px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeading, {
					icon: Clock,
					title: "Scheduled Timeline"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-[16px] flex flex-col gap-[10px]",
					children: missions === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-[16px] border border-dashed border-dash-line py-[28px] text-center text-[15px] text-dash-muted",
						children: "Loading your plan…"
					}) : visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-[16px] border border-dashed border-dash-line py-[28px] text-center text-[15px] text-dash-muted",
						children: rows.length === 0 ? "No missions yet. Add your first task above — it will be saved to your account." : "No mission tasks match this filter."
					}) : visible.map((task) => {
						const done = isDone(task);
						const editing = editingId === task.id;
						const open = openDetailsId === task.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex flex-col gap-[10px] rounded-[16px] border px-[16px] py-[14px] transition-colors", done ? "border-dash-green/40 bg-dash-green/10" : "border-dash-line bg-white/[0.03] hover:bg-dash-cyan/[0.06]"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-[10px] sm:flex-row sm:items-center sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => toggleDone(task),
									className: "flex min-w-0 flex-1 items-center gap-[14px] text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("flex size-[24px] shrink-0 items-center justify-center rounded-[7px] border transition-colors", done ? "border-dash-green bg-dash-green text-onb-ink" : "border-dash-card-border bg-transparent"),
										children: done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "size-[15px]",
											strokeWidth: 3
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: cn("truncate text-[16px] font-semibold", done ? "text-foreground/70 line-through" : "text-foreground"),
											children: task.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-[2px] text-[13px] tabular-nums text-dash-muted",
											children: [
												task.timeUtc,
												task.scheduledDay ? ` · ${task.scheduledDay}` : "",
												task.durationMin ? ` · ${task.durationMin} min` : "",
												task.status === "in_progress" ? " · in progress" : ""
											]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-[8px] sm:justify-end",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("rounded-full border px-[12px] py-[3px] text-[12.5px] font-semibold", CATEGORY_STYLE[task.category]),
											children: task.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("rounded-full border px-[10px] py-[3px] text-[12px] font-semibold capitalize", PRIORITY_STYLE[task.priority]),
											children: task.priority
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												if (open) {
													setEditingId(null);
													setOpenDetailsId(null);
												} else startEdit(task);
											},
											"aria-label": `Edit ${task.title}`,
											className: "flex size-[36px] items-center justify-center rounded-full text-dash-muted transition-colors hover:bg-white/[0.08] hover:text-dash-ice",
											children: open && editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-[16px]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-[16px]" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => removeTask(task),
											"aria-label": `Delete ${task.title}`,
											className: "flex size-[36px] items-center justify-center rounded-full text-dash-muted transition-colors hover:bg-white/[0.08] hover:text-coral",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-[17px]" })
										})
									]
								})]
							}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 gap-[10px] rounded-[14px] border border-dash-line bg-white/[0.03] p-[12px] md:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: draft.title ?? "",
										onChange: (e) => setDraft({
											...draft,
											title: e.target.value
										}),
										"aria-label": "Task title",
										className: "dash-input h-[42px] px-[12px] text-[14px] md:col-span-2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: draft.timeUtc ?? "",
										onChange: (e) => setDraft({
											...draft,
											timeUtc: e.target.value
										}),
										placeholder: "16:00 UTC",
										"aria-label": "Scheduled UTC time",
										className: "dash-input h-[42px] px-[12px] text-[14px] tabular-nums"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										value: draft.scheduledDay ?? "",
										onChange: (e) => setDraft({
											...draft,
											scheduledDay: e.target.value || null
										}),
										"aria-label": "Scheduled day",
										className: "dash-input h-[42px] px-[12px] text-[14px]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: draft.category ?? "Vital Check",
										onChange: (e) => setDraft({
											...draft,
											category: e.target.value
										}),
										"aria-label": "Task category",
										className: "dash-input h-[42px] px-[12px] text-[14px]",
										children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: c,
											children: c
										}, c))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: draft.priority ?? "medium",
										onChange: (e) => setDraft({
											...draft,
											priority: e.target.value
										}),
										"aria-label": "Task priority",
										className: "dash-input h-[42px] px-[12px] text-[14px]",
										children: PRIORITIES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: p,
											children: p
										}, p))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: draft.status ?? "pending",
										onChange: (e) => setDraft({
											...draft,
											status: e.target.value
										}),
										"aria-label": "Task status",
										className: "dash-input h-[42px] px-[12px] text-[14px]",
										children: STATUSES.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: st,
											children: STATUS_LABEL[st]
										}, st))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 1,
										max: 1440,
										value: draft.durationMin ?? "",
										onChange: (e) => setDraft({
											...draft,
											durationMin: e.target.value ? Number(e.target.value) : null
										}),
										placeholder: "Duration (min)",
										"aria-label": "Duration in minutes",
										className: "dash-input h-[42px] px-[12px] text-[14px] tabular-nums"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: draft.description ?? "",
										onChange: (e) => setDraft({
											...draft,
											description: e.target.value || null
										}),
										placeholder: "Description / details (optional)",
										"aria-label": "Task description",
										rows: 2,
										className: "dash-input min-h-[42px] px-[12px] py-[10px] text-[14px] md:col-span-2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-[10px] md:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "dash-cta inline-flex h-[44px] items-center justify-center gap-[8px] rounded-full px-[22px] text-[15.5px] font-bold",
											onClick: () => saveEdit(task),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-[16px]" }), "Save Changes"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: cn("dash-ghost inline-flex h-[44px] items-center justify-center gap-[8px] rounded-full px-[20px] text-[15px] font-medium", "border-dash-card-border"),
											onClick: () => {
												setEditingId(null);
												setOpenDetailsId(null);
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-[15px]" }), "Cancel"]
										})]
									})
								]
							})]
						}, task.id);
					})
				})]
			})
		]
	});
}
/** Same ordering the API uses: scheduled day first, then UTC time string. */
function bySchedule(a, b) {
	const da = a.scheduledDay ?? "9999-12-31";
	const db = b.scheduledDay ?? "9999-12-31";
	if (da !== db) return da < db ? -1 : 1;
	if (a.timeUtc !== b.timeUtc) return a.timeUtc < b.timeUtc ? -1 : 1;
	return a.createdAt < b.createdAt ? -1 : 1;
}
//#endregion
export { MissionPlannerPage as component };
