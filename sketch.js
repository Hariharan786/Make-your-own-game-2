var warrior;
var ground;
var enemy,enemyGroup;


function setup(){
    createCanvas(windowWidth,windowHeight);
    warrior = createSprite(windowWidth/2-200,windowHeight-200,50,40);
    ground = createSprite(windowWidth/2,windowHeight-50,windowWidth,50);
    ground.visible = false;
    
    
    
    
    
    
}

function draw (){
 background("green");
    if(keyDown("UP_ARROW")){
        warrior.y= warrior.y-2;
    }

    if(keyDown("DOWN_ARROW")){
        warrior.y= warrior.y+2;
    }

    

    warrior.collide(ground);

    enmeyspawn();

 drawSprites();


}

function enmeyspawn(){
    if(frameCount%30===0){
        enemy = createSprite(windowWidth+20,Math.round(random(windowHeight-1200,windowHeight-10)),50,40);
        enemy.velocityX=-3;
    }
};