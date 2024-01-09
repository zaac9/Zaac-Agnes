
const cursor = document.querySelector('.pointer');

const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  // cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
 
}

window.addEventListener('mousemove', moveCursor);