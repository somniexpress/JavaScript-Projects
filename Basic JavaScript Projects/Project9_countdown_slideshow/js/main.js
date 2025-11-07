// Countdown timer function
fuction countdown() {
    
    //gets the iput from the user
    var seconds = getElementById("seconds").value;
// to perform the countdown
function tick (){
    seconds = seconds-1;
    timer.innerHTML = seconds;

    IF (seconds > 0) {
        setTimeout(tick, 1000);


    }else{
        alert("Time is up");

    }


}
tick();
}

// image slideshow functions
let SlideIndex = 1;
showSlides(SlideIndex);

//Next/Previos controls
function plusSlides(n){
    showSlides(SlideIndex += n);

}

//Thumbnail image controls
function currentSlide(n){

    showSlides(SlideIndex = n);

}
function showSlides (n){
    let i;
    let slides = document.getElementByClassName("mySlides");
    let dots = document.getElementByClassName("dot");
    if (n > slides.length){
        SlideIndex = 1;
    }
    if (n < 1){
        SlideIndex = slides.length;
    }
    for ( i = 0 ; i < slides.length; i++ ){
        dots[i] .ClassName = dots[i].ClassName.replace(" active""");

    }
    slides[SlideIndex - 1 ].style.display = "block";
    dots[SlideIndex - 1 ].ClassName += "active";
    
}

