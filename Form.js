class Form{

    constructor(){


    }

    display(){

     var title = createElement("h3");
     title.html("Car Racing Game");
     title.position(480,100);
     var input = createInput("Name");
     var button = createButton("StartGame");
     input.position(470, 150);
     button.position(500, 200);
     console.log(input.value())
     
     button.mousePressed(function(){
        button.hide()
        input.hide()
        var name = input.value();
        playerCount++
       // player.update(name);
        var greeting = createElement("h3")
        greeting.html("Welcome to the Game, " +name)
        greeting.position(430,200)}); 
    }
}