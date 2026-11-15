import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as AvatarPortrait } from "./AvatarArt-D7xQMTcX.mjs";
import { n as useNotifications } from "./notifications-context-B3xN85g4.mjs";
import { I as FlaskConical, N as HeartPulse, W as CircleCheck, at as Bell, b as Pill, ct as Atom, f as Sparkles, i as UserCheck, it as Bone, m as Settings, o as TriangleAlert, rt as Brain, u as Sun } from "../_libs/lucide-react.mjs";
import { t as DashboardShell } from "./DashboardShell-BARGy80N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/medications-0ZwCsZ1O.js
var import_jsx_runtime = require_jsx_runtime();
var medical = [
	{
		id: "motion-sickness",
		category: "Motion Sickness",
		name: "Scopolamine Patch",
		dose: "1 patch",
		sideEffects: "Drowsiness",
		expiryDate: "2028-11-01",
		status: "Available"
	},
	{
		id: "anti-allergic",
		category: "Anti-Allergic",
		name: "Cetirizine 10mg",
		dose: "1 tab",
		sideEffects: "N/A",
		expiryDate: "2027-05-10",
		status: "Restock Soon"
	},
	{
		id: "anti-inflammatory",
		category: "Anti-Inflammatory",
		name: "Zolpidem 5mg",
		dose: "1 tab",
		sideEffects: "Dizziness",
		expiryDate: "2027-01-15",
		status: "Under Review"
	},
	{
		id: "sleep-related",
		category: "Sleep-Related Medications",
		name: "Zolpidem 5mg",
		dose: "1 tab",
		sideEffects: "Dizziness",
		expiryDate: "2027-01-15",
		status: "Available"
	},
	{
		id: "pain-relief",
		category: "Pain Relief",
		name: "Cetirizine 10mg",
		dose: "1 tab",
		sideEffects: "Drowsiness",
		expiryDate: "2027-05-10",
		status: "Restock Soon"
	},
	{
		id: "emergency-kit",
		category: "Emergency Kit",
		name: "Emergency Kit",
		dose: "1 tab",
		sideEffects: "N/A",
		expiryDate: "2028-07-01",
		status: "Available"
	}
];
var supplements = [
	{
		id: "iron",
		name: "Iron",
		policy: "Individualized",
		dailyTarget: "8-18 mg",
		status: "Target Met",
		column: "left",
		iconKey: "flask"
	},
	{
		id: "vitamin-d3",
		name: "Vitamin D3",
		policy: "NASA maintenance protocol",
		dailyTarget: "1,000 IU",
		status: "Target Met",
		column: "left",
		iconKey: "sun"
	},
	{
		id: "vitamin-b1",
		name: "Vitamin B1",
		policy: "Dietary target",
		dailyTarget: "1.1-1.2 mg",
		status: "Target Met",
		column: "left",
		iconKey: "b1"
	},
	{
		id: "vitamin-b2",
		name: "Vitamin B2",
		policy: "Dietary target",
		dailyTarget: "1.1-1.3 mg",
		status: "Target Met",
		column: "left",
		iconKey: "b2"
	},
	{
		id: "vitamin-b3",
		name: "Vitamin B3",
		policy: "Dietary target",
		dailyTarget: "14-16 mg",
		status: "Target Met",
		column: "left",
		iconKey: "b3"
	},
	{
		id: "vitamin-b5",
		name: "Vitamin B5",
		policy: "Dietary target",
		dailyTarget: "5 mg",
		status: "Target Met",
		column: "left",
		iconKey: "b5"
	},
	{
		id: "vitamin-b6",
		name: "Vitamin B6",
		policy: "Dietary target",
		dailyTarget: "1.3 mg",
		status: "Individualized Plan",
		column: "right",
		iconKey: "b6"
	},
	{
		id: "vitamin-b7",
		name: "Vitamin B7",
		policy: "Dietary target",
		dailyTarget: "30 µg",
		status: "Target Met",
		column: "right",
		iconKey: "b7"
	},
	{
		id: "vitamin-b9",
		name: "Vitamin B9",
		policy: "Dietary target",
		dailyTarget: "400 µg",
		status: "Target Met",
		column: "right",
		iconKey: "b9"
	},
	{
		id: "vitamin-b12",
		name: "Vitamin B12",
		policy: "Dietary target",
		dailyTarget: "2.4 µg",
		status: "Individualized Plan",
		column: "right",
		iconKey: "b12"
	},
	{
		id: "calcium",
		name: "Calcium",
		policy: "Dietary target",
		dailyTarget: "1,000-1,500 mg",
		status: "Individualized Plan",
		column: "right",
		iconKey: "calcium"
	},
	{
		id: "magnesium",
		name: "Magnesium",
		policy: "Dietary target",
		dailyTarget: "320-420 mg",
		status: "Target Met",
		column: "right",
		iconKey: "magnesium"
	}
];
var NINETY_DAYS_MS = 7776e6;
/**
* Evaluates whether an ISO expiry date (YYYY-MM-DD) is already past or within 90 days of referenceDate.
*/
function getExpiryUrgency(expiryDate, referenceDate = /* @__PURE__ */ new Date()) {
	const parsed = Date.parse(`${expiryDate}T23:59:59Z`);
	if (Number.isNaN(parsed)) return "normal";
	const diff = parsed - referenceDate.getTime();
	if (diff < 0) return "expired";
	if (diff <= NINETY_DAYS_MS) return "soon";
	return "normal";
}
function StatusPill({ status, className }) {
	if (status === "Available") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex h-[30px] min-w-[136px] items-center gap-[8px] rounded-full border border-dash-cyan/50 bg-[linear-gradient(180deg,rgba(20,104,156,0.75)_0%,rgba(12,67,114,0.85)_100%)] px-[14px] text-[13.5px] font-medium whitespace-nowrap text-foreground shadow-[0_0_12px_rgba(0,229,255,0.2)]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
			className: "size-[15px] shrink-0 text-dash-cyan",
			strokeWidth: 2.2
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: status })]
	});
	if (status === "Restock Soon") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex h-[30px] min-w-[136px] items-center gap-[8px] rounded-full border border-[#fb923c]/60 bg-[linear-gradient(180deg,rgba(242,107,75,0.92)_0%,rgba(218,74,56,0.92)_100%)] px-[14px] text-[13.5px] font-medium whitespace-nowrap text-white shadow-[0_0_14px_rgba(242,92,60,0.38)]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
			className: "size-[15px] shrink-0 text-white",
			strokeWidth: 2.2
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: status })]
	});
	if (status === "Under Review") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex h-[30px] min-w-[136px] items-center gap-[8px] rounded-full border border-blue-300/60 bg-[linear-gradient(180deg,rgba(78,154,255,0.92)_0%,rgba(46,112,235,0.94)_100%)] px-[14px] text-[13.5px] font-medium whitespace-nowrap text-white shadow-[0_0_14px_rgba(59,130,246,0.42)]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "size-[10px] shrink-0 rounded-full bg-blue-100 shadow-sm"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: status })]
	});
	if (status === "Target Met") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-[7px] text-[13.5px] font-medium whitespace-nowrap text-dash-cyan", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
			className: "size-[15px] shrink-0 text-dash-cyan",
			strokeWidth: 2.2
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: status })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-[7px] text-[13.5px] font-medium whitespace-nowrap text-[#ff8b6b]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "size-[10px] shrink-0 rounded-full bg-[#f97352] shadow-[0_0_8px_rgba(249,115,82,0.7)]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: status })]
	});
}
function MedicalTable({ items }) {
	const getExpiryClass = (expiryDate) => {
		const urgency = getExpiryUrgency(expiryDate);
		if (urgency === "expired") return "text-red-400 font-medium";
		if (urgency === "soon") return "text-dash-amber font-medium";
		return "text-foreground/90";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Medical Inventory",
		className: "dash-card w-full rounded-[24px] px-[16px] pt-[18px] pb-[16px] duration-500 animate-in fade-in slide-in-from-bottom-3 sm:px-[24px] sm:pt-[20px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden w-full md:block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid w-full grid-cols-[1.4fr_1.4fr_0.8fr_1fr_1.3fr_1.1fr] items-center gap-[12px] border-b border-dash-line px-[10px] pb-[12px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-[10px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {
							className: "size-[26px] shrink-0 text-dash-cyan drop-shadow-[0_0_10px_var(--dash-cyan)]",
							strokeWidth: 1.9
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[21px] leading-[24px] font-bold text-foreground",
							children: "Medical"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[14.5px] font-medium text-dash-ice/80",
						children: "Medication Name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[14.5px] font-medium text-dash-ice/80",
						children: "Dose"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[14.5px] font-medium text-dash-ice/80",
						children: "Side Effects"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[14.5px] font-medium text-dash-ice/80",
						children: "Expiry Date"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Status"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-dash-line/70",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid w-full grid-cols-[1.4fr_1.4fr_0.8fr_1fr_1.3fr_1.1fr] items-center gap-[12px] rounded-[10px] px-[10px] py-[11px] text-[15px] transition-colors hover:bg-dash-cyan/[0.08]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate font-medium text-foreground",
							children: item.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate text-foreground/95",
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "whitespace-nowrap tabular-nums text-foreground/90",
							children: item.dose
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate text-foreground/90",
							children: item.sideEffects
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn("whitespace-nowrap tabular-nums", getExpiryClass(item.expiryDate)),
							children: ["Expiry: ", item.expiryDate]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: item.status })
						})
					]
				}, item.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-[14px] flex items-center gap-[10px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {
					className: "size-[24px] shrink-0 text-dash-cyan drop-shadow-[0_0_10px_var(--dash-cyan)]",
					strokeWidth: 1.9
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[20px] font-bold text-foreground",
					children: "Medical"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-[12px]",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[16px] border border-dash-line bg-white/[0.03] p-[14px] transition-colors hover:bg-dash-cyan/[0.08]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-[10px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[12.5px] text-dash-ice/75",
							children: item.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-[2px] text-[16px] font-semibold text-foreground",
							children: item.name
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: item.status })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-[10px] grid grid-cols-2 gap-x-[12px] gap-y-[6px] border-t border-dash-line/60 pt-[10px] text-[13.5px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-dash-ice/70",
								children: "Dose: "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums text-foreground",
								children: item.dose
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-dash-ice/70",
								children: "Side Effects: "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: item.sideEffects
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-dash-ice/70",
									children: "Expiry Date: "
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("tabular-nums", getExpiryClass(item.expiryDate)),
									children: item.expiryDate
								})]
							})
						]
					})]
				}, item.id))
			})]
		})]
	});
}
function SupplementRowIcon({ iconKey }) {
	const iconClass = "size-[18px] shrink-0 text-dash-ice/90";
	switch (iconKey) {
		case "flask": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, {
			className: iconClass,
			strokeWidth: 1.7
		});
		case "sun": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
			className: iconClass,
			strokeWidth: 1.7
		});
		case "b1": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitaminBoxIcon, { label: "B1" });
		case "b2": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitaminBoxIcon, { label: "B2" });
		case "b3": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, {
			className: iconClass,
			strokeWidth: 1.7
		});
		case "b5": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, {
			className: iconClass,
			strokeWidth: 1.7
		});
		case "b6": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atom, {
			className: iconClass,
			strokeWidth: 1.7
		});
		case "b7": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
			className: iconClass,
			strokeWidth: 1.7
		});
		case "b9": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
			className: iconClass,
			strokeWidth: 1.7
		});
		case "b12": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, {
			className: iconClass,
			strokeWidth: 1.7
		});
		case "calcium": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
			className: iconClass,
			strokeWidth: 1.7
		});
		case "magnesium": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atom, {
			className: iconClass,
			strokeWidth: 1.7
		});
	}
}
function VitaminBoxIcon({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": true,
		className: "inline-flex size-[18px] shrink-0 items-center justify-center rounded-[4px] border border-dash-ice/75 text-[9px] leading-none font-semibold text-dash-ice/90",
		children: label
	});
}
function SupplementColumn({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden grid-cols-[1.1fr_1.25fr_0.85fr_1.15fr] items-center gap-[10px] border-b border-dash-line px-[8px] pb-[10px] text-[13.5px] font-medium text-dash-ice/80 md:grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Supplement"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Supplement policy" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Daily target" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Status" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden divide-y divide-dash-line/60 md:block",
				children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[1.1fr_1.25fr_0.85fr_1.15fr] items-center gap-[10px] rounded-[10px] px-[8px] py-[11px] text-[14.5px] transition-colors hover:bg-dash-cyan/[0.08]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex min-w-0 items-center gap-[10px] font-medium text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupplementRowIcon, { iconKey: row.iconKey }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: row.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate leading-[1.25] text-foreground/90",
							children: row.policy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "whitespace-nowrap tabular-nums text-foreground/90",
							children: row.dailyTarget
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: row.status }) })
					]
				}, row.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-[10px] md:hidden",
				children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[16px] border border-dash-line bg-white/[0.03] p-[14px] transition-colors hover:bg-dash-cyan/[0.08]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-[10px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-[10px] text-[15.5px] font-semibold text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupplementRowIcon, { iconKey: row.iconKey }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.name })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: row.status })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-[10px] grid grid-cols-2 gap-x-[12px] gap-y-[6px] border-t border-dash-line/60 pt-[10px] text-[13.5px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-dash-ice/70",
							children: "Policy: "
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: row.policy
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-dash-ice/70",
							children: "Daily target: "
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-foreground",
							children: row.dailyTarget
						})] })]
					})]
				}, row.id))
			})
		]
	});
}
function SupplementsTable({ items }) {
	const leftRows = items.filter((item) => item.column === "left");
	const rightRows = items.filter((item) => item.column === "right");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Supplements Plan",
		className: "dash-card flex w-full flex-1 flex-col rounded-[24px] px-[16px] pt-[18px] pb-[18px] duration-500 animate-in fade-in slide-in-from-bottom-3 [animation-delay:90ms] sm:px-[24px] sm:pt-[20px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-[14px] flex items-center gap-[10px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
				className: "size-[25px] shrink-0 text-dash-cyan drop-shadow-[0_0_10px_var(--dash-cyan)]",
				strokeWidth: 1.9
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[21px] leading-[24px] font-bold text-foreground",
				children: "Supplements"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid w-full grid-cols-1 gap-[24px] lg:grid-cols-[1fr_1px_1fr] lg:gap-x-[32px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupplementColumn, { rows: leftRows }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "hidden h-full w-px bg-dash-line lg:block"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupplementColumn, { rows: rightRows })
			]
		})]
	});
}
/** Header title block: glowing circular capsule icon + "Medications" + subtitle underneath. */
function MedicationsHeaderTitle() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-[16px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "dash-ring flex size-[62px] shrink-0 items-center justify-center bg-[radial-gradient(circle_at_50%_35%,oklch(0.45_0.16_248)_0%,oklch(0.22_0.1_264)_78%)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
				className: "size-[32px] -rotate-12 text-foreground drop-shadow-[0_0_10px_var(--dash-cyan)]",
				strokeWidth: 2
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-[28px] leading-[32px] font-bold tracking-[-0.005em] text-foreground sm:text-[31px] sm:leading-[34px]",
				children: "Medications"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-[2px] text-[14px] leading-[18px] font-normal text-dash-ice/90 sm:text-[14.5px]",
				children: [
					"Track your medications and stay on schedule",
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
/** Right header actions: bell icon, thin vertical divider, and user's circular avatar. */
function MedicationsHeaderActions() {
	const { unread } = useNotifications();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-[16px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dashboard/notifications",
				"aria-label": unread > 0 ? `Notifications (${unread} unread)` : "Notifications",
				className: "relative flex size-[44px] items-center justify-center rounded-full text-foreground/90 transition-colors hover:bg-dash-cyan/12 hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
					className: "size-[24px]",
					strokeWidth: 1.8
				}), unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "absolute top-[4px] right-[4px] flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-coral px-[4px] text-[10.5px] font-bold text-white",
					children: unread
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "h-[28px] w-[1px] bg-foreground/30"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/profile",
				"aria-label": "Profile & Settings",
				className: "shrink-0 rounded-full transition-transform hover:scale-105",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarPortrait, { size: 58 })
			})
		]
	});
}
function Medications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-1 flex-col gap-[20px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedicalTable, { items: medical }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupplementsTable, { items: supplements })]
	});
}
function MedicationsRoutePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardShell, {
		fluid: true,
		headerTitle: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedicationsHeaderTitle, {}),
		headerRight: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedicationsHeaderActions, {}),
		statusWeekday: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Medications, {})
	});
}
//#endregion
export { MedicationsRoutePage as component };
