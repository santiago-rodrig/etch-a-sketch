document.addEventListener('DOMContentLoaded', function() {
    let grid = document.getElementById('grid');
    let createGridButton = document.querySelector('button');
    let footer = document.querySelector('footer');
    document.body.style.paddingBottom = (footer.offsetHeight + 40) + 'px';
    grid.width = 960;
    grid.height = 960;
    grid.style.width = grid.width + 'px';
    grid.style.height = grid.style.width;
    createGridButton.addEventListener('click', function(e) {
        e.preventDefault();
        let square = document.createElement('div');
        let rowOfSquares = document.createElement('div');
        let rowOfSquaresList, numberOfSquares, squares;
        numberOfSquares = parseInt(prompt('Give the grid area in squares').trim());
        square.width = grid.width / numberOfSquares;
        square.height = square.width;
        square.style.width = square.width + 'px';
        square.style.height = square.style.width;
        square.red = 0;
        square.green = 0;
        square.blue = 0;
        square.style.display = 'inline-block';
        square.classList.add('square');
        if (numberOfSquares) {
            for (let i = 0; i < numberOfSquares; i++) {
                let rowOfSquaresClone = rowOfSquares.cloneNode(true);
                grid.appendChild(rowOfSquaresClone);
                for (let j = 0; j < numberOfSquares; j++) {
                    let squareClone = square.cloneNode(true);
                    rowOfSquaresClone.appendChild(squareClone);
                }
            }
            rowOfSquaresList = document.querySelectorAll('#grid > div');
            rowOfSquaresList.forEach(row => {
                row.style.height = square.style.height;
            });
            squares = document.getElementsByClassName('square');
            for (let i = 0; i < squares.length; i++) {
                squares[i].addEventListener('mouseenter', paintSquare);
                squares[i].style.border = '1px solid #222';
            }
            square.remove();
            rowOfSquares.remove();
        }
    });
    function paintSquare(e) {
        e.preventDefault();
        this.style.backgroundColor = `rgb(${square.red}, ${square.green}, ${square.blue})`;
    }
});
