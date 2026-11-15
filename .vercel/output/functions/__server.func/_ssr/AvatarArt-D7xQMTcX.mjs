import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useOnboarding } from "./onboarding-store-DD2TJWml.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { o as avatarById } from "./avatars-CAzUE-sP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AvatarArt-D7xQMTcX.js
var import_jsx_runtime = require_jsx_runtime();
var ai_assistant_robot_png_asset_default = {
	version: 1,
	asset_id: "def9eecf-6362-4521-83e6-b333179490e6",
	project_id: "09e03356-c2f6-4b3d-90a0-8ea0923dde37",
	url: "/__l5e/assets-v1/def9eecf-6362-4521-83e6-b333179490e6/ai-assistant-robot.png",
	r2_key: "a/v1/09e03356-c2f6-4b3d-90a0-8ea0923dde37/def9eecf-6362-4521-83e6-b333179490e6/ai-assistant-robot.png",
	original_filename: "ai-assistant-robot.png",
	size: 218977,
	content_type: "image/png",
	created_at: "2026-11-13T17:22:49Z"
};
/** The user's selected avatar (defaults to the explorer if none was explicitly saved yet). */
function useSelectedAvatar() {
	const { data } = useOnboarding();
	return avatarById(data.avatar.character);
}
/** Round portrait (head crop) inside the glowing cyan ring. */
function AvatarPortrait({ size, className }) {
	const avatar = useSelectedAvatar();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("dash-ring relative block shrink-0 overflow-hidden [width:var(--portrait-size)] [height:var(--portrait-size)]", className),
		style: { "--portrait-size": `${size}px` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: avatar.image,
			alt: `${avatar.name} avatar`,
			className: "absolute top-[7%] left-1/2 w-[112%] max-w-none -translate-x-1/2 duration-300 animate-in fade-in"
		}, avatar.id)
	});
}
/** Full-body avatar with the two glowing orange/neon orbit rings from the reference. */
function AvatarFigure({ height, className }) {
	const avatar = useSelectedAvatar();
	const rings = [{
		top: "49%",
		w: "142%",
		h: "19%",
		rotate: 9,
		anim: "dash-orbit-spin"
	}, {
		top: "62%",
		w: "130%",
		h: "16%",
		rotate: 7,
		anim: "dash-orbit-spin-alt"
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative aspect-[0.62/1] shrink-0 [height:var(--figure-height)]", className),
		style: { "--figure-height": `${height}px` },
		children: [
			rings.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: cn("dash-orbit absolute left-1/2", r.anim),
				style: {
					top: r.top,
					width: r.w,
					height: r.h,
					transform: `translateX(-50%) rotate(${r.rotate}deg)`,
					clipPath: "inset(0 0 50% 0)"
				}
			}, `back-${i}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: avatar.image,
				alt: `${avatar.name} avatar`,
				className: "dash-float relative z-10 h-full w-full object-contain object-bottom drop-shadow-[0_14px_26px_oklch(0.15_0.08_260_/_60%)] duration-500 animate-in fade-in zoom-in-95"
			}, avatar.id),
			rings.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: cn("dash-orbit absolute left-1/2 z-20", r.anim),
				style: {
					top: r.top,
					width: r.w,
					height: r.h,
					transform: `translateX(-50%) rotate(${r.rotate}deg)`,
					clipPath: "inset(50% 0 0 0)"
				}
			}, `front-${i}`))
		]
	});
}
//#endregion
export { AvatarPortrait as n, ai_assistant_robot_png_asset_default as r, AvatarFigure as t };
