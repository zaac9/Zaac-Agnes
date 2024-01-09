
var h = document.getElementById('hamburger');
var openMenu = document.getElementById('menuControlOpen'); // or whatever triggers the toggle
var closeMenu = document.getElementById('menuControlClose'); // or whatever triggers the toggle
var clickWork = document.getElementById('navWork');
var z = document.getElementById('navName');

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





