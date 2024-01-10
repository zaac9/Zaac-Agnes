// var x_offset = 20;
// function updatePosition( e ){
//     // if (document.classList.contains"("))
// 	var italist = document.getElementById("italist_img");
//         if (italist != null){
//         italist.style.top = e.y + "px" ;
//         italist.style.left = e.x + "px" ;
//         }

//     var dossier = document.getElementById("dossier_img");
//     if (dossier != null){
//         dossier.style.top = e.y + "px" ;
//         dossier.style.left = e.x + "px" ;
//     }
//     var labatie = document.getElementById("labatie_img");
//     if (labatie != null){
//         labatie.style.top = e.y + "px" ;
//         labatie.style.left = e.x + "px" ;
//     }
//     // var summit = document.getElementById("summit_img");
//     //     summit.style.top = e.y + "px" ;
//     //     summit.style.left = e.x + "px" ;
    
//     var rain = document.getElementById("rain_img");
//     if (rain != null){
//         rain.style.top = e.y + "px" ;
//         rain.style.left = e.x + "px" ;
//     }
// };

// document.onmousemove = updatePosition;
let aimX = 0;
let aimY = 0;

let currentX = 0;
let currentY = 0;
let speed = 0.09;

var italist = document.getElementById("italist_img");
var dossier = document.getElementById("dossier_img");
var labatie = document.getElementById("labatie_img");
var rain = document.getElementById("rain_img");

const animate = function () {
    currentX += (aimX - currentX) * speed;
    currentY += (aimY - currentY) * speed;

    if (italist != null){
        italist.style.top = currentY + "px" ;
        italist.style.left = currentX + "px" ;
    }

    if (dossier != null){
        dossier.style.top = currentY + "px" ;
        dossier.style.left = currentX + "px" ;
    }
    if (labatie != null){
        labatie.style.top = currentY + "px" ;
        labatie.style.left = currentX + "px" ;
    }
    if (rain != null){
        rain.style.top = currentY + "px" ;
        rain.style.left = currentX + "px" ;
    }

    requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function(e) {
    aimX = e.clientX;
    aimY = e.clientY;
});
