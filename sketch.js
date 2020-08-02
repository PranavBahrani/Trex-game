var trex,ground,trexrunning,groundimage,invisibleground,cloudimage,cloud
function preload () {
trexrunning=loadAnimation("trex1.png","trex3.png","trex4.png");  
groundimage  = loadImage("ground2.png"); 
cloudimage = loadImage("cloud.png"); 
}
function setup() {
  createCanvas(600,200);
trex = createSprite(50,180,20,50);
trex.addAnimation("running",trexrunning); 
trex.scale = 0.5;  
ground = createSprite(300,180,600,10); 
ground.addImage("ground4",groundimage);  
ground.velocityX = -6;
ground.x = ground.width /2;
invisibleground = createSprite(300,190,600,10);
invisibleground.visible = false;
  
}       

function draw() {
background(180);
trex.collide(invisibleground);
console.log(trex.y);  
if (ground.x < 0){
  ground.x = ground.width/2;
}
if(keyDown("space")&& trex.y >= 161){
  trex.velocityY = -12;
}
trex.velocityY = trex.velocityY + 0.8;
spawnClouds();  
drawSprites();
}
function spawnClouds() {  
if (frameCount % 60 === 0) {    
  cloud=createSprite(600,120,40,10);
  cloud.y=Math.round(random(80,120));
  cloud.addImage(cloudimage);  
  cloud.scale = 0.5;    
  cloud.velocityX = -3;
  cloud.lifetime = 134; 
  cloud.depth = trex.depth;    
  trex.depth = trex.depth + 1;  
  }  
}
