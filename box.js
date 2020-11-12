class Box {
constructor(x,y,width,height){
    var options = {
isStatic: true


    }
this.x = x
this.y = y
this.width = width
this.height = height

this.bodies = Bodies.rectangle(x,y,width,height,options)
World.add(world,this.bodies)



}
display(){
var pos = this.bodies.position
rectMode(CENTER)
rect(pos.x,pos.y,this.width,this.height)

}


} 