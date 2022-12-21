import GamePlay from './gameplay.js';

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
