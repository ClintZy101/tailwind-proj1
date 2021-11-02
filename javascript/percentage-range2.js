var inputLeft3 = document.getElementById("input-left-three");
var inputRight3 = document.getElementById("input-right-three");
var thumbLeft3 = document.getElementById('leftThumbThree');
var thumbRight3 = document.getElementById('rightThumbThree');
var range3 = document.getElementById('rangeThree');


function setLeftValue() {
	var _this = inputLeft3,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight3.value) - 1);
	console.log(_this.value)
	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft3.style.left = percent + "%";
	range3.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
	var _this = inputRight3,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft3.value) + 1);
	console.log(_this.value)
	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight3.style.right = (100 - percent) + "%";
	range3.style.right = (100 - percent) + "%";
}

setRightValue();

inputLeft3.addEventListener("input", setLeftValue);
inputRight3.addEventListener("input", setRightValue);

inputLeft3.addEventListener("mouseover", function() {
	thumbLeft3.classList.add("hover");
});
inputLeft3.addEventListener("mouseout", function() {
	thumbLeft3.classList.remove("hover");
});
inputLeft3.addEventListener("mousedown", function() {
	thumbLeft3.classList.add("active");
});
inputLeft3.addEventListener("mouseup", function() {
	thumbLeft3.classList.remove("active");
});

inputRight3.addEventListener("mouseover", function() {
	thumbRight3.classList.add("hover");
});
inputRight3.addEventListener("mouseout", function() {
	thumbRight3.classList.remove("hover");
});
inputRight3.addEventListener("mousedown", function() {
	thumbRight3.classList.add("active");
});
inputRight3.addEventListener("mouseup", function() {
	thumbRight3.classList.remove("active");
});