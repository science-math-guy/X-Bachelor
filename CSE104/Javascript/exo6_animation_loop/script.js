"use strict";

const radius = 50;  // Radius of the circle
let y = 0;          // height (/vertical) of the circle within the viewport
let circleElement = document.querySelector('.circle');

let circles = [];
let circlesY=[];

main();

function main() {
  document.addEventListener('click', createCircle);
}

requestAnimationFrame( createCircle )

function createCircle(event) {
  const x = event.clientX;
  y = event.clientY;
  circleElement.style.top = `${y-radius}px`;
  circleElement.style.left = `${x-radius}px`;
  requestAnimationFrame( createCircle )

}