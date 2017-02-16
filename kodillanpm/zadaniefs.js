var fs = require('fs');

var f = function() {
    fs.readdir('./', 'utf-8', function(err, files) {
    	if (err) {
    		console.error(err)
    	}
        fs.writeFile('./zawartosckatalogu.txt', files, function(err) {
        	if (err) {
        		console.error(err)
        	}
        });
    });
};

f()
