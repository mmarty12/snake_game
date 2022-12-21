import Canvas from './canvas.js';
import Game from './game.js';
import Score from './score.js';
import Snake from './snake.js';
import Berry from './berry.js';

class GamePlay {
  constructor(container) {
    this.canvas = new Canvas(container);
    this.snake = new Snake();
    this.berry = new Berry(this.canvas);
    this.score = new Score('.score', 0);
    new Game(this.update.bind(this), this.draw.bind(this));
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

function StartGame() {
  let buttonStart = document.querySelector('#button-start');
  let buttonAgain = document.querySelector('#button-again');
  let gamemenu = document.querySelector('.game-menu');
  let canvas = document.querySelector('.canvas');

  buttonAgain.style.visibility = 'hidden';
  gamemenu.style.visibility = 'hidden';
  canvas.style.visibility = 'hidden';

  buttonStart.addEventListener('click', () => {
    buttonStart.style.visibility = 'hidden';
    buttonAgain.style.visibility = 'visible';
    gamemenu.style.visibility = 'visible';
    canvas.style.visibility = 'visible';
    new GamePlay(document.querySelector('.canvas'));
  });
}

StartGame();
