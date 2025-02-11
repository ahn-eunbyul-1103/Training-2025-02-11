// 전처리 : 원하는 데이터를 찾기 위해 가공하는 작업
function splitString(string, type) {
  let result = [];
  let first = string.split('&');

  first.forEach((data) => {
    let value = data.split('=')[1];
    result.push(value);
  });

  if(type === "HTML") {
    return `
  <html>
    <head>
      <title>결과값</title>
    </head>
    <body>
      <h1>결과값</h1>
      <h2>name : ${result[0]}</h2>
      <h2>message : ${result[1]}</h2>
    </body>
  </html>
  `;
  } else if(type === "FILE") {
    return `결과값
name : ${result[0]}
message : ${result[1]}`;
  }
}


module.exports = { splitString };