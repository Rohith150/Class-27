class Chain{

constructor(x,y){

    var options = {
        bodyA:x,
        bodyB:y,
        length:10,
        stiffness:0.04
    }
    this.chain = Matter.Constraint.create(options)
    World.add(world, this.chain);
}

display(){

    push();
    strokeWeight(5);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    pop();
}

}