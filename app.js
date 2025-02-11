const testJs = require('./test');

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response) {
  if(request.method === "GET") {
    const indexPage = fs.readFileSync("./public/index.html", "utf8");

    response.writeHead(200, { 'Content-Type': 'utf-8; text/html'});
    response.write(indexPage);
    response.end();
  }

  if(request.method === "POST") {
    if(request.url === "/test") {
      let testString = "";
      let fileString = "";
      request.on("data", function(data) {
        console.log(data.toString());
        
        // fs.writeFileSync("star.txt", data.toString()); // 백엔드에서 파일을 핸들링하는 싸인! (쓰기권한)
        testString = testJs.splitString(data.toString(), "HTML");
        fileString = testJs.splitString(data.toString(), "FILE");

      });
      request.on("end", function() {
        console.log("종료");
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        fs.writeFileSync("fileString.txt", fileString); // 파일만들기(HTML 생성과는 다른 형식으로 보내기)
        response.end(testString);
      });
    }
  }

});

server.listen(3000, function() {
  console.log('서버 빙글빙글 : http://localhost:3000');
});