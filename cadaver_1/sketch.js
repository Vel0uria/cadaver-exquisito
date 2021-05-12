const rectHeight = 247;
const rectWidth = 140;
let images = [];
const rectangles = [];
let set;
let colorR = 0.0;
let colorG = 0.0;
let colorB = 0.0;
let r = 150;
let g = 150;
let b = 150;

function preload() {
  exquisito = loadImage("assets/exquisito.jpg");
  pollo = loadImage("assets/pollo.jpg");
  palabras = loadImage("assets/palabras.jpg");
  otras = loadImage("assets/otras.jpg");
  vacuna = loadImage("assets/vacuna.jpg");
  una = loadImage("assets/una.jpg");
  modo = loadImage("assets/modo.jpg");
  gratis = loadImage("assets/gratis.jpg");
  peru = loadImage("assets/peru.jpg");
  abismo = loadImage("assets/abismo.jpg");
}

function setup() {
  createCanvas(1920, 1080);

  y = height;
  dx = random(200, 500);
  dy = random(150, 300);
  images = [
    exquisito,
    pollo,
    palabras,
    otras,
    vacuna,
    una,
    modo,
    gratis,
    peru,
    abismo,
  ];
  set = new Set(images);
  for (let i = 0; i < images.length; i++) {
    y = y + rectHeight;
    rectangles.push(new Rectangle(y));
  }
  imageMode(CENTER);
  blendMode(DIFFERENCE);
  //
}

function draw() {
  background(r, g, b);

  // if (r < 50) {
  //   blendMode(LIGHTEST);
  // } else {
  //   blendMode(BURN);
  // }
  colorR = colorR + 0.001;
  colorG = colorG + 0.002;
  colorB = colorB + 0.003;
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].display(images[i]);
    rectangles[i].move();
    rectangles[i].changeColor();
  }
}
