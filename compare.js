const fs = require("fs")
const odd = require("./odd.json")
const n_array = require("./total.json")

const newData = odd.filter(
  (l2) => n_array.findIndex((l1) => l2.name === l1.name) === -1
)
// 比较两个json删除odd里和生成的total重复的数据

fs.writeFile("total_1.json", JSON.stringify(newData), "utf-8", complete)

function complete(err) {
  if (!err) console.log("已删除重复项")
}
