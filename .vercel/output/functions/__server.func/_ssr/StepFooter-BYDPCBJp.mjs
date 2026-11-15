import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useOnboarding } from "./onboarding-store-DD2TJWml.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as nasa_logo_png_asset_default } from "./nasa-logo.png.asset-C9TGx8Ng.mjs";
import { A as ImageUp, Y as Check, dt as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as stepNeighbors, r as stepInfo, t as filledSegments } from "./steps-CxAg2ENu.mjs";
import { t as SpaceBackdrop } from "./SpaceBackdrop-7MkJBYWT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StepFooter-BYDPCBJp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Bold field label with an optional lighter qualifier, e.g. "Sex (assigned at birth)". */
function FieldLabel({ children, hint, htmlFor, id }) {
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [children, hint && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "font-normal text-onb-muted",
		children: [" ", hint]
	})] });
	const className = "block text-[15px] leading-[20px] font-bold text-onb-label";
	return htmlFor ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor,
		id,
		className,
		children: content
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		id,
		className,
		children: content
	});
}
/** Label + control with the 7px rhythm used across the step designs. */
function Field({ label, hint, htmlFor, labelId, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
			htmlFor,
			id: labelId,
			hint,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-[7px]",
			children
		})]
	});
}
function UnitInput({ unit, className, disabled, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("onb-field flex h-[50px] w-full items-center pr-[14px] sm:h-[52px] sm:pr-[21px]", disabled && "opacity-50", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			...props,
			disabled,
			autoComplete: "off",
			className: "h-full min-w-0 flex-1 bg-transparent pl-[16px] text-[16px] text-foreground outline-none placeholder:text-onb-placeholder disabled:cursor-not-allowed sm:pl-[23px] sm:text-[17px]"
		}), unit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "shrink-0 pl-[10px] text-[14.5px] text-onb-label sm:pl-[12px] sm:text-[15.5px]",
			children: unit
		})]
	});
}
/** Inline unit switch inside a field, e.g. "cm ft/in"; the active unit is coral. */
function UnitToggle({ options, value, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		role: "radiogroup",
		"aria-label": label,
		className: "flex items-center gap-[11px] sm:gap-[13px]",
		children: options.map((o) => {
			const active = o.value === value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "radio",
				"aria-checked": active,
				onClick: () => onChange(o.value),
				className: cn("text-[14.5px] transition-colors sm:text-[15.5px]", active ? "font-bold text-coral" : "text-onb-label hover:text-foreground"),
				children: o.label
			}, o.value);
		})
	});
}
var CHIP = "onb-chip h-[41px] px-[16px] text-[15.5px] leading-none sm:h-[43px] sm:px-[19px] sm:text-[16.5px]";
/** Single-choice pill row. */
function ChipGroup({ options, value, onChange, labelledBy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-labelledby": labelledBy,
		className: "flex flex-wrap gap-[10px]",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "radio",
			"aria-checked": o.value === value,
			onClick: () => onChange(o.value),
			className: CHIP,
			children: o.label
		}, o.value))
	});
}
/** Multi-choice pill row. */
function MultiChipGroup({ options, values, onToggle, labelledBy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "group",
		"aria-labelledby": labelledBy,
		className: "flex flex-wrap gap-[10px]",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "checkbox",
			"aria-checked": values.includes(o.value),
			onClick: () => onToggle(o.value),
			className: CHIP,
			children: o.label
		}, o.value))
	});
}
/** Small white checkbox with a text label. */
function CheckRow({ checked, onChange, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		role: "checkbox",
		"aria-checked": checked,
		onClick: () => onChange(!checked),
		className: cn("flex items-center gap-[12px] pl-[5px] text-left text-[15px] leading-[20px] text-onb-label sm:text-[15.5px]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-state": checked ? "checked" : "unchecked",
			className: "onb-check size-[18px] shrink-0",
			children: checked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "size-[13px]",
				strokeWidth: 3.4
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children })]
	});
}
/** Dashed drop area that accepts PNG, JPG or PDF by click or drag-and-drop. */
function UploadDrop({ title, fileName, onFile, className }) {
	const inputRef = (0, import_react.useRef)(null);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const accept = (file) => {
		if (!file) return;
		if (!/\.(png|jpe?g|pdf)$/i.test(file.name)) return;
		onFile(file.name);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onDragOver: (e) => {
			e.preventDefault();
			setDragging(true);
		},
		onDragLeave: () => setDragging(false),
		onDrop: (e) => {
			e.preventDefault();
			setDragging(false);
			accept(e.dataTransfer.files[0]);
		},
		className: cn("onb-dashed relative min-h-[88px] w-full rounded-[14px] transition-colors sm:min-h-[94px]", dragging && "bg-tile", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => inputRef.current?.click(),
				className: cn("flex min-h-[88px] w-full items-center justify-center gap-[12px] rounded-[14px] px-[14px] py-[12px] transition-colors hover:bg-tile sm:min-h-[94px] sm:gap-[16px]", fileName && "pr-[78px]"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-[42px] shrink-0 items-center justify-center rounded-[12px] border border-onb-tile-border bg-onb-tile text-onb-label sm:size-[46px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUp, {
						className: "size-[21px] sm:size-[23px]",
						strokeWidth: 1.7
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 text-left sm:text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block max-w-full truncate text-[14.5px] leading-[20px] font-bold text-coral sm:max-w-[460px] sm:text-[15.5px]",
						children: fileName ?? title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-[13.5px] leading-[18px] text-onb-label sm:text-[15px] sm:leading-[20px]",
						children: fileName ? "Uploaded · click to replace" : "PNG, JPG or PDF"
					})]
				})]
			}),
			fileName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onFile(null),
				className: "onb-skip absolute top-1/2 right-[16px] -translate-y-1/2 text-[14px] sm:right-[22px] sm:text-[14.5px]",
				children: "Remove"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				type: "file",
				accept: ".png,.jpg,.jpeg,.pdf,image/png,image/jpeg,application/pdf",
				className: "sr-only",
				tabIndex: -1,
				onChange: (e) => {
					accept(e.target.files?.[0]);
					e.target.value = "";
				}
			})
		]
	});
}
/** NASA mark + product name on the left, step counter and progress segments on the right. */
function OnboardingHeader({ step }) {
	const filled = filledSegments(step);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex flex-col items-start justify-between gap-[16px] md:flex-row md:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-[12px] sm:gap-[18px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: nasa_logo_png_asset_default.url,
				alt: "NASA",
				width: 68,
				height: 60,
				className: "h-[46px] w-[52px] shrink-0 object-contain sm:h-[56px] sm:w-[64px]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[19px] leading-[24px] font-bold tracking-[-0.003em] text-foreground sm:text-[23px] sm:leading-[28px] lg:text-[24.5px]",
					children: "Astra Health Monitoring System"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-[2px] flex flex-wrap items-center gap-[7px] text-[12.5px] leading-[16px] tracking-[0.04em] text-onb-muted sm:text-[14.5px] sm:leading-[18px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Monitor" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "size-[4px] rounded-full bg-onb-muted"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Predict" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "size-[4px] rounded-full bg-onb-muted"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Protect" })
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "progressbar",
			"aria-label": "Profile setup progress",
			"aria-valuemin": 1,
			"aria-valuemax": 6,
			"aria-valuenow": step,
			className: "flex w-full flex-wrap items-center gap-[7px] sm:w-auto sm:gap-[9.5px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mr-[2px] text-[14px] leading-none whitespace-nowrap text-onb-muted sm:text-[15.5px]",
				children: [
					"Step ",
					step,
					" of ",
					6
				]
			}), Array.from({ length: 6 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: cn("h-[6px] w-[28px] rounded-full transition-colors duration-500 sm:w-[40px] lg:w-[51px]", i < filled ? "bg-coral" : "bg-onb-progress")
			}, i))]
		})]
	});
}
/**
* Full-viewport responsive layout for onboarding steps, keeping the NASA/Astra space backdrop,
* progress header, main step card, and right-hand explainer/avatar preview panel balanced across
* mobile, tablet, laptop, and desktop screens without CSS zoom scaling traps.
*/
function OnboardingScene({ step, children, aside }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background px-[16px] py-[20px] sm:px-[28px] sm:py-[28px] lg:px-[44px] lg:py-[32px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpaceBackdrop, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto flex w-full max-w-[1460px] flex-1 flex-col gap-[22px] lg:gap-[26px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OnboardingHeader, { step }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid flex-1 grid-cols-1 items-stretch gap-[20px] lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-[26px] xl:grid-cols-[minmax(0,1fr)_378px] xl:gap-[30px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "onb-card min-w-0",
					children
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "onb-card min-w-0",
					children: aside
				})]
			})]
		})]
	});
}
/** Headline, intro line, form body and the pinned Back / Skip / Continue row. */
function StepCard({ title, accent, subtitle, footer, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-[20px] pt-[22px] pb-[24px] sm:px-[32px] sm:pt-[26px] sm:pb-[28px] lg:px-[37px] lg:pb-[30px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-[30px] leading-[36px] font-bold tracking-[-0.01em] text-foreground sm:text-[38px] sm:leading-[46px] lg:text-[43px] lg:leading-[52px]",
				children: [
					title,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-coral",
						children: accent
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-[8px] text-[15.5px] leading-[22px] text-onb-body sm:mt-[10px] sm:text-[17.5px] sm:leading-[24px]",
				children: subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-[16px]",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-auto pt-[28px] sm:pt-[34px]",
				children: footer
			})
		]
	});
}
var BACK = "onb-chip flex h-[48px] w-[86px] shrink-0 items-center justify-center text-[16px] font-bold sm:h-[55px] sm:w-[99px] sm:text-[18px]";
var SKIP = "onb-skip shrink-0 text-[15px] sm:text-[16.5px]";
var CTA = "auth-cta flex h-[48px] min-w-[180px] flex-1 items-center justify-center gap-[10px] rounded-full px-[20px] text-[17px] font-bold sm:h-[55px] sm:text-[19.5px]";
/**
* Back always returns to the previous step (Sign Up from step 2).
* Continue marks the step done and Skip marks it skipped; both advance to the next step,
* and from the last step (Launch Dashboard) to the dashboard.
*/
function StepFooter({ step, nextLabel = "Continue" }) {
	const { prev, next } = stepNeighbors(step);
	const { data, update } = useOnboarding();
	const { section } = stepInfo(step);
	const last = step === 6;
	const markDone = () => update("progress", { [section]: "done" });
	const markSkipped = () => {
		if (data.progress[section] !== "done") update("progress", { [section]: "skipped" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-[12px] sm:gap-[20px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: prev,
				className: BACK,
				children: "Back"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: next,
				className: SKIP,
				onClick: markSkipped,
				children: "Skip for now"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: next,
				className: CTA,
				onClick: markDone,
				children: [nextLabel, last ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "size-[22px] sm:size-[24px]",
					strokeWidth: 2.2
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "font-normal",
					children: "→"
				})]
			})
		]
	});
}
//#endregion
export { MultiChipGroup as a, StepFooter as c, UploadDrop as d, FieldLabel as i, UnitInput as l, ChipGroup as n, OnboardingScene as o, Field as r, StepCard as s, CheckRow as t, UnitToggle as u };
