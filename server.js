var express = require('express');
var app = express();

app.use(express.static(__dirname+'/frontend'));
var port= process.env.PORT  || 3000;

app.get('/', function(req, res){
    res.sendFile(__dirname+'/frontend/html/home.html');
  });

  app.get('/doctor/login', function(req, res){
    res.sendFile(__dirname+'/frontend/html/doctorlogin.html');
  });
  app.listen(port, function(){
    console.log("Site Running on http://localhost:"+port);
});