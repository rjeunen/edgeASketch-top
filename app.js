const container = document.querySelector('#container');
const gridDimentionButton = document.querySelector('#gridDimentionButton');
const eraseBorderButton = document.querySelector('#eraseBorderButton');
const showBorderButton = document.querySelector('#showBorderButton');

const totalWidthContainer = 960;
const totalHeightContainer = 600;

gridDimentionButton.addEventListener('click', ()=>{
    let newGridSize = parseInt(prompt('Enter a gridSize'));
    while(newGridSize > 100 || newGridSize < 2 || isNaN(newGridSize)){
        newGridSize = parseInt(prompt('Enter a gridSize'));
    }
    eraseGrid();
    makeGrid(newGridSize);
});

eraseBorderButton.addEventListener('click', eraseBorder);
showBorderButton.addEventListener('click', showBorder);

const makeGrid = function(numberOfDivs){
    for(i = 0; i < (numberOfDivs * numberOfDivs); i++){
        const div = document.createElement('div');
        div.classList.add('divOfGrid');
        div.style.width = `${totalWidthContainer / numberOfDivs}px`;
        div.style.height = `${totalHeightContainer / numberOfDivs}px`;
        div.style.borderRight = '1px solid black';
        div.style.borderBottom = '1px solid black';
        container.appendChild(div);
    }
}

function eraseGrid(){
    const divsToErase = document.querySelectorAll('.divOfGrid');
    divsToErase.forEach(divToErase => {
        container.removeChild(divToErase);
    });
}

function eraseBorder(){
    const divsWithBorder = document.querySelectorAll('.divOfGrid');
    divsWithBorder.forEach(divWithBorder => {
        divWithBorder.style.border = 0;
    })
}

function showBorder(){
    const divsWithoutBorder = document.querySelectorAll('.divOfGrid');
    divsWithoutBorder.forEach(divWithoutBorder =>{
        divWithoutBorder.style.borderBottom = `1px solid black`;
        divWithoutBorder.style.borderRight = `1px solid black`;
    })
}

//refreshing the page - app starts with a 16 by 16 grid.
makeGrid(16);