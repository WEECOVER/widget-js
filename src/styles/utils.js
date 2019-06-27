const path = require('path')

const resources = [
  '_variables.scss',
  '_extends.scss',
  '_mixins.scss',
  '_breakpoints.scss'
]

module.exports = resources.map(file => path.resolve(__dirname, file))