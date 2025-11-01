
let aimX = 0;
let aimY = 0;

let currentX = 0;
let currentY = 0;
let speed = 0.07;

var italist = document.getElementById("italist_img");
var momentus = document.getElementById("momentus_img");
var labatie = document.getElementById("labatie_img");

const animate = function () {
    currentX += (aimX - currentX) * speed;
    currentY += (aimY - currentY) * speed;

    if (italist != null){
        italist.style.top = currentY + "px" ;
        italist.style.left = currentX + "px" ;
    }

    if (momentus != null){
        momentus.style.top = currentY + "px" ;
        momentus.style.left = currentX + "px" ;
    }
    if (labatie != null){
        labatie.style.top = currentY + "px" ;
        labatie.style.left = currentX + "px" ;
    }

    requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function(e) {
    aimX = e.clientX;
    aimY = e.clientY;
});
