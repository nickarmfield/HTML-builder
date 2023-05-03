const fs = require('fs')
const readline = require('readline')
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

const writeFile = fs.createWriteStream('./02-write-file/text.txt')
rl.on('close', () => {
      console.log('Goodbye!')
      writeFile.close()
})
rl.on('line', (answer) => {
  if (answer === 'exit') {
    rl.close()
  } else {
    writeFile.write(answer + '\n')
  }
})
console.log('write some text ')