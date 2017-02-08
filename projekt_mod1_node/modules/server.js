var http = require('http');
var colors = require('colors');

var handlers = require('./handlers'); 

function start() {
  function onRequest(request, response) {
    console.log("Odebrano zapytanie.".green);
    console.log("Zapytanie " + request.url + " odebrane.");

    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

    switch (request.url) {
        case '/':
        case '/start': 
        	try {
            	handlers.welcome(request, response);
        	} catch (err) {
        		console.error(err);
        	} 
            break;
        case '/upload': 
            try {
            	handlers.upload(request, response);
        	} catch (err) {
        		console.error(err);
        	} 
            break;
        case '/show':
        	try {
            	handlers.show(request, response);
        	} catch (err) {
        		console.error(err);
        	}
        break;
        default:
            handlers.error(request, response);
    }
  }
  
  http.createServer(onRequest).listen(9000);

  console.log("Uruchomiono serwer!".green);
}

exports.start = start;