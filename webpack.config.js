module.exports = {
  entry: 'file?name=index-foo.html!jade-html!./src/jade/index.jade',
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: 'ignore-this'
  },
  module: {
    loaders: [
      {test: /\.jade/, loader: 'jade-html-loader'}
    ]
  }
};