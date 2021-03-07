class Slingshot{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:50,
            stiffness:0.8
        }
        this.chain=Constraint.create(options);
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        World.add(world,this.chain)
    }
   display(){
       image(this.sling1,200,20);
       image(this.sling2,170,20);
      // image(this.sling3,200,200);
      if (this.chain.bodyA){
    
      
       var pointA=this.chain.bodyA.position;
       var pointB=this.chain.pointB;
       push()
       strokeWeight(10);
               line(pointA.x,pointA.y,pointB.x,pointB.y);
               line(pointA.x,pointA.y,pointB.x-30,pointB.y);
         
               pop()
      }
   }
    fly(){
this.chain.bodyA=null
   }
   attach(body){
    this.chain.bodyA=body;
   }
}
