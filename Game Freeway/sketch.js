function setup(){
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostrarAtor();
  mostrarCarro();
  movimentarCarro();
  movimentarAtor();
  loopCarros();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}