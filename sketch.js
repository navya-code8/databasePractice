var database;
var form, player, game;
var gameState = 0;
var playerCount = 0;

function setup(){
  database = firebase.database();
  createCanvas(500,500);
  game = new Gamestate()
}

function draw(){
  background("white");
  game.getState();
  game.updateState(0)
  game.start();
    drawSprites();
  
}