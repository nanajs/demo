#webpack

- webpack 是前端的一个项目构建工具，它是基于 Node.js 开发出来的一个前端工具；
- 动态打包所有依赖项，创建所谓的依赖图
- 此工具用于在命令行中运行 webpack

## Webpack可以做什么事情：

1. 能够处理js文件的相互依赖关系
2. Webpack能够处理js的兼容问题，把高级的，浏览器不识别的代码，转化为低级的，浏览器能识别的语法
3. 打包，支持模块化

## webpack 打包过程

1. 创建一个目录 > 初始化npm(npm init -y)  > package.json

2. package.json中的main去掉，加私有，防止意外发布你的代码 > 

   ~~~
   - "main": "index.js",
   + "private": true,
   ~~~

3. 在本地安装webpack,接着安装webpack-cli(npm install --save-dev webpack webpack-cli) > package-lock.json配置文件及node-modules依赖文件

   - 运行`npm i webpack -g`全局安装webpack，这样就能在全局使用webpack的命令
   - 在项目根目录中运行`npm i webpack --save-dev`安装到项目依赖中

4. 随意建立文件，使用webpack 文件名.js  >  默认打包到dist文件夹下的main.js

### 改变webpack.config.js文件名

package.json配置`script: {build:webpack --config webpack.my.js}`

`npm run build --(配置参数) --config webpack --config webpack.my.js`

### 实现webpack的实时打包构建

1. 由于每次重新修改代码之后，都需要手动运行webpack打包的命令，比较麻烦，所以使用`webpack-dev-server`来实现代码实时打包编译，当修改代码之后，会自动进行打包构建。
2. 运行`cnpm i webpack-dev-server --save-dev`安装到开发依赖
3. 安装完成之后，在命令行直接运行`webpack-dev-server`来进行打包，发现报错，此时需要借助于`package.json`文件中的指令，来进行运行`webpack-dev-server`命令，在`scripts`节点下新增`"dev": "webpack-dev-server"`指令，发现可以进行实时打包，但是dist目录下并没有生成`bundle.js`文件，这是因为`webpack-dev-server`将打包好的文件放在了内存中

- 把`bundle.js`放在内存中的好处是：由于需要实时打包编译，所以放在内存中速度会非常快
- 这个时候访问webpack-dev-server启动的`http://localhost:8080/`网站，发现是一个文件夹的面板，需要点击到src目录下，才能打开我们的index首页，此时引用不到bundle.js文件，需要修改index.html中script的src属性为:`<script src="../bundle.js"></script>`
- 为了能在访问`http://localhost:8080/`的时候直接访问到index首页，可以使用`--contentBase src`指令来修改dev指令，指定启动的根目录：

```
 "dev": "webpack-dev-server --contentBase src"
```

 同时修改index页面中script的src属性为`<script src="bundle.js"></script>`



### 使用配置文件webpack.config.js简化打包时候的命令

- 在项目根目录中创建`webpack.config.js`

比起 CLI 这种简单直接的使用方式，配置文件具有更多的灵活性。我们可以通过配置方式指定 loader 规则(loader rules)、插件(plugins)、解析选项(resolve options)，以及许多其他增强功能

```
webpack --config webpack.config.js
```

####  [loaders](https://www.webpackjs.com/loaders/)

- 配置；在 **webpack.config.js** 文件中指定 loader。
- 内联；在每个 `import` 语句中显式指定 loader。

