var fs = require('fs');

var f = function() {
    fs.readdir('./', 'utf-8', function(err, files) {
        fs.writeFile('./zawartosckatalogu.txt', files, function(err) {
        if (err) throw err;
        });
    });
};

f();

//fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//    console.log('Dane przed zapisem!'.blue);
//    console.log(data);
//    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
//        if (err) throw err;
//        console.log('Zapisano!'.blue);
//        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//            console.log('Dane po zapisie'.blue)
//            console.log(data);
//        });
//    });
//});