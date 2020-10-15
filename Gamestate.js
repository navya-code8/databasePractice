class Gamestate{

    constructor(){


    }

    getState(){

        var dataState = database.ref("gamestate")
        dataState .on("value", function(data){gameState = data.val()} )
    }

    updateState(state){

        database.ref("/").update({gamestate: state})

    }

    start(){

        if (gameState === 0){

            player = new Player()
            form = new Form()
            form.display();

        }

    }
}