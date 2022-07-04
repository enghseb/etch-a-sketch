function setCssProperty(variable, property) {
    /*Changes a .css variable */
    document.documentElement.style
    .setProperty(variable, property)
}

function createSquares(squaresPerSide) {
    /*Makes sure width and height is correct
        and creates one square */
    const square = document.createElement("div");

    squareWidth = 400/squaresPerSide
    squareHeight = 400/squaresPerSide
    console.log(`${squareWidth}px`)
    console.log(`${squareHeight}px`)
    setCssProperty('--squareWidth-width', `${squareWidth}px`)
    setCssProperty('--squareHeight-height',`${squareHeight}px`)

    const insertLocation = document.getElementById("grid");
    insertLocation.appendChild(square);
}

squaresPerSide = 35

/* runs createSquare through a loop the same amount of times
    as squares that should be created  */
for (let createdSquares = 0; createdSquares < squaresPerSide*squaresPerSide; createdSquares++) {
    createSquares(squaresPerSide)
} 

    //highlights the mouseenter target with color
  grid.addEventListener("mouseover", function( event ) {
    event.target.style.backgroundColor = 'black';;
  })

