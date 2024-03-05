// importing required packages
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const ejsexpresslayout=require('express-ejs-layouts');

// initializing express
const app = express();

// using body parser to parse over the request body
app.use(ejsexpresslayout);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
// using routes
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', require('./routes/products'));
app.set('view engine','ejs');
app.set('views','./views');
// starting the server
app.listen(3000, function(){
    console.log('API is live on http://localhost:3000/products');
});