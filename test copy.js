const testString = "name=eunbyul&message=hello";

// 전처리 : 원하는 데이터를 찾기 위해 가공하는 작업
function splitString(string) {
  let result = [];
  let first = string.split('&');
  let extractName = first[0].split('=')[1];
  let extractMessage = first[1].split('=')[1];
  console.log(first);
  console.log(extractName);
  console.log(extractMessage);
}

splitString(testString);