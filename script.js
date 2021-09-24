
let gridSize = 30;
let numOfSquares = gridSize*gridSize;
let width = 600;
const container = document.querySelector('.container');
initialiseCanvas(gridSize, width); // the default

function initialiseCanvas(gridSize, width){
    removeAllChildNodes(container);
    numOfSquares = gridSize*gridSize;
    container.style.width = `${width}px`;
    container.style.height = `${width}px`;
    for(let i=0; i<numOfSquares; i++){
        const square = document.createElement('div'); 
        square.classList.add('square');
        square.style.width = `${width/gridSize}px`;
        square.style.height = `${width/gridSize}px`;
        container.appendChild(square);
    }

    let canvas = document.querySelectorAll('div.square');

    // hovering over squares turn them red
    canvas.forEach(square => 
        square.addEventListener('mouseover', 
        changeColor('red'),
        {once: true, capture: false}
    ));
}


const button = document.querySelector('#reset');
button.addEventListener('click', () => {
        changeCanvasColor('white')
        do{
            gridSize = prompt('Enter a grid size less than 50: ');
            gridSize = parseInt(gridSize);
        }while(gridSize<0 || gridSize>50 || !Number.isInteger(gridSize));
        initialiseCanvas(gridSize,width);
    });




// changes color of the element that triggered it by calling event handler
// allows "2" arguments: color & event handler
function changeColor(color){
    return function(e){
        e.target.style[`background-color`] = color;   
    }
}

// changes ALL the squares to a certain color;
function changeCanvasColor(color){
    let canvas = document.querySelectorAll('div.square');
    canvas.forEach(square => square.style[`background-color`] = color);
}

// removes all Child nodes from parent
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}