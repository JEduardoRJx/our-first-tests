const chai = require('chai');
const expect = chai.expect;

const Box = require('../src/Box.js');

describe('Box', function() {

  it('should equal true', function() {
    expect(true).to.equal(true);
  })

  it('should have a default height and a width', function() {
    var box = new Box();

    expect(box.height).to.equal(100);
    expect(box.width).to.equal(100);
  })

  it('should have take a height and a width as arguments', function() {
    var box = new Box(50, 40);

    expect(box.height).to.equal(50);
    expect(box.width).to.equal(40);
  })

  it('should calculate its area', function() {
    var box = new Box(30, 30);

    expect(box.area()).to.equal(900);
  })

  // it('should be able to increase the width by a given value', function() {
  //   var box = new Box();

  //   expect(box.increaseWidth(10)).to.equal(110);
  //   expect(box.width).to.equal(110)
  // })

  // it('should be able to increase height by a given value', function() {
  //   var box = new Box();
  //   expect(box.increaseHeight(10)).to.equal(110)
  //   expect(box.height).to.equal(110)
  // })

  it('should increment either width or height', function() {
    var box = new Box();

    box.increment(10, 'width');
    expect(box.width).to.equal(110);
    box.increment(10, 'height');
    expect(box.height).to.equal(110);
  })



})