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

  fractalize(array, x, y, sX, sY) {
    let n = 0.5;
    colorR = colorR + 0.0001;
    colorG = colorG + 0.0002;
    colorB = colorB + 0.00001;
    let pos = map(sX, 5, 94, sY, 4, 154);
    let pic = map(
      pos,
      4,
      46,
      noise(this.pic1) * array.length - 1,
      array.length - 1
    );
    if (pic < array.length) {
      this.pic1 += 0.0001;
    }
    r = map(pos, 4, 46, noise(colorR) * 255, 255);
    g = map(pos, 4, 46, noise(colorG) * 255, 255);
    b = map(pos, 4, 46, noise(colorB) * 255, 255);
    //stroke(b);
    noStroke();
    fill(r, g);
    rect(x + this.rectWidth / 4, y + this.rectHeight / 6, sX, sY);
    //  image(array[Math.floor(pic)], x, y, sX, sY);

    if (sX > 5) {
      this.fractalize(array, x + sX * n, y - sY * n, sX * n, sY * n);

      this.fractalize(array, x - sX * n, y + sY * n, sX * n, sY * n);
    }
  }
}
