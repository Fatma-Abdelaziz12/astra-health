import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WhyWeAsk-B1F1jcCI.js
var import_jsx_runtime = require_jsx_runtime();
/** Right-hand explainer panel with the step illustration. */
function WhyWeAsk({ children, image, imageAlt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-[20px] py-[24px] sm:px-[32px] sm:pt-[29px] sm:pb-[33px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[20px] leading-[26px] font-bold text-foreground sm:text-[21px] sm:leading-[28px]",
				children: "Why we ask"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-[10px] text-[15px] leading-[23px] text-onb-body sm:mt-[11px] sm:text-[16px] sm:leading-[24.5px]",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-[16px] aspect-[4/3] min-h-[210px] overflow-hidden rounded-[16px] border border-onb-tile-border lg:aspect-auto lg:min-h-[260px] lg:flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: imageAlt,
					className: "h-full w-full object-cover"
				})
			})
		]
	});
}
//#endregion
export { WhyWeAsk as t };
