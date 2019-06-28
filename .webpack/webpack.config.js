const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const Dotenv = require('dotenv-webpack');

const modeConfig = env => require(`./webpack.${env}.js`)(env)

module.exports = ({mode, presets} = {mode: 'production', presets: []}) => {
  console.log('mode', mode)
  return webpackMerge(
    {
      mode,
      resolve: {
        alias: {
          assets: path.resolve(__dirname, 'src/assets')
        }
      },
      devServer: {
        contentBase: './dist',
        port: 3000,
        historyApiFallback: true
      },
      module: {
        rules: [
          {
            test: /(\.js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      },
      stats: {
        entrypoints: false,
        children: false
      },
      plugins: [
        new HtmlWebpackPlugin({template: './src/assets/index.html'}),
        new webpack.ProgressPlugin(),
        new Dotenv()
      ]
    },
    modeConfig(mode)
  )
}