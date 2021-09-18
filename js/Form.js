class Form {
  constructor() {
    this.greeting = createElement('h3');
    this.input = createInput("Name: ");
    this.button = createButton('Play');
    this.title = createElement('h2')
  }

  hide(){
    this.greeting.hide()
    this.input.hide();
    this.button.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Juego de Carreras de Autos");
    this.title.position(displayWidth/2-80,0);
    
    //var input = createInput("Name");
    //var button = createButton('Play');
    
    this.input.position(displayWidth/2-80, displayHeight/3+20);
    this.button.position(displayWidth/2+75, displayHeight/3+20);

      this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      //var name = input.value();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      //var greeting = createElement('h3');
      this.greeting.html("Hola " + player.name);
      this.greeting.position(displayWidth/2, displayHeight/3+40);
    });
  }
}
