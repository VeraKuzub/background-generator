// 1. Write code so that the colour inputs match the background generated on the first page load. 

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");


function setGradient (){
	body.style.background = 
		"linear-gradient(to right, "
		+ color1.value 
		+ ", " 
		+ color2.value 
		+")";
	css.textContent = body.style.background + ";";
}


// Computed Style of element
function getValue (element, cssValue){
	var elem = document.querySelector(element);
	var valueNow = window.getComputedStyle(elem, null).getPropertyValue(cssValue);
	return valueNow;
}

// get css value of linear-gradient from Computed Style of element
function getValueGradient (value) {
	var regex = /linear.+(\))/g;
	var gradientValue = (value.match(regex));
	return gradientValue;

}

// get random number from 0 to 255
function RandomNumber(){
	var random = Math.floor(Math.random() * 255) + 1; 
	return random;
}


// to Convert an Integer into a Hexadecimal. 
function rgbToHex (rgb) { 
	var hex = Number(rgb).toString(16); 
	if (hex.length < 2) { 
		hex = "0" + hex; 
	} return hex; 
}; 

// get a full random hex color code
function fullColorHex () {   
	var red = rgbToHex(RandomNumber());
	var green = rgbToHex(RandomNumber());
	var blue = rgbToHex(RandomNumber());
	return "#"+red+green+blue;
}; 


function setRandomHex (){
	color1.setAttribute("value",fullColorHex());
	color2.setAttribute("value",fullColorHex());
	var newColor1 = color1.getAttribute("value");
	var newColor2 = color2.getAttribute("value");
	body.style.background = 
		"linear-gradient(to right, "
		+ newColor1
		+ ", " 
		+ newColor2 
		+")";
	css.textContent = body.style.background + ";";
}


color1.setAttribute("value","#ff0000");
color2.setAttribute("value","#FFFF00"); 

css.innerHTML = getValueGradient(getValue("body", "background"));

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// create random button
var element = document.createElement("input");
var btnRandomColor = document.querySelector("h3").parentElement.appendChild(element);
btnRandomColor.setAttribute("name","RandomColor");
btnRandomColor.setAttribute("value","Random Colors");
btnRandomColor.setAttribute("type","button");
btnRandomColor.setAttribute("id","btnRandomColor");


// generates two random colour inputs
document.getElementById("btnRandomColor").addEventListener("click", setRandomHex);
