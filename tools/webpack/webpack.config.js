const path = require('path');
// 启动页面
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清理dist/文件
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
// 文件跟踪映射
const ManifestPlugin = require('webpack-manifest-plugin');
// 抽离css样式为一个文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//https://www.npmjs.com/package/mini-css-extract-plugin

module.exports = {
  optimization: { // 优化项
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
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
  devServer: { // 开发服务器的配置
    port: 3000, //监听请求的端口号
    progress: true, // 进度条
    contentBase: './build' // 提供默认路径
  },
  /* loader */
  module: {
    rules: [{ // css，less,style样式文件
        test: /\.css$/,
        use: [ // 多个loader为数组或对象，一个为字段串，默认顺序为由右向左执行
          {
            loader: 'style-loader',
            options: {
              insetAt: "top" // css外部样式置顶
            }
          }, // 将css插入到head标签中
          'css-loader', //解析@import语法
          'postcss-loader' // css属性添加浏览器前缀 postcss.config.css  autoprefixer
        ]
      }, {
        // sass sass-loader stylus stylus-loader
        test: /\.less$/,
        use: [ // 多个loader为数组或对象，一个为字段串，默认顺序为由右向左执行
          MiniCssExtractPlugin.loader,
          'css-loader', //解析@import语法
          "less-loader" // 将css转为less
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
      minify: { // 控制是否以及以何种方式最小化输出。有关更多详细信息，https://github.com/DanielRuf/html-minifier-terser#options-quick-reference
        removeComments: false, // 删除HTML注释
        collapseWhitespace: false, // 折叠为一行
        removeAttributeQuotes: false // 尽可能删除属性周围的引号
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      hash: true, // 生成hash戳
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ]
}