import { canvas, ctx, config } from './canvas';
import { Particle } from './components';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

// Object.
let particles: Particle[] = [];
const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2
};

window.addEventListener('mousemove', (event: MouseEvent) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

// Implementation.
function init() {
  let n = 1000;
  particles = [];

  for(let i = 1; i < (n + 1); i++) {
    const radius = (Math.random() * 2) + 1;
    const particle = new Particle(canvas.width / 2, canvas.height / 2, radius);
    particles.push(particle);
  }
}

function animate() {
  window.requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle: Particle) => {
    particle.update(ctx, mouse);
  });
}

function render() {
  init();
  animate();
}

render();
