import { i as __toESM } from "../_runtime.mjs";
import { n as authApi, t as ApiError } from "./auth-api-DosgRznz.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useOnboarding } from "./onboarding-store-DD2TJWml.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { S as useNavigate, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as LoaderCircle, dt as ArrowRight, ft as ArrowLeft } from "../_libs/lucide-react.mjs";
import { a as EnvelopeIcon, c as PersonIcon, i as AuthScene, n as AuthDivider, o as IdCardIcon, r as AuthField, s as LockIcon, u as SocialLogins } from "./SocialLogins-C3bXs6Ya.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-Bagu7ecl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SignupPage() {
	const navigate = useNavigate();
	const { update } = useOnboarding();
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
			await authApi.register({
				fullName: text("fullName"),
				email: text("email"),
				password: text("password"),
				confirmPassword: text("confirmPassword"),
				astronautId: text("astronautId")
			});
		} catch (err) {
			setError(err instanceof ApiError ? err : new ApiError(0, "UNKNOWN", "Something went wrong. Try again."));
			setBusy(false);
			return;
		}
		const now = /* @__PURE__ */ new Date();
		const joinDate = `${[
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		][now.getUTCMonth()] ?? "Nov"} ${now.getUTCDate()}, ${now.getUTCFullYear()}`;
		update("account", {
			fullName: text("fullName"),
			email: text("email"),
			astronautId: text("astronautId"),
			joinDate
		});
		navigate({ to: "/onboarding/basic-info" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthScene, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col px-[22px] py-[24px] sm:px-[44px] sm:py-[28px] lg:px-[56px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-[32px] leading-[38px] font-bold tracking-[-0.005em] text-foreground sm:text-[44px] sm:leading-[50px] lg:text-[48px] lg:leading-[56px]",
				children: ["Create Your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-coral",
					children: "Account"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-[6px] text-[16.5px] leading-[22px] text-foreground sm:text-[21px] sm:leading-[26px]",
				children: "Join the mission for a healthier tomorrow"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				noValidate: true,
				className: "contents",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-[18px] flex flex-col gap-[10px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthField, {
								size: "signup",
								icon: PersonIcon,
								iconClassName: "size-[24px] sm:size-[28px]",
								name: "fullName",
								placeholder: "Full Name",
								autoComplete: "name",
								className: cn(fieldIssue("fullName"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthField, {
								size: "signup",
								icon: EnvelopeIcon,
								iconClassName: "h-[22px] w-[28px] sm:h-[26px] sm:w-[34px]",
								name: "email",
								type: "email",
								placeholder: "Email Address",
								autoComplete: "email",
								className: cn(fieldIssue("email"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthField, {
								size: "signup",
								icon: LockIcon,
								iconClassName: "size-[24px] sm:size-[30px]",
								name: "password",
								placeholder: "Password",
								autoComplete: "new-password",
								reveal: "eye-off",
								className: cn(fieldIssue("password"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthField, {
								size: "signup",
								icon: LockIcon,
								iconClassName: "size-[24px] sm:size-[30px]",
								name: "confirmPassword",
								placeholder: "Confirm Password",
								autoComplete: "new-password",
								reveal: "eye-off",
								className: cn(fieldIssue("confirmPassword"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthField, {
								size: "signup",
								icon: IdCardIcon,
								iconClassName: "h-[24px] w-[30px] sm:h-[28px] sm:w-[34px]",
								name: "astronautId",
								placeholder: "Astronaut ID",
								hint: "Your mission-issued astronaut identifier",
								className: cn(fieldIssue("astronautId"))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: busy,
						"aria-busy": busy,
						className: "auth-cta mt-[16px] flex h-[56px] w-full items-center justify-center gap-[10px] rounded-full text-[20px] font-bold sm:h-[62px] sm:text-[24px]",
						children: ["Sign Up", busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							"aria-hidden": true,
							className: "size-[22px] animate-spin sm:size-[26px]"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-[22px] sm:size-[26px]",
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
				label: "or",
				gapClassName: "mt-[14px] gap-[18px] text-[16px] leading-[20px] sm:gap-[24px] sm:text-[19px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-[10px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLogins, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "mx-auto mt-[14px] flex items-center gap-[12px] text-[17.5px] text-foreground transition-opacity hover:opacity-85 sm:gap-[16px] sm:text-[21px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					className: "size-[20px] sm:size-[24px]",
					strokeWidth: 1.9
				}), "Back to Login"]
			})
		]
	}) });
}
//#endregion
export { SignupPage as component };
