var inputLeft2 = document.getElementById("input-left-two");
var inputRight2 = document.getElementById("input-right-two");
var thumbLeft2 = document.getElementById('leftThumbTwo')
var thumbRight2 = document.getElementById('rightThumbTwo')
var range2 = document.getElementById('rangeTwo')

function setLeftValue() {
	var _this = inputLeft2,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight2.value) - 1);
	console.log(_this.value);
	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft2.style.left = percent + "%";
	range2.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
	var _this = inputRight2,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft2.value) + 1);
	console.log(_this.value);
	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight2.style.right = (100 - percent) + "%";
	range2.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft2.addEventListener("input", setLeftValue);
inputRight2.addEventListener("input", setRightValue);

inputLeft2.addEventListener("mouseover", function() {
	thumbLeft2.classList.add("hover");
});
inputLeft2.addEventListener("mouseout", function() {
	thumbLeft2.classList.remove("hover");
});
inputLeft2.addEventListener("mousedown", function() {
	thumbLeft2.classList.add("active");
});
inputLeft2.addEventListener("mouseup", function() {
	thumbLeft2.classList.remove("active");
});

inputRight2.addEventListener("mouseover", function() {
	thumbRight2.classList.add("hover");
});
inputRight2.addEventListener("mouseout", function() {
	thumbRight2.classList.remove("hover");
});
inputRight2.addEventListener("mousedown", function() {
	thumbRight2.classList.add("active");
});
inputRight2.addEventListener("mouseup", function() {
	thumbRight2.classList.remove("active");
});