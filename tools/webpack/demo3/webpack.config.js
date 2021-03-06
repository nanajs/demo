const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  devServer: { // 开发服务器的配置
    port: 8080, //端口
    progress: true, // 进度条
    contentBase: './build' // 默认
  },
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new ManifestPlugin(),// 文件映射跟踪
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist')
  }
}