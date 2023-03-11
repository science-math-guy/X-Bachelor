"use strict";

/* Exercise 1:

const box1 = document.querySelector("#Box1");
const box2 = document.querySelector("#Box2");
const box3 = document.querySelector("#Box3");

box1.addEventListener("click", clickOnBox);
box2.addEventListener("click", clickOnBox);
box3.addEventListener("click", clickOnBox);

*/

/* Exercise 2 */

const box = document.querySelectorAll(".box")

for (let k = 0; k < box.length; k++) {
    box[k].addEventListener("click", clickOnBox);
}

function clickOnBox(event) {
    document.getElementById(event.currentTarget.id).textContent = `Selected ${event.currentTarget.id}`;
}

const imageSelector = document.querySelectorAll("img");

textPresent = 0;

for (let i = 0; i < imageSelector.length; i++) {
    imageSelector[i].addEventListener("click", imageClicked);
}

function imageClicked(event) {
    const element = document.getElementById("text");
    if (textPresent == 0) {
        element.textContent = `You cliked on a ${event.currentTarget.alt}`;
        textPresent = 1;
    } else {
        element.textContent += `, and then on a ${event.currentTarget.alt}`;
    }
}

function clickedButton() {
    const element = document.getElementById("text");
    textPresent = 0;
    element.textContent = "";
}