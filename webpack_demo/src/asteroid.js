const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

function Asteroid(size, pos) {
  this.size = size;
  this.pos = pos;
  this.COLOR = "grey";
  this.RADIUS = "100";
  this.object = new MovingObject(
    this.pos,
    Util.randomVec(size),
    this.RADIUS,
    this.COLOR
  );
}  

function Surrogate() {}

Surrogate.prototype = MovingObject.prototype;
Asteroid.prototype = new Surrogate();
Asteroid.prototype.constructor = Asteroid;

module.exports = Asteroid;
