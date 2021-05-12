class Rectangle {
  constructor(y) {
    this.x = width / 2;
    this.y = y;
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;
    this.ySpeed = 4;
    //   this.set = new Set(images);
  }

  // shuffle(pics) {
  //   this.set.add(random(pics));
  // }

  display() {
    for (let pic of set) {
      // console.log(pic);
      image(pic, width / 2, this.y, this.rectWidth, this.rectHeight);
    }
  }
  move() {
    // if (this.y < -140) {
    //   this.y = height + rectHeight * 2;
    // }
    // if (rectangles[rectangles.length - 1] < -140) {
    //   this.y = height + rectHeight * 2;
    // }
    this.y -= this.ySpeed;
  }
}