```
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

- CLI;在 shell 命令中指定它们

##### CSS

- 安装依赖`npm install --save-dev style-loader css-loader`

- 配置config文件module.rules添加

  ~~~
  { //当该模块运行时，含有 CSS 字符串的 <style> 标签，将被插入到 html 文件的 <head> 中
    test: /\.css$/,
    use: [
       'style-loader',
       'css-loader'
    ]
  }
  ~~~

##### 图片文件

- 安装依赖`npm install --save-dev file-loader`

- 配置config文件module.rules添加

  ~~~
  {
    test: /\.(png|svg|jpg|gif)$/,
     use: [
       'file-loader'
     ]
  }
  ~~~

- 压缩和优化你的图像。查看 [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) 和 [url-loader](https://www.webpackjs.com/loaders/url-loader)，以了解更多关于如果增强加载处理图片功能。

##### 加载字体

- 安装依赖`npm install --save-dev file-loader`

- 配置config文件module.rules添加

  ~~~
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
      'file-loader'
    ]
  }
  ~~~

##### 加载数据

如 JSON 文件，CSV、TSV 和 XML等

- 安装依赖`npm install --save-dev csv-loader xml-loader`

- 配置config文件module.rule添加

  ~~~
  { //csv文件
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
  ~~~

##### 全局资源

定义不同的模块，然后引用对应模块下的内容 ，不用每次都请求加载所有模块

##### 回退处理

####  [plugins插件](https://www.webpackjs.com/plugins/)

##### 管理输出

当在index.html中引入过多文件时，手动的进行管理会比较麻烦

重新设置entry和output，index.html引入文件名修改

~~~
entry: {
  app: './src/index.js',
  print: './src/print.js'
},
output: {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist')
}
~~~

##### [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)启动页面

但是，如果我们更改了我们的一个入口起点的名称，甚至添加了一个新的名称，会发生什么？生成的包将被重命名在一个构建中，但是我们的`index.html`文件仍然会引用旧的名字。我们用 [`HtmlWebpackPlugin`](https://www.webpackjs.com/plugins/html-webpack-plugin) 来解决这个问题。

- 安装插件`npm install --save-dev html-webpack-plugin`

- 配置config

  ~~~
  // 这将会产生一个包含以下内容的文件 dist/index.html：
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management' // string 用于生成的HTML文档的标题
      filename: "ss" // string 要将HTML写入的文件。默认为index.html。您也可以在这里指定一个子目录（例如：assets/admin.html）
      // https://github.com/jantimon/html-webpack-plugin#configuration
    })
  ],
  ~~~

##### 清理dist/文件[clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)

- 安装插件`npm install clean-webpack-plugin --save-dev`

- 配置config

  ~~~
  const {CleanWebpackPlugin} = require('clean-webpack-plugin');
  new CleanWebpackPlugin(),
  ~~~

##### Manifest [webpack-manifest-plugin](https://github.com/danethurber/webpack-manifest-plugin)

文件映射的跟踪，在输出文件夹下的`manifest.json`

- 安装插件`npm install --save-dev webpack-manifest-plugin`

- 配置config

  ~~~
  new ManifestPlugin()
  ~~~

##### [webpack-dev-server](https://github.com/webpack/webpack-dev-server)热开发





####  resolve options解析选项

#### 其他

### 在npm中增加脚本

- 在**package.json**中的**"scripts": **增加`"build": "webpack"`
- 然后运行`npm run build`就会自动打包文件

  #####  js文件引入css

1. require ('style-loader!css-loader!./style.css')指定对应css-loader才能正确加载打包,指定对应style-loader可以使处理文件完成后正常引入到html文件里
2. 命令行指定：webpack a.js a.bundle.js --module-bind 'css=style-loader!css-loader' --watch

​    --progress打包进度

​    --progress --display-modules打包进度

​    --progress --display-modules --display-reasons为什么打包，打包的原因

###### 参考文档

[webpack中文网](https://www.webpackjs.com/)

[webpack官网](https://webpack.js.org/configuration/mode/)

[webpack github](https://github.com/webpack/webpack)

[webpackgithub官网](https://webpack.github.io/)

[loading](https://survivejs.com/webpack/loading/images/)

[html-webpack-template](https://github.com/jaketrent/html-webpack-template)

[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

[clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)

[webpack-manifest-plugin](https://github.com/danethurber/webpack-manifest-plugin)



