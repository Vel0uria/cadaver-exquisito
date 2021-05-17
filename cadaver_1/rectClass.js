class Rectangle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;
    this.ySpeed = 3;
    this.xSpeed = 0.009;

    this.pic1 = 0.0;
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

    if (this.y < -280) {
      this.y = height + this.rectHeight * 1.8;
    }
  }

  changeColor() {
    colorR = colorR + 0.0001;
    colorG = colorG + 0.0002;
    colorB = colorB + 0.0003;
    r = map(this.y, height - rectHeight, -690, noise(colorR) * 255, 255);
    g = map(this.y, height - rectHeight, -690, noise(colorG) * 255, 255);
    b = map(this.y, height - rectHeight, -690, noise(colorB) * 255, 255);
  }

  fractalize(x, y, sX, sY) {
    let n = 0.5;
    let pos = map(sX, 5, 94, sY, 4, 154);
    let pic = map(
      pos,
      4,
      46,
      noise(this.pic1) * images_1.length - 1,
      images_1.length - 1
    );
    if (pic < images_1.length) {
      this.pic1 = this.pic1 + 0.0001;
    }

    image(images_1[Math.floor(pic)], x, y, sX, sY);
    //image(images_1[0], x, y, sX, sY);

    if (sX > 5) {
      this.fractalize(x + sX * n, y - sY * n, sX * n, sY * n);

      this.fractalize(x - sX * n, y + sY * n, sX * n, sY * n);
    }
  }
}
