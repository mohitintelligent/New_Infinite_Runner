var pillar,pillar1,pillar1image,pillar2,pillarGroup;

var heart,heartImage,heartgroup;

var bomb,bombanimation;

var lazer,lazer1,lazerimage;

var bombgroup;

var bird,birdImage;

var score=10;

var gamestate;

var end=1;

var start=0; 

var highscore=0;

var bombso,deathso;

function preload(){
    pillar1image=loadImage("my pillar.png");
  
    pillar2image=loadImage("my pillar.png");
  
    lazerimage=loadImage("laser.png");
  
    heartImage=loadImage("heart.png");
  
    birdImage=loadImage("bird.png");
  
  bombanimation=loadAnimation("bombofficial.png","bombabouttoexpolde.png");
  
   // bombso=loadSound("Explosion+3.mp3");

    //deathso=loadSound("High-pitch-bell-tone-ding.mp3");
  
}

function setup() {
  
     createCanvas(600, 600);
     
       bird=createSprite(200,300,10,10);
       bird.addImage(birdImage);
      
  bird.debug=true;
  
       
       bombgroup=new Group();
       pillarGroup=new Group();
       heartgroup=new Group();

       gamestate=start;
   
}

function draw() {
  
 background("pink");
  console.log(bird.scale);

  bird.scale=0.3; 
  
  if (gamestate===start){
  
      spawnpillar();
    
      spawnheart();
    
      bombspawn();
    
      bird.velocityY=bird.velocityY+0.5;
   
          
  if (keyDown("space")&&bird.y>=0){
    
      bird.velocityY=bird.velocityY-1;
    
  }
  if (pillarGroup.isTouching(bird)){
    
      score=score-2;
    
      pillarGroup.destroyEach();
    
      //deathso.play();
    
  }
  if (bombgroup.isTouching(bird)){
    
      score=score-5;
      
      pillarGroup.destroyEach();
    
      bombgroup.destroyEach();

      heartgroup.destroyEach();
    
     // bombso.play();
    
  }
  if (heartgroup.isTouching(bird)){
    
      score=score+10;
    
      heartgroup.destroyEach();

      pillarGroup.destroyEach();
    
      bombgroup.destroyEach();
    
  }
    if(bird.y>700||bird.y<-100){
      
       score=0;
      
   }
 }
  if(score<=0){
    
      bird.destroy();
    
      heartgroup.destroyEach();
    
      pillarGroup.destroyEach();
     
      bombgroup.destroyEach();
    
      textSize(25);
     
      text("Game Over!",300,300);

  }
        
      textSize(20);
      text("life:-"+score,500,100);

  if (keyDown("space")&&score<=0){
    
      gamestate=start;
    
      bird=createSprite(200,300,10,10);
      bird.addImage(birdImage);
      bird.scale=0.1; 
        
      score=10;
            
  }
 
    
        drawSprites();
  
}

function spawnpillar(){
  
  var rand=Math.round(random(1,2));
  
  if(frameCount%100===0){
     if(rand===1){
        pillar = createSprite(600,290,20,20);
      
        pillar.addImage("pilani",pillar1image);
  
        pillar.scale=6;
   
        pillar.velocityX=-7;
      
        pillar.lifetime=100;
      
        pillarGroup.add(pillar); 
    
        pillar.setCollider("rectangle",2,- 12,32,65) ;
       
       
    }
    if(rand===2){
      
        pillar1 = createSprite(600,500,20,20);
      
        pillar1.addImage("pil2ani",pillar2image);
      
        pillar1.scale=6
      
        pillar1.velocityX=-7;
      
        pillar1.lifetime=100;
      
        pillarGroup.add(pillar1);
      
        pillar1.setCollider("rectangle",2,- 15,32,70) ;
       
         

      
  }
 } 
}
function bombspawn(){
  
     var rand=Math.round(random(1,2));
  
     if (frameCount%350===0){
         if(rand===1){
           
            bomb=createSprite(600,0,20,20);
    
            bomb.addAnimation("bombani",bombanimation);
     
            bomb.y=Math.round(random(100,500));
     
            bomb.velocityX=-7;
    
            bomb.scale=2;
           
            bomb.lifetime=100;
    
            bomb.setCollider("circle",-7,10,17);
            

            bombgroup.add(bomb);
           
    }
     if (rand===2){
       
         lazer=createSprite(600,0,20,20);
       
         lazer.addImage("lazerani",lazerimage);
      
         lazer.y=Math.round(random(100,500));      
      
         lazer1=createSprite(600,0,20,20);   
         
         lazer1.addImage("lazerani1",lazerimage);
        
         lazer1.y=lazer.y-60;
        
         lazer1.x=lazer.x+30;
         
         lazer.velocityX=-7;
        
         lazer1.velocityX=-7;
        
         lazer.lifetime=100;
        
         lazer1.lifetime=100;
        
         lazer.setCollider("rectangle",0,-4,85,10);
        
         lazer1.setCollider("rectangle",0,-4,85,10);
         lazer.scale=1

       

        bombgroup.add(lazer);
        bombgroup.add(lazer1);
      
  }
 }
}

function spawnheart(){
  
    if (frameCount%750===0){
        heart=createSprite(600,600,20,20);
       
        heart.addImage("heartani",heartImage);
        
        heart.y=Math.round(random(500,100));
        
        heart.velocityX=-7;
    
        heart.scale=0.5;
    
        heart.lifetime=100;
    
        heart.setCollider("circle",0,0,40)
    
        heartgroup.add(heart);
    
  }
}

//268 line of code!! my best game till date(2/1/2021)....