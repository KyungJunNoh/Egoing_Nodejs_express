var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

router.get('/', function (request, response) {
  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = template.list(request.list);
  var html = template.HTML(title, list,
    `
    <h2>${title}</h2>${description}
    <img src="/img/hello.jpg" style="width:300px; display:block; margin-top:10px;">
    `,//app.use(express.static('public')); 코드 덕분에 이미지를 불러올 수 있음.
    `<a href="/topic/create">create</a>`
  );
  response.send(html);
});

module.exports = router;