console.log("Index is working");

const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const ctx = require("./game_view.js");
const MovingObject = require("./moving_object.js");
const game = new Game();
console.log(game);

window.Game = Game;

window.MovingObject = MovingObject;
window.Asteroid = Asteroid
