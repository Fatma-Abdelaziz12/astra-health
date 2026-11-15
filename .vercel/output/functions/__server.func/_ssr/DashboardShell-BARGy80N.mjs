import { i as __toESM } from "../_runtime.mjs";
import { n as authApi } from "./auth-api-DosgRznz.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useOnboarding } from "./onboarding-store-DD2TJWml.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { S as useNavigate, _ as Outlet, m as useRouterState, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as AvatarPortrait, r as ai_assistant_robot_png_asset_default } from "./AvatarArt-D7xQMTcX.mjs";
import { t as nasa_logo_png_asset_default } from "./nasa-logo.png.asset-C9TGx8Ng.mjs";
import { n as RunnerIcon } from "./icons-Bx_FMJzK.mjs";
import { n as useNotifications, t as NotificationsProvider } from "./notifications-context-B3xN85g4.mjs";
import { D as LoaderCircle, E as LogOut, N as HeartPulse, T as Menu, Z as ChartLine, at as Bell, b as Pill, j as House, m as Settings, mt as Activity, ot as BedDouble, t as X, tt as CalendarDays } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DashboardShell-BARGy80N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var dashboard_earth_scene_jpg_asset_default = {
	version: 1,
	asset_id: "c8159d44-a9b9-4f84-95fd-81eedf04057e",
	project_id: "09e03356-c2f6-4b3d-90a0-8ea0923dde37",
	url: "/__l5e/assets-v1/c8159d44-a9b9-4f84-95fd-81eedf04057e/dashboard-earth-scene.jpg",
	r2_key: "a/v1/09e03356-c2f6-4b3d-90a0-8ea0923dde37/c8159d44-a9b9-4f84-95fd-81eedf04057e/dashboard-earth-scene.jpg",
	original_filename: "dashboard-earth-scene.jpg",
	size: 275383,
	content_type: "image/jpeg",
	created_at: "2026-11-13T17:22:45Z"
};
/** Shared sidebar order across every dashboard and health monitoring page. */
var NAV_ITEMS = [
	{
		to: "/dashboard",
		label: "Dashboard",
		icon: House
	},
	{
		to: "/dashboard/vital-signs",
		label: "Vital Signs",
		icon: HeartPulse
	},
	{
		to: "/sleep-quality",
		label: "Sleep Quality",
		icon: BedDouble
	},
	{
		to: "/dashboard/activity",
		label: "Activity",
		icon: RunnerIcon
	},
	{
		to: "/dashboard/trends",
		label: "Health Trends",
		icon: ChartLine
	},
	{
		to: "/dashboard/analytics",
		label: "Health Analytics",
		icon: Activity
	},
	{
		to: "/dashboard/mission-planner",
		label: "Mission Planner",
		icon: CalendarDays
	},
	{
		to: "/physical-activity",
		label: "Physical Activity",
		icon: RunnerIcon
	},
	{
		to: "/medications",
		label: "Medications",
		icon: Pill
	},
	{
		to: "/profile",
		label: "Profile & Settings",
		icon: Settings
	},
	{
		to: "/dashboard/notifications",
		label: "Notifications",
		icon: Bell
	}
];
/** Exact match for the overview, prefix/related-route match for section pages. */
function isNavActive(pathname, to) {
	const path = pathname.replace(/\/+$/, "") || "/";
	if (to === "/dashboard") return path === "/dashboard";
	if (to === "/dashboard/vital-signs") return path === to || path.startsWith(`${to}/`) || path === "/heart-rate" || path === "/respiratory" || path === "/body-temperature" || path === "/dashboard/oxygen-monitoring";
	if (to === "/sleep-quality") return path === to || path.startsWith(`${to}/`) || path === "/dashboard/sleep";
	if (to === "/profile") return path === to || path.startsWith(`${to}/`) || path === "/dashboard/profile" || path === "/mental-health";
	return path === to || path.startsWith(`${to}/`);
}
/** The dashboard reference is 16:9; it is authored on a 1600×900 artboard. */
var DASH_STAGE = {
	width: 1600,
	height: 900
};
/** Narrowest column (in artboard px) before the compact layout is scaled down. */
var MIN_COLUMN = 420;
var MAX_COLUMN = 980;
var GUTTER = 24;
/**
* Wide screens get the reference artboard scaled to fit; tablets and phones get a fluid
* single column that is only scaled down on very narrow phones.
*/
function useDashboardStage() {
	const [state, setState] = (0, import_react.useState)({
		mode: "desktop",
		scale: 1,
		columnWidth: MIN_COLUMN,
		ready: false
	});
	(0, import_react.useEffect)(() => {
		const update = () => {
			const vw = window.innerWidth;
			const vh = window.innerHeight;
			if (vw >= 1180 && vw / vh >= 1.15) {
				setState({
					mode: "desktop",
					scale: Math.min(vw / DASH_STAGE.width, vh / DASH_STAGE.height),
					columnWidth: MIN_COLUMN,
					ready: true
				});
				return;
			}
			const available = vw - GUTTER;
			setState(available < MIN_COLUMN ? {
				mode: "compact",
				scale: available / MIN_COLUMN,
				columnWidth: MIN_COLUMN,
				ready: true
			} : {
				mode: "compact",
				scale: 1,
				columnWidth: Math.min(available - 8, MAX_COLUMN),
				ready: true
			});
		};
		update();
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, []);
	return state;
}
var DashModeContext = (0, import_react.createContext)("desktop");
/**
* Unified responsive sidebar, header, and space backdrop shared by every dashboard page.
* Uses full-viewport flex layout (`w-[260px]` fixed sidebar on `lg+`, collapsible drawer below `lg`)
* and fluid `flex-1 min-w-0` main content with zero letterboxing or right-side dead space.
*/
function DashboardShell({ children, headerTitle, headerRight, statusWeekday, statusSeparator = "pipe", hideHeaderTitle = false, hideDesktopHeader = false, calmBackdrop = false } = {}) {
	const stage = useDashboardStage();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const topRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		window.scrollTo({ top: 0 });
	}, [pathname]);
	const onOverview = isNavActive(pathname, "/dashboard");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationsProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashModeContext.Provider, {
		value: stage.mode,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: topRef,
			className: "relative flex min-h-screen w-full overflow-x-hidden bg-background",
			children: [
				calmBackdrop ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalmSpaceBackdrop, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: dashboard_earth_scene_jpg_asset_default.url,
					alt: "",
					"aria-hidden": true,
					className: "pointer-events-none fixed inset-0 h-full w-full object-cover object-left-bottom select-none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					"aria-label": "Dashboard",
					className: "dash-panel relative z-20 hidden h-screen w-[260px] shrink-0 flex-col lg:sticky lg:top-0 lg:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, {
						pathname,
						showPlanetLayer: calmBackdrop
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex min-h-screen w-full min-w-0 flex-1 flex-col px-[16px] py-[16px] sm:px-[24px] sm:py-[18px] lg:px-[32px] lg:py-[22px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-[12px] lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompactHeader, {
								pathname,
								headerTitle,
								headerRight,
								statusWeekday,
								statusSeparator,
								hideHeaderTitle,
								onOverview
							})
						}),
						!hideDesktopHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "hidden min-h-[68px] w-full items-center justify-between gap-[20px] lg:flex",
							children: [hideHeaderTitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-w-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 items-center gap-[20px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "h-[58px] w-[2px] shrink-0 rounded-full bg-foreground/80"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "min-w-0 text-[28px] leading-[33px] font-bold tracking-[-0.005em] text-foreground xl:text-[31px] xl:leading-[36px]",
									children: headerTitle ?? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										"Astra Health",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Monitoring System"
									] })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex shrink-0 items-center gap-[18px] xl:gap-[24px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
									weekday: statusWeekday,
									separator: statusSeparator,
									className: "h-[48px] min-w-[330px] text-[15px] xl:min-w-[360px] xl:text-[15.5px]"
								}), headerRight ?? (onOverview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssistantHeaderButton, { size: 62 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileButton, { size: 60 }))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
							className: cn("flex w-full min-w-0 flex-1 flex-col gap-[20px]", hideDesktopHeader ? "mt-[18px] lg:mt-0" : "mt-[18px] lg:mt-[22px]"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageOutlet, { children })
						})
					]
				})
			]
		})
	}) });
}
/** Calmer navy backdrop with a subtle glowing Earth horizon at the top-right for Profile & Settings. */
function CalmSpaceBackdrop() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 overflow-hidden select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(110% 90% at 80% 10%, rgba(28, 78, 173, 0.34) 0%, rgba(9, 25, 62, 0.92) 56%, rgba(6, 17, 45, 1) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-[18%] -right-[14%] h-[960px] w-[1180px] rounded-full opacity-75",
				style: {
					background: "radial-gradient(circle at 38% 45%, rgba(56, 139, 255, 0.24) 0%, rgba(21, 66, 152, 0.16) 42%, transparent 72%)",
					boxShadow: "inset 18px 28px 90px rgba(125, 189, 255, 0.22)",
					border: "1px solid rgba(147, 197, 253, 0.16)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-35",
				style: { backgroundImage: "radial-gradient(1.5px 1.5px at 24% 18%, rgba(255,255,255,0.7), transparent), radial-gradient(1px 1px at 66% 12%, rgba(191,219,254,0.8), transparent), radial-gradient(1.2px 1.2px at 42% 76%, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 88% 64%, rgba(191,219,254,0.6), transparent)" }
			})
		]
	});
}
/** Waits for the saved profile before rendering a page, so values never flash as empty. */
function PageOutlet({ children }) {
	const { hydrated } = useOnboarding();
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "status",
		className: "flex h-[420px] flex-col items-center justify-center gap-[12px] text-dash-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-[36px] animate-spin text-dash-cyan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[16px]",
			children: "Loading your mission data…"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
function SidebarContent({ pathname, showPlanetLayer = false, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		showPlanetLayer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: dashboard_earth_scene_jpg_asset_default.url,
				alt: "",
				className: "h-full w-full object-cover object-left-bottom opacity-85 select-none"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(180deg, rgba(11, 34, 88, 0.72) 0%, rgba(7, 24, 66, 0.55) 60%, rgba(7, 24, 66, 0.32) 100%)" }
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex shrink-0 items-center justify-center px-[16px] pt-[26px] pb-[14px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/dashboard",
				activeOptions: { exact: true },
				"aria-label": "Dashboard home",
				onClick: onClose,
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: nasa_logo_png_asset_default.url,
					alt: "NASA",
					className: "h-auto w-[106px] object-contain select-none"
				})
			}), onClose && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				"aria-label": "Close navigation menu",
				className: "absolute top-[16px] right-[12px] flex size-[36px] items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.14]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-[18px]" })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Dashboard",
			className: "dash-scroll relative z-10 flex min-h-0 flex-1 flex-col gap-[3px] overflow-y-auto px-[12px] pt-[16px] pb-[12px]",
			children: NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
				item,
				active: isNavActive(pathname, item.to),
				onNavigate: onClose
			}, item.to))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 mt-auto shrink-0 px-[12px] pt-[8px] pb-[18px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoutButton, {})
		})
	] });
}
function NavLink({ item, active, onNavigate }) {
	const { unread } = useNotifications();
	const Icon = item.icon;
	const badge = item.to === "/dashboard/notifications" && unread > 0 ? unread : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: item.to,
		activeOptions: { exact: item.to === "/dashboard" },
		onClick: onNavigate,
		"aria-current": active ? "page" : void 0,
		className: cn("flex min-h-[48px] w-full shrink-0 items-center gap-[12px] rounded-[15px] px-[16px] py-[11px] text-[17px] leading-[22px] text-white transition-colors", active ? "dash-nav-active font-semibold" : "border border-transparent font-medium hover:bg-white/[0.08]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-[24px] shrink-0 text-white",
				strokeWidth: 1.8
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 flex-1 truncate",
				children: item.label
			}),
			badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-label": `${badge} unread`,
				className: "flex h-[22px] min-w-[22px] items-center justify-center rounded-full bg-coral px-[6px] text-[12px] font-bold text-white",
				children: badge
			})
		]
	});
}
function LogoutButton() {
	const navigate = useNavigate();
	const { logout } = useOnboarding();
	const handleLogout = () => {
		authApi.logout();
		logout();
		navigate({ to: "/" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: handleLogout,
		className: "flex min-h-[46px] w-full items-center gap-[12px] rounded-[15px] border border-blue-400/35 bg-white/[0.04] px-[16px] py-[10px] text-[16px] font-medium text-white transition-colors hover:border-blue-300/60 hover:bg-white/[0.09]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
			className: "size-[22px] shrink-0 text-white/90",
			strokeWidth: 1.8
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Log Out" })]
	});
}
function CompactHeader({ pathname, headerTitle, headerRight, statusWeekday, statusSeparator = "pipe", hideHeaderTitle = false, onOverview }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setOpen(false), [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKeyDown = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center gap-[12px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dashboard",
					"aria-label": "Dashboard home",
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: nasa_logo_png_asset_default.url,
						alt: "NASA",
						className: "h-auto w-[58px] object-contain select-none"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0 flex-1 text-[18px] leading-[22px] font-bold text-foreground sm:text-[21px] sm:leading-[25px]",
					children: hideHeaderTitle ? "Profile & Settings" : headerTitle ?? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Astra Health",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Monitoring System"
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex shrink-0 items-center gap-[10px]",
					children: [headerRight ?? (onOverview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssistantHeaderButton, { size: 48 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileButton, { size: 48 })), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-expanded": open,
						"aria-controls": "dash-compact-drawer",
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((o) => !o),
						className: "dash-pill flex size-[46px] items-center justify-center",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-[22px]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-[22px]" })
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, {
			weekday: statusWeekday,
			separator: statusSeparator,
			className: "min-h-[42px] w-full py-[6px] text-[13px] sm:text-[14.5px]"
		}),
		open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 flex lg:hidden",
			role: "dialog",
			"aria-modal": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Close navigation menu",
				onClick: () => setOpen(false),
				className: "fixed inset-0 bg-[#040b1e]/65 backdrop-blur-[2px]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				id: "dash-compact-drawer",
				"aria-label": "Dashboard navigation",
				className: "dash-panel relative z-10 flex h-screen w-[260px] max-w-[85vw] flex-col",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, {
					pathname,
					showPlanetLayer: true,
					onClose: () => setOpen(false)
				})
			})]
		})
	] });
}
function AssistantHeaderButton({ size }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/dashboard/assistant",
		"aria-label": "Open AI Assistant",
		className: "dash-ring relative flex shrink-0 items-center justify-center overflow-hidden transition-transform hover:scale-105",
		style: {
			width: size,
			height: size
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: ai_assistant_robot_png_asset_default.url,
			alt: "AI Assistant",
			className: "mt-[6%] h-[88%] w-auto object-contain"
		})
	});
}
function ProfileButton({ size }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/profile",
		"aria-label": "Profile & Settings",
		className: "shrink-0 rounded-full transition-transform hover:scale-105",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarPortrait, { size })
	});
}
var WEEKDAYS = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
var MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
function formatUtc(d, weekday = false, separator = "pipe") {
	const pad = (n) => String(n).padStart(2, "0");
	const time = `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())} UTC`;
	const sep = separator === "dot" ? " · " : " - ";
	if (weekday) return `${WEEKDAYS[d.getUTCDay()]}, ${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}${sep}${time}`;
	return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}${sep}${time}`;
}
/** Connection status of this browser and the current UTC time, as in the reference header. */
function StatusPill({ className, weekday, separator = "pipe" }) {
	const [now, setNow] = (0, import_react.useState)(null);
	const [online, setOnline] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		setNow(/* @__PURE__ */ new Date());
		setOnline(navigator.onLine);
		const tick = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 15e3);
		const on = () => setOnline(true);
		const off = () => setOnline(false);
		window.addEventListener("online", on);
		window.addEventListener("offline", off);
		return () => {
			window.clearInterval(tick);
			window.removeEventListener("online", on);
			window.removeEventListener("offline", off);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("dash-pill flex flex-wrap items-center justify-center gap-x-[12px] gap-y-[2px] px-[16px] sm:px-[20px]", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-[8px] whitespace-nowrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: cn("size-[12px] shrink-0 rounded-full", online ? "bg-dash-green shadow-[0_0_10px_var(--dash-green)]" : "bg-dash-amber")
				}), online ? "System Online" : "Offline"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "hidden h-[18px] w-[1.5px] bg-foreground/60 sm:block"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
				dateTime: now?.toISOString(),
				className: "whitespace-nowrap tabular-nums",
				children: now ? formatUtc(now, weekday, separator) : "— UTC"
			})
		]
	});
}
//#endregion
export { dashboard_earth_scene_jpg_asset_default as n, DashboardShell as t };
