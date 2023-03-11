"use strict";

document.addEventListener("mousemove", (e) => {
    let left = e.clientX;
    let top = e.clientY;
    document.getElementById("circle").style.left = left - 100 + 'px';
    document.getElementById("circle").style.top = top - 100 + 'px';
});

document.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        e.preventDefault;
        if(document.getElementById("circle").style.backgroundColor=="red"){
            document.getElementById("circle").style.backgroundColor="yellow"
        }else if(document.getElementById("circle").style.backgroundColor=="yellow"){
            document.getElementById("circle").style.backgroundColor="green"
        }else{
            document.getElementById("circle").style.backgroundColor="red"
        }
    }
})
