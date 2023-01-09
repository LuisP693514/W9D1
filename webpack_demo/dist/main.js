/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction Asteroid(size, pos) {\n  this.size = size;\n  this.pos = pos;\n  this.COLOR = \"grey\";\n  this.RADIUS = \"100\";\n  this.object = new MovingObject(\n    this.pos,\n    Util.randomVec(size),\n    this.RADIUS,\n    this.COLOR\n  );\n}  \n\nfunction Surrogate() {}\n\nSurrogate.prototype = MovingObject.prototype;\nAsteroid.prototype = new Surrogate();\nAsteroid.prototype.constructor = Asteroid;\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack://webpack_demo/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"game is running\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nfunction Game() {\n  this.asteroid = new Asteroid(5);\n}\n\nGame.prototype.step = function () {};\nGame.prototype.checkCollisions = function () {};\nGame.prototype.draw = function (ctx) {};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack://webpack_demo/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nconst canvasEl = document.getElementById(\"canvas\");\n\ncanvasEl.width = window.innerWidth;\ncanvasEl.height = window.innerHeight;\n\nconst ctx = canvasEl.getContext(\"2d\");\n\nsetInterval(Game.prototype.step, 10);\n\nmodule.exports = ctx;\n\n\n//# sourceURL=webpack://webpack_demo/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"Index is working\");\n\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst ctx = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst game = new Game();\nconsole.log(game);\n\nwindow.Game = Game;\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid\n\n\n//# sourceURL=webpack://webpack_demo/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nfunction MovingObject(pos, vel, radius, color) {\n  this.pos = pos;\n  this.vel = vel;\n  this.radius = radius;\n  this.color = color;\n}\n\nMovingObject.prototype.move = function () {};\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);\n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\n\nMovingObject.prototype.isCollidedWith = function (otherMovingObject) {};\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack://webpack_demo/./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("function distance(arr1, arr2) {\n  const x1 = arr1[0];\n  const x2 = arr1[1];\n  const y1 = arr2[0];\n  const y2 = arr2[1];\n\n  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);\n}\n\nconst Util = {\n  randomVec: function (length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale: function (vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack://webpack_demo/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;