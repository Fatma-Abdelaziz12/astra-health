import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as Heart, f as Sparkles, n as Wind, rt as Brain } from "../_libs/lucide-react.mjs";
import { t as DashboardShell } from "./DashboardShell-BARGy80N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mental-health-DZAbA3cB.js
var import_jsx_runtime = require_jsx_runtime();
function MentalHealthPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardShell, {
		hideHeaderTitle: true,
		statusWeekday: true,
		statusSeparator: "dot",
		sidebarVariant: "profile",
		calmBackdrop: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex w-full flex-col gap-[22px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dash-card-calm flex flex-col items-center px-[24px] py-[44px] text-center sm:px-[36px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-[64px] items-center justify-center rounded-full border border-[#F25C3C]/35 bg-[#F25C3C]/12 text-[#F25C3C]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, {
							className: "size-[32px]",
							strokeWidth: 1.8
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-[18px] text-[28px] font-bold text-foreground sm:text-[32px]",
						children: "Mental Health & Cognitive Wellness"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-[8px] max-w-[540px] text-[15.5px] leading-[23px] text-dash-muted",
						children: "Orbital mood logs, decompression breathing cycles, and stress readiness indicators calibrated for long-duration spaceflight."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-[28px] grid w-full max-w-[820px] grid-cols-1 gap-[14px] text-left sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[18px] border border-white/12 bg-white/[0.04] p-[18px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-[22px] text-[#F25C3C]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-[10px] text-[14px] text-foreground/65",
										children: "Current Mood"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-[2px] text-[20px] font-bold text-dash-green",
										children: "Good · Balanced"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[18px] border border-white/12 bg-white/[0.04] p-[18px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, { className: "size-[22px] text-[#F25C3C]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-[10px] text-[14px] text-foreground/65",
										children: "Stress Load"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-[2px] text-[20px] font-bold text-dash-ice",
										children: "Low · Optimal"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[18px] border border-white/12 bg-white/[0.04] p-[18px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-[22px] text-[#F25C3C]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-[10px] text-[14px] text-foreground/65",
										children: "Focus Window"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-[2px] text-[20px] font-bold text-foreground",
										children: "92% Readiness"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/profile",
						className: "mt-[28px] inline-flex h-[46px] items-center rounded-full bg-[#3B82F6] px-[26px] text-[15.5px] font-medium text-white transition-colors hover:bg-[#2563EB]",
						children: "Manage Mood & Stress in Profile"
					})
				]
			})
		})
	});
}
//#endregion
export { MentalHealthPage as component };
