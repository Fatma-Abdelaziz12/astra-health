import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as nasa_logo_png_asset_default } from "./nasa-logo.png.asset-C9TGx8Ng.mjs";
import { R as Eye, z as EyeOff } from "../_libs/lucide-react.mjs";
import { t as SpaceBackdrop } from "./SpaceBackdrop-7MkJBYWT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SocialLogins-C3bXs6Ya.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Thin rule with a centered label, fading towards the card edges. */
function AuthDivider({ label, gapClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex w-full items-center", gapClassName),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "hairline-l h-px flex-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-foreground/90",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "hairline-r h-px flex-1"
			})
		]
	});
}
/** Solid glyphs matching the filled icons in the Astra Health designs. */
function PersonIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": true,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "7",
			r: "4.6"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.2 21.5c0-4.6 3.9-7.9 8.8-7.9s8.8 3.3 8.8 7.9v.5H3.2z" })]
	});
}
function AstronautIcon(props) {
	const id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": true,
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mask", {
				id,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "24",
					height: "24",
					fill: "#fff"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M7.6 8.2c.4-1.9 2.2-3.2 4.4-3.2s4 1.3 4.4 3.2c-1.2.7-2.7 1-4.4 1s-3.2-.3-4.4-1z",
					fill: "#000"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				mask: `url(#${id})`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "8.4",
					r: "6.4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.4 22c0-3.9 2.8-6.6 6.2-7.3a8.6 8.6 0 0 0 4.8 0c3.4.7 6.2 3.4 6.2 7.3z" })
		]
	});
}
function PersonPlusIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 26 24",
		fill: "currentColor",
		"aria-hidden": true,
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "7",
				r: "4.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1.4 21.6c0-4.6 3.9-7.9 8.6-7.9 1.7 0 3.3.4 4.6 1.2a6.3 6.3 0 0 0-.6 6.7v.5H1.4z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 14.2v7.6M16.2 18h7.6",
				stroke: "currentColor",
				strokeWidth: "2.2",
				strokeLinecap: "round",
				fill: "none"
			})
		]
	});
}
function LockIcon(props) {
	const id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": true,
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M7.6 10.4V7.6a4.4 4.4 0 0 1 8.8 0v2.8",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mask", {
				id,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "24",
						height: "24",
						fill: "#fff"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "12",
						cy: "15.2",
						r: "1.7",
						fill: "#000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "11.1",
						y: "15.6",
						width: "1.8",
						height: "3.4",
						rx: "0.9",
						fill: "#000"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4.6",
				y: "10",
				width: "14.8",
				height: "12.4",
				rx: "2.6",
				mask: `url(#${id})`
			})
		]
	});
}
function EnvelopeIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 26 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.9",
		strokeLinejoin: "round",
		"aria-hidden": true,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "1.2",
			y: "1.2",
			width: "23.6",
			height: "17.6",
			rx: "1.6"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1.8 2l11.2 9 11.2-9M1.8 18.2l8.2-7.4M24.2 18.2 16 10.8" })]
	});
}
function IdCardIcon(props) {
	const id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 26 22",
		fill: "currentColor",
		"aria-hidden": true,
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mask", {
				id,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "26",
						height: "22",
						fill: "#fff"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "8.2",
						cy: "10.4",
						r: "2.4",
						fill: "#000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M3.9 17.4c0-2.4 1.9-4 4.3-4s4.3 1.6 4.3 4z",
						fill: "#000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "14.4",
						y: "8.4",
						width: "7.6",
						height: "1.9",
						rx: "0.95",
						fill: "#000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "14.4",
						y: "12",
						width: "7.6",
						height: "1.9",
						rx: "0.95",
						fill: "#000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "14.4",
						y: "15.6",
						width: "7.6",
						height: "1.9",
						rx: "0.95",
						fill: "#000"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.6",
				y: "3.4",
				width: "24.8",
				height: "18",
				rx: "2.6",
				mask: `url(#${id})`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "9.6",
				y: "0.6",
				width: "6.8",
				height: "4.4",
				rx: "1.2"
			})
		]
	});
}
function InfoIcon(props) {
	const id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": true,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mask", {
			id,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "24",
					height: "24",
					fill: "#fff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "7.3",
					r: "1.6",
					fill: "#000"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "10.6",
					y: "10.2",
					width: "2.8",
					height: "8",
					rx: "1.2",
					fill: "#000"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "11",
			mask: `url(#${id})`
		})]
	});
}
function GoogleIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		"aria-hidden": true,
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FFC107",
				d: "M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FF3D00",
				d: "m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#4CAF50",
				d: "M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#1976D2",
				d: "M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"
			})
		]
	});
}
function MicrosoftIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 23 23",
		"aria-hidden": true,
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#F25022",
				d: "M0 0h11v11H0z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#7FBA00",
				d: "M12 0h11v11H12z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#00A4EF",
				d: "M0 12h11v11H0z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FFB900",
				d: "M12 12h11v11H12z"
			})
		]
	});
}
/** Responsive per-screen input metrics preserving the reference proportions. */
var SIZES = {
	login: {
		root: "h-[54px] sm:h-[62px]",
		iconSlot: "w-[54px] sm:w-[70px]",
		input: "pl-[4px] text-[17px] sm:pl-[8px] sm:text-[20px]",
		trailing: "right-[18px] sm:right-[22px]"
	},
	signup: {
		root: "h-[52px] sm:h-[58px]",
		iconSlot: "w-[56px] sm:w-[76px]",
		input: "pl-[4px] text-[17px] tracking-[0.01em] sm:pl-[10px] sm:text-[20px]",
		trailing: "right-[16px] sm:right-[19px]"
	}
};
function AuthField({ icon: IconCmp, iconClassName, size, reveal, hint, type, className, ...inputProps }) {
	const [visible, setVisible] = (0, import_react.useState)(false);
	const s = SIZES[size];
	const inputType = reveal ? visible ? "text" : "password" : type;
	const RevealIcon = visible ? reveal === "eye-off" ? Eye : EyeOff : reveal === "eye-off" ? EyeOff : Eye;
	const hasTrailing = Boolean(reveal || hint);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: cn("auth-field relative flex w-full items-center", s.root, className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("flex shrink-0 items-center justify-center text-cream", s.iconSlot),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCmp, { className: iconClassName })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				...inputProps,
				type: inputType,
				className: cn("h-full min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-placeholder", s.input, hasTrailing ? "pr-[54px] sm:pr-[64px]" : "pr-[20px] sm:pr-[24px]")
			}),
			reveal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setVisible((v) => !v),
				"aria-label": visible ? "Hide password" : "Show password",
				className: cn("absolute top-1/2 -translate-y-1/2 text-foreground/90 transition-colors hover:text-foreground", s.trailing),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealIcon, {
					className: "size-[24px] sm:size-[26px]",
					strokeWidth: 1.8
				})
			}),
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				title: hint,
				"aria-label": hint,
				className: cn("absolute top-1/2 -translate-y-1/2 text-foreground/60", s.trailing),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoIcon, { className: "size-[24px] sm:size-[26px]" })
			})
		]
	});
}
/** NASA mark, divider and product name shown above both auth cards. */
function BrandHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex items-center gap-[16px] sm:gap-[28px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: nasa_logo_png_asset_default.url,
				alt: "NASA",
				width: 126,
				height: 112,
				className: "h-[68px] w-[76px] shrink-0 sm:h-[96px] sm:w-[108px] lg:h-[112px] lg:w-[126px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "h-[58px] w-[2px] shrink-0 rounded-full bg-foreground/80 sm:h-[82px] lg:h-[94px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[21px] leading-[25px] font-medium tracking-[0.005em] text-foreground sm:text-[28px] sm:leading-[32px] lg:text-[32px] lg:leading-[36px]",
					children: [
						"Astra Health",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Monitoring System"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-[6px] flex flex-wrap items-center gap-x-[10px] gap-y-[2px] text-[13.5px] leading-none text-foreground/95 sm:mt-[10px] sm:gap-x-[15px] sm:text-[17px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Monitor" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "size-[4px] rounded-full bg-foreground sm:size-[5px]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Predict" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "size-[4px] rounded-full bg-foreground sm:size-[5px]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Protect" })
					]
				})]
			})
		]
	});
}
/**
* Full-screen space backdrop with the brand header and responsive glowing glass card.
* Preserves the left-card / right-space-astronaut composition on desktop while stacking smoothly
* across tablet and mobile viewports.
*/
function AuthScene({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background px-[16px] py-[22px] sm:px-[34px] sm:py-[28px] lg:px-[52px] lg:py-[32px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpaceBackdrop, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto flex w-full max-w-[1460px] flex-1 flex-col gap-[26px] lg:gap-[32px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-auto flex w-full justify-center lg:justify-start lg:pl-[28px] xl:pl-[48px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "auth-card w-full max-w-[600px] lg:max-w-[620px]",
					children
				})
			})]
		})]
	});
}
var PROVIDERS = [
	{
		id: "google",
		label: "Continue with Google"
	},
	{
		id: "microsoft",
		label: "Continue with Microsoft"
	},
	{
		id: "nasa",
		label: "Continue with NASA"
	}
];
function SocialLogins() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap justify-center gap-[10px] sm:gap-[13px]",
		children: PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-label": p.label,
			className: "auth-tile flex h-[56px] w-[78px] items-center justify-center sm:h-[63px] sm:w-[88px]",
			children: [
				p.id === "google" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleIcon, { className: "size-[38px]" }),
				p.id === "microsoft" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicrosoftIcon, { className: "size-[32px]" }),
				p.id === "nasa" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: nasa_logo_png_asset_default.url,
					alt: "",
					className: "h-[37px] w-[42px] object-contain"
				})
			]
		}, p.id))
	});
}
//#endregion
export { EnvelopeIcon as a, PersonIcon as c, AuthScene as i, PersonPlusIcon as l, AuthDivider as n, IdCardIcon as o, AuthField as r, LockIcon as s, AstronautIcon as t, SocialLogins as u };
