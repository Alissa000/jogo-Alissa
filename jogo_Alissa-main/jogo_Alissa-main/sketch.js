var bordas, solo, soloInvisivel;
var imagemDoSolo;
var fundo,sol, solImg;
var meninaImg;
var menina;

var JOGAR = 1;
var ENCERRAR = 0;
var estadoJogo= JOGAR;

function preload(){
  
  fundo = loadImage('fundocor.png');
  solImg = loadImage('solcor.png');
  meninaImg = loadAnimation('1.png','2.png','4.png'); 

  
  
  //carregar imagem do solo
  imagemDoSolo = loadImage("solocor.png");
  
  //carregar imagem da nuvem

  
  
 
  
  
}

function setup(){
  
  //cria a tela
  createCanvas(900,400);
  
  menina = createSprite(100,270);
  menina.addAnimation("running",meninaImg);
  menina.scale =0.5;

  sol = createSprite(50,40);
  sol.addImage('sol', solImg);
  sol.scale = 0.3;
  
  //cria solo
  solo = createSprite(200,380,400,20);
  //adiciona imagem de solo
  solo.addImage("solo", imagemDoSolo)
  solo.x = width/2;
  solo.scale = 0.6;
  
  //cria solo invisível
  soloInvisivel = createSprite(300,height-10,600,10);
  soloInvisivel.visible = false;
  
  //cria solo invisível
  soloInvisivel = createSprite(300,height-10,600,10);
  soloInvisivel.visible = false;
  
  
  
  
  

}

function draw(){
  //fundo branco
  background(fundo);
  
  solo.velocityX = -8;
  
  
  
 
  
  
  //faz o solo voltar ao centro se metade dele sair da tela
  if (solo.x<0){
     solo.x=width/2;
  }
    
  //desenha os sprites  
  drawSprites();
    

    
   
    
  
}

