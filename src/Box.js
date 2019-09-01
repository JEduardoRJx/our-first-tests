class Box {
  constructor(height, width) {
    this.height = height || 100;
    this.width = width || 100;
  }

  area() {
    return this.height * this.width;
  }

  // increaseWidth(increment) {
  //   return this.width += increment;
  // }

  // increaseHeight(increment) {
  //   return this.height += increment;
  // }

  increment(incrementValue, side) {
    return this[side] += incrementValue;
  }
}

module.exports = Box;