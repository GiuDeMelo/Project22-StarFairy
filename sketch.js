//Nada aparece na tela

var star, starImg;
var starBody;
var fairy, fairyImg;

var bg, bgImg;
var sound, music;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

////////////////////////////////////////////////
function preload()
{
    starImg = loadImage("images/star.png");
    fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");

    bgImg = loadImage("images/starNight.png");
    music = loadSound("sound/JoyMusic.mp3");

}

////////////////////////////////////////////////
function setup() {
    createCanvas(800, 750);

   //fairy createSprite
    fairy = createSprite(120,500);
	fairy.addAnimation("fada voando",fairyImg);
    fairy.scale = 0.2;
    //->lembrar de botar nome no addAnimation

   //star createSprite
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

   //add to world
    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
////////////////////////////////////////////////
function draw(){
    
    background(bgImg)
    music.play();

    star.x = starBody.position.x;
    star.y = starBody.position.y;

    if(star.y > 470 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody,true);
    }

    drawSprites();
    }

    function keyPressed(){
        if(keyCode === RIGHT_ARROW){
            fairy.x = fairy.x + 20;
        }

        if(keyCode === LEFT_ARROW){
            fairy.x = fairy.x - 20;
        }

        if(keyCode === UP_ARROW){
            fairy.y = fairy.y - 20;
        }
        
        if(keyCode === DOWN_ARROW){
            Matter.Body.setStatic(starBody,false);
        }
}
