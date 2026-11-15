import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useNotifications } from "./notifications-context-B3xN85g4.mjs";
import { X as CheckCheck, Y as Check, at as Bell, dt as ArrowRight, f as Sparkles, k as Info, o as TriangleAlert } from "../_libs/lucide-react.mjs";
import { i as DashCard, o as PageHeader, r as DASH_GHOST } from "./ui-CjvZ4TQA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.notifications-BcOtAXXl.js
var import_jsx_runtime = require_jsx_runtime();
function NotificationsPage() {
	const { items, unread, isRead, markRead, markAllRead } = useNotifications();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-col gap-[20px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Notifications",
			subtitle: unread > 0 ? `You have ${unread} unread mission ${unread === 1 ? "notice" : "notices"}.` : "All mission notifications are caught up.",
			actions: unread > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: markAllRead,
				className: DASH_GHOST,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "size-[17px]" }), "Mark all as read"]
			}) : void 0
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-[14px]",
			children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
				className: "flex flex-col items-center py-[44px] text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-[38px] text-dash-cyan" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-[12px] text-[18px] font-bold text-foreground",
						children: "All caught up"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-[4px] text-[14.5px] text-dash-muted",
						children: "No active notifications right now."
					})
				]
			}) : items.map((item) => {
				const read = isRead(item.id);
				const ToneIcon = item.tone === "warning" ? TriangleAlert : item.tone === "action" ? Sparkles : Info;
				const toneBadge = item.tone === "warning" ? "border-dash-amber/45 bg-dash-amber/15 text-dash-amber" : item.tone === "action" ? "border-dash-cyan/50 bg-dash-cyan/15 text-dash-cyan" : "border-dash-blue/50 bg-dash-blue/20 text-dash-ice";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashCard, {
					className: cn("flex flex-col gap-[16px] p-[20px] transition-opacity sm:flex-row sm:items-center sm:justify-between sm:p-[24px]", read && "opacity-75"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-start gap-[16px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("flex size-[46px] shrink-0 items-center justify-center rounded-[14px] border", toneBadge),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToneIcon, {
								className: "size-[22px]",
								strokeWidth: 2
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-[10px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-[18px] font-bold text-foreground",
									children: item.title
								}), !read && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-[6px] rounded-full bg-coral/20 px-[10px] py-[2px] text-[12px] font-semibold text-coral",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-[7px] rounded-full bg-coral" }), "Unread"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[4px] max-w-[760px] text-[15px] leading-[22px] text-dash-muted",
								children: item.body
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 flex-wrap items-center gap-[10px] sm:justify-end",
						children: [item.link && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.link.to,
							onClick: () => markRead(item.id),
							className: "dash-ghost inline-flex h-[40px] items-center gap-[6px] rounded-full px-[16px] text-[14px] font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.link.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-[15px]" })]
						}), !read && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => markRead(item.id),
							className: "inline-flex h-[40px] items-center gap-[6px] rounded-full border border-dash-line bg-white/[0.04] px-[14px] text-[13.5px] font-medium text-dash-ice transition-colors hover:border-dash-cyan hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-[15px]" }), "Mark read"]
						})]
					})]
				}, item.id);
			})
		})]
	});
}
//#endregion
export { NotificationsPage as component };
