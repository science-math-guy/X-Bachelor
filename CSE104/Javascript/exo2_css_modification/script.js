"use strict";

let imageState = 1

const clickImage = document.querySelector('img');

const clickCircle = document.querySelector('.click_circle');
const clickSquare = document.querySelector('.click_square');
const clickRed = document.querySelector('.click_red');
const clickYellow = document.querySelector('.click_yellow');

clickImage.addEventListener('click', clickedImage);

clickCircle.addEventListener('click', clickedCircle);
clickSquare.addEventListener('click', clickedSquare);
clickRed.addEventListener('click', clickedRed);
clickYellow.addEventListener('click', clickedYellow);

function clickedImage(){
    const element = document.querySelector("img");
    if (imageState==1){
        element.src = "pic_02.png";
        imageState+=1;
    }else if(imageState==2){
        element.src = "pic_01.png";
        imageState-=1;
    }
}

function clickedCircle() {
    const element = document.querySelector('div');
    element.classList.remove("square");
    element.classList.add("circle");
}

function clickedSquare() {
    const element = document.querySelector('div');
    element.classList.remove("circle");
    element.classList.add("square");
}

function clickedRed() {
    const element = document.querySelector('div');
    element.classList.remove("yellow");
    element.classList.add("red");
}

function clickedYellow() {
    const element = document.querySelector('div');
    element.classList.remove("red");
    element.classList.add("yellow");
}