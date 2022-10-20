const xlsx = require("node-xlsx")
const fs = require("fs")
const list = xlsx.parse("./raw-data.xlsx") // 需要转换的excel文件
const odd = require("./odd.json")

const data = list[0].data
// 多表格文件为list[i]

//数据按需处理
const outData = data.map((it, index) => {
  let format = {
    name: it[0],
    trans: [it[1]],
    usphone: "",
    ukphone: "",
  }
  odd.map((i, d) => {
    if (i.name === it[0]) {
      format = i
    }
  })
  return format
})

fs.writeFile("total.json", JSON.stringify(outData), "utf-8", complete)

//  3. 数据写入本地json文件  输出的json文件      数据      文件编码格式 完成事件

function complete(err) {
  if (!err) console.log("文件生成成功")
}
