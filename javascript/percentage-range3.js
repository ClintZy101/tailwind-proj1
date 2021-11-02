var inputLeft5 = document.getElementById("input-left-five");
var inputRight5 = document.getElementById("input-right-five");
var thumbLeft5 = document.getElementById('leftThumbFive');
var thumbRight5 = document.getElementById('rightThumbFive');
var range5 = document.getElementById('rangeFive');


function setLeftValue() {
	var _this = inputLeft5,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight5.value) - 1);
	console.log(_this.value);
	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft5.style.left = percent + "%";
	range5.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
	var _this = inputRight5,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft5.value) + 1);
	console.log(_this.value);
	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight5.style.right = (100 - percent) + "%";
	range5.style.right = (100 - percent) + "%";
}

setRightValue();

inputLeft5.addEventListener("input", setLeftValue);
inputRight5.addEventListener("input", setRightValue);

inputLeft5.addEventListener("mouseover", function () {
	thumbLeft5.classList.add("hover");
});
inputLeft5.addEventListener("mouseout", function () {
	thumbLeft5.classList.remove("hover");
});
inputLeft5.addEventListener("mousedown", function () {
	thumbLeft5.classList.add("active");
});
inputLeft5.addEventListener("mouseup", function () {
	thumbLeft5.classList.remove("active");
});

inputRight5.addEventListener("mouseover", function () {
	thumbRight5.classList.add("hover");
});
inputRight5.addEventListener("mouseout", function () {
	thumbRight5.classList.remove("hover");
});
inputRight5.addEventListener("mousedown", function () {
	thumbRight5.classList.add("active");
});
inputRight5.addEventListener("mouseup", function () {
	thumbRight5.classList.remove("active");
});