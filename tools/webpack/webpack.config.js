const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  /* 模式 */
  // 默认production
  mode: 'development',
  /*plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
  ]*/
  mode: 'production',
  /*plugins: [
    new UglifyJsPlugin( ... ),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]*/
  /* 入口 */

  /* 单个入口 */
  entry: './src/index.js',
  // 上面为下面的简写
  entry: {
    main: './src/index.js'
  },
  /* 对象语法 */
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  /* 输出 */

  /* 多个入口起点时 */
  output: {
    filename: '[name].js', //输出文件名
    path: path.resolve(__dirname, 'dist') //输出文件的绝对路径
  },
  /* hash复杂示例 */
  output: {
    path: "/home/proj/cdn/assets/[hash]",
    publicPath: "http://cdn.example.com/assets/[hash]/"
  },
  /* loader */
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
  },
  /* 插件 */
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      minify: {
        removeComments: false, // 改为false
        collapseWhitespace: false, // 改为false
        removeAttributeQuotes: false // 改为false
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    })
  ]
}