document.addEventListener('DOMContentLoaded', function() {
  let grid = document.getElementById('grid');
  let createGridButton = document.querySelector('button');
  let footer = document.querySelector('footer');
  let red = 0, green = 0, blue = 0;
  let redColor = document.getElementById('red');
  let greenColor = document.getElementById('green');
  let blueColor = document.getElementById('blue');
  let submitColor = document.querySelector('input[type="submit"]');
  let clearGrid = document.getElementById('clear');
  let currentColor = document.getElementById('current-color');
  let userIsPainting = false;
  let gridCreated = false;
  currentColor.style.backgroundColor = '#000';
  redColor.valueAsNumber = red;
  greenColor.valueAsNumber = green;
  blueColor.valueAsNumber = blue;
  clearGrid.setAttribute('disabled', 'true');
  submitColor.setAttribute('disabled', 'true');
  clearGrid.addEventListener('click', e => {
    e.preventDefault();
    if (gridCreated) {
      let squares = document.querySelectorAll('div.square');
      squares.forEach(square => {
        square.painted = false;
        square.style.backgroundColor = 'rgb(255, 255, 255)';
      });
    }
  });
  submitColor.addEventListener('click', e => {
    e.preventDefault();
    red = redColor.valueAsNumber;
    green = greenColor.valueAsNumber;
    blue = blueColor.valueAsNumber;
    currentColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  });
  document.body.style.paddingBottom = (footer.offsetHeight + 40) + 'px';
  grid.width = 960;
  grid.height = 960;
  grid.style.width = grid.width + 'px';
  grid.style.height = grid.style.width;
  createGridButton.addEventListener('click', function(e) {
    e.preventDefault();
    gridCreated = true;
    submitColor.removeAttribute('disabled');
    clearGrid.removeAttribute('disabled');
    let square = document.createElement('div');
    let rowOfSquares = document.createElement('div');
    let rowOfSquaresList, numberOfSquares, squares;
    numberOfSquares =
    parseInt(prompt('Give the grid area in squares').trim());
    square.width = grid.width / numberOfSquares;
    square.height = square.width;
    square.style.width = square.width + 'px';
    square.style.height = square.style.width;
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
        squares[i].addEventListener('mousemove', paintSquare);
        squares[i].addEventListener('mousedown', e => {
          e.preventDefault();
          userIsPainting = true;
        });
        squares[i].addEventListener('mouseup', e => {
          e.preventDefault();
          userIsPainting = false;
        });
        squares[i].style.border = '1px solid #222';
        squares[i].painted = false;
      }
      function paintSquare(e) {
        e.preventDefault();
        if (userIsPainting) {
          this.painted = true;
          this.style.backgroundColor =
            `rgb(${red}, ${green}, ${blue})`;
        }
      }
      square.remove();
      rowOfSquares.remove();
    }
  });
});
