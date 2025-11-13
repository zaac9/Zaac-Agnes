let aimX = window.innerWidth / 2;
let aimY = window.innerHeight / 2;

let currentX = aimX;
let currentY = aimY;
const speed = 0.07;

const italist = document.getElementById("italist_img");
const momentus = document.getElementById("momentus_img");
const labatie = document.getElementById("labatie_img");

// debug log so you can verify elements exist
console.log('italist_img present:', !!italist, 'momentus_img present:', !!momentus, 'labatie_img present:', !!labatie);

function setPos(el, x, y) {
  if (!el) return;
  // JS sets left/top; CSS uses translate(-50%,-50%) to center the image on that point
  el.style.left = x + "px";
  el.style.top = y + "px";
}

const animate = function () {
    currentX += (aimX - currentX) * speed;
    currentY += (aimY - currentY) * speed;

    setPos(italist, currentX, currentY);
    setPos(momentus, currentX, currentY);
    setPos(labatie, currentX, currentY);

    requestAnimationFrame(animate);
};
animate();

document.addEventListener("mousemove", function(e) {
    aimX = e.clientX;
    aimY = e.clientY;

    // immediate update to avoid visible jump (keeps movement smooth)
    setPos(italist, aimX, aimY);
    setPos(momentus, aimX, aimY);
    setPos(labatie, aimX, aimY);
});
