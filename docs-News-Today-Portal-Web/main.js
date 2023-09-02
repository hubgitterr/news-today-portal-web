function showSlide(n) { // n is the slide number.  n=0 is the first slide. n=1 is the second slide, etc.  
    var slides = document.getElementsByClassName("slide"); // Get all the slides. Put them in an array called slides.
    var dots = document.getElementsByClassName("dot");
    // Hide all the slides.
    for (i = 0; i < slides.length; i++) 
    slides[i].style.display = "none";
    // Unselect all the dots.
    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");
    // Show and select the wanted slide.
    slides[n].style.display = "block";  
    dots[n].className += " active";
}