//Variáveis do Ator
let xAtor = 85
let yAtor = 366
let wAtor = 30
let hAtor = 30
let colisao = false
let meusPontos = 0

function mostrarAtor(){
    image(imagemDoAtor, xAtor, yAtor, wAtor, hAtor);
  }

  function movimentarAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      if (podeSeMover ()){
        yAtor += 3;
      }
    }
  }
  
  function podeSeMover(){
    return yAtor < 366;
  }

  function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], wCarros, hCarros, xAtor, yAtor, 15)
      if (colisao){
        voltaAtorInicio();
        somDaColisao.play();
        if (pontosMaiorZero()){
          meusPontos -= 1;
        }
      }
    }
  }

  function voltaAtorInicio(){
    yAtor = 366;
  }

  function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60));
    text(meusPontos, width/5, 27);
  }

  function marcaPonto(){
    if (yAtor < 15){
      meusPontos += 1;
      somDoPonto.play();
      voltaAtorInicio();
    }
  }

  function pontosMaiorZero(){
    return meusPontos > 0
  }