const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(s?)css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: require(path.join(
                process.cwd(),
                'src/styles/utils.js'
              ))
            }
          }
        ]
      }
    ]
  }
})