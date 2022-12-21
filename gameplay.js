import Canvas from './canvas.js';
import Animate from './animate.js';
import Score from './score.js';
import Snake from './snake.js';
import Berry from './berry.js';

export default class GamePlay {
  constructor(container) {
    this.canvas = new Canvas(container);
    this.snake = new Snake();
    this.berry = new Berry(this.canvas);
    this.score = new Score('.score', 0);
    new Animate(this.update.bind(this), this.draw.bind(this));
  }

  update() {
    this.snake.update(this.berry, this.score, this.canvas);
  }

  draw() {
    this.canvas.context.clearRect(0, 0, this.canvas.element.width, this.canvas.element.height);
    this.snake.draw(this.canvas.context);
    this.berry.draw(this.canvas.context);
  }
}
