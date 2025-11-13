var h = document.getElementById('hamburger');
var openMenu = document.getElementById('menuControlOpen');
var closeMenu = document.getElementById('menuControlClose');
var clickWork = document.getElementById('navWork');

const cursor = document.querySelector('.pointer');
const moveCursor = (e)=> {
  if (!cursor) return;
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
};
window.addEventListener('mousemove', moveCursor);

if (openMenu && h) {
  openMenu.addEventListener('click', function(e) {
     h.classList.toggle('menu--active');
  });
}

if (closeMenu && h) {
  closeMenu.addEventListener('click', function(e) {
     h.classList.toggle('menu--active');
  });
}

if (clickWork && h) {
  clickWork.addEventListener('click', function(e){
      if (h.classList.contains('menu--active')){
          h.classList.toggle('menu--active');
      }
  });
}

// POINTER CURSOR SCALE (APPLIES TO ANY <a> TAG) — only if jQuery present
if (window.jQuery) {
  $('a').hover(function(){
      $('.pointer').addClass('scale-pointer');
    }, function(){
      $('.pointer').removeClass('scale-pointer');
    });
}
