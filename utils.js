const path = require('path')
const {URL} = require('url')
const {spawnSync} = require('child_process')

const here = p => `${__dirname}/${p}`

function format(contents) {
  const links = parseLinks(contents)

  const longestLength = links.reduce((length, [short]) => {
    if (short.startsWith('/') && short.length > length) {
      return short.length
    }
    return length
  }, 0)

  const formattedLinks = links.map(([short, long]) => {
    if (short.startsWith('/')) {
      return `${short.padEnd(longestLength, ' ')}   ${long}`
    } else {
      return `${short}${long}`
    }
  })

  return formattedLinks.join('\n')
}

function parseLinks(contents) {
  return contents.split('\n').map(r => {
    if (!r.trim()) {
      return ['', '']
    }
    const [, short, long] = r.trim().match(/^(.*)\s+(.*)$/) || [r, r.trim(), '']
    return [short.trim(), long.trim()]
  })
}

function validateUnique(short, contents) {
  const links = parseLinks(contents)
  const [, existingLink] = links.find(([s]) => s === short) || []
  if (existingLink) {
    throw `A link with this code already exists. It points to ${existingLink}`
  }
}

function commitAndPush(short, longLink) {
  console.log(`committing: ${short} -> ${longLink}`)
  spawnSync('git', ['commit', '-am', `${short} -> ${longLink}`], {
    cwd: __dirname,
    stdio: 'inherit',
  })
  console.log('pushing')
  spawnSync('git', ['push'], {cwd: __dirname, stdio: 'inherit'})
}

function validateUrl(url) {
  try {
    new URL(url)
  } catch (error) {
    // throwing a strong so I don't get a huge stack trace.
    throw `${url} is not a valid URL`
  }
}

function generateCode() {
  let text = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return text
}

module.exports = {
  format,
  here,
  generateCode,
  commitAndPush,
  pbcopy,
  validateUrl,
  validateUnique,
}
