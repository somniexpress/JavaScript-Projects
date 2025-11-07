//Utilizing the .concat method ()
function full_sentence () {
    var part_1 = "Guess what day";
    var part_2 = "It is....";
    var part_3 = "April fools!";
    var whole_sentence = part_1.concat(part_2. part_3);
    document.getElementById(StringMethod).innerHTML = whole_sentence;
}.

//Utilizing the .slice method ()
function slice_Method () {
    var sentence = "slice and dice";
    var section = sentence.slice(10, 14);
    
    document.getElementById("Slice").innerHTML = section;
}

//Utilizing the .toString method ()
function string_Method () {
    var myNumber = 999;
    
    document.getElementById("ToString").innerHTML = myNumber.toString() ;
}

//Utilizing the .toPrecision method ()
function precision_Method () {
    var myNumber = 1234.567;
    
    document.getElementById("Specificlength").innerHTML = myNumber.toPrecisiong(5) ;
}
