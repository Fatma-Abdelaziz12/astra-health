import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useOnboarding } from "./onboarding-store-DD2TJWml.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as AVATARS, o as avatarById } from "./avatars-CAzUE-sP.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as displayName } from "./health-BbPFK9c3.mjs";
import { n as useNotifications } from "./notifications-context-B3xN85g4.mjs";
import { $ as Camera, C as Moon, K as ChevronRight, M as Heart, P as Globe, Y as Check, _ as Rocket, a as Upload, at as Bell, et as Calendar, m as Settings, r as User, rt as Brain, t as X } from "../_libs/lucide-react.mjs";
import { a as moodToneClass, r as computeHealthScore, s as stressToneClass } from "./profileData-D2dIui5F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Profile-sQ1K7MfS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SIZE = 186;
var STROKE = 14;
var RADIUS = 172 / 2;
var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
function HealthScoreGauge({ score }) {
	const clamped = Math.max(0, Math.min(100, Math.round(score)));
	const [animatedScore, setAnimatedScore] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setAnimatedScore(clamped);
			return;
		}
		let frame = 0;
		const start = performance.now();
		const duration = 850;
		const tick = (now) => {
			const progress = Math.min(1, (now - start) / duration);
			const eased = 1 - (1 - progress) ** 3;
			setAnimatedScore(Math.round(clamped * eased));
			if (progress < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [clamped]);
	const offset = CIRCUMFERENCE * (1 - animatedScore / 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Health Summary",
		className: "dash-card-calm flex flex-col justify-between p-[28px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-[12px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
				className: "size-[25px] shrink-0 text-[#F25C3C]",
				strokeWidth: 2
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[20px] font-semibold tracking-[-0.005em] text-foreground",
				children: "Health Summary"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "my-auto flex items-center justify-center pt-[16px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex size-[186px] items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					width: SIZE,
					height: SIZE,
					viewBox: `0 0 ${SIZE} ${SIZE}`,
					className: "-rotate-90",
					role: "img",
					"aria-label": `Health Score ${clamped} percent`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "health-gauge-grad",
							x1: "0%",
							y1: "0%",
							x2: "100%",
							y2: "100%",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#60A5FA"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "55%",
									stopColor: "#3B82F6"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#93C5FD"
								})
							]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: SIZE / 2,
							cy: SIZE / 2,
							r: RADIUS,
							fill: "none",
							stroke: "rgba(255, 255, 255, 0.12)",
							strokeWidth: STROKE
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: SIZE / 2,
							cy: SIZE / 2,
							r: RADIUS,
							fill: "none",
							stroke: "url(#health-gauge-grad)",
							strokeWidth: STROKE,
							strokeLinecap: "round",
							strokeDasharray: CIRCUMFERENCE,
							strokeDashoffset: offset,
							style: { filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.45))" }
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[36px] leading-none font-bold tabular-nums text-foreground",
						children: [animatedScore, "%"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-[6px] text-[14.5px] font-normal text-foreground/75",
						children: "Health Score"
					})]
				})]
			})
		})]
	});
}
function Modal({ open, onClose, title, subtitle, children }) {
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
		"aria-label": title,
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-[20px] backdrop-blur-sm animate-in fade-in duration-150",
		onClick: (e) => {
			if (e.target === e.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dash-card-calm w-full max-w-[440px] p-[24px] text-foreground shadow-2xl animate-in zoom-in-95 duration-150",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-[12px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[20px] font-semibold leading-tight text-foreground",
					children: title
				}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-[4px] text-[13.5px] text-dash-muted",
					children: subtitle
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					"aria-label": "Close modal",
					className: "flex size-[34px] shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-foreground/80 transition-colors hover:bg-white/[0.14] hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-[18px]" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-[18px]",
				children
			})]
		})
	});
}
function SettingRow({ icon: Icon, label, value, valueClassName, onClick, rightControl }) {
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-[14px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-[24px] shrink-0 text-[#F25C3C]",
			strokeWidth: 1.9
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[16.5px] font-normal text-foreground",
			children: label
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-[12px]",
		children: [value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("text-[15.5px] font-medium text-foreground/85", valueClassName),
			children: value
		}), rightControl ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
			className: "size-[18px] shrink-0 text-foreground/65 transition-transform group-hover:translate-x-[2px]",
			strokeWidth: 2
		})]
	})] });
	if (onClick) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: "group flex w-full cursor-pointer items-center justify-between rounded-[14px] px-[10px] py-[12px] text-left transition-colors hover:bg-white/[0.06]",
		children: content
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex w-full items-center justify-between rounded-[14px] px-[10px] py-[12px]",
		children: content
	});
}
var MOOD_OPTIONS = [
	{
		value: "Great",
		hint: "Energized & focused",
		dot: "bg-dash-green"
	},
	{
		value: "Good",
		hint: "Balanced & steady",
		dot: "bg-dash-green"
	},
	{
		value: "Okay",
		hint: "Slightly fatigued",
		dot: "bg-dash-amber"
	},
	{
		value: "Low",
		hint: "Rest & recovery advised",
		dot: "bg-[#F25C3C]"
	}
];
var STRESS_OPTIONS = [
	{
		value: "Low",
		hint: "Optimal orbital readiness",
		dot: "bg-dash-green"
	},
	{
		value: "Medium",
		hint: "Moderate workload load",
		dot: "bg-dash-amber"
	},
	{
		value: "High",
		hint: "Schedule decompression",
		dot: "bg-[#F25C3C]"
	}
];
/** Clean coral lotus icon matching the Stress Level row in the reference screenshot. */
function LotusIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": true,
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 4.5c-1.8 2.4-2.8 5-2.8 7.5 0 2.3 1.2 4.3 2.8 5.4 1.6-1.1 2.8-3.1 2.8-5.4 0-2.5-1-5.1-2.8-7.5Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.5 14.8c-.4-2.3-1.8-4.5-4.3-6.1-.4 3 .5 5.8 2.7 7.6 1 .8 2.2 1.2 3.3 1.3-.9-.7-1.5-1.7-1.7-2.8Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15.5 14.8c.4-2.3 1.8-4.5 4.3-6.1.4 3-.5 5.8-2.7 7.6-1 .8-2.2 1.2-3.3 1.3.9-.7 1.5-1.7 1.7-2.8Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5.4 17.8c2.1.6 4.4.8 6.6.8s4.5-.2 6.6-.8c-.7 1.3-3.1 2.2-6.6 2.2s-5.9-.9-6.6-2.2Z" })
		]
	});
}
function MentalHealthCard({ prefs, onUpdate }) {
	const [modal, setModal] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			"aria-label": "Mental Health",
			className: "dash-card-calm p-[26px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-[12px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, {
						className: "size-[24px] shrink-0 text-[#F25C3C]",
						strokeWidth: 2
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[20px] font-semibold tracking-[-0.005em] text-foreground",
						children: "Mental Health"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-[14px] h-px w-full bg-white/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-[4px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: Heart,
						label: "Mood Tracking",
						value: prefs.mood,
						valueClassName: moodToneClass(prefs.mood),
						onClick: () => setModal("mood")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: LotusIcon,
						label: "Stress Level",
						value: prefs.stress,
						valueClassName: stressToneClass(prefs.stress),
						onClick: () => setModal("stress")
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
			open: modal === "mood",
			onClose: () => setModal(null),
			title: "Mood Tracking",
			subtitle: "Log your current emotional state for orbital wellness tracking.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-[10px]",
				children: MOOD_OPTIONS.map((opt) => {
					const active = prefs.mood === opt.value;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							onUpdate({ mood: opt.value });
							setModal(null);
						},
						className: cn("flex cursor-pointer items-center justify-between rounded-[14px] border px-[16px] py-[12px] text-left transition-colors", active ? "border-[#3B82F6] bg-[#3B82F6]/20" : "border-white/15 bg-white/[0.04] hover:border-blue-400/50 hover:bg-white/[0.08]"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-[12px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-[10px] rounded-full", opt.dot) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[16px] font-medium text-foreground",
								children: opt.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[12.5px] text-dash-muted",
								children: opt.hint
							})] })]
						}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-[22px] items-center justify-center rounded-full bg-[#3B82F6] text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-[13px]",
								strokeWidth: 3
							})
						})]
					}, opt.value);
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
			open: modal === "stress",
			onClose: () => setModal(null),
			title: "Stress Level",
			subtitle: "Select your current stress index.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-[10px]",
				children: STRESS_OPTIONS.map((opt) => {
					const active = prefs.stress === opt.value;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							onUpdate({ stress: opt.value });
							setModal(null);
						},
						className: cn("flex cursor-pointer items-center justify-between rounded-[14px] border px-[16px] py-[12px] text-left transition-colors", active ? "border-[#3B82F6] bg-[#3B82F6]/20" : "border-white/15 bg-white/[0.04] hover:border-blue-400/50 hover:bg-white/[0.08]"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-[12px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-[10px] rounded-full", opt.dot) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[16px] font-medium text-foreground",
								children: opt.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[12.5px] text-dash-muted",
								children: opt.hint
							})] })]
						}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-[22px] items-center justify-center rounded-full bg-[#3B82F6] text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-[13px]",
								strokeWidth: 3
							})
						})]
					}, opt.value);
				})
			})
		})
	] });
}
function ToggleSwitch({ checked, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "switch",
		"aria-checked": checked,
		"aria-label": label,
		onClick: () => onChange(!checked),
		className: cn("relative inline-flex h-[28px] w-[50px] shrink-0 cursor-pointer items-center rounded-full p-[3px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]", checked ? "bg-[#3B82F6] shadow-[0_0_12px_rgba(59,130,246,0.55)]" : "bg-white/20"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: cn("size-[22px] rounded-full bg-white shadow-sm transition-transform duration-200", checked ? "translate-x-[22px]" : "translate-x-0")
		})
	});
}
var LANGUAGES = [{
	value: "English",
	subtitle: "Left-to-right (LTR) interface"
}, {
	value: "Arabic",
	subtitle: "Right-to-left (RTL) direction"
}];
function PreferencesCard({ prefs, onUpdate }) {
	const [langModalOpen, setLangModalOpen] = (0, import_react.useState)(false);
	const toggleTheme = () => {
		onUpdate({ theme: prefs.theme === "dark" ? "light" : "dark" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Preferences",
		className: "dash-card-calm p-[26px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-[12px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
					className: "size-[24px] shrink-0 text-[#F25C3C]",
					strokeWidth: 2
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[20px] font-semibold tracking-[-0.005em] text-foreground",
					children: "Preferences"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-[14px] h-px w-full bg-white/15" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-[4px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: Globe,
						label: "Language",
						value: prefs.language,
						onClick: () => setLangModalOpen(true)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: Moon,
						label: "Theme",
						value: prefs.theme === "dark" ? "Dark Mode" : "Light Mode",
						onClick: toggleTheme
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
						icon: Bell,
						label: "Notifications",
						rightControl: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleSwitch, {
							checked: prefs.notifications,
							onChange: (next) => onUpdate({ notifications: next }),
							label: "Toggle mission notifications"
						})
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		open: langModalOpen,
		onClose: () => setLangModalOpen(false),
		title: "Select Language",
		subtitle: "Switch interface language and layout direction.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-[10px]",
			children: LANGUAGES.map((lang) => {
				const active = prefs.language === lang.value;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						onUpdate({ language: lang.value });
						setLangModalOpen(false);
					},
					className: cn("flex cursor-pointer items-center justify-between rounded-[14px] border px-[16px] py-[12px] text-left transition-colors", active ? "border-[#3B82F6] bg-[#3B82F6]/20" : "border-white/15 bg-white/[0.04] hover:border-blue-400/50 hover:bg-white/[0.08]"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[16px] font-medium text-foreground",
						children: lang.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[12.5px] text-dash-muted",
						children: lang.subtitle
					})] }), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-[22px] items-center justify-center rounded-full bg-[#3B82F6] text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-[13px]",
							strokeWidth: 3
						})
					})]
				}, lang.value);
			})
		})
	})] });
}
var AVATAR_MAP = {
	explorer: {
		id: "explorer",
		name: avatarById("explorer").name,
		color: avatarById("explorer").color,
		image: avatarById("explorer").image
	},
	pilot: {
		id: "pilot",
		name: avatarById("pilot").name,
		color: avatarById("pilot").color,
		image: avatarById("pilot").image
	},
	scientist: {
		id: "scientist",
		name: avatarById("scientist").name,
		color: avatarById("scientist").color,
		image: avatarById("scientist").image
	},
	commander: {
		id: "commander",
		name: avatarById("commander").name,
		color: avatarById("commander").color,
		image: avatarById("commander").image
	},
	medic: {
		id: "medic",
		name: avatarById("medic").name,
		color: avatarById("medic").color,
		image: avatarById("medic").image
	}
};
var AVATAR_OPTIONS = AVATARS.map((a) => ({
	id: a.id,
	name: a.name,
	color: a.color,
	image: a.image
}));
function resolveAvatarImage(avatarId, customPhoto) {
	if (customPhoto && customPhoto.trim().length > 0) return customPhoto;
	return AVATAR_MAP[avatarId]?.image ?? AVATAR_MAP.explorer.image;
}
function ProfileCard() {
	const { data, update } = useOnboarding();
	const [pickerOpen, setPickerOpen] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	const userName = displayName(data);
	const joinDate = data.account.joinDate?.trim() || "Nov 11, 2026";
	const avatarSrc = resolveAvatarImage(data.avatar.character, data.avatar.customPhoto);
	const handleSelectAvatar = (id) => {
		update("avatar", {
			character: id,
			customPhoto: "",
			fromPhoto: false
		});
		update("progress", { avatar: "done" });
		setPickerOpen(false);
	};
	const handleFileChange = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === "string") {
				update("avatar", {
					customPhoto: reader.result,
					fromPhoto: true
				});
				setPickerOpen(false);
			}
		};
		reader.readAsDataURL(file);
		e.target.value = "";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Astronaut Profile",
		className: "dash-card-calm flex flex-col items-center gap-[22px] p-[22px] sm:flex-row sm:gap-[28px] sm:p-[28px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto size-[184px] shrink-0 overflow-hidden rounded-[18px] border border-white/15 bg-navy/60 shadow-[0_12px_28px_rgba(4,12,35,0.45)] sm:mx-0 sm:size-[214px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: avatarSrc,
				alt: `${userName} astronaut portrait`,
				className: "h-full w-full object-cover object-top"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setPickerOpen(true),
				"aria-label": "Change profile avatar or photo",
				title: "Change profile photo",
				className: "absolute right-[10px] bottom-[10px] flex size-[36px] cursor-pointer items-center justify-center rounded-full border border-blue-300/45 bg-[#081635]/85 text-white shadow-md backdrop-blur-md transition-transform hover:scale-105 hover:bg-[#3B82F6]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {
					className: "size-[17px]",
					strokeWidth: 2
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "truncate text-[30px] leading-[1.15] font-bold tracking-[-0.01em] text-foreground sm:text-[36px]",
					children: userName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-[4px] text-[17px] font-normal text-foreground/80 sm:text-[18px]",
					children: "Astronaut"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-[16px] h-px w-full bg-white/15 sm:my-[18px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-[16px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-[16px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, {
							className: "size-[26px] shrink-0 text-[#F25C3C]",
							strokeWidth: 1.9
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] text-foreground/60",
								children: "Mission"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-[16px] font-medium text-foreground sm:text-[16.5px]",
								children: "Orbital Health Mission"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-[16px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
							className: "size-[26px] shrink-0 text-[#F25C3C]",
							strokeWidth: 1.9
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[13px] text-foreground/60",
								children: "Join Date"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[16px] font-medium text-foreground sm:text-[16.5px]",
								children: joinDate
							})]
						})]
					})]
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: pickerOpen,
		onClose: () => setPickerOpen(false),
		title: "Profile Photo & Avatar",
		subtitle: "Choose your mission avatar or upload a custom photo.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-[10px] sm:grid-cols-5",
				children: AVATAR_OPTIONS.map((opt) => {
					const active = !data.avatar.customPhoto && data.avatar.character === opt.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => handleSelectAvatar(opt.id),
						className: cn("relative flex cursor-pointer flex-col items-center gap-[6px] rounded-[14px] border p-[8px] transition-colors", active ? "border-[#3B82F6] bg-[#3B82F6]/20" : "border-white/15 bg-white/[0.04] hover:border-blue-400/50 hover:bg-white/[0.08]"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: opt.image,
								alt: opt.name,
								className: "size-[52px] rounded-[10px] object-cover object-top"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11.5px] font-medium text-foreground",
								children: opt.name
							}),
							active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-[4px] right-[4px] flex size-[18px] items-center justify-center rounded-full bg-[#3B82F6] text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-[11px]",
									strokeWidth: 3
								})
							})
						]
					}, opt.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: fileInputRef,
				type: "file",
				accept: "image/*",
				onChange: handleFileChange,
				className: "hidden"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-[18px] flex items-center gap-[10px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => fileInputRef.current?.click(),
					className: "flex h-[44px] flex-1 cursor-pointer items-center justify-center gap-[8px] rounded-[12px] bg-[#3B82F6] px-[16px] text-[14.5px] font-medium text-white transition-colors hover:bg-[#2563EB]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-[16px]" }), "Upload Photo"]
				}), data.avatar.customPhoto && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						update("avatar", {
							customPhoto: "",
							fromPhoto: false
						});
						setPickerOpen(false);
					},
					className: "h-[44px] cursor-pointer rounded-[12px] border border-white/20 px-[14px] text-[14px] text-foreground/85 transition-colors hover:bg-white/[0.08]",
					children: "Use Avatar"
				})]
			})
		]
	})] });
}
function ProfileHeaderActions({ notificationsEnabled }) {
	const { unread } = useNotifications();
	const badgeCount = notificationsEnabled && unread > 0 ? unread : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-[18px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dashboard/notifications",
				"aria-label": badgeCount > 0 ? `Notifications (${badgeCount} unread)` : "Notifications",
				className: "relative flex size-[48px] items-center justify-center rounded-full border border-blue-400/35 bg-white/[0.04] text-foreground transition-colors hover:border-blue-300/65 hover:bg-white/[0.1]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
					className: "size-[22px]",
					strokeWidth: 1.8
				}), badgeCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "absolute -top-[3px] -right-[3px] flex h-[20px] min-w-[20px] items-center justify-center rounded-full bg-[#EF4444] px-[5px] text-[11.5px] font-bold text-white shadow-sm",
					children: badgeCount
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "h-[28px] w-[1px] bg-foreground/25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/profile",
				"aria-label": "Astronaut profile",
				className: "flex size-[42px] items-center justify-center rounded-full text-foreground/90 transition-colors hover:bg-white/[0.08] hover:text-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
					className: "size-[28px]",
					strokeWidth: 1.7
				})
			})
		]
	});
}
function Profile({ prefs, onUpdatePrefs }) {
	const { data } = useOnboarding();
	const healthScore = computeHealthScore(data);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid w-full grid-cols-1 gap-[22px] xl:grid-cols-[1.24fr_1fr] xl:gap-[26px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-in fade-in slide-in-from-bottom-2 duration-300",
				style: {
					animationDelay: "0ms",
					animationFillMode: "both"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileCard, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex animate-in fade-in slide-in-from-bottom-2 duration-300 [&>*]:flex-1",
				style: {
					animationDelay: "70ms",
					animationFillMode: "both"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HealthScoreGauge, { score: healthScore })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-in fade-in slide-in-from-bottom-2 duration-300",
				style: {
					animationDelay: "140ms",
					animationFillMode: "both"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreferencesCard, {
					prefs,
					onUpdate: onUpdatePrefs
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-in fade-in slide-in-from-bottom-2 duration-300",
				style: {
					animationDelay: "210ms",
					animationFillMode: "both"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MentalHealthCard, {
					prefs,
					onUpdate: onUpdatePrefs
				})
			})
		]
	});
}
//#endregion
export { ProfileHeaderActions as n, Profile as t };
