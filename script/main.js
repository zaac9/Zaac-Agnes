
var h = document.getElementById('hamburger');
var openMenu = document.getElementById('menuControlOpen'); // or whatever triggers the toggle
var closeMenu = document.getElementById('menuControlClose'); // or whatever triggers the toggle
var clickWork = document.getElementById('navWork');
var z = document.getElementById('navName');

const cursor = document.querySelector('.pointer');
const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  // cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
 
}
window.addEventListener('mousemove', moveCursor);

openMenu.addEventListener('click', function(e) {
   h.classList.toggle('menu--active'); // add menu--active class
   z.classList.toggle('hide-show'); //Hide my name (fixes position glitch) when menu active

//    clickWork.addEventListener('click', function(e){
//         h.classList.toggle('menu--active');
//     });
});

 closeMenu.addEventListener('click', function(e) {
    h.classList.toggle('menu--active'); //  remove menu--active class
    z.classList.toggle('hide-show'); //show my name when menu closes
});


// FIXES ERROR OF MENU SCREEN NOT CLOSING ON HOME SCREEN WHEN CLICKING PROJECTS
    clickWork.addEventListener('click', function(e){
        if (h.classList.contains('menu--active')){
            h.classList.toggle('menu--active');
        }
    });



// POINTER CURSOR SCALE (APPLIES TO ANY <a> TAG)
$('a').hover(function(){
    $('.pointer').addClass('scale-pointer');
  }, function(){
    $('.pointer').removeClass('scale-pointer');
  });
// ______________________________

  // ITALIST
$('.italist-main').hover(function(){
  $('#italist-display').addClass('text-hover');
  $('.pointer').addClass('scale-pointer');
}, function(){
  $('#italist-display').removeClass('text-hover');
  $('.pointer').removeClass('scale-pointer');
});

// DOSSIER
$('.dossier-main').hover(function(){
  $('#dossier-display').addClass('text-hover');
  $('.pointer').addClass('scale-pointer');
}, function(){
  $('#dossier-display').removeClass('text-hover');
  $('.pointer').removeClass('scale-pointer');
});

// LA BATIE
$('.labatie-main').hover(function(){
  $('#labatie-display').addClass('text-hover');
  $('.pointer').addClass('scale-pointer');
}, function(){
  $('#labatie-display').removeClass('text-hover');
  $('.pointer').removeClass('scale-pointer');
});

// SUMMIT
$('.summit-main').hover(function(){
  $('#summit-display').addClass('text-hover');
  $('.pointer').addClass('scale-pointer');
}, function(){
  $('#summit-display').removeClass('text-hover');
  $('.pointer').removeClass('scale-pointer');
});
