function getRandomNumber(min: number, max: number) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  return randomNumber;
}

function getRandomCoordinates() {
  const cordinates = {
    x: getRandomNumber(0, 25),
    y: getRandomNumber(0, 25),
  };

  return cordinates;
}

// @ts-ignore
globalThis.getRandomCoordinates = getRandomCoordinates;

let score = 0;
const cellSize = 16;
const snakeNextPosition = { x: 1, y: 1 };
const movingDirection = {
  x: 1,
  y: 0,
};
const cells: { x: number; y: number }[] = [];
let snakeMaxLength = 4;
let appleNextPosition = getRandomCoordinates();

function draw(canvas: HTMLCanvasElement) {
  const context = canvas.getContext('2d')!;

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'red';
  context.fillRect(
    appleNextPosition.x * cellSize,
    appleNextPosition.y * cellSize,
    cellSize,
    cellSize,
  );

  snakeNextPosition.x += movingDirection.x;
  snakeNextPosition.y += movingDirection.y;

  if (snakeNextPosition.x < 0) {
    snakeNextPosition.x = 24;
  }

  if (snakeNextPosition.x > 24) {
    snakeNextPosition.x = 0;
  }

  if (snakeNextPosition.y < 0) {
    snakeNextPosition.y = 24;
  }

  if (snakeNextPosition.y > 24) {
    snakeNextPosition.y = 0;
  }

  const snakeAteApple =
    snakeNextPosition.x === appleNextPosition.x &&
    snakeNextPosition.y === appleNextPosition.y;

  if (snakeAteApple) {
    appleNextPosition = getRandomCoordinates();
    snakeMaxLength += 1;
    score += 1;
    document.getElementById('score').innerText = score + '';
  }

  cells.unshift({ x: snakeNextPosition.x, y: snakeNextPosition.y });

  if (cells.length > snakeMaxLength) {
    cells.pop();
  }

  context.fillStyle = 'orange';
  context.strokeStyle = 'black';
  context.lineWidth = 1;

  cells.forEach((cell, index) => {
    if (index === 0) {
      context.fillStyle = 'blue';
    } else {
      context.fillStyle = 'purple';
    }

    context.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
    context.strokeRect(
      cell.x * cellSize,
      cell.y * cellSize,
      cellSize,
      cellSize,
    );
  });
}

function main() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  document.getElementById('score')!.innerText = score + '';

  let count = 0;

  function loop() {
    requestAnimationFrame(loop);

    if (count >= 10 - score) {
      draw(canvas);

      count = 0;

      return;
    } else {
      count += 1;
    }
  }

  loop();
}

main();

document.addEventListener('keydown', event => {
  const { key } = event;

  if (key === 'ArrowUp') {
    movingDirection.x = 0;
    movingDirection.y = -1;
  } else if (key === 'ArrowDown') {
    movingDirection.x = 0;
    movingDirection.y = 1;
  } else if (key === 'ArrowLeft') {
    movingDirection.x = -1;
    movingDirection.y = 0;
  } else if (key === 'ArrowRight') {
    movingDirection.x = 1;
    movingDirection.y = 0;
  }
});

export {};
