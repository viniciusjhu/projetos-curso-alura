//Variáveis do Ator
let xAtor = 100
let yAtor = 366
let wAtor = 30
let hAtor = 30

function mostrarAtor(){
    image(imagemDoAtor, xAtor, yAtor, wAtor, hAtor);
  }

  function movimentarAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      yAtor += 3;
    }
  }