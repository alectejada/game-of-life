var lifeCharm = require('./life-charms.js');
var GameLife = require('./game-of-life.js');
var Grid = require('./grid-maker.js');

var width  = process.argv[2] || 30;
var height = process.argv[3] || 10;

var randomGrid = Grid.make(width, height);
var life = GameLife.createGame(randomGrid);
lifeCharm.render(randomGrid);

setInterval( function () {
    lifeCharm.render(life.cycle());
}, 100);


