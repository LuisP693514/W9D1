console.log("game is running");
const Asteroid = require('./asteroid.js');

class Game {
    constructor(){
        this.asteroid = new Asteroid(5);
    }
}

module.exports = Game;