var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var fileContent;

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {

	fs.readFile('./test.json', 'utf8', function(err, data) {
    	if (err) {
    		console.log('Wystąpił błąd: ' + err);
    	} else
    	{
    		fileContent = data;
    		res.send(data);
    	}
	});
});

app.post('/updateNote/:note', function (req, res) {

	stringifyFile = JSON.stringify(fileContent);
	stringifyFile += req.params.note;
	
	fs.writeFile('./test.json', stringifyFile, function(req, res, next) {
    	if (err) {
    		console.log('Wystąpił błąd: ' + err);
    	} else
    	{
    		console.log('file updated');
    	}
	});
});

app.listen(3000);

