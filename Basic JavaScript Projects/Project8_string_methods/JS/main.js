function full_Sentence() {  //Declaring and naming a funciton
    var part_1 = 'Whales ';     //Setting a variable    
    var part_2 = 'dont make ';      
    var part_3 = 'very ';
    var part_4 = 'good pets.';
    var Whole_sentence = part_1.concat(part_2, part_3, part_4); //using the Concactenate method to combine all of the named variables into one string
    document.getElementById('Conc').innerHTML = Whole_sentence;     //Putting that value into an HTML element
}

function slice_Method() {       //Declaring and naming a function
    var Sentence = 'Humpty Dumpty was reckless.';       //setting a variable as a string
    var section = Sentence.slice(7, 14);            //using the slice method to set a new variable to the string that is between the 7th and the 14th charachter of Sentence
    var upper = section.toUpperCase();      //using the uppercase method on the value in section and setting upper to that upper case value
    var Search = Sentence.search('reckless.');      //using the search method to tell the location of the reckless in Sentence and setting the variable Search to that number value
    document.getElementById('Slice').innerHTML = upper + Search; //Putting those values into an HTML element
}

function string_Method() {      //Declaring and naming a function
    var movie = 101.127658124;      //setting a variable
    var Movie = movie.toPrecision(3);       //using the to precision method to round the value of movie to 3 charachters and setting Movie to that value
    var title = ' Dalmations';      //setting a variable
    document.getElementById('String').innerHTML = Movie.toString() + title;     //converting Movie to a string with the toString method and putting those values in an HTML element
}

function rounding_Function() {      //Declaring and naming a function
    var decimal = 0.453584262458514     //setting a variable
    var n = decimal.toFixed(5);     //using the toFixed method to set n to the value of decimal to a fixed size of 5 charachters passed the decimal point
    var lie1 = 'I am ';    
    var lie2 = '% sure im coming to your birthday.';
    document.getElementById('Birthday').innerHTML = lie1.valueOf() + n.concat(lie2);
}       //using the value of method on lie1 to return its primitive value and using the concat method to combine it into a string with the other variables and then putting it all into an HTML element