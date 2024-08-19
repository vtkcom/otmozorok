const container = document.querySelector("div");
const mask = document.querySelector("span");

container.addEventListener("mousemove", (event) => {
  mask.style.visibility = "visible";

  const target = event.target;
  const rect = target.getBoundingClientRect();

  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;

  const percentX = (
    Math.min(Math.max(offsetX / rect.width, 0), 1) * 100
  ).toFixed(2);
  const percentY = (
    Math.min(Math.max(offsetY / rect.height, 0), 1) * 100
  ).toFixed(2);

  container.setAttribute("style", `--x: ${percentX}%;--y: ${percentY}%;`);
});

container.addEventListener("mouseout", () => {
  mask.style.visibility = "hidden";
});
