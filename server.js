var express = require('express');
var morgan = require('morgan');
var path = require('path');


var htmlTemplate = {
    `<html>
        <head>
            <title>
            </title>
            <link href='/ui/style.css' rel = 'stylesheet'/>
        </head>
        <body>
        <div class="container">
            <a href ="/">Home</a> 
            |
            <a href ="/a-2">Article-2</a>
            |
            <a href = "/a-3">Article-3</a>
            <hr/>
        
            <h2>
            </h2>
        
            <div>
            </div>
        
            <hr/>
            
            <div>
            </div>
        <hr/>
        </div>
        </body>
    </html>
    `
}
    
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get ('/a-1', function(req,res){
    res.sendFile(path.join(__dirname,'a-1.html'));
});

app.get ('/a-2', function(req,res){
    res.sendFile(path.join(__dirname,'a-2.html'));
});

app.get ('/a-3', function(req,res){
    res.sendFile(path.join(__dirname,'a-3.html'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
