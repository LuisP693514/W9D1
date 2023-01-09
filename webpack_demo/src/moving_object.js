const Util = require("./utils.js");
function MovingObject(pos, vel, radius, color) {
  this.pos = pos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
}

MovingObject.prototype.move = function () {};

MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.isCollidedWith = function (otherMovingObject) {};

module.exports = MovingObject;
