function countdown() {      //defining a function
    var seconds = document.getElementById('seconds').value;     //getting the HTML input value from the element with id 'seconds' and setting the variable seconds to that value.


    function tick() {       //naming and defining a function
        seconds = seconds - 1;      //setting seconds to itself -1
        timer.innerHTML = seconds;      //setting the timer HTML element to the value of seconds
        var time = setTimeout(tick, 1000);     //using the set timeout method to pause for 1000 milliseconds each time tick runs and settin the variable time
        if (seconds == -1) {        //if conditional statement that runs if seconds is equal to -1
            window.alert("Time's up."); //if true create a popup window that reads times up
            clearTimeout(time);     //ends the timeout method
            timer.innerHTML = ' ';      //Setting the timer HTML element to a blank string making it disapear
        }
    }
    tick();     //runs the tick function again
}


var slideIndex = 1;     //setting a global variable
showSlides(slideIndex);    //runs the show slides function on slide index 

//next/previous controls
function plusSlides(n) {              //naming and defining a function
    showSlides(slideIndex += n);        //runs the showslides function and increases the value of slideIndex by n 
}

//Thumbnnail image controls
function currentSlide(n) {  //Naming and defining a function
    showSlides(slideIndex = n);     //runs the showslides function and sets slideindex to n
}

function showSlides(n) {        //naming and defining a function
    var i;          //naming a local variable i
    var slides = document.getElementsByClassName("mySlides"); //getting all HTML elements with the class 'mySlides' and assigning them to the variable slides
    var dots = document.getElementsByClassName('dot'); //getting all HTML elements with the class 'dot' and assigning them to the variable dots
    if (n > slides.length) { slideIndex = 1 }   //conditional statement the sets slide index equal to 1 if n is greater than slides.length     
                                                //slides.length is the total number value length of the array assigned to slides
    if (n < 1) { slideIndex = slide.length} //conditional statement that sets slideIndex equal to slides.length if n is less than 1
    for (i = 0; i < slides.length; i++) {       //a for loop that sets i equal to zero before it starts. sets the condition that this loop will keep running as long as i is less than slide.length
                                            //and increments i by one for each time it runs
        slides[i].style.display = 'none';       //selects the element of the array that equals i so you can loop through them and sets the display property to none meaning they are invisible
    }
    for (i = 0; i < dots.length; i++) {     //a for loop that sets i to 0, contiues as long as i is less than dots.length and increments i by 1 for each loop through so you can cycle through the dots
        dots[i].className = dots[i].className.replace(' active', ''); //replaces the class name of the dot in the array that is equal to i from active to a blank string

    }

    slides[slideIndex - 1].style.display = 'block'; //make the slide in the array thats array number is equal to slideIndex -1 display meaning no longer invisible
    dots[slideIndex - 1].className += ' active';        //make the dot thats array number is equal to slideIndex -1 have the class name active
}