const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

function Asteroid(size, pos) {
  this.size = size;
  this.pos = pos;
  this.color = "grey";
  this.radius = 50 * size;
  this.vel = Util.randomVec(size);
}

function Surrogate() {}

Surrogate.prototype = MovingObject.prototype;
Asteroid.prototype = new Surrogate();
Asteroid.prototype.constructor = Asteroid;

module.exports = Asteroid;
