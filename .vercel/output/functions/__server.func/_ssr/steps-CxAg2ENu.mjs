//#region node_modules/.nitro/vite/services/ssr/assets/steps-CxAg2ENu.js
var ONBOARDING_STEPS = [
	{
		step: 2,
		path: "/onboarding/basic-info",
		section: "basic",
		title: "Basic Information"
	},
	{
		step: 3,
		path: "/onboarding/vital-signs",
		section: "vitals",
		title: "Vital Signs"
	},
	{
		step: 4,
		path: "/onboarding/heart-recovery",
		section: "heart",
		title: "Heart & Recovery"
	},
	{
		step: 5,
		path: "/onboarding/muscle-bone",
		section: "muscle",
		title: "Muscle & Bone"
	},
	{
		step: 6,
		path: "/onboarding/avatar",
		section: "avatar",
		title: "Choose Your Avatar"
	}
];
function stepInfo(step) {
	const found = ONBOARDING_STEPS.find((s) => s.step === step);
	if (!found) throw new Error(`Unknown onboarding step ${step}`);
	return found;
}
/** Where Back and Continue / Skip lead from a step. The last step continues to the dashboard. */
function stepNeighbors(step) {
	const i = ONBOARDING_STEPS.findIndex((s) => s.step === step);
	return {
		prev: i > 0 && ONBOARDING_STEPS[i - 1]?.path || "/signup",
		next: ONBOARDING_STEPS[i + 1]?.path ?? "/dashboard"
	};
}
/** Number of lit progress segments for a step (Sign Up counts as the first). */
function filledSegments(step) {
	return Math.min(Math.max(step, 0), 6);
}
/** Per-page head() metadata, shared by the onboarding steps and dashboard pages. */
function stepHead(title, description) {
	const full = `${title} · Astra Health Monitoring System`;
	return { meta: [
		{ title: full },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: full
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] };
}
//#endregion
export { stepNeighbors as i, stepHead as n, stepInfo as r, filledSegments as t };
