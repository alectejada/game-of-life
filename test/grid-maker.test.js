var GridMaker = require('../grid-maker.js');
var chai = require('chai');
var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); 

describe('Grid maker', function () {

    it('Creates an Array', function () {
        var grid = GridMaker.make(1,1);
        expect(grid).to.be.a('array');
    });

    it('Creates a Grid from rows and columns',function () {
        var grid = GridMaker.make(5,4);
        expect(grid.length).to.equal(4);
        expect(grid[0].length).to.equal(5);
    });

});
