var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var cocntent={
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
               </p>`
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one', function(req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
}
);
app.get('/article-two', function(req,res)
{
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function(req,res)
{
    res.sendfile('Article three requested and will be served');
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
