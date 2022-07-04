let gridCreated = false;
let squaresPerSide = 32
let etchColor = "black"

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
    etchColor = buttonClickedId;
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

function changeEtchColor() {
    if(etchColor == "black") {
        mouseAction.target.style.backgroundColor = 'black';
    } else if(etchColor == "rainbow") {
        r = Math.floor(Math.random() * 255)
        g = Math.floor(Math.random() * 255)
        b = Math.floor(Math.random() * 255)
        mouseAction.target.style.backgroundColor =  `rgb(${r}, ${g}, ${b})`;
    } else if(etchColor == "erase") {
        mouseAction.target.style.backgroundColor = "rgb(209, 207, 207)"
    } else if(etchColor == "shade") {
        shadeColor()
    } else {
        mouseAction.target.style.backgroundColor = 'black';
    }
}

function shadeColor(){
    console.log(mouseAction)
    const bg = mouseAction.target.style.backgroundColor = "rgb(242, 244, 244)";
    console.log(mouseAction.target.style.backgroundColor)
    //Color1
    if(mouseAction.target.style.backgroundColor == "rgb(242, 244, 244)") {
        console.log("true")
        mouseAction.target.style.backgroundColor = "rgb(229, 232, 232)"
    //Color 2
    } else if (mouseAction.target.style.backgroundColor == "rgb(229, 232, 232)") {
        mouseAction.target.style.backgroundColor = "rgb(204, 209, 209)"
    } else {
        mouseAction.target.style.backgroundColor = "rgb(242, 244, 244)"
        }
} 

    //Highlights the mouseenter target with color
    grid.addEventListener("mouseover", function( event ) {
        mouseAction = event
        changeEtchColor()
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
    //Listens for click on button
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

createGrid(32)



/* om div class är tom, rita grå 1 och sätt div class till grå 1
     om div class är 1, rita grå 2 och sätt div class till grå 2
     om div class är 2, rita grå 2 och sätt div class till grå 3 */