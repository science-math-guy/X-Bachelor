"use strict";


const redDiv = document.querySelector('.red');
const yellowDiv = document.querySelector('.yellow');

redDiv.addEventListener('click',redClicked);;
yellowDiv.addEventListener('click',yellowClicked);

function redClicked(){
    const newElement = document.createElement('p');
    newElement.textContent='Red!'
    const article = document.querySelector('body');
    article.appendChild(newElement);
}

function yellowClicked(){
    const newElement = document.createElement('p');
    newElement.textContent='Yellow!'
    const article = document.querySelector('body');
    article.appendChild(newElement);
}
