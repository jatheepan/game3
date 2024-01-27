function getRandomNumber(min: number, max: number) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  return randomNumber;
}

// @ts-ignore
globalThis.getRandomNumber = getRandomNumber;

function createCanvas() {
  const canvas = document.createElement('canvas');

  canvas.width = 400;
  canvas.height = 400;

  return canvas;
}

function easeInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

let time = 0;
const endTime = 300;
let direction = 1;
let currentX = 10;
function game(canvas: HTMLCanvasElement) {
  const context = canvas.getContext('2d')!;

  context.clearRect(0, 0, canvas.width, canvas.height);

  const currentTimePercentage = (time % endTime) / endTime;
  console.log(currentTimePercentage);
  const easedDistance = easeInOut(currentTimePercentage) * 300;

  currentX = easedDistance;
  context.fillStyle = 'green';
  context.fillRect(currentX, 10, 30, 30);

  time += 1;

  // if (time > 300) {
  //   time += 0;
  // }
}

function main() {
  const canvas = createCanvas();
  document.body.appendChild(canvas);

  function loop() {
    requestAnimationFrame(loop);
    game(canvas);
  }

  loop();
}

main();

export {};
