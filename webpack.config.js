const pkj = require('./package.json')
const webpack = require('webpack')
module.exports = {
  entry: './src/validator.ts',
  output: {
    filename: 'validator.js',
    path: __dirname + '/libs',
    library: "Validator",
    libraryTarget: "umd",
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'this'
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
  mode: 'production',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
          loader: 'ts-loader'
        },
        {
          loader: 'string-replace-loader',
          options: {
            search: '__VERSION__',
            replace: pkj.version,
          }
        }
      ],
      exclude: /node_modules/,
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, ]
  },
  plugins: [
    new webpack.BannerPlugin(`${pkj.name} ${pkj.version}\n(c) 2020 Smohan<https://smohan.net>\nReleased under the ${pkj.license} License.`)
  ]
}