class Rectangle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;
    this.ySpeed = 3;
    this.xSpeed = 0.009;
    this.modeAr = [LIGHTEST, DARKEST, DIFFERENCE, BLEND];
  }

  display(pic) {
    image(
      pic,
      this.x,
      this.y,
      this.rectWidth,
      this.rectHeight
      // 50,
      // 90,
      // dx,
      // 150
    );
  }

  move() {
    this.y -= this.ySpeed;
    // xPos += this.xSpeed;
    // xPos1 += this.xSpeed;
    // xPos2 += this.xSpeed;
    if (this.y < -280) {
      this.y = height + this.rectHeight * 1.8;
    }
  }

  changeColor() {
    colorR = colorR + 0.0003;
    colorG = colorG + 0.0004;
    colorB = colorB + 0.0005;
    r = map(this.y, height + this.rectHeight, -140, noise(colorR) * 255, 255);
    g = map(this.y, height + this.rectHeight, -140, noise(colorG) * 255, 255);
    b = map(this.y, height + this.rectHeight, -140, noise(colorB) * 255, 255);
  }

  randomMode() {
    let when = map(this.y, height, -140, this.modeAr.length, 0, 3);
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
  fractalize(pic, x, y, sX, sY) {
    let n = 0.5;

    // image(pic, x, y, sX, sY);
    noFill();
    rect(x, y, sX, sY);
    // 50,
    // 90,
    // dx,
    // 150

    if (sX > 5) {
      this.fractalize(pic, x + sX * n, y - sY * n, sX * n, sY * n);

      this.fractalize(pic, x - sX * n, y + sY * n, sX * n, sY * n);
    }
  }
}
