
var h = document.getElementById('hamburger');
var openMenu = document.getElementById('menuControlOpen'); // or whatever triggers the toggle
var closeMenu = document.getElementById('menuControlClose'); // or whatever triggers the toggle
var clickWork = document.getElementById('navWork');

openMenu.addEventListener('click', function(e) {
   h.classList.toggle('menu--active'); // or whatever your active class is

//    clickWork.addEventListener('click', function(e){
//         h.classList.toggle('menu--active');
//     });
});

 closeMenu.addEventListener('click', function(e) {
    h.classList.toggle('menu--active'); // or whatever your active class is
});

// FIXES ERROR OF MENU SCREEN NOT CLOSING ON HOME SCREEN WHEN CLICKING PROJECTS

    clickWork.addEventListener('click', function(e){
        if (h.classList.contains('menu--active')){
            h.classList.toggle('menu--active');
        }
    });





