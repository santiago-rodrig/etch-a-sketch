(function() {
    document.addEventListener('DOMContentLoaded', function() {
        let square = document.createElement('div');
        let squares;
        let rowOfSquares = document.createElement('div');
        let rowOfSquaresList;
        let grid = document.getElementById('grid');
        let createGridButton = document.querySelector('button');
        let footer = document.querySelector('footer');
        document.body.style.paddingBottom = footer.offsetHeight + 'px';
        let numberOfSquares;
        square.setAttribute('data-r', '0');
        square.setAttribute('data-g', '0');
        square.setAttribute('data-b', '0');
        square.style.display = 'inline-block';
        square.classList.add('square');
        grid.width = 960;
        grid.height = 960;
        grid.style.width = grid.width + 'px';
        grid.style.height = grid.style.width;
        createGridButton.addEventListener('click', function(e) {
            e.preventDefault();
            numberOfSquares = parseInt(prompt('Give the grid area in squares').trim());
            square.width = grid.width / numberOfSquares;
            square.height = square.width;
            square.style.width = square.width + 'px';
            square.style.height = square.style.width;
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
            this.style.backgroundColor = 'red';
            console.log(this);
        }
    });
})();
