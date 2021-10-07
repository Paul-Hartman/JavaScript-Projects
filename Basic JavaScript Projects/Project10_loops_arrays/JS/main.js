function Call_Loop() {      //naming and defining a function
    let text = "";      //setting the variable to an empty string
    let i = 0;      //setting the variable i to 0
    while (i < 10) {        //setting a while loop function that executes as long as the specified condition is true

        text += "<br>The number is " + i;       //adds the following string and the variable 1 to the value of text
        i++;            //increments i by 1
    }
    document.getElementById("Loop").innerHTML = text + "<br> " + text.length + " charachters"; //puts the output of the loop and the text.length method ,which counts the number of charachters in the result, into an HTML element

}

function for_Loop() {       //defining and naming a function
    var birds = ['Parrot', 'Dove', 'Crow', 'Parakeet'];     //naming a variable and settin gits value as an array with values

    let text = '';      //setting a variable to an empty string
    for (let i = 0; i < birds.length; i++) {        //setting a for loop wich sets i to 0 runs as long as i is less than the length of the array birds and increments i each loop
        if (i === 0) { continue; }      //if i is strictly equal to 0 skip that iteration of the loop
        if (i === 3) { break;}      //if i is strictly equal to 3 the break statment will end the loop
        text += birds[i] + '<br>';      //adds the value from the birds array at the position i and a line break to the value of text
    }
    document.getElementById('List_of_Birds').innerHTML = text;      //Puts this function into an HTMl element
}

var names = ['Jim', 'John', 'George', 'Jeffrey', 'Jordan']      //setting the variable names to an array with values

function array_Function() {     //naming and defining a function
    let married = names[0] + ', ' + names[2] + ' and ' + names[4];  //setting a variable with let meaning it cannot be redeclared or used outside of the block to the values at different positions in the array concactenated with strings
    let not_Married = names[1] + ' and ' + names[3];        //settting a variable to some values from the array concactenated with a string
    document.getElementById('Array').innerHTML = married + ' are married, ' + not_Married + ' are not'; //Putting those varibles concactenated with strings into an HTML element

}

function constant_Function() {      //naming and defining a function
    const Cat = { name: "brian", breed: 'Sphinx', color: 'beige' }; //setting the constant cat (cannot be redeclared and only usable in the block) as an object with properties
    Cat.color = 'brown'     //changing the color property in the cat object to brown
    Cat.owner = 'Jessica'   //adding aproperty to the cat object
    string = Cat.owner + ' owns a ' +Cat.color + ' ' + Cat.breed + ' cat.'      //setting a variable to multiple properties from the cat object and concactenating them with strings
        document.getElementById('constant').innerHTML = string; //putting it into an HTML element
}
var x = 10;     //setting a variable outside of a function
function let_keyword() {            //naming and defining a function  
    let x = 20;     //setting x to 20 with the let keyword meaning it is only 20 within this block
    var y = 15;     //setting a variable
    var answer = x + y;     //setting a variable to the value of x plus y
    document.getElementById('let').innerHTML = answer;      //putting that variable into an HTML element
}
window.alert(x)     //using a window alert to show that the value of x outside of the block is still 10

var x = return_Function(6, 14);     //setting x to the returned value of the function with 6 and 14 as its arguments
function return_Function(a, b) {        //naming and defining a function and its parameters
    return a / b;       //using the return statement to return a value from that function 
}
document.getElementById('return').innerHTML = x;        //putting the variable set to the returned value of the function into an HTML element

let game = {        //naming and creating the object game
    genre: 'Eductational ',     //giving the properties string values
    mechanic: 'Action Programming ',
    year: '2019 ',
    name: 'Quirky Circuits ',
    description: function () {      //setting a method in the game object 
        return game.name + ' is an ' + game.genre + game.mechanic + "game made in " + game.year;  //returns the values of some properties concactenated with strings as the value of the method
    }
};
document.getElementById('game_description').innerHTML = game.description();     //putting the value of the game description method into an HTML element