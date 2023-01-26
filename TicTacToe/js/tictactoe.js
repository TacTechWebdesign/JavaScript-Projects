//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions. let selectedSquares = [];
let selectedSquares = [];
//This function is for placing an x or o in a square.
function placeXOrO (squareNumber) {
//This condition ensures a square hasn't been selected already.
//The .some() method is used to check each element of the selectSquare array
//to see if it contains the square number clicked on.
        if (!selectedSquares.some (element => element.includes (squareNumber))) { 
            //This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
        //If activePlayer is equal to 'X', the x.png is placed in HTML 
        select.style.backgroundImage = 'url("images/x.png")';
        //Active player may only be 'X' or 'O'so, if not 'X' it must be '0'
        } else {
        //If activePlayer is equal to '0', the o.png is placed in HTML 
        select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array. 
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions. 
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer==='X') {
            //If active player is 'X' change it to '0'.
            activePlayer = '0';
            //if active player is anything other than 'X' 
        } else {
        //Change the activePlayer to 'X'
        activePlayer = 'X';
        }

        //This function reults in random square being selected by the computer.
        function computersTurn() {
              //This boolean is needed for our while loop.
              let success= false;
              //The variable stores a random 0-8.
              let pickASquare;
              //This condition allows our while loop to keep trying if a square is selected already.
              while (!success){
                //A randum numer between 0 and 8 is selected.
              pickASquare=String(Math.floor(Math.random()*9));
                 //If the randum numer evaluated returns true, the square hasn't been selected yet.
               if (placeXOrO(pickASquare)) {
                //This line calls the function.
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop.
                success=true;
               };
            }
        }
    }
 }

 //This function parses the selectedSquares array to determine if a player has won.
//The drawLine function is called if a win condition is met.

function checkWinConditions() {
    // X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X',)) {drawWinline(50, 100, 558, 100)}
    // X 3, 4, 5 condition.
    else if (arrayIncludes ('3X', '4X', '5X')) {drawWinline(50, 304, 558, 304)}
    // X 6, 7, 8 condition.
    else if (arrayIncludes ('6X', '7X', '8X')) {drawWinline(50, 508, 558, 508)}
    // X 0, 3, 6 condition.
    else if (arrayIncludes ('0X', '3X', '6X')) {drawWinline(100, 50, 100, 558)}
    // X 1, 4, 7 condition.
    else if (arrayIncludes ('1X', '4X', '7X')) {drawWinline(304, 50, 304, 558)}
    // X 2, 5, 8 condition.
    else if (arrayIncludes ('2X', '5X', '8X')) {drawWinline(508, 50, 508, 558)}
    // X 6, 4, 2 condition.
    else if (arrayIncludes ('6X', '4X', '2X')) {drawWinline(100, 508, 510, 90)}
    // X 0, 4, 8 condition.
    else if (arrayIncludes ('0X', '4X', '8X')) {drawWinline(100, 100, 520, 520)}
    //  0 0, 1, 2 condition.
    else if (arrayIncludes ('00', '10X', '20X')) {drawWinline(50, 100, 558, 100)}
    //  0 3, 4, 5 condition.
    else if (arrayIncludes ('30', '40X', '50X')) {drawWinline(50, 304, 558, 304)}
    //  0 6, 7, 8 condition.
    else if (arrayIncludes ('60', '70X', '80X')) {drawWinline(50, 508, 558, 508)}
    //  0 0, 3, 6 condition.
    else if (arrayIncludes ('00', '30X', '60X')) {drawWinline(100, 50, 100, 558)}
    //  0 1, 4, 7 condition.
    else if (arrayIncludes ('10', '40X', '70X')) {drawWinline(304, 50, 304, 558)}
    //  0 2, 5, 8 condition.
    else if (arrayIncludes ('20', '50X', '80X')) {drawWinline(508, 50, 508, 558)}
    //  0 6, 4, 2 condition.
    else if (arrayIncludes ('60', '40X', '20X')) {drawWinline(100, 508, 510, 90)}
    //  0 0, 4, 8 condition.
    else if (arrayIncludes ('00', '40X', '80X')) {drawWinline(100, 100, 520, 520)}
    //  0 0, 4, 8 condition.
     //checks for a tie - if no win conditions are met and 
     //9 squares have been selected the code executes.
     else if (selectedSquares.length >=9){
        //This function plays the tie game sound.
        Audio('./media/tie.mp3')
          //This function sets a .3 second time before the resetGame is called.
          setTimeout(function(){resetGame();}, 500);
     }
     //This function checks if an array includes 3 strings. It is used to check for
     //each win consition.

     function arrayIncludes(squareA, squareB, squareC){
        //These 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array then 
        //true is returned and our else if condition executes the drawline() function.
        if (a === true && b === true&& c ===true) {return true;}
    
     }
}


