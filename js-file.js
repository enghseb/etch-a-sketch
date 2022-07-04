let gridCreated = false;

function setCssProperty(variable, property) {
    /*Changes a .css variable */
    document.documentElement.style
    .setProperty(variable, property)
}

function createSquare(squaresPerSide) {
    /*Makes sure width and height is correct
        and creates one square */
    const square = document.createElement("div");

    squareWidth = 400/squaresPerSide
    squareHeight = 400/squaresPerSide
    setCssProperty('--squareWidth-width', `${squareWidth}px`)
    setCssProperty('--squareHeight-height',`${squareHeight}px`)

    const insertLocation = document.getElementById("grid");
    insertLocation.appendChild(square);
}

squaresPerSide = 35

function createGrid(squaresPerSide) {
    /* runs createSquare through a loop the same amount of times
    as squares that should be created  */
    removeGrid()
    for (let createdSquares = 0; createdSquares < squaresPerSide*squaresPerSide; createdSquares++) {
        createSquare(squaresPerSide)
    }
    gridCreated = true
}

function removeGrid() {
    /* Removes current grid before creating new one */
    if(gridCreated) {
        document.getElementById("grid").innerHTML = "";
    }
    else {

    }
}

createGrid(10)

    //highlights the mouseenter target with color
    grid.addEventListener("mouseover", function( event ) {
    event.target.style.backgroundColor = 'black';;
  })

    //Listens for change in slider value
    let slider = document.getElementById("range");
    slider.addEventListener('change', function ( update ) {
    console.log(slider.value)
    createGrid(slider.value)

  })

  console.log(gridCreated)
