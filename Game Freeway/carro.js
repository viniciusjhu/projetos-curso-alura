//Variáveis do Carros
let xCarros = [600, 600, 600];
let yCarros = [40, 96, 150];
let wCarros = 50;
let hCarros = 40;
let velocidadeCarros = [2, 2.5, 3.5];

function mostrarCarro(){
    for (let i = 0; i < imagemCarros.length; i = i + 1){
        image(imagemCarros[i], xCarros[i], yCarros[i], wCarros, hCarros);
    }
  }
  
  function movimentarCarro(){
    for (let i = 0; i < imagemCarros.length; i = i + 1){
        xCarros[i] -= velocidadeCarros[i];
    }
  }

  function loopCarros(){
    for (let i = 0; i < imagemCarros.length; i = i + 1){
        if (passouTodaATela(xCarros[i])){
            xCarros[i] = 600;
    }
    }
  }

  function passouTodaATela(xCarros){
    return xCarros < -50;
  }