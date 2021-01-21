var jerry,jerry2,jerry3,jerry4;
var tom,tom2,tom3,tom4;
var backgroundImg;
function preload() {
    //load the images here
    jerry=loadImage("jerryOne.png");
    jerry2=loadImage("jerryTwo.png");
    jerry3=loadImage("jerryThree.png");
    jerry4=loadImage("jerryFour.png");
    tom=loadImage("tomOne.png");
    tom2=loadImage("tomTwo.png");
    tom3=loadImage("tomThree.png");
    tom4=loadImage("tomFour.png");
    backgroundImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry=createSprite();
    jerry2=createSprite();
    jerry3=createSprite();
    jerry4=createSprite();
    tom=createSprite();
    tom2=createSprite();
    tom3=createSprite();
    tom4=createSprite();

}

function draw() {
    backgroundImg();
    text(mouseX+','+mouseY,10,45,);
    if(tom.X-jerry.X<(tom.Width-jerry.Width)/2)
    
    //Write condition here to evalute if tom and jerry collide


    drawSprites();
}


function keyPressed(){
    if(keycode===LEFT_ARROW){
        tom.VelocityX=-10;
        tom.addAnimation("tomRunning",tom2);
        tom.ChangeAnimation("tomRunning");
    }


  //For moving and changing animation write code here


}
