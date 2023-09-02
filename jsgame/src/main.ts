import { canvas, ctx, config } from './canvas';
import { render } from './system';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.
render();
