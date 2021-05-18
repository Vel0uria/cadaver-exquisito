const rectHeight = 213;
const rectWidth = 130;
let images = [];
let images_1 = [];
let images_2 = [];
let images_3 = [];
const rectangles = [];
const rectangles_1 = [];
const rectangles_2 = [];
const rectangles_3 = [];
let colorR = 0.0;
let colorG = 0.0;
let colorB = 0.0;
let r = 80;
let g = 80;
let b = 50;

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
  mejores = loadImage("assets/mejores.jpg");
  imagenes = loadImage("assets/imagenes.jpg");
  personalidad = loadImage("assets/personalidad.jpg");
  cerebral = loadImage("assets/cerebral.jpeg");
  clinic = loadImage("assets/clinic.jpg");
  specialized = loadImage("assets/specialized.jpeg");
  trabajo = loadImage("assets/trabajo.jpg");
  ambas = loadImage("assets/ambas.png");
  probabilidad = loadImage("assets/probabilidad.jpg");
  conceptos = loadImage("assets/conceptos.png");
  fertirriego = loadImage("assets/fertirriego.jpg");
  transferencia = loadImage("assets/transferencia.png");
  calor = loadImage("assets/calor.jpg");
  icono = loadImage("assets/icono.png");
  iglesia = loadImage("assets/iglesia.jpg");
}

function setup() {
  createCanvas(1060, 1920);

  y = 0;

  xPos = rectWidth;
  xPos1 = xPos + rectWidth * 1.98;
  xPos2 = xPos1 + rectWidth * 1.98;
  xPos3 = xPos2 + rectWidth * 1.98;

  images = [exquisito, pollo, palabras, otras, vacuna, una, modo, gratis, peru];

  images_1 = [
    abismo,
    tristeza,
    aware,
    app,
    gratis,
    codigo,
    empresas,
    internet,
    desventajas,
  ];

  images_2 = [
    checklist,
    complete,
    programas,
    mejores,
    imagenes,
    personalidad,
    cerebral,
    clinic,
    specialized,
  ];
  images_3 = [
    trabajo,
    ambas,
    probabilidad,
    conceptos,
    fertirriego,
    transferencia,
    calor,
    icono,
    iglesia,
  ];
  for (let i = 0; i < images.length; i++) {
    y = y + rectHeight;

    rectangles.push(new Rectangle(xPos, y - rectHeight));
    rectangles_1.push(new Rectangle(xPos1, y - rectHeight));
    rectangles_2.push(new Rectangle(xPos2, y - rectHeight));
    rectangles_3.push(new Rectangle(xPos3, y - rectHeight));
  }
  imageMode(CENTER);
  rectMode(CENTER);
  frameRate(30);

  // createLoop({ duration: 8, gif: true });
}

function draw() {
  background(b);

  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].fractalize(
      images,
      xPos,
      rectangles[i].y,
      rectWidth,
      rectHeight
    );
  }
  for (let i = 0; i < rectangles_1.length; i++) {
    rectangles_1[i].fractalize(
      images_1,
      xPos1,
      rectangles_1[i].y,
      rectWidth,
      rectHeight
    );
  }
  for (let i = 0; i < rectangles_2.length; i++) {
    rectangles_2[i].fractalize(
      images_2,
      xPos2,
      rectangles_2[i].y,
      rectWidth,
      rectHeight
    );
  }
  for (let i = 0; i < rectangles_3.length; i++) {
    rectangles_3[i].fractalize(
      images_3,
      xPos3,
      rectangles_3[i].y,
      rectWidth,
      rectHeight
    );
  }
}
