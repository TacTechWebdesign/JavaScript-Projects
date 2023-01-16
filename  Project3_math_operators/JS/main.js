function addition() { //Defining and naming the addition function
    var add = 40+90;
    document.getElementById("Add").innerHTML = "40 + 90 = " + add; //Print the result in HTML
        
}

function subtraction() { //Defining and naming the subtraction function
    var subtraction = 6-15;
    document.getElementById("Sub").innerHTML = "6 - 15 = " + subtraction; //Print the result in HTML
    
}

function multiplication() { //Defining and naming the multiplication function
    var mult = 8*8;
    document.getElementById("M1t").innerHTML = "8 * 8 = " + mult; //Print the result in HTML
    
}
    
function division() { //Defining and naming the division function
    var divide = 56/7;
    document.getElementById("Div").innerHTML = "56 / 7 = " + divide; //Print the result in HTML
    
 }
    
function random() { //Defining and naming the random function
    document.getElementById("Ran").innerHTML = Math.random()*10; //Print the result in HTML
    
}
function modulus_operator() { //Defining and naming the modulus operator function
    var modulus = 81 % 9;
    document.getElementById("Mod").innerHTML = "81 % 9" + modulus; //Print the result in HTML

}

function Increment() { //Defining and naming the increment function
    var value = document.getElementById("IncrementText").innerHTML; //Saves the text of the HTML element to a variable
    
    value++ //Add one to the value
    
    document.getElementById("IncrementText").innerHTML = value; //Print the result in HTML
    
}

function Decrement() { //Defining a function and naming it
    var value = document.getElementById("DecrementText").innerHTML; //Saves the text of the HTML element to a variable
    
    value--; //Subtract one from the value
    
    document.getElementById("DecrementText").innerHTML = value; //Print the result in HTML

}
    
    