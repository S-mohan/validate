module.exports = {
    entry: './src/validate.ts',
    output: {
        filename: 'validate.js',
        path: __dirname + '/dist',
        library: "Validate",
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
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
}