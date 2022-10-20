const fs = require("fs")
const path = require("path")

const pathName = "./old"

fs.readdir(pathName, function (err, files) {
  ;(function iterator(i) {
    if (i == files.length) {
      return
    }
    fs.stat(path.join(pathName, files[i]), function (err, data) {
      if (data.isFile()) {
        if (files[i] != ".DS_Store") {
          const file_name = files[i].replace(".mp4", "")
          copyFile(`./old/${files[i]}`, `./new/${file_name}`, `${files[i]}`)
        }
      }
      iterator(i + 1)
    })
  })(0)
})

// 增加文件夹
function createFolder(dirpath, dirname) {
  if (typeof dirname === "undefined") {
    if (fs.existsSync(dirpath)) {
    } else {
      createFolder(dirpath, path.dirname(dirpath))
    }
  } else {
    if (dirname !== path.dirname(dirpath)) {
      createFolder(dirpath)
      return
    }
    if (fs.existsSync(dirname)) {
      fs.mkdirSync(dirpath)
    } else {
      createFolder(dirname, path.dirname(dirname))
      fs.mkdirSync(dirpath)
    }
  }
}

// 复制文件
function copyFile(orgfilepath, desdirpath, desfilename) {
  if (fs.existsSync(orgfilepath)) {
    let desfilepath = path.join(desdirpath, desfilename)
    if (!fs.existsSync(desfilepath)) {
      createFolder(desdirpath)
      fs.copyFileSync(orgfilepath, desfilepath)
    } else {
      console.error(
        Date().toString() +
          "FolderAndFileOperation_copyFile: des file already existed." +
          " new path: " +
          desfilepath.toString()
      )
    }
  } else {
    console.error(
      Date().toString() +
        "FolderAndFileOperation_copyFile: org file not existed." +
        " org path: " +
        orgfilepath.toString()
    )
  }
}
