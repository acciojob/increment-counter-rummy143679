//your JS code here. If required.
const pt = document.getElementByTagName("p");
const btn = document.getElementByTagName("button");

btn.addEventListener("click", () => {
	alert(pt.textContent);
	pt.innerHtml = parseInt(pt.innerHtml) + 1;
})