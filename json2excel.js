const fs = require("fs")
const json2xls = require('json2xls');


fs.readFile("./timeline.json", 'utf8', (err, data) => {
  if (err) throw err;
  const json = JSON.parse(data);
  const jsonArray = [];
  json.forEach(function (item) {
    let temp = {
      'id': item.id,
      '时间': item.time,
      '事件': item.intro,
      '图片': item.img
    }
    jsonArray.push(temp);
  });

  let xls = json2xls(jsonArray);

  fs.writeFileSync('大事记.xlsx', xls, 'binary');
})

