let xBolinha = 300;
let yBolinha = 200;
let diametro = 16;
let raio = diametro / 2;


// velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 150;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 190;

function setup() {
    createCanvas(800, 500);
  }
  
  function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaBatidaBorda();
    mostraRaquete();

}

function mostraBolinha(){
    circle(xBolinha, yBolinha,diametro);
}

function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaBatidaBorda(){
    if (xBolinha + raio > width || xBolinha - raio < 0 ){
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0){
        velocidadeYBolinha *= -1;
    }   
}

function mostraRaquete(){
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}