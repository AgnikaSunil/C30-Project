class Block1 extends BaseClass {
  constructor(x,y){
    super(x,y,100,60);
    this.image = loadImage("Images/yellow.png");
  }
  display(){

    if(this.body.speed<3){
      super.display();
      image(this.image,this.body.position.x,this.body.position.y,100,90);
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,100,90);
      pop();
    }
  }
};
