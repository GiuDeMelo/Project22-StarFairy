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

   //background
    bg = addImage(bgImg);

   //sound
    sound = addSound(music);

   //fairy createSprite
    fairy = createSprite(600,30);
	fairy.addAnimation(fairyImg);

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
    
    background(bg)
    song.play();

    if(star.y > 470 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody,true);

    }

    drawSprites();
}
