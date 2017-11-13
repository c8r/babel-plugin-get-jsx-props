const babel = require('babel-core')
const path = require('path')
const test = require('ava')
const fs = require('fs')
const fn = require('./')

const FIXTURES = [
  'basic.js'
]

const testFixture = fileName => {
  const file = path.join(__dirname, 'fixtures', fileName)

  test(`it sets props expressions in data attribute for ${fileName}`, t => {
    const input = fs.readFileSync(file, 'utf8')

    const { metadata } = babel.transform(input, {
      plugins: [fn],
      presets: ['stage-0', 'react'],
      filename: fileName
    })

    t.snapshot(metadata)
  })
}

FIXTURES.map(testFixture)
