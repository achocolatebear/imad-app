var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles:{
    var articleOne : {
        title: 'IMAD | Article - 1',
        heading:'Article - 1', 
        date: '26/10/17',
        content: 
                `<p>This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.
                </p>
                <p>This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.
                </p>
                <p>This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.
                </p>`
    }
    var articleTwo : {
        title: 'IMAD | Article - 2',
        heading:'Article - 2', 
        date: '26/10/17',
        content: 
                `<p>This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.
                </p>
                <p>This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.
                </p>
                <p>This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.
                </p>`
    }
    var articleThree : {
        title: 'IMAD | Article - 3',
        heading:'Article - 3', 
        date: '26/10/17',
        content: 
                `<p>This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.
                </p>
                <p>This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.
                </p>
                <p>This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.This is the content for my 1st page.
                </p>`
                
    }
};

function createTemplate (data) {
    
 var title = data.title;
 var date = data.date;
 var heading = data.heading;
 var content = data.content;
    var htmlTemplate = 
        `<html>
            <head>
                <title>
                    ${title}
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
                ${heading}
                </h2>
            
                <div>
                ${date}
                </div>
            
                <hr/>
                
                <div>
                ${content}
                </div>
            <hr/>
            </div>
            </body>
        </html>
        `;
        return htmlTemplate
}
    
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','madi.png'));
});

app.get('/u/main.js',function(req,res){
   res.sendFile(path.join(__dirname,'ui','main.js')) ;
});

app.get ('/a-1', function(req,res){
    res.send (createTemplate(articleOne));
});

app.get ('/a-2', function(req,res){
    res.send(createTemplate(articleTwo));
});

app.get ('/a-3', function(req,res){
    res.send(createTemplate(articleThree));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
