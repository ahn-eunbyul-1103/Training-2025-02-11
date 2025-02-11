const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response) {
  console.log("요청 들어오는 것 검사하기 : ", request);
  console.log("요청 주소(엔드포인트) 검사하기 : ", request.url);
  console.log("요청 방식(메서드) 검사하기 : ", request.method);


  // ? response.statusCode = 200; <- 객체에 할당하는 방법
  // * 아래 writeHead 메서드를 사용하면서 상태코드를 설정할 수 있음
  response.writeHead(200, { 'Content-Type': 'utf-8; text/html'});
  const helloWorld = "hello world";
  response.write(helloWorld);
  response.end();
});

server.listen(3000, function() {
  console.log('서버 빙글빙글 : http://localhost:3000');
});