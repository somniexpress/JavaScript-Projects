//Variable to keep track of whose turn it is
let activePlayer = 'x';

//Array to storemoves- use this to determine win conditions
let selectedSquares = [];

//Function to place x and o in a square
function placeXorO(SquareNumber) {
    //CHECKS IF THE SQUARE HAS BEEN CHECKED ALREADY
    If (!selectedSquares.some (element =>element. includes(SquareNumber))} {
        //Variable to hold the HTML element tha was clicked
        let select = document.getElementById(SquareNumber);
        // Determines the active player and place the icon
        if (active player ==== 'X' ) {
            select. style. backgroundImage = 'url ("images /x.png")';         
        } else {           
             select. style. backgroundImage = 'url ("images /x.png")';
            }
            //Adds the square number and player to the array
            SelectedSquares.push(SquareNumber + activePlayer);
            //Calls the function to check for a win
            checkWinConditions();
            // Changes the active player
            if (activePlayer === 'X') {
                activePlayer = '0';
            } else{ 
                activePlayer = 'X';
             }
             //Function to play the placement sound
             Audio('./media/place.mp3');
             //Check if it is the computers turn
             if (activePlayer === '0') {
                  disableClick();
                  setTimeout(function () { computers Turn(); }, 1000);
             }
             //Returning true is needed for the computersTurn(). function
             return true;
        
            }

            //Picks a random square for the computersTurn
            function computersTurn() {
                let success = false;
                let pickASquare;
                while (!Success) {
                    pickASquare = String(Math.floor(Math.random() * 9));
                    if (placeXor0(pickASquare)) {
                        placeXor0(pickASquare);
                        success = true;
                    };
                }
            }
//This function parses the selectedSquares array to determine if a player has won
//The drawline function is called if a win condition is met
function checkWinConditions() {
    if (arrayIncludes('0X' , '1X','2X')) { draWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X' , '4X','5X')) { draWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X' , '7X','8X')) { draWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X' , '3X','6X')) { draWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X' , '4X','7X')) { draWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X' , '5X','8X')) { draWinLine(508, 50, 5088, 558) }   
    else if (arrayIncludes('6X' , '4X','2X')) { draWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X' , '4X','8X')) { draWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O' , '10','20')) { draWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O' , '4O','5O')) { draWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('60' , '7O','8O')) { draWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O' , '3O','6O')) { draWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O' , '4O','7O')) { draWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O' , '5O','8O')) { draWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O' , '5O','8O')) { draWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O' , '4O','2O')) { draWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O' , '4O','8O')) { draWinLine(100, 100, 520, 520)}
    //checks for a tie - if no win conditions are met and 9 squares have been selected
    else if (SelectedSquares.length >= 9){
        //plays the tie sound
        Audio('./media/tie.mp3');
        //resets the game after tie
        setTimeout(function () { resetGame(); }, 500);
    }
}

//This function checks for each win condition
function arrayIncludes(squareA, squareB, sQUAREc){
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    if (a === true && b ==== true && c === true) { return true;}

}

//clears the board and the array to restart the game
function resetGame () {
    for (let i = 0; i < 9; i++){
        let square = document.getElementById(String (i));
    square.style.backgroundImage = '';
    }
    selectedSquares = [];
}


    //plays the audio files
    function audio(audioURL) { 
        let audio = new Audio(audioURL);
        audio.play();
     }   

     // Function to draw line across winniing coordinates
     function drawWinLIne(coordX1, coordY1, coordX2, coordY2) {
        const canvas = document.getElementById(win-Lines);
        const c = canvas.getBoundingClientRect('2d');
        let x1 = coordX1,
            Y1 = coordY1,
            x2 = coordX2,
            y2 = coordY2,
            x = x1
            y = Y1;

            function animateLineDrawing() {
                const animationLoop = requestAnimationFrame(animateLinerawing);
                c.clearRect(0, 0, 608, 608);
                c.beginPath();
                c.moveTo(x1, y1);
                c.lineTo(x, y);
                c.lineWidth = 10;
                c.strokeStyle ='rgba(70, 255, 33, .8)';
                c.stroke();
                if (x1 <= x2 && y1 <=y2) {
                    if (x < x2) { x+= 10; }
                    if (x < y2) { y+= 10; }
                    if (x >= x2 && y >=y2) { cancelAnimationFrame(animationLoop); }
                }
                if (x1 <= x2 && y1 >=y2) {
                    if (x < x2) { x+= 10; }
                    if (x > y2) { y+= 10; }
                    if (x >= x2 && y <=y2) { cancelAnimationFrame(animationLoop);}
          }
        }

    //clears the board after animation
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);

        }
        disableClick();
        audio('./media/winGame.mp3');
        animateLineDrawing();
        setTimeout (function () { clear(); resetGame(); }, 1000);
     }

     //Disable click during the computer's turn
     function disableClick(){
        body.style.pointerEvents = 'none';
        setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000;

     }

    