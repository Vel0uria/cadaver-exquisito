const rectHeight = 247;
const rectWidth = 140;
let images = [];
let images_1 = [];
let images_2 = [];
const rectangles = [];
const rectangles_1 = [];
const rectangles_2 = [];
let set;
let colorR = 0.0;
let colorG = 0.0;
let colorB = 0.0;
let r = 70;
let g = 70;
let b = 70;
let tristeza;
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
  tristeza = loadImage("assets/tristeza.jpg");
  aware = loadImage("assets/aware.jpeg");
  app = loadImage("assets/app.png");
  descargar = loadImage("assets/descargar.png");
  codigo = loadImage("assets/codigo.png");
  empresas = loadImage("assets/empresas.jpg");
  internet = loadImage("assets/internet.png");
  desventajas = loadImage("assets/desventajas.jpg");
  checklist = loadImage("assets/checklist.jpg");
  complete = loadImage("assets/complete.jpg");
  programas = loadImage("assets/programas.png");
}

function setup() {
  createCanvas(820, 1080);

  y = height;
  xPos = width - rectWidth;
  xPos1 = rectWidth * 3;
  xPos2 = rectWidth;
  dx = 390;
  dy = random(150, 300);
  images = [exquisito, pollo, palabras, otras, vacuna, una, modo];

  images_1 = [gratis, peru, abismo, tristeza, aware, app, descargar];

  images_2 = [
    codigo,
    empresas,
    internet,
    desventajas,
    checklist,
    complete,
    programas,
  ];

  for (let i = 0; i < images.length; i++) {
    y = y + rectHeight;

    rectangles.push(new Rectangle(xPos, y));
    rectangles_1.push(new Rectangle(xPos1, y + 480));
    rectangles_2.push(new Rectangle(xPos2, y + 960));
  }
  imageMode(CENTER);
  blendMode(DIFFERENCE);
}

function draw() {
  background(r, g, b);

  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].fractalize(
      images[i],
      xPos,
      rectangles[i].y + 75,
      rectWidth,
      rectHeight
    );
    // rectangles[i].display(images[i]);
    rectangles[i].move();
    rectangles[i].changeColor();
    // rectangles[i].randomMode();
  }
  for (let i = 0; i < rectangles_1.length; i++) {
    //rectangles_1[i].display(images_1[i]);

    rectangles_1[i].fractalize(
      images_1[i],
      xPos1,
      rectangles_1[i].y + 75,
      rectWidth,
      rectHeight
    );
    //  if (rectangles[rectangles.length - 1].y < height || rectangles[0].y < -1) {
    rectangles_1[i].move();
    //}
  }
  for (let i = 0; i < rectangles_2.length; i++) {
    // rectangles_2[i].display(images_2[i]);

    rectangles_2[i].fractalize(
      images_2[i],
      xPos2,
      rectangles_2[i].y + 75,
      rectWidth,
      rectHeight
    );
    // if (
    //   rectangles_1[rectangles_1.length - 1].y < height ||
    //   rectangles_1[0].y < -1
    // ) {
    rectangles_2[i].move();
    // }
  }
}
