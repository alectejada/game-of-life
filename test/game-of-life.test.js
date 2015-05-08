var GameLife = require('../game-of-life.js');
var chai = require('chai');
var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); 

describe('Game of Life', function () {
    
    it('Any live cell with fewer than two neighbors dies', 
    function () {
        var life = GameLife.createGame([
            [false, false, false, false],
            [true, false, true, false],
            [false, false, false, false]
        ]);

        life.cycle();

        expect(life.grid).to.eql([
            [false, false,false, false],
            [false, false,false, false],
            [false, false, false, false]
        ]);
    });

    it('Any live cell with more than three live neighbours dies', function () {
        var life =GameLife.createGame([
            [false, true, true, true],
            [false, false, true, true]
        ]);

        life.cycle();

        expect(life.grid).to.eql([
            [false, true, false, true],
            [false, true, false, true]
        ]);
    }); 

    it('Any live cell with two live neighbours lives on',
    function () {
        var life =GameLife.createGame([
            [true, true,false, false],
            [true, false,true, false]
        ]);

        life.cycle();

        expect(life.grid).to.eql([
            [true, true, false, false],
            [true, false, false, false]
        ]);
    });

    it('Any live cell with 3 live neighbours lives on',
    function () {
        var life =GameLife.createGame([
            [true, true, false, false],
            [true, true, false, false]
        ]);

        life.cycle();

        expect(life.grid).to.eql([
            [true, true, false, false],
            [true, true, false, false]
        ]);
    });

    it('Any dead cell with exactly three live neighbours becomes a live cell', function () {
        var life =GameLife.createGame([
            [false, true, false, false],
            [true, true, false, false]
        ]);

        life.cycle();

        expect(life.grid).to.eql([
            [true, true, false, false],
            [true, true, false, false]
        ]);
    });
});
