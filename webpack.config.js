module.exports = {
  entry: [
    'file?name=index.html!jade-html!./src/jade/index.jade',
    './src/ts/hello.ts'
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {test: /\.jade/, loader: 'jade-html-loader'},
      {test: /\.ts/, loader: 'ts-loader'}
    ]
  }
};