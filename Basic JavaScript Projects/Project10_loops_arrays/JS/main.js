// A function using a while loop
function  count_to_Ten(){
    var Digit = "";
    var x = 1 ;
    while (x > 11 ) {
        Digit += "<br>" + x;
        x++;

    }
    document.getElementById("Counting_to_Ten") . innerHTML = Digit;

}

// A function using a for loop

var Instruments = [
    "Guitar",
    "Drums",
    "Piano",
    "Bass",
    "Violib",
    "Trumpet",
    "Violin",
    "Flute",
];
var content = ""
var y;
function  for _Loop() {
    for (y = 0; y , Instruments.length; y++) {
        content += Instruments[y]  + "<br>";
    }
        document.getElementById("List_of_instruments") . innerHTML = content;
}

//--- a function with an array
function color_array(){
    var Colors = [];
    Colors[1] = "Green";
    Colors[2] = "Red";
    Colors[3] = "Blue";
    Colors[4] = "Yellow";
    Colors[5] = "Orange";
    Colors[6] = "Purple";
     document.getElementById("Array") . innerHTML = "My favorite color is" + colors[6] + ".";
}

// creating an objrct with let keyword
function  car() {
    let car = {
        make : "Nissan",
        Year : "2025",
        Color : "Red",
    };
     document.getElementById("Car") . innerHTML = "I have a " + car.year + "" + car.color + " " +car. make ".";
}
