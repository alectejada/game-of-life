var charm = require('charm')();
charm.pipe(process.stdout);
charm.reset();
var colors = [ 'red', 'cyan', 'yellow', 'green', 'blue' ];

module.exports = {
    render: function (grid) {
        grid.forEach( function (row, i) {
            row.forEach(function (cell, j) {
                var ch = cell? String.fromCharCode(176): ' ';
                charm.position(j+1,i+1)
                    .foreground(colors[3])
                    .write(ch);
            });
        });
    }
}
