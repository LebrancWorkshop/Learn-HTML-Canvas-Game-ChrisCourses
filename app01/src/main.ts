import { canvas, ctx, config } from './canvas';
import Rectangle from './entities/rect';

// Setting up the canvas.

canvas.width = config.width;
canvas.height = config.height;

ctx.fillStyle = config.bgColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Drawing the actor.
const actorWidth = 100;
const actorHeight = 100;
const actor = new Rectangle(0, canvas.height - actorHeight, actorWidth, actorHeight, 'Green');
actor.draw();

// Jump Logic.
const action = {
  jump: false
};

const speed = {
  move: 30,
  jump: 10
};

window.addEventListener('keydown', (event: KeyboardEvent) => {
  if(event.code === 'Space' && action.jump === false) {
    action.jump = true;
    jump();
  } else if(event.code === 'ArrowRight') {
    if(actor.x + actor.width >= canvas.width) return;
    if(canvas.width - (actor.x + actor.width) < speed.move) {
      clear();
      actor.move(canvas.width - (actor.x + actor.width), 0);
      actor.draw(); 
    }
    clear();
    actor.move(speed.move, 0);
    actor.draw();
  } else if(event.code === 'ArrowLeft') {
    if(actor.x <= 0) return;
    clear();
    actor.move(-speed.move, 0);
    actor.draw();
  }
});

function jump() {
  if(action.jump) {
    for(let i = 0; i < 10; i++) {
      if(i < 5) {
        setTimeout(() => {
          clear();
          actor.move(0, -10);
          actor.draw();
        }, speed.jump * i);
      } else {
        setTimeout(() => {
          clear();
          actor.move(0, 10);
          actor.draw();
        }, speed.jump * i);
      }
    }
  }
  action.jump = false;
};

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = config.bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};


