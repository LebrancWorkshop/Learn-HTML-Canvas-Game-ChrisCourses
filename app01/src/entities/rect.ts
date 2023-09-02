import { ctx } from "../canvas";

class Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;

  constructor(x: number, y: number, width: number, height: number, color?: string) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    ctx.fillStyle = this.color || 'Black';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move(deltaX: number, deltaY: number) {
    this.x += deltaX;
    this.y += deltaY;
  }
}

export default Rectangle; 
