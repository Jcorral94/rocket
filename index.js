const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const rocket = "🚀";

canvas.style.border = "1px solid black";
let y = -100;
let friction = 0.1;
const speed = 4;

const state = {
  x: canvas.width / 2,
  y: canvas.height - 15
};

ctx.font = "100px serif";
ctx.textAlign = "center";
ctx.save();
ctx.translate(state.x, y + y);
ctx.rotate(-Math.PI / 4);
ctx.fillText(rocket, 0, 0);
ctx.restore();


window.requestAnimationFrame(update)

function update(currTime) {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  ctx.save();
  ctx.translate(state.x, state.y - y);
  ctx.rotate(-Math.PI / 4);
  ctx.fillText(rocket, 0, 0);
  ctx.restore();
  y += speed * friction;
  friction += 0.003;
  if (y > canvas.height) {
    y = -100;
    friction = 0.1;
  }

  window.requestAnimationFrame(update);
}
