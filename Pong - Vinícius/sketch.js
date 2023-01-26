//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 21;
let raio = diametro /2;

//variáveis da velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//variáveis da Minha Raquete
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 8;
let hRaquete = 90;

//variáveis da Raquete do Oponente
let xRaquete2 = 585;
let yRaquete2 = 150;
let wRaquete2 = 8;
let hRaquete2 = 90;
let velocidadeYOponente;
let chanceDeErrar = 0;

let colidiu = false

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto= loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentarBolinha();
  verificarColisaoBolinhaComBordas();
  mostrarMinhaRaquete();
  movimentarMinhaRaquete();
  verficarColisaoRaquete();
  colisaoMinhaRaquete();
  mostrarRaqueteOponente();
  movimentarRaqueteOponente();
  //*¹movimentarRaqueteOponenteAI();
  colisaoRaqueteOponente();
  incluirPlacar();
  marcaPonto();
}

function mostrarBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function mostrarMinhaRaquete(){
  rect(xRaquete, yRaquete, wRaquete, hRaquete);
}

function mostrarRaqueteOponente(){
  rect(xRaquete2, yRaquete2, wRaquete2, hRaquete2);
}

function movimentarBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function movimentarMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentarRaqueteOponente(){
  if (keyIsDown(87)){
    yRaquete2 -= 10;
  }
  
  if (keyIsDown(83)){
    yRaquete2 += 10;
  }
}

//*¹A raquete poderá se movimentar aleatoriamente, sem que precise de dois jogadores.
function movimentarRaqueteOponenteAI(){
  velocidadeYOponente = yBolinha - yRaquete2 - wRaquete2/ 2 -30
  yRaquete2 += velocidadeYOponente
  velocidadeYOponente -= chanceDeErrar
  calculaChanceDeErrar()
}

function calculaChanceDeErrar() {
  if (pontosOponente *2> meusPontos) {
    chanceDeErrar += 1
    }
}

function verificarColisaoBolinhaComBordas(){
  if (xBolinha + raio > width || 
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1; 
  }
  if (yBolinha + raio > height || 
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1; 
  }
}

function verficarColisaoRaquete(){
  if (xBolinha - raio < xRaquete + wRaquete
     & yBolinha - raio < yRaquete + hRaquete
     & yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function colisaoMinhaRaquete(){
  colidiu = collideRectCircle(xRaquete, yRaquete, wRaquete, hRaquete, xBolinha, yBolinha, raio);
  
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function colisaoRaqueteOponente(){
  colidiu = collideRectCircle(xRaquete2, yRaquete2, wRaquete2, hRaquete2, xBolinha, yBolinha, raio);
  
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function incluirPlacar (){
  stroke(255);
  textAlign(CENTER);
  fill(color(255, 140, 0));
  rect(270, 10, 40, 20, 20);
  fill(255);
  text(meusPontos, 290, 26);
  fill(color(255, 140, 0));
  rect(330, 10, 40, 20, 20);
  fill(255);
  text(pontosOponente, 350, 26);
  text('x', 320, 26)
}

function marcaPonto(){
  if (xBolinha > 580){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 15){
    pontosOponente += 1
    ponto.play();
  }
}