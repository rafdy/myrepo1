var fs = require('fs');

var f = function() {
    fs.readdir('./', 'utf-8', function(err, files) {
    	if (err) throw err;
        fs.writeFile('./zawartosckatalogu.txt', files, function(err) {
        	if (err) throw err;
        });
    });
};

try {
    f()
}
catch (err) {
    console.error(err)
}
