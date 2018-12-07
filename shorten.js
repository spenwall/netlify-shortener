const fs = require('fs')
const {
  format,
  here,
  generateCode,
  commitAndPush,
  pbcopy,
  validateUrl,
  validateUnique,
} = require('./utils')

// TODO: update baseUrl
const baseUrl = ''
let [, , longLink, code] = process.argv
const short = `/${code || generateCode()}`

if (!longLink) {
  throw 'Must provide the full link as an argument'
}
validateUrl(longLink)

const contents = fs.readFileSync(here('_redirects'), 'utf8')
validateUnique(short, contents)

const formatted = format(`${short} ${longLink}\n${contents}`)
fs.writeFileSync(here('_redirects'), formatted)

commitAndPush(short, longLink)

const link = `${baseUrl}${short}`
pbcopy(link)

console.log(`${link} has been copied to your clipboard`)
