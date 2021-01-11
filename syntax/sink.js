var fs = require('fs');
/*
//reqdFileSync
//동기
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/
//실행결과 : ABC

//비동기
console.log('A');
var result = fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
  console.log(result);
});
console.log('C');
//실행결과 :ACB