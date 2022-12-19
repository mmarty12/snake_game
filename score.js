export default class Score {
  constructor(scoreBlock, score) {
    score = 0;
    this.scoreBlock = document.querySelector(scoreBlock); //score display
    this.score = score;
    this.draw();
  }

  scoreCount() {
    this.score++;
    this.draw();
  }

  scoreRestart() {
    this.score = 0;
    this.draw();
  }

  draw() {
    this.scoreBlock.innerHTML = this.score; //score display on page
  }
}
