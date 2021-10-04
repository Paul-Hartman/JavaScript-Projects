
var Family = 'Brown', Family = Family.fontcolor('brown'), Dad = 'John',
    Dad = Dad.fontcolor("blue"), Sister = 'Sara', Sister = Sister.fontcolor("pink"),
    Mom = 'Gertrude', Mom = Mom.fontcolor("red"), Brother = 'George',
    Brother = Brother.fontcolor('green');  //Naming and using the fontcolor method on all the variables
var B = 'The Brown Family';                 //Defining a variable and asssigning it a string value
window.alert(B);                             //Calling that variable in a window alert
document.write('The ' + Family + '\'s');     //Usin the document write method to print a string concatenated with a variable
document.write('<br>\"No matter how you feel about family' //printing a string with charachters that need \ to work in a string
    + 'the\'re all that you\'ve got\"'
    + '<br>-John Brown -' + (1000+999) + "<br>");


function My_First_Function() {          //Defining a function and naming it
    var str = Dad + ' ' + Family;            //Defining a variable and giving it a value made up of other variables concatenated into a new string
   
    var result = str;                       //Defining the variable result and assigning it's value as the variable str
    document.getElementById('Dad').innerHTML = result;  //putting the value of result into the HTML element with "Dad" id
 
}

function My_Second_Function() {         //Defining a function and naming it
    var str = Mom + ' ' + Family;       //Defining a variable and giving it a value made up of other variables concatenated into a new string
    
    var result = str;                   //Defining the variable result and assigning it's value as the variable str
    document.getElementById('Mom').innerHTML = result;  //putting the value of result into the HTML element with "Mom" id
   
}

function My_Third_Function() {             //Defining a function and naming it
    var str = Brother + ' ' + Family;           //Defining a variable and giving it a value made up of other variables concatenated into a new string
    
    var result = str;                           //Defining the variable result and assigning it's value as the variable str
    document.getElementById('Brother').innerHTML = result;      //putting the value of result into the HTML element with "Brother" id

}

function My_Fourth_Function() {             //Defining a function and naming it
    var str = Sister + ' ' + Family;            //Defining a variable and giving it a value made up of other variables concatenated into a new string
   
    var result = str;                           //Defining the variable result and assigning it's value as the variable str
    document.getElementById('Sister').innerHTML = result;  //putting the value of result into the HTML element with "Sister" id

}

