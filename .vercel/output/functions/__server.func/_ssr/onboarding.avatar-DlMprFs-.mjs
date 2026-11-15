import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useOnboardingSection } from "./onboarding-store-DD2TJWml.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { a as VISORS, c as visorById, i as SUITS, n as AVATARS, o as avatarById, r as SKINS, s as suitById, t as ACCENTS } from "./avatars-CAzUE-sP.mjs";
import { c as StepFooter, i as FieldLabel, l as UnitInput, o as OnboardingScene, s as StepCard, t as CheckRow } from "./StepFooter-BYDPCBJp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/onboarding.avatar-DlMprFs-.js
var import_jsx_runtime = require_jsx_runtime();
var CALLSIGN_FALLBACK = "Nova-7";
function AvatarPage() {
	const [avatar, set] = useOnboardingSection("avatar");
	const character = avatarById(avatar.character);
	const suit = suitById(avatar.suit);
	const visor = visorById(avatar.visor);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OnboardingScene, {
		step: 6,
		aside: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full flex-col items-center px-[20px] py-[24px] sm:px-[32px] sm:pt-[28px] sm:pb-[32px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[20px] leading-[26px] font-bold text-foreground sm:text-[21px] sm:leading-[28px]",
					children: "Your avatar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "onb-preview relative mt-[15px] h-[340px] w-full max-w-[280px] shrink-0 overflow-hidden rounded-[22px] sm:h-[420px] lg:h-[460px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "absolute -bottom-[44px] left-1/2 h-[96px] w-[118%] -translate-x-1/2 rounded-[50%] bg-platform"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: character.image,
						alt: `${character.name} avatar`,
						className: "absolute inset-x-[14px] bottom-[24px] h-[calc(100%-36px)] w-[calc(100%-28px)] object-contain object-bottom duration-300 animate-in fade-in zoom-in-95"
					}, character.id)]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-[11px] text-center text-[16px] leading-[25px] text-foreground sm:text-[16.5px] sm:leading-[27px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-coral",
							children: avatar.callsign.trim() || CALLSIGN_FALLBACK
						}),
						" ",
						"· ",
						character.name
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center text-[15.5px] leading-[24px] text-onb-label sm:text-[16.5px] sm:leading-[27px]",
					children: [
						suit.label,
						" · ",
						visor.label,
						" visor"
					]
				})
			]
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepCard, {
			title: "Choose Your",
			accent: "Avatar",
			subtitle: "Last step: pick how you appear inside the mission dashboard.",
			footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepFooter, {
				step: 6,
				nextLabel: "Launch Dashboard"
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-[24px] xl:grid-cols-[minmax(0,1.65fr)_minmax(240px,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							id: "avatar-label",
							hint: "(full-body)",
							children: "Choose your avatar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "radiogroup",
							"aria-labelledby": "avatar-label",
							className: "mt-[8px] grid grid-cols-2 gap-[10px] sm:grid-cols-3 md:grid-cols-5 md:gap-[12px]",
							children: AVATARS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "radio",
								"aria-checked": a.id === avatar.character,
								onClick: () => set({
									character: a.id,
									skin: a.skin
								}),
								className: "onb-tile flex h-[175px] flex-col items-center px-[6px] pt-[7px] pb-[10px] sm:h-[205px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: a.image,
										alt: "",
										className: "h-[118px] w-full object-contain sm:h-[146px]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-auto text-[14px] leading-[18px] font-bold text-foreground sm:text-[14.5px]",
										children: a.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[12px] leading-[16px] text-onb-body sm:text-[12.5px]",
										children: a.color
									})
								]
							}, a.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-[14px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								id: "suit-label",
								children: "Suit style"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "radiogroup",
							"aria-labelledby": "suit-label",
							className: "mt-[8px] grid grid-cols-2 gap-[10px] sm:grid-cols-4 sm:gap-[14px]",
							children: SUITS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "radio",
								"aria-checked": s.id === avatar.suit,
								onClick: () => set({ suit: s.id }),
								className: "onb-tile flex h-[126px] flex-col items-center px-[6px] pt-[7px] pb-[7px] sm:h-[135px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.image,
									alt: "",
									className: "h-[86px] w-full object-contain sm:h-[96px]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-auto text-[14px] leading-[18px] font-bold text-foreground sm:text-[14.5px]",
									children: s.label
								})]
							}, s.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-[14px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								id: "visor-label",
								children: "Helmet visor"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "radiogroup",
							"aria-labelledby": "visor-label",
							className: "mt-[8px] grid grid-cols-1 gap-[10px] sm:grid-cols-3 sm:gap-[12px]",
							children: VISORS.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "radio",
								"aria-checked": v.id === avatar.visor,
								onClick: () => set({ visor: v.id }),
								className: "onb-tile flex h-[122px] flex-col items-center px-[6px] pt-[7px] pb-[9px] sm:h-[131px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: v.image,
										alt: "",
										className: "h-[68px] w-full object-contain sm:h-[76px]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-auto text-[14px] leading-[18px] font-bold text-foreground sm:text-[14.5px]",
										children: v.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[12px] leading-[16px] text-onb-body sm:text-[12.5px]",
										children: v.hint
									})
								]
							}, v.id))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							id: "skin-label",
							children: "Skin color"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "radiogroup",
							"aria-labelledby": "skin-label",
							className: "mt-[8px] flex flex-wrap gap-[9px] pl-[2px]",
							children: SKINS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "radio",
								"aria-checked": s.id === avatar.skin,
								"aria-label": s.label,
								onClick: () => {
									const match = AVATARS.find((a) => a.skin === s.id);
									set({
										skin: s.id,
										...match ? { character: match.id } : {}
									});
								},
								className: cn("onb-swatch size-[36px]", s.className)
							}, s.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-[14px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								id: "accent-label",
								children: "Suit accent"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "radiogroup",
							"aria-labelledby": "accent-label",
							className: "mt-[8px] flex flex-wrap gap-[9px] pl-[2px]",
							children: ACCENTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "radio",
								"aria-checked": a.id === avatar.accent,
								"aria-label": a.label,
								onClick: () => set({ accent: a.id }),
								className: cn("onb-swatch size-[36px]", a.className)
							}, a.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-[15px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
								htmlFor: "callsign",
								children: "Callsign"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitInput, {
								id: "callsign",
								className: "mt-[7px]",
								placeholder: "e.g. Nova-7",
								maxLength: 20,
								value: avatar.callsign,
								onChange: (e) => set({ callsign: e.target.value })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
							className: "mt-[14px] items-start text-[14.5px] leading-[18px] [&>span:first-child]:mt-[1px]",
							checked: avatar.fromPhoto,
							onChange: (fromPhoto) => set({ fromPhoto }),
							children: "Generate my avatar from a photo of me (optional)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-[16px] text-[15.5px] leading-[22px] text-onb-body sm:text-[16.5px]",
							children: "Your avatar appears full-body on your dashboard and profile."
						})
					]
				})]
			})
		})
	});
}
//#endregion
export { AvatarPage as component };
