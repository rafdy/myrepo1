var express = require('express');
var stormpath = require('express-stormpath');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(stormpath.init(app, {
 client: {
    apiKey: {
      file: './apikey.properties'
    }
 },
 application: {
   href: "https://api.stormpath.com/v1/accounts/6raLZIfvVknYZ7dItxsR8C"
 },
 expand: {
    customData: true
 }
}));

app.get('/', stormpath.getUser, function(req, res) {
    res.render('home', {
        title: 'Welcome'
    });
});

app.on('stormpath.ready',function(){
    console.log('Stormpath Ready');
});

app.use('/profile', stormpath.loginRequired, require('./profile')());

app.listen(3000);