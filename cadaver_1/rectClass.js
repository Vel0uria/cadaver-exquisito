class Rectangles {
  constructor(y) {
    this.x = width / 2;
    this.y = y;
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;
    this.ySpeed = 4;
    this.set = new Set();
  }

  shuffle(pics) {
    this.set.add(random(pics));

    // if (set.size !== pics.length) {
    //   this.shuffle(pics);
    // } else {

    this.set.forEach(pic => {
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
    });
    //}
    //}
  }

  display() {
    console.log(this.shuffle(this.images));
    // this.shuffle(this.images);

    this.set.forEach(pic => {
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
    });
  }
  move() {
    this.shuffle(images);
    this.y -= this.ySpeed;
    if (this.y < -140) {
      this.y = height + rectHeight * 2;
    }
  }
}
