import { i as __toESM } from "../_runtime.mjs";
import { n as authApi, t as ApiError } from "./auth-api-DosgRznz.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { S as useNavigate, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as LoaderCircle, dt as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as PersonIcon, i as AuthScene, l as PersonPlusIcon, n as AuthDivider, r as AuthField, s as LockIcon, t as AstronautIcon, u as SocialLogins } from "./SocialLogins-C3bXs6Ya.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DaE6onSX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Shooting-star flourish next to the "Welcome Back" headline. */
function CometStreak({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 230 120",
		fill: "none",
		"aria-hidden": true,
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "comet-tail",
					x1: "0",
					y1: "110",
					x2: "170",
					y2: "30",
					gradientUnits: "userSpaceOnUse",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0",
							stopColor: "var(--coral)",
							stopOpacity: "0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0.65",
							stopColor: "var(--coral)",
							stopOpacity: "0.9"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "1",
							stopColor: "var(--cream)"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "comet-faint",
					x1: "60",
					y1: "60",
					x2: "200",
					y2: "20",
					gradientUnits: "userSpaceOnUse",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0",
						stopColor: "var(--coral)",
						stopOpacity: "0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "1",
						stopColor: "var(--coral)",
						stopOpacity: "0.55"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: "comet-glow",
					cx: "0",
					cy: "0",
					r: "1",
					gradientUnits: "userSpaceOnUse",
					gradientTransform: "translate(170 36) scale(26)",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0",
							stopColor: "var(--cream)",
							stopOpacity: "0.95"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0.4",
							stopColor: "var(--ember)",
							stopOpacity: "0.55"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "1",
							stopColor: "var(--ember)",
							stopOpacity: "0"
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4 114C60 86 118 62 168 38",
				stroke: "url(#comet-tail)",
				strokeWidth: "3.2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M76 58C118 40 156 30 214 26",
				stroke: "url(#comet-faint)",
				strokeWidth: "1.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M120 104C140 84 156 64 170 42",
				stroke: "url(#comet-faint)",
				strokeWidth: "1.2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "170",
				cy: "36",
				r: "26",
				fill: "url(#comet-glow)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M170 18c1.2 10.4 4.6 14.8 15 18-10.4 3.2-13.8 7.6-15 18-1.2-10.4-4.6-14.8-15-18 10.4-3.2 13.8-7.6 15-18z",
				fill: "var(--cream)"
			})
		]
	});
}
function LoginPage() {
	const navigate = useNavigate();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const fieldIssue = (name) => error?.fields[name] ? "auth-field-error" : void 0;
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (busy) return;
		setBusy(true);
		setError(null);
		const form = new FormData(e.currentTarget);
		const text = (key) => String(form.get(key) ?? "").trim();
		try {
			await authApi.login({
				astronautId: text("astronautId"),
				password: text("password")
			});
			navigate({ to: "/dashboard" });
		} catch (err) {
			setError(err instanceof ApiError ? err : new ApiError(0, "UNKNOWN", "Something went wrong. Try again."));
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthScene, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col px-[22px] py-[28px] sm:px-[44px] sm:py-[34px] lg:px-[52px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-bold tracking-[-0.005em]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[34px] leading-[40px] text-foreground sm:text-[44px] sm:leading-[50px] lg:text-[48px] lg:leading-[54px]",
							children: "Welcome Back,"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[40px] leading-[44px] text-coral sm:text-[52px] sm:leading-[56px] lg:text-[56px] lg:leading-[60px]",
							children: "Astronaut!"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-[8px] max-w-[400px] text-[16.5px] leading-[23px] text-foreground sm:text-[20px] sm:leading-[26px]",
						children: "Sign in to access your health dashboard and mission data."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CometStreak, { className: "pointer-events-none absolute top-[4px] right-[0px] hidden w-[195px] sm:block" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Authentication",
				className: "mt-[22px] grid h-[56px] grid-cols-2 rounded-full border-[1.5px] border-field-border sm:mt-[26px] sm:h-[64px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					"aria-current": "page",
					className: "auth-pill-active -m-[1.5px] flex items-center justify-center gap-[10px] rounded-full text-[18px] font-medium text-primary-foreground sm:gap-[14px] sm:text-[22px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AstronautIcon, { className: "size-[26px] sm:size-[32px]" }), "Login"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/signup",
					className: "flex items-center justify-center gap-[10px] text-[17.5px] font-medium text-foreground transition-opacity hover:opacity-85 sm:gap-[12px] sm:text-[21px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonPlusIcon, { className: "h-[24px] w-[28px] text-cream sm:h-[28px] sm:w-[32px]" }), "Sign Up"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				noValidate: true,
				className: "contents",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthField, {
						size: "login",
						icon: PersonIcon,
						iconClassName: "size-[24px] sm:size-[28px]",
						name: "astronautId",
						placeholder: "Astronaut ID",
						autoComplete: "username",
						className: cn("mt-[20px]", fieldIssue("astronautId"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthField, {
						size: "login",
						icon: LockIcon,
						iconClassName: "size-[24px] sm:size-[28px]",
						name: "password",
						placeholder: "Password",
						autoComplete: "current-password",
						reveal: "eye",
						className: cn("mt-[14px]", fieldIssue("password"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: busy,
						"aria-busy": busy,
						className: "auth-cta mt-[18px] flex h-[56px] w-full items-center justify-center gap-[10px] rounded-full text-[20px] font-bold sm:h-[64px] sm:text-[23.5px]",
						children: ["Continue", busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							"aria-hidden": true,
							className: "size-[22px] animate-spin sm:size-[25px]"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-[22px] sm:size-[25px]",
							strokeWidth: 2.4
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "alert",
						"aria-live": "polite",
						className: "mt-[12px] text-center text-[15px] leading-[20px] text-coral sm:text-[17px]",
						children: Object.values(error.fields)[0] ?? error.message
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthDivider, {
				label: "or continue with",
				gapClassName: "mt-[16px] gap-[14px] text-[14.5px] leading-[20px] sm:text-[16px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-[14px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLogins, {})
			})
		]
	}) });
}
//#endregion
export { LoginPage as component };