//This function makes our body element temporarily unclickable.
function disableClick() {
    //This makes our body unclickable.
    body.style.pointerEvents= 'none';
    //This makes our body clickable again after 1 second.
    setTimeout(function(){ body.style.pointerEvents='auto';}, 1000);
}


//placement sound('./media/place.mp3')
function audio (audioURL) {
    //new audio object
    let audio = new Audio (audioURL);
    //audio sound.
    audio.play();
}

//This function utilizes HTML canvas to draw win lines.
function drawWinLine (coordX1, coordY1, coordX2, coordY2){
    //This line accesses our HTML canvas element.
   const canvas = document.getElementById('win-lines');
    //This line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the start of a lines x axis is.
    let x1 = coordX1,
        //This line indicates where the start of a lines y axis is.
        y1 = coordY1,
        //This line indicates where the end of a lines x axis is.
        x2 = coordX2,
        //This line indicates where the end of a lines x axis is.
        y2 = coordY2,
        //This variable stores temporary x axis data we update in our animation loop.
        x = x1,
       //This variable stores temporary y axis data we update in our animation loop. 
        y = y1;
}

//This function interacts with the canvas.
function animateLineDrawing() {
    //This variable creates a loop.
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //This method clears content from the last loop iteration.
    c.clearRect(0, 0, 608, 608);
    //This method starts a new path.
    c.beginPath() ;
    //This method moves us to a starting point in our line.
    c.moveTo(x1, y1);
    //This method indicates the end point in our line.
    c.lineTo(x, y);
    //This method sets the width of our line.
    c.linewidth = 10;
    //This method sets the color of our line.
    c.strokeStyle = 'rgba(70, 255, 33, .8)';
    //This method draws everything we laid out above.
    c.stroke();
    //This condition checks if we've reached the endpoints.
    if (x1 <= x2 && y1 <= y2) {
    //This condition adds 10 to the previous end x endpoint.
    if (x < x2) { x += 10; }
    //This condition adds 10 to the previous end y endpoint.
    if (y < y2) { y += 10; }
    //This condition is similar to the one above.
    //This is necessary for the 6, 4, 2 win conditions.
    
    if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
    
    }
    //This condition is similar to the one above.
    //This is necessary for the 6, 4, 2 win condition.
    if (x1 <= x2 && y1 >= y2) {
    if (x < x2) { x += 10; }
    if (y > y2) { y -= 10; }
     if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
    }

    //This function clears our canvas after our win line is drawn.
    function clear() {
        //This line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear) ;
        //This line clears our canvas.
        c.clearRect(0, 0, 608, 608);
        //This line stops our animation loop.
        cancelAnimationFrame(animationLoop) ;
        }
        //This line disallows clicking while the win sound is playing
        disableClick();
        //this line plays the win sounds.
        audio('./media/winGame.mp3' );
        //This line calls our main animation loop.
        animateLineDrawing() ;
        //This line waits 1 second. Then, clears canvas, resets game, an allows clicking again.
        setTimeout(function () { clear(); resetGame(); }, 1000);

    }


    //This function resets the game in the event of a tie or a win.
    function resetGame() {
        //This for loop iterates through each HTML square element.
        for (let i = 0; i < 9; i++) {
        //This variable gets the HTML element i.
        let square = document.getElementById(String(i));
        //This removes our elements backgroundImage.
        square.style.backgroundImage = ''; 
        }
        //This resets our array so it is empty and we can start over.
        selectedSquares = [];
}
