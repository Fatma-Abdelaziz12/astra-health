import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SpaceBackdrop-7MkJBYWT.js
var import_jsx_runtime = require_jsx_runtime();
var astronaut_space_scene_jpg_asset_default = {
	version: 1,
	asset_id: "b19622e6-cc45-4d16-bce0-0c2085cd4b6f",
	project_id: "09e03356-c2f6-4b3d-90a0-8ea0923dde37",
	url: "/__l5e/assets-v1/b19622e6-cc45-4d16-bce0-0c2085cd4b6f/astronaut-space-scene.jpg",
	r2_key: "a/v1/09e03356-c2f6-4b3d-90a0-8ea0923dde37/b19622e6-cc45-4d16-bce0-0c2085cd4b6f/astronaut-space-scene.jpg",
	original_filename: "astronaut-space-scene.jpg",
	size: 346007,
	content_type: "image/jpeg",
	created_at: "2026-11-13T17:03:53Z"
};
/** Full-bleed space artwork shared by every login and health-profile screen. */
function SpaceBackdrop({ mode }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: astronaut_space_scene_jpg_asset_default.url,
		alt: "",
		"aria-hidden": true,
		className: cn("pointer-events-none fixed inset-0 h-full w-full object-cover select-none", mode === "compact" ? "object-[72%_center]" : "object-[72%_center] lg:object-center")
	});
}
//#endregion
export { SpaceBackdrop as t };
