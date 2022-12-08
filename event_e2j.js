const xlsx = require("node-xlsx")
const fs = require("fs")
const list = xlsx.parse("./大事记记录表.xlsx") // 需要转换的excel文件

const data = list[0].data
// 多表格文件为list[i]

//数据按需处理
const outData = data.map((it, index) => {
  let format = {
    id: it[0],
    time: formatDate(it[1]),
    intro: it[2],
    img: it[3],
  }
  return format
})

function formatDate (numb) {
  let time = new Date((numb - 1) * 24 * 3600000 + 1)
  time.setYear(time.getFullYear() - 70)
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  return year + '年' + (month < 10 ? '0' + month : month) + '月'
}


fs.writeFile("timeline.json", JSON.stringify(outData), "utf-8", complete)

//  3. 数据写入本地json文件  输出的json文件      数据      文件编码格式 完成事件

function complete (err) {
  if (!err) console.log("文件转换成功")
}
