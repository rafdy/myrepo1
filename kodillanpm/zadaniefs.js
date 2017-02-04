var fs = require('fs');

var f = function() {
    fs.readdir('./', 'utf-8', function(err, files) {
        fs.writeFile('./zawartosckatalogu.txt', files, function(err) {
        if (err) throw err;
        });
    });
};

f();
