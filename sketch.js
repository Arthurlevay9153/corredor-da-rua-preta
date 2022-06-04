
//variaveis das coisas do jogo
var piso  
var pisoIMAGE
var corredor
var corredorIMAGE

function preload(){ 

  //load da imagem do piso
  pisoIMAGE = loadImage("path.png");

  //load da imagem do corredor
  corredorIMAGE = loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);

  piso = createSprite(200,21);
  piso.addImage(pisoIMAGE);
  corredor = createSprite(205,330);
  corredor.addAnimation("animação de correr",corredorIMAGE);
  corredor.scale = 0.07;
  //crie sprite aqui
}

function draw() {
  background(0);

  drawSprites();

  piso.velocityY = 11

  if(piso.y>400){
  piso.y = 21;
  }
}
