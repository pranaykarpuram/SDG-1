var gameState = 0;
var playerCount = 0;
var database;
var form, player;
var p1, p2;
function preload(){
  b1 = loadAnimation("player1/player10.png");
  b2 = loadAnimation("player1/player1.png","player1/player2.png","player1/player3.png","player1/player4.png","player1/player5.png","player1/player6.png","player1/player7.png");
  r1 = loadAnimation("player2/red10.png");
  r2 = loadAnimation("player2/red1.png","player2/red2.png","player2/red3.png","player2/red4.png","player2/red5.png","player2/red6.png","player2/red7.png");

}
function setup() {
  database= firebase.database();
  createCanvas(windowWidth,windowHeight);
  form = new Form();
  player = new Player();
  form.display();
 
}

function draw() {
  if(playerCount===2){
    gameState=1;
  }
  drawSprites();

}