function openModal() {
    document.getElementById('myModal').style.display ='block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides =
        document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('demo');
    var captionText =
        document.getElementById('caption');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className =
            dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

function validateForm() {
    let fname = document.forms['myForm']['fname'].value;
    let lname = document.forms['myForm']['lname'].value;
    let email = document.forms['myForm']['email'].value;
    let pnum = document.forms['myForm']['pnum'].value;
    if (fname == "" || lname == "" || email=="" || pnum == "") {
        alert('Please fill out the contact form in full.')
        return false;
        }
}

function openForm() {
    document.getElementById("popForm").style.display = 'block';
}

function closeForm() {
    document.getElementById("popForm").style.display = 'none';
}
