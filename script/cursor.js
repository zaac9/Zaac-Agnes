
const cursorPointed = document.querySelector('.pointed');


const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', moveCursor);

// let innerCursor = document.querySelector(".inner-cursor");

// document.addEventListener("mousemove", moveCursor);

// function moveCursor(e) {
//   let x = e.clientX; //gets mouse location on screen
//   let y = e.clientY;
//   // console.log(x, y);

//   innerCursor.style.left = '${x}px';
//   innerCursor.style.top = '${y}px';

// }


