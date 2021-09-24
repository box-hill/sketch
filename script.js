
let gridSize = 16; // default 16x16
let numOfSquares = gridSize*gridSize;
const container = document.querySelector('.container');
let width = 600;
container.style.width = `${width}px`;
container.style.height = `${width}px`;


for(let i=0; i<numOfSquares; i++){
    const square = document.createElement('div'); 
    square.classList.add('square');
    square.style.width = `${width/gridSize}px`;
    square.style.height = `${width/gridSize}px`;

    container.appendChild(square);
}