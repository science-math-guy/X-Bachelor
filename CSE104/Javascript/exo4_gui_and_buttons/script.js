"use strict";

const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");

const length = document.getElementById("length");

color1.value="#ffffff";
color2.value="#000000";

length.value="400";

color1.addEventListener('input',changeColor);
color2.addEventListener('input',changeColor);

length.addEventListener('input',changeLength);

function changeColor(){
    document.getElementById("gradient").style.background=`linear-gradient(to right,${color1.value}, ${color2.value})`
}

function changeLength(){
    document.getElementById("gradient").style.width=length.value;
}


