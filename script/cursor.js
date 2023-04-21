
const mouseCursor = document.querySelector('.pointer');

const moveCursor = (e)=> {
  const mouseY = e.clientY-8;
  const mouseX = e.clientX-8;
   
  mouseCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  // mouseCursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
 
}

window.addEventListener('mousemove', moveCursor);