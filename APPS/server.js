// server.js 

/////////////////////////////////////////////////
//----GROUP 1-----> Libraries                ////
/////////////////////////////////////////////////

//---> we need http to create a server. http is a standard Node.js Library.
var http = require('http');  

//---> Express.js is a Node.js web application framework, designed for building single-page, multi-page, and hybrid web applications
var express = require('express');

//---> this will give us access to all the conntrollers//---> must use view engine like vash
var controllers = require('./src/controllers');

var path = require('path');

/////////////////////////////////////////////////
//----GROUP 2----->  Set up app             ////
/////////////////////////////////////////////////  

var app = express();

/////////////////////////////////////////////////
//----GROUP 3----->  View Engine           ////
/////////////////////////////////////////////////
    
app.set('views',path.join(__dirname,'src/views'));
app.set('view engine', 'vash');//--->Set up View Engine


/////////////////////////////////////////////////
//----GROUP 4  ----->  Config                ////
/////////////////////////////////////////////////

//--->set the public static resource folder so that layout.vash can do link href="/css/site.css"
app.use(express.static(__dirname + '/public'));


/////////////////////////////////////////////////
//----GROUP 5 -----> Map the routs           ////
///////////////////////////////////////////////// 

controllers.init(app);//----Map the routes

/////////////////////////////////////////////////
//----GROUP 6 ----->  Create server          ////
///////////////////////////////////////////////// 
 
var server = http.createServer(app);//---create the actual server

/////////////////////////////////////////////////
//----GROUP  7-----> RUN THE SERVER           ////
/////////////////////////////////////////////////
 
//var port = process.env.port || 1337;//---> for online purpose only
var port = 3000;
server.listen(port);   //---> for local purpose only   