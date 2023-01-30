//Variáveis das Imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;

//Variáveis dos Sons
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
    imagemDaEstrada = loadImage("Imagens/estrada.png");
    imagemDoAtor = loadImage("Imagens/ator-1.png");
    imagemDoCarro1 = loadImage("Imagens/carro-1.png");
    imagemDoCarro2 = loadImage("Imagens/carro-2.png");
    imagemDoCarro3 = loadImage("Imagens/carro-3.png");
    imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3]

    somDaTrilha = loadSound("sons/trilha.mp3");
    somDaColisao = loadSound("sons/colidiu.mp3");
    somDoPonto = loadSound("sons/pontos.wav");
  }