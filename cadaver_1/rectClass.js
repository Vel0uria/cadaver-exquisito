class Rectangle {
  constructor(y) {
    this.x = width / 2;
    this.y = y;
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;
    this.ySpeed = 4;
  }

  display(pic) {
    // tint(g, r, b);
    //  blendMode(DIFFERENCE);

    image(
      pic,
      width / 2,
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
    if (this.y < -1000) {
      this.y = height;
    }
  }

  changeColor() {
    r = map(this.y, height - this.rectHeight, -1000, noise(colorR) * 255, 255);
    g = map(this.y, height - this.rectHeight, -1000, noise(colorG) * 255, 255);
    b = map(this.y, height - this.rectHeight, -1000, noise(colorB) * 255, 255);
  }
}
