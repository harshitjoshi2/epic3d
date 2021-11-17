class Board {
    constructor(x, y, width, height) {
        var options = {
          isStatic: true
        };
    
        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/board.png");
    
        World.add(world, this.body);
      }
      
    remove (index){
        this.isRemoved=true;
       Matter.World.remove(world,this.body);
       delete playerArrows[index];
    }

      display(){
          var pos =this.body.position;
          push();
          translate(pos.x,pos.y)
          imageMode(CENTER);
          image(this.image, 0,0,this.width,this.height);
          pop();
      }
}