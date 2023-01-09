const Game = require("./game.js");

const canvasEl = document.getElementById("canvas");

canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

const ctx = canvasEl.getContext("2d");

setInterval(Game.prototype.step, 10);

module.exports = ctx;
