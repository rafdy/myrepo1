var fs = require('fs');
var formidable = require('formidable');

var upload = function(request, response) {
    console.log("Rozpoczynam obsługę żądania upload.");
    var form = new formidable.IncomingForm();
    form.parse(request, function(error, fields, files) {
    	if (error) throw err;
        fs.renameSync(files.upload.path, "test.png");
        fs.readFile("templates/upload.html", function(error, html) {
        	if (error) throw err;
        	response.writeHead(200, {"Content-Type": "text/html"});
        	response.write(html);
        	response.end();
    	});
	});
};

var welcome = function(request, response) {
    console.log("Rozpoczynam obsługę żądania welcome.");
    fs.readFile('templates/start.html', function(err, html) {
    	if (err) throw err;
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    });
};

var show = function(request, response) {
    fs.readFile("test.png", "binary", function(error, file) {
    	if (error) throw err;
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
    });
};

var error = function(request, response) {
    console.error("Nie wiem co robić.");
    response.write("404 :(");
    response.end(); 
};

module.exports = {
    upload: upload,
    welcome: welcome,
    show: show,
    error: error
};