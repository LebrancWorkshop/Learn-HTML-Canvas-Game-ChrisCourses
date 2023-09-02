import { keyboardAction } from "../action";

window.addEventListener('keydown', (event: KeyboardEvent) => {
  switch(event.code) {
    case 'ArrowUp':
      keyboardAction.up.pressed = true;
      break;
    case 'ArrowDown':
      keyboardAction.down.pressed = true;
      break;
    case 'ArrowLeft':
      keyboardAction.left.pressed = true;
      break;
    case 'ArrowRight':
      keyboardAction.right.pressed = true;
      break;
  }
});

export const update = () => {
  window.requestAnimationFrame(update);
};


