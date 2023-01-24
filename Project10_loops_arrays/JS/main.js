//A& function using a while loop
function count_to_five() {
    var Digit = "";
    var x = 1;
    while (x < 6) {
        Digit += "<br>" + x;
        x++;
    }
    document. getElementById("Counting to Ten").innerHTML = Digit;
}
    
    //A function using a for loop
    var Vowels = ["A", "E", "I", "O", "U"];
    var alphabet= "";
    var Y;
    function for_Loop() {
        for (Y = 0; Y < Vowels.length; Y++) {
            alphabet += Vowels[Y] + "<br>";
        }
        document.getElementById("Vowels").innerHTML= alphabet;
    }
    
    //A function with an array
    function color_array() {
    var food = [];
    
    food[1] = "Lumpia";
    food[2] = "Teriyaki";
    food[3] = "Steak";
    food[4] = "Beans";
    food[5] = "Soup";
    food[6] = "Fried Fish";
     document.getElementById("Array").innerHTML =
    "My favorite food is " + food[6] + ".";
}
    
    //Creating an object with the let keyword
    function car() {
    let car = {
    make: "Honda",
    year: "2023",
    color: "Purple",
    
    };
    
    document.getElementById("car").innerHTML =
    
    "I have a " + car.year + " " + car.color + " " + car.make + ".";
}