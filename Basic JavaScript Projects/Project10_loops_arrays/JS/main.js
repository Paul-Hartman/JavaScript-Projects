function Call_Loop() {
    let text = "";
    let i = 0;
    while (i < 10) {
        text += "<br>The number is " + i;
        i++;
    }
    document.getElementById("Loop").innerHTML = text + "<br> " + text.length + " charachters";

}



