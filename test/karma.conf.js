module.exports = (config) => {
  config.set({
    frameworks: ['mocha'],
    // ... normal karma configuration
    files: [
      '../src/**/*.js',
      './specs/*.spec.js'
    ],

    preprocessors: {
      '../src/**/*.js' : ['webpack', 'coverage'],
      './specs/*.spec.js' :  ['webpack']
    },

    reporters: ['progress', 'coverage'],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            },
          ],
        },
        ]
      }
    },

    coverageReporter: {
      type: 'html',
      dir: './coverage'
    },

    webpackMiddleware: {
      stats: 'errors-only'
    }
  })
}