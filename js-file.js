squarenum = 0

function createSquares() {
    const square = document.createElement("div");
    square.id = squarenum;
    squarenum++
    const insertLocation = document.getElementById("grid");
    insertLocation.appendChild(square);
}

for (let squares = 0; squares < 256; squares++) {
    createSquares()
} 

  let test = document.getElementById("grid");

  grid.addEventListener("mouseover", function( event ) {
    // highlight the mouseenter target
    event.target.style.backgroundColor = 'black';;

  })