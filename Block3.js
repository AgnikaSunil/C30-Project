class Block3 {
  constructor(x, y) {
    var options = {
        'restitution':0.02,
        'friction':0.1,
        'density':0.7
    }
    this.body = Bodies.rectangle(x, y,100,60, options);
    this.width = 110;
    this.height = 90;
    this.image = loadImage("Images/blue.png");
    this.Visibility = 255;
    World.add(world, this.body);
  }
  
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    if(this.body.speed<3){
      push();
      rotate(angle);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
    }
   
  }
};