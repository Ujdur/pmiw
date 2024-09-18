//Ujdur, Maria Sol
//legajo 84288/2
//comision 4
//tp1
//Link a YouTube: https://youtu.be/NMyzgSjm7u4

let imagen;

let NumCuad = 15;            // cantidad de cuadrados
let CuadChico = 10;          // cuadrado mas chico
let CuadGrande = 250;        // cuadrado mas grande

let Xcuad = [];              // x de los cuadrados
let Ycuad = [];              // y de los cuadrados
let VelCuad = [];            // velocidad

function preload() {
  imagen = loadImage("images.jpg");
}

function setup() {
  createCanvas(800, 400);
  imagen.resize(400, 400);
  iniciarCuadrados();
  stroke(40);
}

function draw() {
  background(255);

  // patron de cuadrados
  for (let i = 0; i < width / 10; i++) {
    for (let j = 0; j < height / 10; j++) {
      if ((i + j) % 2 === 0) {
        fill(255); // blancos
      } else {
        fill(0); // negros
      }
      rect(i * 10, j * 10, 10, 10);
    }
  }

  fill(255);
  quad(430, 10, 430, 40, 740, 40, 740, 10);
  quad(400, 345, 400, 385, 799, 384, 799, 344);

  textSize(15);
  strokeWeight(1);
  fill(0);
  text("Mueve el mouse para ver la ilusión", 460, 30);
  text("Haz click para que cambien las dimensiones", 450, 370);

  strokeWeight(3);
  for (let i = NumCuad - 1; i >= 0; i--) {
    let size = calcularTamano(i);
    let MoverX = mouseX + map(i, 0, NumCuad, 50, 50);
    let MoverY = mouseY + map(i, 0, NumCuad, 50, 50);
    Xcuad[i] = lerp(Xcuad[i], MoverX, VelCuad[i]); // movimiento suave x
    Ycuad[i] = lerp(Ycuad[i], MoverY, VelCuad[i]); // mov suave y

    if (i % 2 === 0) {
      fill(40); // cuadrados negros
    } else {
      fill(255); // cuadrados blancos
    }

    rectMode(CENTER); // cuadrado centrado
    rect(Xcuad[i], Ycuad[i], size, size);  // dibuja los cuadrados
  }

  image(imagen, 0, 0);
}

function iniciarCuadrados() {
  Xcuad = new Array(NumCuad).fill(600);
  Ycuad = new Array(NumCuad).fill(200);
  VelCuad = new Array(NumCuad).fill(0).map((_, i) => map(i, 0, NumCuad - 1, 0.02, 0.1));
}

function calcularTamano(i) {
  return CuadChico + i * (CuadGrande - CuadChico) / (NumCuad - 1);
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    iniciarCuadrados(); // reinicia el estado de los cuadrados
  }
}

function mousePressed() {
  NumCuad = int(random(5, 20)); // cambia la cantidad de cuadrados
  iniciarCuadrados(); // reincializa las variables con la nueva cantidad de cuadrados
  console.log(mouseX, mouseY);
}
