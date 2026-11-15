import { t as ApiError } from "./auth-api-DosgRznz.mjs";
import { t as apiRequest } from "./health-api-nLawGY4-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manage-api-B9oWHdxC.js
/**
* Mission Planner & Activity log API client. Server persistence is the
* source of truth — these records never live in localStorage. Requests
* reuse the shared authed transport (token refresh included) from the
* health client.
*/
var plannerApi = {
	async list() {
		return (await apiRequest("/api/planner/missions")).missions;
	},
	create(input) {
		return apiRequest("/api/planner/missions", { body: input }).then((r) => r.mission);
	},
	patch(id, patch) {
		return apiRequest(`/api/planner/missions/${encodeURIComponent(id)}`, {
			method: "PATCH",
			body: patch
		}).then((r) => r.mission);
	},
	remove(id) {
		return apiRequest(`/api/planner/missions/${encodeURIComponent(id)}`, { method: "DELETE" }).then(() => void 0);
	}
};
var workoutApi = {
	async list() {
		return (await apiRequest("/api/workouts/sessions")).sessions;
	},
	create(input) {
		return apiRequest("/api/workouts/sessions", { body: input }).then((r) => r.session);
	},
	patch(id, patch) {
		return apiRequest(`/api/workouts/sessions/${encodeURIComponent(id)}`, {
			method: "PATCH",
			body: patch
		}).then((r) => r.session);
	},
	remove(id) {
		return apiRequest(`/api/workouts/sessions/${encodeURIComponent(id)}`, { method: "DELETE" }).then(() => void 0);
	}
};
function isAuthIssue(err) {
	return err instanceof ApiError && (err.status === 401 || err.status === 403);
}
//#endregion
export { plannerApi as n, workoutApi as r, isAuthIssue as t };
