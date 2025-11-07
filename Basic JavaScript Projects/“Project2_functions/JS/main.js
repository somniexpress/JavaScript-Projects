function updateUserInfo() {
    // Assign two variables
    const userName = "John Doe";
    const userAge = 28;
    
    // Use document.getElementById to update HTML elements
    document.getElementById("nameDisplay").textContent = userName;
    document.getElementById("ageDisplay").textContent = userAge;
    
    // Optional: return the variables if needed
    return { name: userName, age: userAge };
    
    //a function that uses the += operator
    function myfunction() {
        var sentence = "i am learning"; //creating the variable
        sentence += "a lot from this course"; //using the += to add to the variable
        document. getElementById("Concatenate").innerHTML = sentence; //using document.getElementById()
}