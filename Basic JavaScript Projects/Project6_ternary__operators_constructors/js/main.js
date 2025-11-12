// function with HTML and JS using a ternary with input from the browser
function Ride_function() {
    var Height, Can Ride;
    Height = document.getElementByid(Height).value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride";
}

// a construction function utilizing "new and "this keyword

function Vehicle(Make, Model, Year, Color) {
    this.vehicle_ Make = Make;
    this.vehicle_ Model = Model;
    this.vehicle_ Year = Year;
    this.vehicle_ Color = Color;
}
var Jack = new Vehicle("Dodge","Viper",2020,"Red");
var Jones = new Vehicle("Mercedes","Sclass",2020,"White");
var Jill = new Vehicle("Mazda","Elite",2020,"Blue");

// a function to display result of the constructor in an HTML element
function myfunction() {
    document.getElementByid("Keywords_and_Constructors"). innerHTML =
            "Jack drives a " +
            Jack.Vehicle_Color +
            "-colored" +
            Jack.Vehicle_Model +
            " manufactured in " +
            Jack.Vehicle_Year;
}

// A nested function
function  add_Strings (){
var start_Strings = "Hello";

function Adding (str){
    start_String = start_String +" " + str;
}
 Adding ("World"):
 document.getElementByid("Nested_function").innerHTML = start_String: 

} 

