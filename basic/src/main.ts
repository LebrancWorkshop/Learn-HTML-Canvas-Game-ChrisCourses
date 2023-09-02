import { canvas, ctx, config } from './canvas';
import { Circle } from './components';
import { Howler, Howl } from 'howler';


// Audio.

// const audioAction = {
//   play: false
// };

// window.addEventListener('mouseover', (event) => {
//   audioAction.play = true;
// });

// Audio.
const audio = new Howl({
  src: ['/public/assets/audio/electro.mp3']
})

audio.play();

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

const circle = new Circle(ctx, canvas.width / 2, canvas.height / 2, 10, 'Green');
const bot = new Circle(ctx, canvas.width / 2 + 100, canvas.height / 2 - 100, 10, 'Orange');

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function random() {
  const rand = Math.random() * 10;
  return rand > 5 ? -5 : 5;
};

function update() {
  window.requestAnimationFrame(update);
  clear();
  circle.draw();
  bot.draw();
  circle.translate(random(), random());
  bot.translate(random(), random());
};

update();
