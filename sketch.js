
var tom, tomImage, tomAnimation, jerry, tomEndImage, JerryEndImage,
jerryImage, jerryAnimation, ground, groundImage, movingRect, fixedRect;



function preload() {
    tomImage = loadImage("tomOne.png");
    tomAnimation = loadAnimation("tomTwo.png", "tomThree.png");
    tomEndImage = loadImage ("tomFour.png");

    jerryImage = loadImage("jerryFour.png");
    jerryAnimation = loadAnimation("jerryTwo.png", "jerryThree.png");
    JerryEndImage = loadImage("jerryOne.png");
    
    groundImage = loadImage("garden.png");

}

function setup(){
    createCanvas(550,550);
    
    ground = createSprite(275, 275);
    ground.addImage(groundImage);
    ground.scale = 0.8;

    tom = createSprite(500, 490);
    tom.addImage(tomImage);
    tom.scale = 0.1;

    jerry = createSprite(70, 480);
    jerry.addAnimation("teasing",jerryAnimation);
    jerry.scale = 0.1;
    
    

 }

function draw() {

    background(225);
if(tom.x - jerry.x < (tom.width - jerry.width)/2){
    tom.velocityX = 0;
    tom.addAnimation("tomlastImage",tomEndImage);
    tom.x = 300;
    tom.scale = 0.15;
    tom.changeAnimation("tomlastImage");

    jerry.addImage(JerryEndImage);


}
    

  
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("catRunning", tomAnimation);
    tom.changeAnimation("catRunning");

    jerry.addAnimation("jerryScared", jerryAnimation);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryScared");
    

}

}


function collide(movingRect, fixedRect){
     if( movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
        
            tom.velocityX = 0; 
            tom.changeImage(tomEndImage);
            jerry.changeImage(JerryEndImage);
    
      }}