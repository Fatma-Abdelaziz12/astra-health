import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as OnboardingProvider } from "./onboarding-store-DD2TJWml.mjs";
import { C as useRouter, Ut as redirect, _ as Outlet, b as createRootRouteWithContext, f as Scripts, g as createRouter, p as HeadContent, v as lazyRouteComponent, x as Link, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stepHead } from "./steps-CxAg2ENu.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BABHu5CW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var styles_default = "/assets/styles-BkqJaZad.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$29 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Astra Health Monitoring System" },
			{
				name: "description",
				content: "Astra Health monitors, predicts and protects astronaut health during missions."
			},
			{
				property: "og:title",
				content: "Astra Health Monitoring System"
			},
			{
				property: "og:description",
				content: "Astra Health monitors, predicts and protects astronaut health during missions."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$29.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OnboardingProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })] })
	});
}
var $$splitComponentImporter$27 = () => import("./routes-DaE6onSX.mjs");
var Route$28 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Login · Astra Health Monitoring System" },
		{
			name: "description",
			content: "Sign in to your Astra Health dashboard to monitor astronaut health and mission data."
		},
		{
			property: "og:title",
			content: "Login · Astra Health Monitoring System"
		},
		{
			property: "og:description",
			content: "Sign in to your Astra Health dashboard to monitor astronaut health and mission data."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./body-temperature-B1ykrLBU.mjs");
var Route$27 = createFileRoute("/body-temperature")({
	head: () => stepHead("Body Temperature", "Real-time simulated body temperature telemetry, computed summary metrics, and 24-hour trend."),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./dashboard-BBbWpvL8.mjs");
/** Sidebar + header layout around every dashboard page. */
var Route$26 = createFileRoute("/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./heart-rate-AFWl9ZeN.mjs");
var Route$25 = createFileRoute("/heart-rate")({
	head: () => stepHead("Heart Rate Monitoring", "Real-time simulated heart rate, ECG monitoring waveform, and 24-hour heart rate statistics."),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./medications-0ZwCsZ1O.mjs");
var Route$24 = createFileRoute("/medications")({
	head: () => stepHead("Medications", "Track your medications, orbital pharmacy stock, and daily supplements."),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./mental-health-DZAbA3cB.mjs");
var Route$23 = createFileRoute("/mental-health")({
	head: () => stepHead("Mental Health", "Astronaut cognitive wellness, mood logs, and stress telemetry."),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./onboarding-B7buEQS1.mjs");
/** Shared parent of the health-profile steps. Answers live in the root OnboardingProvider. */
var Route$22 = createFileRoute("/onboarding")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./physical-activity-BcfQPKR6.mjs");
var Route$21 = createFileRoute("/physical-activity")({
	head: () => stepHead("Physical Activity", "Daily microgravity countermeasure workouts, consistency tracking, and guided exercise player."),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./profile-LBFknhdt.mjs");
var Route$20 = createFileRoute("/profile")({
	head: () => stepHead("Profile & Settings", "Manage astronaut profile details, health score summary, preferences, and mental wellness."),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./respiratory-Bz1I5fGs.mjs");
var Route$19 = createFileRoute("/respiratory")({
	head: () => stepHead("Respiratory Monitoring", "Real-time simulated respiratory rate, computed summary metrics, and 24-hour RR trend."),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./signup-Bagu7ecl.mjs");
var Route$18 = createFileRoute("/signup")({
	head: () => ({ meta: [
		{ title: "Create Account · Astra Health Monitoring System" },
		{
			name: "description",
			content: "Join the mission: create your Astra Health account to track astronaut health in orbit."
		},
		{
			property: "og:title",
			content: "Create Account · Astra Health Monitoring System"
		},
		{
			property: "og:description",
			content: "Join the mission: create your Astra Health account to track astronaut health in orbit."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./sleep-quality-DsOHXj52.mjs");
var Route$17 = createFileRoute("/sleep-quality")({
	head: () => stepHead("Sleep Quality", "Track your sleep duration, efficiency, sleep score, deep sleep, and nightly trends."),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./dashboard.index-CmFJA4E4.mjs");
var Route$16 = createFileRoute("/dashboard/")({
	head: () => stepHead("Dashboard", "Your astronaut health overview: heart rate, SpO₂, breathing, sleep and trends from your profile."),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./dashboard.activity-DTrPyknU.mjs");
var Route$15 = createFileRoute("/dashboard/activity")({
	head: () => stepHead("Activity", "Weekly exercise volume, muscle/bone profile, and microgravity countermeasure log."),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
/** Newest day first; rows without a day keep creation order. */
var $$splitComponentImporter$13 = () => import("./dashboard.analytics-BFNzLr1j.mjs");
var Route$14 = createFileRoute("/dashboard/analytics")({
	head: () => stepHead("Health Analytics", "Comprehensive summary of your biometric inputs, completeness score, and physiological reference bands."),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./dashboard.assistant-PVtQLgzK.mjs");
var Route$13 = createFileRoute("/dashboard/assistant")({
	head: () => stepHead("AI Assistant", "Your intelligent health companion in space."),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./dashboard.mission-planner-BVziS5s6.mjs");
var Route$12 = createFileRoute("/dashboard/mission-planner")({
	head: () => stepHead("Mission Planner", "Orbital daily schedule for vital checks, countermeasure exercise, nutrition, and rest."),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
/** Same ordering the API uses: scheduled day first, then UTC time string. */
var $$splitComponentImporter$10 = () => import("./dashboard.notifications-BcOtAXXl.mjs");
var Route$11 = createFileRoute("/dashboard/notifications")({
	head: () => stepHead("Notifications", "System alerts, profile reminders, and telemetry readiness notices."),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./dashboard.oxygen-monitoring-DpvZjXIM.mjs");
var Route$10 = createFileRoute("/dashboard/oxygen-monitoring")({
	head: () => stepHead("Oxygen Monitoring (SpO2)", "Blood oxygen saturation, pulse rate and 24-hour SpO2 trend overview."),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./dashboard.profile-L5xL4tZm.mjs");
var Route$9 = createFileRoute("/dashboard/profile")({
	head: () => stepHead("Profile & Settings", "Manage astronaut profile details, health score summary, preferences, and mental wellness."),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./dashboard.sleep-LHcjh0tI.mjs");
var Route$8 = createFileRoute("/dashboard/sleep")({
	head: () => stepHead("Sleep Quality", "Track your sleep duration, efficiency, sleep score, deep sleep, and nightly trends."),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./dashboard.trends-WMbXX6ip.mjs");
var Route$7 = createFileRoute("/dashboard/trends")({
	head: () => stepHead("Health Trends", "24-hour multi-metric trend chart comparing heart rate, blood oxygen saturation, and activity."),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./dashboard.vital-signs-MUNibmTl.mjs");
var Route$6 = createFileRoute("/dashboard/vital-signs")({
	head: () => stepHead("Vital Signs", "Blood pressure, heart rate, SpO₂ and breathing rate from your Astra Health profile, with reference ranges."),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var Route$5 = createFileRoute("/onboarding/")({ beforeLoad: () => {
	throw redirect({ to: "/onboarding/basic-info" });
} });
var $$splitComponentImporter$4 = () => import("./onboarding.avatar-DlMprFs-.mjs");
var Route$4 = createFileRoute("/onboarding/avatar")({
	head: () => stepHead("Choose Your Avatar", "Pick your full-body astronaut avatar, suit and helmet visor for the mission dashboard."),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./onboarding.basic-info-P78CWPnq.mjs");
var Route$3 = createFileRoute("/onboarding/basic-info")({
	head: () => stepHead("Basic Information", "Tell Astra Health your age, sex, height and weight to personalise your health baselines."),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./onboarding.heart-recovery-CO_M3WO4.mjs");
var Route$2 = createFileRoute("/onboarding/heart-recovery")({
	head: () => stepHead("Heart & Recovery", "Set up heart-rhythm alerts and share your sleep and hydration habits with Astra Health."),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./onboarding.muscle-bone-DHLKmdbN.mjs");
var Route$1 = createFileRoute("/onboarding/muscle-bone")({
	head: () => stepHead("Muscle & Bone", "Add muscle mass, bone density and EMG or DEXA reports to track muscle and bone loss in microgravity."),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./onboarding.vital-signs-DD53Vh4m.mjs");
var Route = createFileRoute("/onboarding/vital-signs")({
	head: () => stepHead("Vital Signs", "Add your latest blood pressure, respiratory rate and blood-oxygen readings to Astra Health."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$28.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$29
});
var BodyTemperatureRoute = Route$27.update({
	id: "/body-temperature",
	path: "/body-temperature",
	getParentRoute: () => Route$29
});
var DashboardRoute = Route$26.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$29
});
var HeartRateRoute = Route$25.update({
	id: "/heart-rate",
	path: "/heart-rate",
	getParentRoute: () => Route$29
});
var MedicationsRoute = Route$24.update({
	id: "/medications",
	path: "/medications",
	getParentRoute: () => Route$29
});
var MentalHealthRoute = Route$23.update({
	id: "/mental-health",
	path: "/mental-health",
	getParentRoute: () => Route$29
});
var OnboardingRoute = Route$22.update({
	id: "/onboarding",
	path: "/onboarding",
	getParentRoute: () => Route$29
});
var PhysicalActivityRoute = Route$21.update({
	id: "/physical-activity",
	path: "/physical-activity",
	getParentRoute: () => Route$29
});
var ProfileRoute = Route$20.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$29
});
var RespiratoryRoute = Route$19.update({
	id: "/respiratory",
	path: "/respiratory",
	getParentRoute: () => Route$29
});
var SignupRoute = Route$18.update({
	id: "/signup",
	path: "/signup",
	getParentRoute: () => Route$29
});
var SleepQualityRoute = Route$17.update({
	id: "/sleep-quality",
	path: "/sleep-quality",
	getParentRoute: () => Route$29
});
var DashboardIndexRoute = Route$16.update({
	id: "/",
	path: "/",
	getParentRoute: () => DashboardRoute
});
var DashboardActivityRoute = Route$15.update({
	id: "/activity",
	path: "/activity",
	getParentRoute: () => DashboardRoute
});
var DashboardAnalyticsRoute = Route$14.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => DashboardRoute
});
var DashboardAssistantRoute = Route$13.update({
	id: "/assistant",
	path: "/assistant",
	getParentRoute: () => DashboardRoute
});
var DashboardMissionPlannerRoute = Route$12.update({
	id: "/mission-planner",
	path: "/mission-planner",
	getParentRoute: () => DashboardRoute
});
var DashboardNotificationsRoute = Route$11.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => DashboardRoute
});
var DashboardOxygenMonitoringRoute = Route$10.update({
	id: "/oxygen-monitoring",
	path: "/oxygen-monitoring",
	getParentRoute: () => DashboardRoute
});
var DashboardProfileRoute = Route$9.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => DashboardRoute
});
var DashboardSleepRoute = Route$8.update({
	id: "/sleep",
	path: "/sleep",
	getParentRoute: () => DashboardRoute
});
var DashboardTrendsRoute = Route$7.update({
	id: "/trends",
	path: "/trends",
	getParentRoute: () => DashboardRoute
});
var DashboardVitalSignsRoute = Route$6.update({
	id: "/vital-signs",
	path: "/vital-signs",
	getParentRoute: () => DashboardRoute
});
var OnboardingIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => OnboardingRoute
});
var OnboardingAvatarRoute = Route$4.update({
	id: "/avatar",
	path: "/avatar",
	getParentRoute: () => OnboardingRoute
});
var OnboardingBasicInfoRoute = Route$3.update({
	id: "/basic-info",
	path: "/basic-info",
	getParentRoute: () => OnboardingRoute
});
var OnboardingHeartRecoveryRoute = Route$2.update({
	id: "/heart-recovery",
	path: "/heart-recovery",
	getParentRoute: () => OnboardingRoute
});
var OnboardingMuscleBoneRoute = Route$1.update({
	id: "/muscle-bone",
	path: "/muscle-bone",
	getParentRoute: () => OnboardingRoute
});
var OnboardingVitalSignsRoute = Route.update({
	id: "/vital-signs",
	path: "/vital-signs",
	getParentRoute: () => OnboardingRoute
});
var DashboardRouteChildren = {
	DashboardActivityRoute,
	DashboardAnalyticsRoute,
	DashboardAssistantRoute,
	DashboardMissionPlannerRoute,
	DashboardNotificationsRoute,
	DashboardOxygenMonitoringRoute,
	DashboardProfileRoute,
	DashboardSleepRoute,
	DashboardTrendsRoute,
	DashboardVitalSignsRoute,
	DashboardIndexRoute
};
var DashboardRouteWithChildren = DashboardRoute._addFileChildren(DashboardRouteChildren);
var OnboardingRouteChildren = {
	OnboardingAvatarRoute,
	OnboardingBasicInfoRoute,
	OnboardingHeartRecoveryRoute,
	OnboardingMuscleBoneRoute,
	OnboardingVitalSignsRoute,
	OnboardingIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	BodyTemperatureRoute,
	DashboardRoute: DashboardRouteWithChildren,
	HeartRateRoute,
	MedicationsRoute,
	MentalHealthRoute,
	OnboardingRoute: OnboardingRoute._addFileChildren(OnboardingRouteChildren),
	PhysicalActivityRoute,
	ProfileRoute,
	RespiratoryRoute,
	SignupRoute,
	SleepQualityRoute
};
var routeTree = Route$29._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
