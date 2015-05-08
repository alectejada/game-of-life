module.exports = {
    
    make : function (columns, rows) {
       var grid = []; 
       for(var i=0; i<rows;i++) {
           grid[i] = [];
           for(var j=0;j<columns;j++){
                grid[i][j] = Math.random()*(9) +1 < 3;
           }
       }
       return grid;
    }
}
