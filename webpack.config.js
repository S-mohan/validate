const pkj = require('./package.json')
const webpack = require('webpack')
module.exports = {
    entry: './src/validator.ts',
    output: {
        filename: 'validator.js',
        path: __dirname + '/dist',
        library: "Validator",
        libraryTarget: "umd",
        libraryExport: 'default'
    },
    mode: 'production',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
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
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new webpack.BannerPlugin(`${pkj.name} ${pkj.version}\n(c) 2018 Smohan<https://smohan.net>\nReleased under the ${pkj.license} License.`)
    ]
}