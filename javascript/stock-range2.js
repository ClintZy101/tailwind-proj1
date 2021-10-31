var inputLeft4 = document.getElementById("input-left-four");
var inputRight4 = document.getElementById("input-right-four");
var thumbLeft4 = document.getElementById('leftThumbFour')
var thumbRight4 = document.getElementById('rightThumbFour')
var range4 = document.getElementById('rangeFour')

function setLeftValue() {
	var _this = inputLeft4,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight4.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft4.style.left = percent + "%";
	range4.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
	var _this = inputRight4,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft4.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight4.style.right = (100 - percent) + "%";
	range4.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft4.addEventListener("input", setLeftValue);
inputRight4.addEventListener("input", setRightValue);

inputLeft4.addEventListener("mouseover", function() {
	thumbLeft4.classList.add("hover");
});
inputLeft4.addEventListener("mouseout", function() {
	thumbLeft4.classList.remove("hover");
});
inputLeft4.addEventListener("mousedown", function() {
	thumbLeft4.classList.add("active");
});
inputLeft4.addEventListener("mouseup", function() {
	thumbLeft4.classList.remove("active");
});

inputRight4.addEventListener("mouseover", function() {
	thumbRight4.classList.add("hover");
});
inputRight4.addEventListener("mouseout", function() {
	thumbRight4.classList.remove("hover");
});
inputRight4.addEventListener("mousedown", function() {
	thumbRight4.classList.add("active");
});
inputRight4.addEventListener("mouseup", function() {
	thumbRight4.classList.remove("active");
});