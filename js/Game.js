class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });
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
      if (playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }
    car1 = createSprite(100,100);
    car2 = createSprite(200,100);
    car3 = createSprite(300,100);
    car4 = createSprite(400,100);
    cars = [car1,car2,car3,car4];
  }
  play(){
    form.hide();
    //textSize(30);
    //text("Comienza el juego\nʕ•́ᴥ•̀ʔっ",displayWidth/2, displayHeight/3);
    Player.getPlayerInfo();
    
    if (allPlayers !== undefined){
      var index = 0;
      var x = 0;
      var y;
      //var display_position = 130;
      for (var plr in allPlayers){
        index = index + 1;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        if (index == player.index){
          //fill("red");
          cars[index-1].shapeColor = "red";
          //camara.position.x = displayWidth/2;
          camera.position.x=displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
        //else{
          //fill("black");
        //}
        //display_position += 20;
        textSize(15);
        text(allPlayers[plr].name+": "+allPlayers[plr].distance,120);
      }
    }
    else{
      console.log("error )=")
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
      player.distance+=50;
      player.update();
    }
  }
}