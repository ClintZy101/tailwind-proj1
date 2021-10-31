var inputLeft6 = document.getElementById("input-left-six");
var inputRight6 = document.getElementById("input-right-six");
var thumbLeft6 = document.getElementById('leftThumbSix')
var thumbRight6 = document.getElementById('rightThumbSix')
var range6 = document.getElementById('rangeSix')

function setLeftValue() {
	var _this = inputLeft6,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight6.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft6.style.left = percent + "%";
	range6.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
	var _this = inputRight6,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft6.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight6.style.right = (100 - percent) + "%";
	range6.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft6.addEventListener("input", setLeftValue);
inputRight6.addEventListener("input", setRightValue);

inputLeft6.addEventListener("mouseover", function() {
	thumbLeft6.classList.add("hover");
});
inputLeft6.addEventListener("mouseout", function() {
	thumbLeft6.classList.remove("hover");
});
inputLeft6.addEventListener("mousedown", function() {
	thumbLeft6.classList.add("active");
});
inputLeft6.addEventListener("mouseup", function() {
	thumbLeft6.classList.remove("active");
});

inputRight6.addEventListener("mouseover", function() {
	thumbRight6.classList.add("hover");
});
inputRight6.addEventListener("mouseout", function() {
	thumbRight6.classList.remove("hover");
});
inputRight6.addEventListener("mousedown", function() {
	thumbRight6.classList.add("active");
});
inputRight6.addEventListener("mouseup", function() {
	thumbRight6.classList.remove("active");
});