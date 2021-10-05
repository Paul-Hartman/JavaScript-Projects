function Drink_Function() {     //Defining and naming a function
    var Age, Can_Drink;         //Naming two Variables
    Age = document.getElementById('Age').value;     //Set the variable Age to the value of the HTML element with the id 'Age'
    Can_Drink = (Age < 21) ? 'You are too young' : "You are old enough";       //Seting the variable Can_Drink to the string on the left if the expressiopnAge is less than 21 is true and to the string on the right if it is false with a ternary operator
    document.getElementById('Drink').innerHTML = Can_Drink + " to drink.";      //Putting the value of the variable Can_Drink concactenated with a string into the HTML element with the id "Drink"
}

function Vehicle(Make, Model, Year, Color) {       //Defining and naming a class constructor function with the properties Make, Model, Year, and Color
    this.Vehicle_Make = Make;       //Naming and Defining a variable with the keyword this, meaning the value of this is the whatever object posseses the function and setting its value to the Make value of that object
    this.Vehicle_Model = Model;     //Naming and Defining a variable with the keyword this, meaning the value of this is the whatever object posseses the function and setting its value to the Model value of that object
    this.Vehicle_Year = Year;       //Naming and Defining a variable with the keyword this, meaning the value of this is the whatever object posseses the function and setting its value to the Year value of that object
    this.Vehicle_Color = Color;     //Naming and Defining a variable with the keyword this, meaning the value of this is the whatever object posseses the function and setting its value to the Color value of that object
}

var Jack = new Vehicle("Dodge", 'Viper', 2020, 'Red');      //Naming and defining an variable with the keyword new which creates a new object in the Vehicle class with values for the Make, Model, Year, and color properties.
var Emily = new Vehicle('Jeep', 'Trail Hawk', 2019, 'White and Black'); //Naming and defining an variable with the keyword new which creates a new object in the Vehicle class with values for the Make, Model, Year, and color properties.
var Eric = new Vehicle('Ford', 'Pinto', 1971, 'Mustard');       //Naming and defining an variable with the keyword new which creates a new object in the Vehicle class with values for the Make, Model, Year, and color properties.

function myFunction() {     //Defining and naming a function
    document.getElementById('Keywords_and_Constructors').innerHTML =        //Putting the Values of multiple variables set by the class constructor for the eric object concactenated with multiple strings into the HTML element with the id "Keywords_and_Constructors"
        'Eric drives a ' + Eric.Vehicle_Color + ' ' + Eric.Vehicle_Make +
        ' ' + Eric.Vehicle_Model + ' manufactured in ' + Eric.Vehicle_Year + '.';
}


function Bird(Species, Color, Name, Gender) {       //Naming and defining a class constructor function with the properties Species, Color, Name and Gender.
    this.Bird_Species = Species;                    //Naming and Defining a variable with the keyword this, meaning the value of this is the whatever object posseses the function and setting its value to the Species value of that object
    this.Bird_Color = Color;                        //Naming and Defining a variable with the keyword this, meaning the value of this is the whatever object posseses the function and setting its value to the Color value of that object
    this.Bird_Name = Name;                          //Naming and Defining a variable with the keyword this, meaning the value of this is the whatever object posseses the function and setting its value to the Name value of that object
    this.Bird_Gender = Gender;                      //Naming and Defining a variable with the keyword this, meaning the value of this is the whatever object posseses the function and setting its value to the Gender value of that object
}
var A = new Bird('Parrot', 'Red', 'Polly', 'M');       //Naming and defining an variable with the keyword new which creates a new object in the Bird class with values for the Species, Color, Name and Gender properties.
var B = new Bird('Dove', "White", 'Birdie', "F");       //Naming and defining an variable with the keyword new which creates a new object in the Bird class with values for the Species, Color, Name and Gender properties.
var C = new Bird("Crow", "Black", "Dave", "M"); //Naming and defining an variable with the keyword new which creates a new object in the Bird class with values for the Species, Color, Name and Gender properties.

function Bird_Function() {
    document.getElementById('New_and_This').innerHTML = A.Bird_Name + ' is a beautiful ' + A.Bird_Color + " " +A.Bird_Species + "."
}       //Putting the values of the variables set by the class constructor for the A object in the bird class concactenated with strings into the HTML element with the id "New_and_This"

    
function count_Function() {         //Naming and defining a function
    document.getElementById('Counting').innerHTML = Count();        //Putting the value of the function Count into the HTML element with the id 'Counting'
    function Count() {              //Naming and defining a Function
        var Starting_point = 9;     //Naming aa variable and giving it a number value
        function Plus_one() { Starting_point += 1; }       //Naming and defining a function that adds 1 to the value of the variable Starting_Point
        Plus_one();     //Runs the nested function Plus_one one time before the return statement
        return Starting_point; //the return statement stops the execution of the Plus_One function and returns a value from that function
    }
}



    var add = (function () {      //Naming and setting the value of the variable add to the value of function
        var counter = 0;            //Naming and setting the value of variable counter to 0
        return function () { counter += 1; return counter;}     //Running a nested function that adds 1 to counter and then returns that value to the variable counter, it also returns the value of the nested function to the function that is setting the value of the variable add
    })()
function Counter_Function() {       //Naming and defining a function
    document.getElementById("Nested_Function").innerHTML = add();       //Putting the value of the variable add into the HTML element with the id "Nested_Function"
    }
