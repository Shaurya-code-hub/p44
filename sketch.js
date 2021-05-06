  var bg;
  var Indian_soldier;
  var knife;
  var enemy, enemy2;
  var boss;
  

function preload(){
  bg = loadImage("images/BG4.jpg");
  Indian_soldierImg = loadImage("images/Indian soldier.png");
  enemy = loadImage("images/game-soldier-character_2009305.jpg");
  enemy2 = loadImage("images/game-soldier-character_2009308.jpg");
  boss = loadImage("images/boss.jfif");

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  Indian_soldier = createSprite(40,250,20,20);
  Indian_soldier.addImage(Indian_soldierImg);
  Indian_soldier.scale = 0.2;
  
 
}


function draw() {
  background(bg);  
 
  
  if(keyDown ("up_arrow")){
   Indian_soldier.y = Indian_soldier.y - 2;

  }
  if(keyDown ("down_arrow")){
    Indian_soldier.y = Indian_soldier.y + 2;
     
   }
  
   if(keyDown ("right_arrow")){
    Indian_soldier.x = Indian_soldier.x + 2;
     
   }

   if(keyDown ("left_arrow")){
    Indian_soldier.x = Indian_soldier.x - 2;
     
   }

   drawSprites();

  //  if(keydown ("space")){
  //  //spawnBullet();
    
  //  }
   
  }



