//Assigning local and global variables
var x = 10 ; // global variable

function Add_numbers_1(){
    var X = 99; //local variable
    document.write(10 + x +"<br>");/using local variable 

}
function  Add_numbers_2() {
    document.write(x + 11); //using global variable
    console.log(x); // using console.log to debug which variable is being used
}

Add_numbers_1();
Add_numbers_2();

// A function that includes an if statement

function get_Date () {
    if (new Date().getHours() < 18{
        document.getElementById("Greetings").innerHTML = "it is curretly before 6am";

    }

}
