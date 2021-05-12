const rectHeight = 247;
const rectWidth = 140;
let images = [];
const rectangles = [];
let set = new Set();

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
  dx = random(100, 200);
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

  for (let i = 0; i < images.length + 1; i++) {
    y = y + rectHeight;
    rectangles.push(new Rectangle(y));
  }
  imageMode(CENTER);
  //  blendMode(DARKEST);
  // images.forEach(element => console.log(element));
  // images.map(pic => {
  //   console.log(pic);
  // });
}

function draw() {
  background(230, 190, 250);

  for (let i = 0; i < rectangles.length; i++) {
    set.add(images[i]);

    rectangles[i].display();
    rectangles[i].move();
  }
}
