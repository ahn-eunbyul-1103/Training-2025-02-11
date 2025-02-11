const chunk = [];

const inData = "name=nostar&message=jungmin";

function dataLoader(init, data, callback) {
  callback(init, data);
}

dataLoader(chunk, inData, (init, data) => {
  let dataArr = data.split('&');
  dataArr.forEach((item) => {
    let data = item.split('=');
    let key = data[0];
    let value = data[1];
    init.push({ [key]: value });
  });
});

console.log(chunk);