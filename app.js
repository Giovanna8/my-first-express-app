//pulling in dependencies from node
const path = require('path');

//pulling in dependencies from npm-package.json
const express = require('express');
const ejs = require('ejs');

//initialize our app
const app = express();

//set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//add a route to our app that renders our index-view
app.get('/', function(req, res, next) {
    res.render('index.ejs', { names: ['giovanna', 'manny', 'konstantine'] });
});

//set up our server
const port = 3000;
app.listen(port, () => console.log(`Server listening on: ${port}`) );
