var express = require('express')
var app = express()
var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression')
var topicRouter = require('./routes/topic');
var indexRouter = require('./routes/index');
var helmet = require('helmet'); //보안 모듈
app.use(helmet());

app.use(express.static('public'));
//public 파일안에서 스태틱 파일을 찾는다.
//localhost:3000/img/hello.jpg < 주소를 입력했을때 이미지 출력

app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.get('*', function (request, response, next) {
  fs.readdir('./data', function (error, filelist) {
    request.list = filelist;
    next();
  });
});

//route, routing
app.use('/', indexRouter);
app.use('/topic', topicRouter);

app.use(function (req, res, next) {
  res.status(404).send('<img src="/img/error.jpg">');
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
/*
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
      } else {
      }
    } else if(pathname === '/create'){
    } else if(pathname === '/create_process'){
    } else if(pathname === '/update'){
    } else if(pathname === '/update_process'){
    } else if(pathname === '/delete_process'){
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
*/