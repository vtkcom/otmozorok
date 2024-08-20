const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let alphabet = "otmozorok";

let fontSize = 16;
let columns = canvas.width / fontSize;

let rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

// let color = "#0f0";
let color = "#777";
let speed = 50;
let paused = false;
let fadeSpeed = 0.05;

function draw() {
  if (paused) return;

  ctx.fillStyle = `rgba(0, 0, 0, ${fadeSpeed})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = color;
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
}

let interval = setInterval(draw, speed);

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  columns = canvas.width / fontSize;
  rainDrops = Array(Math.ceil(columns)).fill(1);
});
