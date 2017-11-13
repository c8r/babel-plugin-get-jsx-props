# babel-get-jsx-props

Get props passed to a JSX component.

## Installation

```
npm i -S @compositor/babel-plugin-get-jsx-props
```

## Usage

```js
const getProps = require('@compositor/babel-plugin-get-jsx-props')

const { metadata } = babel.transform(jsx, {
  plugins: [getProps],
  presets: ['stage-0', 'react'],
  fileName: jsxFilename
})
```

## Prior art and references

* https://github.com/avajs/babel-plugin-ava-test-data
