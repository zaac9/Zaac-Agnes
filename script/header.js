// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
//         document.getElementById("navbar").background = "rgb(240,240,240)";
//     } else {
//         document.getElementById("navbar").background = "#F8A70A";
//     }
// }

var myNav = document.getElementById('navbar');

window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        myNav.classList.add("navbar-color");
        myNav.classList.remove("navbar-clear");
    } else {
        myNav.classList.add("navbar-clear");
        myNav.classList.remove("navbar-color");
    }
}
