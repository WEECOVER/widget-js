const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'

module.exports = () => ({
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    library: ['weecoverWidget'],
    libraryTarget: 'umd',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,
          {
            loader:'css-loader',
            options: {
              modules: {
                localIdentName: '[local]___[hash:base64:5]'
              }
            }
          },
        ],
      },
    ],
  }
})