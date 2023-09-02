import { ctx } from '../canvas';
import { Player } from '../entities';

export const init = () => {
  const player = new Player(100, 100, 30, 'blue');
  player.draw(ctx);
};
