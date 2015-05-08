var charms = require('./life-charms.js');

module.exports = {
   createGame : function (grid) {
       return new GameOfLife(grid);
   }
}

function GameOfLife(grid) {
    
    this.grid = grid;

    this.cycle = function () {
        var die = [],
            born = [];

       grid.forEach(function (row, rowI) {
           row.forEach(function (cell, colI) {
            var neighbors = getNeighbors(colI, rowI); 
            var sum = neighbors
                .reduce(function (sum, cell) {
                    return sum + getCell(cell);
                }, 0);
                if (sum < 2 || sum > 3) {
                    die.push({
                        x: colI,
                        y: rowI
                    });
                }else {
                    if(sum == 3 && !cell) {
                        born.push({
                            x: colI,
                            y: rowI
                        });
                    }
                }
           });
       });
        
       die.forEach( function (cell) {
           grid[cell.y][cell.x] = false;
       });

       born.forEach(function (cell) {
           grid[cell.y][cell.x] = true;
       });

       return grid;
    }

    function getCell(cell) {
        if(grid[cell.y]) {
        var cell = grid[cell.y][cell.x];
        return cell? 1:0;
        } else return 0;
    }

    function getNeighbors(x, y) {
        return [
            {x:x+1 , y: y+1},
            {x:x+1 , y:y},
            {x:x+1 , y:y-1},
            {x:x, y:y+1},
            {x:x, y:y-1},
            {x:x-1 , y: y-1},
            {x:x-1 , y: y},
            {x:x-1 , y: y+1},
        ];
    }
}
