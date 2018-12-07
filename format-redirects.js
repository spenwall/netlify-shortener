const fs = require('fs')
const {format, here} = require('./utils')

const redirectsPath = here('_redirects')
const formattedContents = format(fs.readFileSync(redirectsPath, 'utf8'))
fs.writeFileSync(redirectsPath, formattedContents)
