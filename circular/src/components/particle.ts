export class Particle {
  x: number;
  y: number;
  radius: number;
  color?: string;
  radians: number;
  velocity: number;
  range: number;

  constructor(x: number, y: number, radius: number, color?: string) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.09;
    this.range = Math.floor(Math.random() * 120 + 50);
  }

  randomColor() {
    const colors = [
      '#45FFCA',
      '#FEFFAC',
      '#FFB6D9',
      'D67BFF'
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  }

  update(ctx: CanvasRenderingContext2D, mouse: { x: number, y: number }) {
    this.radians += this.velocity;
    this.x = mouse.x + Math.cos(this.radians) * this.range;
    this.y = mouse.y + Math.sin(this.radians) * this.range;
    this.draw(ctx);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.randomColor();
    ctx.fill();
    ctx.closePath();
  }
}
