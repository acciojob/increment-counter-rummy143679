//your JS code here. If required.
const pt = document.getElementById("counter");
const btn = document.getElementById("incrementBtn");

btn.addEventListener("click", () => {
	alert(pt.textContent);
	pt.textContent = parseInt(pt.textContent) + 1;
})