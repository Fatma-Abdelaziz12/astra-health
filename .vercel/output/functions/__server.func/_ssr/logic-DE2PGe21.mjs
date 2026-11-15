//#region node_modules/.nitro/vite/services/ssr/assets/logic-DE2PGe21.js
var CM_PER_INCH = 2.54;
var LB_PER_KG = 2.20462;
/** Keep digits and a single decimal point. */
function numericOnly(value) {
	const [whole = "", ...rest] = value.replace(/[^\d.]/g, "").split(".");
	return rest.length ? `${whole}.${rest.join("")}` : whole;
}
/** Keep the characters used to type feet and inches, e.g. 5'9". */
function feetInchesOnly(value) {
	return value.replace(/[^\d.'"\s]/g, "");
}
function cmToFeetInches(cm) {
	const n = parseFloat(cm);
	if (!Number.isFinite(n) || n <= 0) return "";
	const totalInches = n / CM_PER_INCH;
	let feet = Math.floor(totalInches / 12);
	let inches = Math.round(totalInches - feet * 12);
	if (inches === 12) {
		feet += 1;
		inches = 0;
	}
	return `${feet}'${inches}"`;
}
function feetInchesToCm(value) {
	const match = value.match(/^\s*(\d+(?:\.\d+)?)\s*(?:'|ft)?\s*(\d+(?:\.\d+)?)?/);
	if (!match) return "";
	const feet = parseFloat(match[1] ?? "0");
	const inches = match[2] ? parseFloat(match[2]) : 0;
	const cm = Math.round((feet * 12 + inches) * CM_PER_INCH);
	return cm > 0 ? String(cm) : "";
}
function convertHeight(value, from, to) {
	if (from === to || !value.trim()) return value;
	return to === "ftin" ? cmToFeetInches(value) : feetInchesToCm(value);
}
function convertWeight(value, from, to) {
	if (from === to || !value.trim()) return value;
	const n = parseFloat(value);
	if (!Number.isFinite(n) || n <= 0) return "";
	return String(Math.round(to === "lb" ? n * LB_PER_KG : n / LB_PER_KG));
}
/** "None" excludes every other condition; clearing the last condition falls back to "None". */
function toggleHeartCondition(current, picked) {
	if (picked === "none") return ["none"];
	const others = current.filter((c) => c !== "none" && c !== picked);
	const next = current.includes(picked) ? others : [...others, picked];
	return next.length ? next : ["none"];
}
//#endregion
export { toggleHeartCondition as a, numericOnly as i, convertWeight as n, feetInchesOnly as r, convertHeight as t };
