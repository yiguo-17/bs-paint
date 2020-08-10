/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to repeat, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}


/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)



/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
const colorPalettes = document.querySelectorAll(".palette-color");
const brush = document.querySelector(".current-brush");
const canvas = document.querySelectorAll(".square"); 
let color = '';
const chooseColor = function(){
    const bgc = this.classList[1];
    const cc = brush.classList[1];
    brush.classList.replace(cc,bgc)
}
for (const palette of colorPalettes){
  palette.addEventListener('click',chooseColor);
}
const first = document.querySelector(".palette-color.color-1");

const draw = function(){
  const bgc = this.classList[1];
  const bc = brush.classList[1];
  this.classList.replace(bgc,bc);
}

for(const pixel of canvas){
  pixel.addEventListener('click',draw)
}