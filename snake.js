import Config from './config.js';

export default class Snake {
  constructor() {
    this.config = new Config();
    this.x = 160;
    this.y = 160;
    this.speedX = this.config.sizeCell;
    this.speedY = 0;
    this.tail = [];
    this.maxTail = 3;
    this.control();
    this.running = true;
  }

  draw(context) {
    this.tail.forEach((element, index) => {
      if (index == 0) {
        context.fillStyle = '#cc1414'; //snake's head
      } else {
        context.fillStyle = '#6b0202'; //snake's body
      }
      context.fillRect(element.x, element.y, this.config.sizeCell, this.config.sizeCell);
    });
  }

  control() {
    document.addEventListener('keydown', e => {
      if (e.code == 'KeyW') {
        this.speedX = 0;
        this.speedY = -this.config.sizeCell;
      } else if (e.code == 'KeyA') {
        this.speedX = -this.config.sizeCell;
        this.speedY = 0;
      } else if (e.code == 'KeyS') {
        this.speedX = 0;
        this.speedY = this.config.sizeCell;
      } else if (e.code == 'KeyD') {
        this.speedX = this.config.sizeCell;
        this.speedY = 0;
      }
    });
  }

  update(berry, score, canvas) {
    if (this.running) {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0) {
        this.x = canvas.element.width - this.config.sizeCell;
      } else if (this.x >= canvas.element.width) {
        this.x = 0;
      }

      if (this.y < 0) {
        this.y = canvas.element.height - this.config.sizeCell;
      } else if (this.y >= canvas.element.height) {
        this.y = 0;
      }
      this.tail.unshift({ x: this.x, y: this.y });

      if (this.tail.length > this.maxTail) {
        this.tail.pop();
      }

      this.tail.forEach((element, index) => {
        if (element.x === berry.x && element.y === berry.y) {
          this.maxTail++;
          score.scoreCount();
          berry.randomPosition();
        }

        for (let i = index + 1; i < this.tail.length; i++) {
          const modal = document.querySelector('.modal');
          const restartBtn = document.querySelector('#button-again');

          if (element.x == this.tail[i].x && element.y == this.tail[i].y) {
            this.running = false;
            modal.classList.remove('hidden');
            restartBtn.addEventListener('click', () => {
              modal.classList.add('hidden');
              this.restart();
              score.scoreRestart();
              berry.randomPosition();
              this.running = true;
            });
          }
        }
      });
    }
  }

  restart() {
    this.x = 160;
    this.y = 160;
    this.speedX = this.config.sizeCell;
    this.speedY = 0;
    this.tail = [];
    this.maxTail = 3;
  }
}
