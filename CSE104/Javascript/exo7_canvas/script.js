"use strict";

// Create the canvas
const canvasElement = document.querySelector('canvas');
const ctx = canvasElement.getContext('2d');

ctx.canvas.width = 1024;
ctx.canvas.height = 512;

// Display the image on the canvas
const img_bird = new Image();
img_bird.src = "bird.png";
img_bird.onload = display_sprite; // display the image once it has been loaded


function display_sprite()
{

  const w = 240; // width
  const h = 314; // height

  // ctx.drawImage(image, x,y,w,h, x_dest,y_dest,w_dest,h_dest)
  ctx.drawImage(img_bird, 
    0, 0, w, h, // source
    0, 0, w, h  // destination
  ); 

  
}
