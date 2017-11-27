const { get } = require('dot-prop')

const KEY = 'c8r-props'

module.exports = ({ types }) => ({
  visitor : {
    JSXElement (path, state) {
      const metadata = state.file.metadata
      const arr = metadata[KEY] = metadata[KEY] || []

      const attrs = path.node.openingElement.attributes.map(e => {
        const prop = get(e, 'name.name')
        const valueNode = e.value
        let value = null

        if (types.isStringLiteral(valueNode)) {
          value = valueNode.value
        } else if (types.isJSXExpressionContainer(valueNode)) {
          value = get(valueNode, 'expression.value')
        }

        arr.push({
          prop,
          value
        })
      })
    }
  }
})

module.exports.metadata = (file, create) => file.metadata[KEY] || (create ? [] : null)
