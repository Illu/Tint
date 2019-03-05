module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.worker.js$/,
          loader: 'worker-loader',
        },
      ]
    }
  }
}