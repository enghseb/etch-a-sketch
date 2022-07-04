let gridCreated = false;

function setCssProperty(variable, property) {
    /*Changes a .css variable */
    document.documentElement.style
    .setProperty(variable, property)
}

function setButtonActive() {
    buttonClickedNewId = `${buttonClickedId}-active`
    document.getElementById(buttonClickedId).id = buttonClickedNewId;
    lastActiveButton = buttonClickedId;
    buttonHasBeenClicked = true;
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
    /* Runs createSquare through a loop the same amount of times
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

createGrid(32)

    //Highlights the mouseenter target with color
    grid.addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = 'black';
    })

    //Listens for slider-value change
    let sliderValue = document.getElementById("range");
    sliderValue.addEventListener('change', function () {
        //Creates grid based on new slider value
        createGrid(sliderValue.value)
    })

    //Listens for slider-value input
    let sliderInput = document.getElementById("range");
    sliderInput.addEventListener('input', function () {
        //Changes the DOM range-text
        const sliderInputText = document.getElementById("currentRange");
        sliderInputText.innerText = `${sliderInput.value}x${sliderInput.value}`
    })

    buttonHasBeenClicked = false;
    //Listens for button click
    const buttonContainer = document.querySelector(".buttons");
    buttonContainer.onclick = function (event) {
        buttonClickedId = event.target.id;
        if(!buttonHasBeenClicked) {
            setButtonActive()

            //Bugs out if same button is pressed twice without this
        } else if (buttonClickedId == `${lastActiveButton}-active`) {
            
        } else {
            //Delete the "active" part of last click
            document.getElementById(`${lastActiveButton}-active`).id = lastActiveButton
            setButtonActive()
        }
     
    }
