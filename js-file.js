let gridCreated = false;
let squaresPerSide = 32
let etchColor = "grey"

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
        MouseHover.target.style.backgroundColor = 'black';
    } else if(etchColor == "rainbow") {
        r = Math.floor(Math.random() * 255)
        g = Math.floor(Math.random() * 255)
        b = Math.floor(Math.random() * 255)
        MouseHover.target.style.backgroundColor =  `rgb(${r}, ${g}, ${b})`;
    } else if(etchColor == "erase") {
        MouseHover.target.style.backgroundColor = "rgb(209, 207, 207)"
    } else if(etchColor == "shade") {
        shadeColor()
    } else {
        MouseHover.target.style.backgroundColor = 'black';
    }
}
    
function shadeColor(){
    //Not proud of this code, but it does work
    const bg = event.target.style.backgroundColor == "#F2F4F4";
    console.log(event.target.style.backgroundColor)

    //Color1
    if(MouseHover.target.style.backgroundColor == "rgb(242, 244, 244)") {
        MouseHover.target.style.backgroundColor = "rgb(229, 232, 232)"
    //Color 2
    } else if (MouseHover.target.style.backgroundColor == "rgb(229, 232, 232)") {
        MouseHover.target.style.backgroundColor = "rgb(204, 209, 209)"
    //Color 3
    } else if (MouseHover.target.style.backgroundColor == "rgb(204, 209, 209)") {
        MouseHover.target.style.backgroundColor = "rgb(178, 186, 187)"
    //Color 4
    } else if (MouseHover.target.style.backgroundColor == "rgb(178, 186, 187)") {
        MouseHover.target.style.backgroundColor = "rgb(153, 163, 164)"
    //Color 5
    } else if (MouseHover.target.style.backgroundColor == "rgb(153, 163, 164)") {
        MouseHover.target.style.backgroundColor = "rgb(127, 140, 141)"
    //Color 6
    } else if (MouseHover.target.style.backgroundColor == "rgb(127, 140, 141)") {
        MouseHover.target.style.backgroundColor = "rgb(112, 123, 124)"
    //Color 7
    } else if (MouseHover.target.style.backgroundColor == "rgb(112, 123, 124)") {
        MouseHover.target.style.backgroundColor = "rgb(97, 106, 107)"
    //Color 8
    } else if (MouseHover.target.style.backgroundColor == "rgb(97, 106, 107)") {
        MouseHover.target.style.backgroundColor = "rgb(81, 90, 90)"
    //Color 9
    } else if (MouseHover.target.style.backgroundColor == "rgb(81, 90, 90)") {
        MouseHover.target.style.backgroundColor = "rgb(66, 73, 73)"
    //Color 10
    } else if (MouseHover.target.style.backgroundColor == "rgb(66, 73, 73)") {
        MouseHover.target.style.backgroundColor = "rgb(66, 73, 73)"
    } else {
        MouseHover.target.style.backgroundColor = "rgb(242, 244, 244)"
    }
} 

    //Highlights the mouseenter target with color
    grid.addEventListener("mouseover", function( event ) {
        MouseHover = event
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