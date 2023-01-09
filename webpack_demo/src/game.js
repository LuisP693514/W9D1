console.log("game is running");
const Asteroid = require("./asteroid.js");

function Game() {
  this.asteroid = new Asteroid(5);
}

Game.prototype.step = function () {};
Game.prototype.checkCollisions = function () {};
Game.prototype.draw = function (ctx) {};

module.exports = Game;
