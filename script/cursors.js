

const cursorTag = document.querySelector("div.cursors");
const balls = cursorTag.querySelectorAll("div");

let aimX = 0;
let aimY = 0;

balls.forEach((ball, index) => {
	let currentX = 0;
	let currentY = 0;

	let speed = 0.2 - index * 0.010;

	const animate = function () {
		//animate between current position and targetted position
		currentX += (aimX - currentX) * speed;
		currentY += (aimY - currentY) * speed;

		ball.style.left = currentX + "px";
		ball.style.top = currentY + "px";

		//wait for next frame, then run again (run every single frame)
		requestAnimationFrame(animate);
	};

	animate();
});







document.addEventListener("mousemove", function (event) {
	// ball.style.left = event.pageX + "px";
	// ball.style.top = event.pageY + "px";

	// Where we are trying to aim towards:
	aimX = event.pageX;
	aimY = event.pageY;


});
