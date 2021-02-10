class game{
    constructor(){

    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          } 

        }
        player1 = createSprite(100,height/4);
        player1.addAnimation("start",b1);

        player2 = createSprite(100,height*3/4);
        player2.addAnimation("start2",r1);
    }

    play(){
    
    }
}