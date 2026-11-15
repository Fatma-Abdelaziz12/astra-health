import { i as __toESM } from "../_runtime.mjs";
import { r as isSignedIn, t as apiRequest } from "./health-api-nLawGY4-.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useOnboarding } from "./onboarding-store-DD2TJWml.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as AvatarPortrait, r as ai_assistant_robot_png_asset_default } from "./AvatarArt-D7xQMTcX.mjs";
import { t as nasa_logo_png_asset_default } from "./nasa-logo.png.asset-C9TGx8Ng.mjs";
import { a as HYDRATION_LABEL, h as firstName, s as SLEEP_INFO } from "./health-BbPFK9c3.mjs";
import { n as useNotifications } from "./notifications-context-B3xN85g4.mjs";
import { at as Bell, g as RotateCcw, h as Send } from "../_libs/lucide-react.mjs";
import { t as useAccountName } from "./use-account-name-Ci6-Qn6E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.assistant-PVtQLgzK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* AI Assistant client — talks to the integrated backend assistant (the user's
* standalone ASTRA chatbot, now authenticated and connected to the real
* database). No credentials here: tokens live in the auth module and requests
* flow through the shared client in health-api.
*/
async function sendAssistantMessage(message, conversationId) {
	const body = { message };
	if (conversationId) body["conversationId"] = conversationId;
	return apiRequest("/api/assistant/messages", { body });
}
async function fetchAssistantStatus() {
	return apiRequest("/api/assistant/status");
}
async function fetchConversations() {
	return (await apiRequest("/api/assistant/conversations")).conversations;
}
async function fetchConversationMessages(id) {
	return (await apiRequest(`/api/assistant/conversations/${id}/messages`)).messages;
}
function initialMessages(userName) {
	return [{
		id: "initial-user",
		role: "user",
		text: "How is my health today?"
	}, {
		id: "initial-assistant",
		role: "assistant",
		text: `Your health is stable, ${userName}! 💙`,
		subtitle: "All vital signs are within normal range.",
		metricsTitle: "Key Metrics:",
		metrics: [
			{
				emoji: "❤️",
				value: "72 bpm",
				label: "Heart Rate"
			},
			{
				emoji: "💧",
				value: "98%",
				label: "SpO₂"
			},
			{
				emoji: "🌡️",
				value: "36.6°C",
				label: "Body Temp"
			},
			{
				emoji: "⚡",
				value: "92%",
				label: "Energy"
			}
		],
		closing: "Keep up the great work! 🚀",
		isDemoNote: true
	}];
}
function buildDemoReply(prompt, data, accountFirst) {
	const q = prompt.toLowerCase();
	const userName = accountFirst ?? firstName(data.account.fullName) ?? (data.avatar.callsign.trim() || "Astronaut");
	const hr = data.heart.restingHr.trim() || "72";
	const spo2 = data.vitals.spo2.trim() || "98";
	const sleepLabel = data.progress.heart === "done" ? SLEEP_INFO[data.heart.sleep].label : "7–8 h";
	const hydrationLabel = data.progress.heart === "done" ? HYDRATION_LABEL[data.heart.hydration] : "2–3 L";
	if (q.includes("heart") || q.includes("bpm") || q.includes("pulse") || q.includes("cardio")) return {
		id: `ast-${Date.now()}`,
		role: "assistant",
		text: `Heart telemetry preview looks steady, ${userName}! 💙`,
		subtitle: "Simulated demo overview — not medical analysis.",
		metricsTitle: "Cardio Snapshot (Demo):",
		metrics: [
			{
				emoji: "❤️",
				value: `${hr} bpm`,
				label: "Resting Heart Rate"
			},
			{
				emoji: "📈",
				value: "48 ms",
				label: "HRV Balance"
			},
			{
				emoji: "💧",
				value: `${spo2}%`,
				label: "SpO₂ Oxygenation"
			}
		],
		closing: "Connect a wearable sensor for live ECG & continuous alerts.",
		isDemoNote: true
	};
	if (q.includes("sleep") || q.includes("rest") || q.includes("tired") || q.includes("fatigue")) return {
		id: `ast-${Date.now()}`,
		role: "assistant",
		text: `Your rest target is tracking well, ${userName}! 🌙`,
		subtitle: "Simulated demo guidance based on your Astra Health profile.",
		metricsTitle: "Recovery Summary (Demo):",
		metrics: [
			{
				emoji: "🛌",
				value: sleepLabel,
				label: "Sleep Duration"
			},
			{
				emoji: "⚡",
				value: "92%",
				label: "Energy Readiness"
			},
			{
				emoji: "💧",
				value: hydrationLabel,
				label: "Daily Hydration"
			}
		],
		closing: "Keep a consistent sleep window before your next EVA check! 🚀",
		isDemoNote: true
	};
	if (q.includes("water") || q.includes("hydrat") || q.includes("oxygen") || q.includes("spo2")) return {
		id: `ast-${Date.now()}`,
		role: "assistant",
		text: `Oxygen and hydration look good in demo mode, ${userName}! 💧`,
		subtitle: "Simulated demo response — connect sensors for real-time telemetry.",
		metricsTitle: "Hydration & O₂ (Demo):",
		metrics: [
			{
				emoji: "💧",
				value: `${spo2}%`,
				label: "SpO₂ Level"
			},
			{
				emoji: "🥤",
				value: hydrationLabel,
				label: "Fluid Intake"
			},
			{
				emoji: "🌡️",
				value: "36.6°C",
				label: "Body Temp"
			}
		],
		closing: "Steady hydration supports optimal cabin performance! 🚀",
		isDemoNote: true
	};
	return {
		id: `ast-${Date.now()}`,
		role: "assistant",
		text: `I'm here to help, ${userName}! 💙`,
		subtitle: "This is a simulated demo assistant. For real clinical insights, connect a wearable sensor.",
		metricsTitle: "Current Demo Overview:",
		metrics: [
			{
				emoji: "❤️",
				value: `${hr} bpm`,
				label: "Heart Rate"
			},
			{
				emoji: "💧",
				value: `${spo2}%`,
				label: "SpO₂"
			},
			{
				emoji: "🌡️",
				value: "36.6°C",
				label: "Body Temp"
			},
			{
				emoji: "⚡",
				value: "92%",
				label: "Energy"
			}
		],
		closing: "Ask me about heart rate, sleep recovery, or hydration anytime! 🚀",
		isDemoNote: true
	};
}
/** Opening assistant message when connected to the real backend (no invented values). */
function liveWelcomeMessages(name) {
	return [{
		id: "welcome",
		role: "assistant",
		text: `Hello ${name}! 👋`,
		subtitle: "I'm ASTRA, connected to your Astra Health records. Ask me about your measurements, trends, or how to understand them."
	}];
}
function toChatMessage(m) {
	const msg = {
		id: `db-${m.id}`,
		role: m.role,
		text: m.content
	};
	if (m.role === "assistant" && m.degraded) msg.footnote = "ASTRA could not reach the AI service when this reply was generated.";
	return msg;
}
/** Four-point glowing AI sparkle icon matching the futuristic assistant design. */
function AiSparkleIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		fill: "none",
		"aria-hidden": true,
		className: cn("shrink-0 text-dash-cyan", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M16 2.5C16.7 10.1 21.9 15.3 29.5 16C21.9 16.7 16.7 21.9 16 29.5C15.3 21.9 10.1 16.7 2.5 16C10.1 15.3 15.3 10.1 16 2.5Z",
			fill: "currentColor"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M25.5 4.5C25.8 6.8 27.2 8.2 29.5 8.5C27.2 8.8 25.8 10.2 25.5 12.5C25.2 10.2 23.8 8.8 21.5 8.5C23.8 8.2 25.2 6.8 25.5 4.5Z",
			fill: "currentColor",
			opacity: "0.85"
		})]
	});
}
/**
* Interactive AI Assistant workspace inside the unified Astra Health DashboardShell.
* When signed in, messages are answered by the integrated ASTRA assistant
* (backend Gemini + this user's real database records, conversation history
* persisted). Signed out or offline, it falls back to the original clearly
* labelled demo responses. It never invents real medical analysis.
*/
function AssistantView() {
	const { data } = useOnboarding();
	const { unread } = useNotifications();
	const { account: accountName, settled } = useAccountName();
	const userName = accountName?.first ?? firstName(data.account.fullName) ?? (data.avatar.callsign.trim() || "Astronaut");
	const [messages, setMessages] = (0, import_react.useState)(() => initialMessages(userName));
	const [draft, setDraft] = (0, import_react.useState)("");
	const [isReplying, setIsReplying] = (0, import_react.useState)(false);
	const [live, setLive] = (0, import_react.useState)(false);
	const scrollEndRef = (0, import_react.useRef)(null);
	const replyTimerRef = (0, import_react.useRef)(null);
	const conversationIdRef = (0, import_react.useRef)(null);
	const initialCountRef = (0, import_react.useRef)(initialMessages(userName).length);
	const badgeCount = unread > 0 ? unread : 3;
	const isModified = messages.length > initialCountRef.current;
	(0, import_react.useEffect)(() => {
		scrollEndRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "end"
		});
	}, [messages, isReplying]);
	(0, import_react.useEffect)(() => {
		return () => {
			if (replyTimerRef.current !== null) window.clearTimeout(replyTimerRef.current);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!settled) return;
		let cancelled = false;
		const boot = async () => {
			if (!isSignedIn()) return;
			try {
				const status = await fetchAssistantStatus();
				if (cancelled) return;
				setLive(status.configured);
				const list = await fetchConversations();
				if (cancelled) return;
				const first = list[0];
				if (first) {
					conversationIdRef.current = first.id;
					const stored = await fetchConversationMessages(first.id);
					if (cancelled) return;
					initialCountRef.current = Math.max(stored.length, 1);
					setMessages(stored.length ? stored.map(toChatMessage) : liveWelcomeMessages(userName));
				} else {
					initialCountRef.current = 1;
					setMessages(liveWelcomeMessages(userName));
				}
			} catch {
				if (!cancelled) setLive(false);
			}
		};
		boot();
		return () => {
			cancelled = true;
		};
	}, [settled]);
	const handleSubmit = (e) => {
		e.preventDefault();
		const trimmed = draft.trim();
		if (!trimmed || isReplying) return;
		const userMsg = {
			id: `usr-${Date.now()}`,
			role: "user",
			text: trimmed
		};
		setMessages((prev) => [...prev, userMsg]);
		setDraft("");
		setIsReplying(true);
		if (live) {
			(async () => {
				try {
					const res = await sendAssistantMessage(trimmed, conversationIdRef.current ?? void 0);
					conversationIdRef.current = res.conversationId;
					const r = res.reply;
					const replyMsg = {
						id: `ast-${Date.now()}`,
						role: "assistant",
						text: r.text,
						subtitle: r.degraded ? "ASTRA could not reach the AI service just now — your message was saved and will be kept in context." : r.dataAsOf ? "Answered from your recorded measurements — informational only, not a medical diagnosis." : "You have no measurements recorded yet, so ASTRA answered without personal health data."
					};
					if (r.metrics.length > 0) {
						replyMsg.metricsTitle = "From your records:";
						replyMsg.metrics = r.metrics;
					}
					setMessages((prev) => [...prev, replyMsg]);
				} catch {
					const demo = buildDemoReply(trimmed, data, accountName?.first ?? null);
					setMessages((prev) => [...prev, {
						...demo,
						footnote: "Backend assistant unreachable — offline demo response shown."
					}]);
				} finally {
					setIsReplying(false);
				}
			})();
			return;
		}
		replyTimerRef.current = window.setTimeout(() => {
			setMessages((prev) => [...prev, buildDemoReply(trimmed, data, accountName?.first ?? null)]);
			setIsReplying(false);
		}, 520);
	};
	const handleReset = () => {
		if (replyTimerRef.current !== null) {
			window.clearTimeout(replyTimerRef.current);
			replyTimerRef.current = null;
		}
		setIsReplying(false);
		if (live) {
			conversationIdRef.current = null;
			initialCountRef.current = 1;
			setMessages(liveWelcomeMessages(userName));
		} else {
			initialCountRef.current = initialMessages(userName).length;
			setMessages(initialMessages(userName));
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-1 flex-col gap-[18px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-[14px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-[14px] sm:gap-[16px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-[48px] shrink-0 items-center justify-center rounded-[16px] border-[1.5px] border-dash-cyan/60 bg-[oklch(0.28_0.11_255_/_65%)] shadow-[0_0_22px_oklch(0.8_0.135_228_/_40%)] sm:size-[52px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiSparkleIcon, { className: "size-[26px] drop-shadow-[0_0_10px_var(--dash-cyan)] sm:size-[30px]" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-[10px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-[26px] leading-[32px] font-bold tracking-[-0.01em] text-foreground sm:text-[32px] sm:leading-[38px]",
						children: "AI Assistant"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-dash-cyan/45 bg-dash-blue/25 px-[10px] py-[2px] text-[12px] font-medium text-dash-ice",
						children: live ? "Connected" : "Demo Mode"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-[2px] text-[14.5px] leading-[20px] text-dash-muted sm:text-[15.5px]",
					children: "Your intelligent health companion in space"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-[12px]",
				children: [
					isModified && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleReset,
						className: "dash-ghost inline-flex h-[42px] items-center gap-[7px] rounded-full px-[16px] text-[13.5px] font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-[15px]" }), "Reset chat"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/dashboard/notifications",
						"aria-label": `Notifications (${badgeCount} unread)`,
						className: "dash-pill relative flex size-[46px] items-center justify-center transition-colors hover:border-dash-cyan sm:size-[48px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
							className: "size-[21px] text-foreground",
							strokeWidth: 1.9
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-[4px] -right-[4px] flex h-[20px] min-w-[20px] items-center justify-center rounded-full bg-coral px-[5px] text-[11.5px] font-bold text-foreground shadow-[0_0_10px_var(--coral)]",
							children: badgeCount
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-label": "Astra AI Robot",
						className: "dash-ring relative size-[46px] shrink-0 overflow-hidden sm:size-[48px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ai_assistant_robot_png_asset_default.url,
							alt: "Astra AI Robot",
							className: "absolute top-[5px] left-1/2 h-[42px] w-auto -translate-x-1/2"
						})
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-1 flex-col gap-[22px] xl:flex-row xl:items-stretch xl:gap-[28px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Astra AI Companion",
				className: "relative flex shrink-0 flex-col items-center justify-center py-[6px] select-none xl:w-[390px] 2xl:w-[430px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute top-1/2 left-1/2 size-[300px] -translate-x-1/2 -translate-y-[42%] rounded-full bg-[radial-gradient(circle,oklch(0.76_0.16_230_/_26%)_0%,oklch(0.55_0.19_254_/_10%)_48%,transparent_72%)] blur-[10px] sm:size-[350px]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-30 mb-[14px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[24px] border-[1.5px] border-dash-cyan/80 bg-[linear-gradient(180deg,oklch(0.3_0.12_258_/_88%)_0%,oklch(0.21_0.09_263_/_92%)_100%)] px-[22px] py-[14px] text-center shadow-[0_0_26px_oklch(0.75_0.15_232_/_38%),inset_0_1px_0_oklch(1_0_0_/_18%)] backdrop-blur-[14px] sm:px-[26px] sm:py-[16px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[19px] leading-[26px] font-bold text-foreground sm:text-[20px] sm:leading-[28px]",
								children: [
									"Hello ",
									userName,
									"!",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										role: "img",
										"aria-label": "waving hand",
										children: "👋"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-[2px] text-[16px] leading-[23px] font-medium text-dash-ice sm:text-[17.5px] sm:leading-[25px]",
								children: "How can I help you today?"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "mx-auto -mt-[8px] size-[16px] rotate-45 border-r-[1.5px] border-b-[1.5px] border-dash-cyan/80 bg-[oklch(0.22_0.09_263)]"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-[240px] w-[260px] items-center justify-center sm:h-[290px] sm:w-[320px] xl:h-[320px] xl:w-[350px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HolographicRings, { layer: "back" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "dash-float relative z-10 flex h-full items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: ai_assistant_robot_png_asset_default.url,
										alt: "Astra AI Astronaut Robot",
										className: "h-full w-auto object-contain drop-shadow-[0_14px_28px_oklch(0.15_0.08_260_/_75%)]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: nasa_logo_png_asset_default.url,
										alt: "NASA insignia",
										className: "pointer-events-none absolute top-[62%] left-[55.5%] size-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-95 drop-shadow-[0_0_6px_oklch(0.8_0.135_228_/_65%)]"
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HolographicRings, { layer: "front" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"aria-hidden": true,
						className: "relative z-0 -mt-[22px] flex flex-col items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[20px] w-[200px] bg-[linear-gradient(180deg,transparent_0%,oklch(0.8_0.14_228_/_24%)_100%)] blur-[4px] sm:w-[220px]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative flex h-[36px] w-[250px] items-center justify-center rounded-[50%] border-[2px] border-dash-cyan/85 bg-[radial-gradient(ellipse_at_center,oklch(0.82_0.14_228_/_42%)_0%,oklch(0.55_0.18_250_/_22%)_58%,transparent_100%)] shadow-[0_0_28px_oklch(0.8_0.14_228_/_60%),inset_0_0_16px_oklch(0.85_0.12_225_/_55%)] sm:h-[40px] sm:w-[290px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[20px] w-[180px] rounded-[50%] border-[1.5px] border-dash-ice/80 bg-[radial-gradient(ellipse_at_center,oklch(0.88_0.1_225_/_45%)_0%,transparent_75%)] shadow-[0_0_14px_oklch(0.85_0.12_225_/_65%)] sm:h-[22px] sm:w-[210px]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-[4px] h-[10px] w-[180px] rounded-[50%] bg-dash-cyan/25 blur-[8px] sm:w-[200px]" })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "AI Health Chat",
				className: "relative flex min-h-[460px] flex-1 min-w-0 flex-col overflow-hidden rounded-[24px] border-[1.5px] border-dash-cyan/60 bg-[radial-gradient(110%_80%_at_0%_0%,oklch(0.5_0.16_250_/_26%)_0%,transparent_55%),linear-gradient(180deg,oklch(0.28_0.12_260_/_72%)_0%,oklch(0.19_0.09_264_/_82%)_100%)] p-[16px] shadow-[0_0_32px_oklch(0.68_0.16_244_/_30%),inset_0_1px_0_oklch(1_0_0_/_18%)] backdrop-blur-[20px] sm:rounded-[28px] sm:p-[24px] xl:max-h-[760px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-x-[24px] top-0 h-[1px] bg-[linear-gradient(90deg,transparent_0%,oklch(0.9_0.08_225_/_65%)_50%,transparent_100%)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dash-scroll flex-1 space-y-[18px] overflow-y-auto pr-[4px] sm:pr-[6px]",
						children: [
							messages.map((msg) => msg.role === "user" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-end gap-[10px] sm:gap-[12px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "max-w-[82%] rounded-[20px] rounded-tr-[6px] border border-[oklch(0.82_0.12_232_/_75%)] bg-[linear-gradient(180deg,oklch(0.67_0.18_248)_0%,oklch(0.52_0.21_258)_100%)] px-[16px] py-[11px] text-[15.5px] leading-[22px] font-medium text-foreground shadow-[0_6px_22px_oklch(0.62_0.19_252_/_45%),inset_0_1px_0_oklch(1_0_0_/_28%)] sm:max-w-[78%] sm:px-[20px] sm:py-[13px] sm:text-[16.5px] sm:leading-[24px]",
									children: msg.text
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarPortrait, {
									size: 38,
									className: "mt-[2px] sm:size-[42px]"
								})]
							}, msg.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-[10px] sm:gap-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "dash-ring relative mt-[2px] size-[38px] shrink-0 overflow-hidden sm:size-[44px]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: ai_assistant_robot_png_asset_default.url,
										alt: "Astra AI",
										className: "absolute top-[5px] left-1/2 h-[34px] w-auto -translate-x-1/2 sm:h-[40px]"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "max-w-[88%] rounded-[22px] rounded-tl-[6px] border-[1.5px] border-dash-cyan/45 bg-[linear-gradient(180deg,oklch(0.32_0.12_258_/_78%)_0%,oklch(0.22_0.09_263_/_88%)_100%)] px-[16px] py-[14px] text-foreground shadow-[0_6px_24px_oklch(0.16_0.07_262_/_55%),inset_0_1px_0_oklch(1_0_0_/_12%)] sm:max-w-[84%] sm:px-[22px] sm:py-[18px]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[16.5px] leading-[23px] font-bold text-foreground sm:text-[17.5px] sm:leading-[25px]",
											children: msg.text
										}),
										msg.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-[4px] text-[14.5px] leading-[21px] text-dash-ice/90 sm:text-[15px]",
											children: msg.subtitle
										}),
										msg.metrics && msg.metrics.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-[14px]",
											children: [msg.metricsTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-[8px] text-[14px] font-semibold tracking-[0.01em] text-dash-cyan sm:text-[14.5px]",
												children: msg.metricsTitle
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid grid-cols-1 gap-[8px] sm:grid-cols-2",
												children: msg.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-[10px] rounded-[14px] border border-dash-cyan/28 bg-[oklch(0.25_0.1_260_/_55%)] px-[12px] py-[9px]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[17px] leading-none",
														"aria-hidden": true,
														children: m.emoji
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[14.5px] leading-[20px] text-foreground sm:text-[15px]",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
																className: "font-bold",
																children: m.value
															}),
															" ",
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "text-dash-muted",
																children: ["— ", m.label]
															})
														]
													})]
												}, `${msg.id}-${m.label}`))
											})]
										}),
										msg.closing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-[14px] text-[15px] leading-[22px] font-medium text-foreground sm:text-[15.5px]",
											children: msg.closing
										}),
										msg.isDemoNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-[10px] border-t border-dash-line pt-[8px] text-[12px] text-dash-muted",
											children: "Demo response · Displays sample metrics for demonstration only, not medical advice."
										}),
										msg.footnote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-[10px] border-t border-dash-line pt-[8px] text-[12px] text-dash-muted",
											children: msg.footnote
										})
									]
								})]
							}, msg.id)),
							isReplying && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-[14px]",
								"aria-live": "polite",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "dash-ring relative mt-[2px] size-[42px] shrink-0 overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: ai_assistant_robot_png_asset_default.url,
										alt: "Astra AI",
										className: "absolute top-[5px] left-1/2 h-[38px] w-auto -translate-x-1/2"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-[6px] rounded-[20px] rounded-tl-[6px] border-[1.5px] border-dash-cyan/45 bg-[oklch(0.28_0.11_260_/_80%)] px-[18px] py-[14px]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-[8px] animate-bounce rounded-full bg-dash-cyan [animation-delay:-0.2s]" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-[8px] animate-bounce rounded-full bg-dash-cyan [animation-delay:-0.1s]" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-[8px] animate-bounce rounded-full bg-dash-cyan" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: scrollEndRef })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						onSubmit: handleSubmit,
						className: "mt-[16px] shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-[56px] items-center gap-[10px] rounded-full border-[1.5px] border-dash-cyan/55 bg-[oklch(0.21_0.08_263_/_82%)] pr-[6px] pl-[16px] shadow-[0_0_20px_oklch(0.68_0.16_244_/_20%),inset_0_1px_0_oklch(1_0_0_/_8%)] transition-all focus-within:border-dash-cyan focus-within:shadow-[0_0_24px_oklch(0.8_0.135_228_/_35%)] sm:h-[60px] sm:gap-[12px] sm:pr-[7px] sm:pl-[18px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiSparkleIcon, { className: "size-[20px] drop-shadow-[0_0_8px_var(--dash-cyan)] sm:size-[22px]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: draft,
									onChange: (e) => setDraft(e.target.value),
									placeholder: "Type your message…",
									"aria-label": "Message Astra AI Assistant",
									className: "min-w-0 flex-1 bg-transparent text-[15.5px] text-foreground placeholder:text-dash-muted/80 focus:outline-none sm:text-[16px]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: !draft.trim() || isReplying,
									"aria-label": "Send message",
									className: "flex size-[44px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,oklch(0.76_0.15_236)_0%,oklch(0.58_0.2_256)_100%)] text-foreground shadow-[0_0_20px_oklch(0.75_0.16_242_/_75%),inset_0_1px_0_oklch(1_0_0_/_35%)] transition-all hover:brightness-110 active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-45 disabled:shadow-none sm:size-[46px]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
										className: "size-[19px] -translate-x-[1px] translate-y-[1px]",
										strokeWidth: 2.2
									})
								})
							]
						})
					})
				]
			})]
		})]
	});
}
/** Multi-layered glowing cyan holographic rings wrapping behind and in front of the robot. */
function HolographicRings({ layer }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: [
		{
			top: "54%",
			width: "92%",
			height: "20%",
			rotate: "-8deg"
		},
		{
			top: "67%",
			width: "102%",
			height: "22%",
			rotate: "6deg"
		},
		{
			top: "79%",
			width: "86%",
			height: "18%",
			rotate: "-4deg"
		}
	].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": true,
		className: cn("pointer-events-none absolute left-1/2 rounded-[50%] border-[2.5px] border-dash-cyan/85 shadow-[0_0_16px_oklch(0.8_0.135_228_/_75%),inset_0_0_10px_oklch(0.8_0.135_228_/_45%)]", layer === "back" ? "z-0" : "z-20"),
		style: {
			top: r.top,
			width: r.width,
			height: r.height,
			transform: `translateX(-50%) rotate(${r.rotate})`,
			clipPath: layer === "back" ? "inset(0 0 50% 0)" : "inset(50% 0 0 0)"
		}
	}, `${layer}-${i}`)) });
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssistantView, {});
}
//#endregion
export { Page as component };
