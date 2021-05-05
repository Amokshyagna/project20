var mouse1,mouse2,mouse3
var cat1,cat2,cat3
var cat,mouse
var bg
function preload() {
    bg=loadImage("images/garden.png")
    mouse1=loadImage("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3=loadImage("images/mouse4.png")
    
    cat1=loadImage("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat3=loadImage("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(800,600,50,50)
    cat.addImage("catSleeping",cat1)
    cat.scale = 0.2
    
    mouse = createSprite(100,600,50,50)
    mouse.addImage("mouseStanding",mouse1)
    mouse.scale = 0.1
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
      cat.velocityX = 0
      cat.addImage("catSitting",cat3)
      cat.changeAnimation("catSitting")
      cat.x = 200
      mouse.addImage("mouse",mouse3)
      mouse.changeAnimation("mouse")
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
      cat.velocityX = -4
      cat.addAnimation("catWalking",cat2)
      cat.changeAnimation("catWalking")

      mouse.addAnimation("mouseTeasing",mouse2)
      mouse.changeAnimation("mouseTeasing")
  }


}
