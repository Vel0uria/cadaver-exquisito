class Rectangle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;
    this.ySpeed = 3;
    this.modeAr = [LIGHTEST, DARKEST, DIFFERENCE, BLEND];
  }

  display(pic) {
    image(
      pic,
      this.x,
      this.y,
      this.rectWidth,
      this.rectHeight,
      50,
      90,
      dx,
      150
    );
  }

  move() {
    this.y -= this.ySpeed;
    if (this.y < -140) {
      this.y = height + this.rectHeight;
    }
  }

  changeColor() {
    colorR = colorR + 0.0001;
    colorG = colorG + 0.0002;
    colorB = colorB + 0.0003;
    r = map(this.y, height - this.rectHeight, -140, noise(colorR) * 255, 255);
    g = map(this.y, height - this.rectHeight, -140, noise(colorG) * 255, 255);
    b = map(this.y, height - this.rectHeight, -140, noise(colorB) * 255, 255);
  }

  randomMode() {
    let when = map(
      this.y,
      height - this.rectHeight,
      -1000,
      this.modeAr.length,
      0,
      3
    );
    if (this.y <= when && this.y > -1) {
      blendMode(random(this.modeAr));
      dx = random(200, 500);
    }

    //  for (let i = 0; i < when.length; i++) {
    //    if(this.y == i){
    // blendMode();
    //  }
    //
    // }
  }
}
