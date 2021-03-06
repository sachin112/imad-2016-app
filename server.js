var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    article-one : {},
    articl-two : {},
articleone : {
    title: 'Article-one|sachin v',
    heading: 'Article-one',
    date: '21 SEP 2016',
    content: 
           `<P>
               First article one. First article one. First article one. First article one. First article one. First article one. First article one. First article one. First article one. First article one.
           </p>
         <P>
               First article one. First article one. First article one. First article one. First article one. First article one. First article one. First article one. First article one. First article one.
       </p>
               <P>
               First article one. First article one. First article one. First article one. First article one. First article one. First article one. First article one. First article one. First article one.
               </p>
},
articletwo :{
     title: 'Article-two|sachin v',
    heading: 'Article-two',
    date: '13 oct 2016',
    content: 
    
    <p> This is my second article</p>
},
};


function createtempalte(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

var htmltemplate=
<html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viewport" console="width-device-width" intial-scale-1/>
         <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <h3>
             ${heading}
            </h3>
            <div>
              ${date}
            </div>
            <div>
                ${content}
            </div>
            </div>
            
        </body>
    
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.send(createtemplate(articles[articleName]));
});
app.get('/:articleName', function(req,res)
{
  var articleName=req.params.articlrName;
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
}
);
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
