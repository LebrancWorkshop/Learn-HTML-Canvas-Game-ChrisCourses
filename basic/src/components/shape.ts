export class Circle {
  c: CanvasRenderingContext2D;
  x: number;
  y: number;
  r: number;
  color?: string;

  constructor(c: CanvasRenderingContext2D, x: number, y: number, r: number, color?: string) {
    this.c = c;
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  diameter() {
    return 2 * this.r;
  }

  circumstant() {
    return 2 * Math.PI * this.r;
  }

  area() {
    return Math.PI * this.r * this.r;
  }

  draw() {
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    this.c.fillStyle = this.color || 'White';
    this.c.fill();
  }

  translate(dx: number, dy: number) {
    this.x += dx;
    this.y += dy;
  }

  scale(dr: number) {
    this.r *= dr;
  }

  changeColor(color: string) {
    this.color = color;
  }
};
