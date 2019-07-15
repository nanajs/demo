const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{ // css，less,style样式文件
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, { // 图片文件
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }, { //字体文件
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }, { //csv文件
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      { //xml文件
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};
