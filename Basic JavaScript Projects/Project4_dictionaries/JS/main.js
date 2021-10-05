function my_Dictionary() {      //Defining and naming a Function
    var Game = {                //Defining a naming a variable as an object
        Genre: 'FPS',              //defining key value pairs within the object
        Studio: "Indie",
        Theme: 'Cyberpunk',
        Demographic: '20-29 Men',
        Title: 'Cybershot'

    };
    delete Game.Title;             //Using the delete operator on a KVP
    document.getElementById("Dictionary").innerHTML = Game.Title;  //Putting the value of game.title into the HTML element with the id "Dictionary"
}  