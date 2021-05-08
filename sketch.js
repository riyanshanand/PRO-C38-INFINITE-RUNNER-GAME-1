var box;
function setup() {
  createCanvas(displayWidth,displayHeight)
trex = createSprite(250,550,20,20)
//trex.velocityX = 2
console.log(displayWidth/2)

}

function draw() {
  background("blue");  
 
  if(keyDown("UP_ARROW")){
    trex.y = trex.y - 2;
    console.log(trex.y)

      camera.position.y = trex.y;
      camera.position.x = displayWidth/2

      }
 
  drawSprites();
}
