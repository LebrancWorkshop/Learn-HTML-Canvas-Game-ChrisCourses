export class Player {
  x: number;
  y: number;
  radius: number;
  color?: string;

  constructor(x: number, y: number, radius: number, color?: string) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color || 'White';
    ctx.fill();
    ctx.closePath();
  }

  move(x: number, y: number) {
    this.x += x;
    this.y += y;
  }
}
