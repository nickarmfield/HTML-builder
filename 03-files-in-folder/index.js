const fs = require('fs')
const path = require('path')

function ls(folder) {
  fs.stat(folder, (err, stat) => {
    if (stat.isDirectory()) {
      fs.readdir(folder, (err, files) => {
        files.forEach(file => {
          fs.stat(`${folder}/${file}`, (err, stat) => {
            if (stat.isFile()) {
              console.log(`${path.basename(file, path.extname(file))} - ${path.extname(file).slice(1)} - ${Math.ceil(stat.size / 1024)}Kb`)
            }
          })
        })
      })
    }
  })
}
ls('./03-files-in-folder/secret-folder/')