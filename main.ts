import * as fs from 'fs'
import * as util from 'util'

/* Change the writeFile function in a way that it returns a promise. */
const writeFile = util.promisify(fs.writeFile)

writeFile('./newFile.txt', 'teste promise').then(() => {
    console.log('File created successfully')
}).catch(error => {
    console.log(error)
})