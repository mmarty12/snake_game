'use strict'

let scoreBlock; //score display
let score = 0;

const config = { //game settings
   step: 0,
   maxStep: 6,
   sizeCell: 16,
   sizeBerry: 4,
}

const snake = {
    x: 160,
    y: 160,
    speedX: config.sizeCell,
    speedY: 0,
    tail: [],
    maxTail: 3,
}

let berry = {
    x: 0,
    y: 0,
}

let canvas = document.querySelector("#play-field");
let context = canvas.getContext("2d"); 


function game() {
    requestAnimationFrame(game);
    if(++config.step < config.maxStep) {
        return;
    }
    config.step = 0;
    context.clearRect(0, 0, canvas.width, canvas.height); 

    drawSnake();
    drawBerry();
}
requestAnimationFrame(game);

function drawSnake() {
    snake.x += snake.speedX;
    snake.y += snake.speedY;

    snake.tail.unshift({x: snake.x, y: snake.y}); 
    if(snake.tail.length > snake.maxTail) {
        snake.tail.pop(); 
    }
    snake.tail.forEach(function(element, index) {
        if (index == 0) {
            context.fillStyle = "#cc1414"; //snake's head 
        }
        else {
            context.fillStyle = "#6b0202"; //snake's body 
        }
        
        context.fillRect(element.x, element.y, config.sizeCell, config.sizeCell);

        if(element.x === berry.x && element.y === berry.y) {
            snake.maxTail++;
            ///
            randomPositionBerry();
        }
        for(let i = index + 1; i < snake.tail.length; i++) {
            if(element.x == snake.tail[i].x && element.y == snake.tail[i].y){
                restartGame();
            }
        }
    })
}

document.addEventListener('keydown', e => {
 switch(e.code) {
    case 'KeyW':
        snake.speedX = 0;
        snake.speedY = -config.sizeCell;
        break;
    case 'KeyA':
        snake.speedX = -config.sizeCell;
        snake.speedY = 0; 
        break;
    case 'KeyS':
        snake.speedX = 0;
        snake.speedY = config.sizeCell;
        break;
    case 'KeyD':
        snake.speedX = config.sizeCell;
        snake.speedY = 0; 
        break;
}
})


function restartGame() {

}

function drawBerry(){

}

function randomPositionBerry() {

}

