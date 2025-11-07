function Ride_function() {
    var Height, Can Ride;
    Height = document.getElementByid(Height).value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride";
}