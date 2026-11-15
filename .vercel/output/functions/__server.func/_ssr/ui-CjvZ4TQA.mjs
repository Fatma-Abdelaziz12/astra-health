import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-CjvZ4TQA.js
var import_jsx_runtime = require_jsx_runtime();
var DASH_BTN = "dash-cta inline-flex h-[44px] items-center justify-center gap-[8px] rounded-full px-[22px] text-[15.5px] font-bold";
var DASH_GHOST = "dash-ghost inline-flex h-[44px] items-center justify-center gap-[8px] rounded-full px-[20px] text-[15px] font-medium";
function DashCard({ children, className, as: Tag = "section" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		className: cn("dash-card", className),
		children
	});
}
/** Icon + title row at the top of a card. */
function CardHeading({ icon: IconCmp, title, right, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center justify-between gap-[12px]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "flex min-w-0 items-center gap-[12px] text-[18px] leading-[24px] font-bold text-foreground",
			children: [IconCmp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCmp, { className: "size-[28px] shrink-0 text-dash-cyan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate",
				children: title
			})]
		}), right]
	});
}
/** Title block at the top of every dashboard section page. */
function PageHeader({ title, subtitle, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-end justify-between gap-[16px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-[28px] leading-[34px] font-bold tracking-[-0.01em] text-foreground sm:text-[34px] sm:leading-[42px]",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-[4px] max-w-[760px] text-[15px] leading-[22px] text-dash-muted sm:text-[16.5px] sm:leading-[24px]",
				children: subtitle
			})]
		}), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-[10px]",
			children: actions
		})]
	});
}
/** Small status chip: entered value, not entered, or no sensor. */
function SourceTag({ state }) {
	const t = {
		entered: {
			label: "Your entry",
			className: "text-dash-green"
		},
		missing: {
			label: "Not entered",
			className: "text-dash-amber"
		},
		"no-sensor": {
			label: "No sensor",
			className: "text-dash-muted"
		}
	}[state];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("text-[14px] leading-[18px] font-medium", t.className),
		children: t.label
	});
}
/** Label / value pair used in the detail cards. */
function InfoRow({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-[16px] border-b border-dash-line py-[11px] last:border-b-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[15px] text-dash-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-right text-[16px] font-medium text-foreground",
			children: [value, hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-[12.5px] font-normal text-dash-muted",
				children: hint
			})]
		})]
	});
}
/**
* Scale with the typical reference band and a marker at the user's value.
* Shows where the value sits; it makes no medical judgement.
*/
function RangeBar({ min, max, low, high, value, caption }) {
	const pct = (n) => `${Math.min(100, Math.max(0, (n - min) / (max - min) * 100))}%`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-[10px] rounded-full bg-dash-track",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute inset-y-0 rounded-full bg-dash-cyan/45",
			style: {
				left: pct(low),
				width: `calc(${pct(high)} - ${pct(low)})`
			}
		}), value !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute top-1/2 size-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-foreground bg-dash-blue shadow-[0_0_10px_var(--dash-cyan)]",
			style: { left: pct(value) }
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-[6px] flex justify-between text-[12px] text-dash-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: min }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-center",
				children: caption
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: max })
		]
	})] });
}
//#endregion
export { InfoRow as a, SourceTag as c, DashCard as i, DASH_BTN as n, PageHeader as o, DASH_GHOST as r, RangeBar as s, CardHeading as t };
