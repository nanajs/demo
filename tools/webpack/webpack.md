#webpack

- 动态打包所有依赖项，创建所谓的依赖图
- 此工具用于在命令行中运行 webpack

## webpack 打包过程

1. 创建一个目录 > 初始化npm(npm init -y)  > package.json

2. package.json中的main去掉，加私有，防止意外发布你的代码 > 

   ~~~
   - "main": "index.js",
   + "private": true,
   ~~~

3. 在本地安装webpack,接着安装webpack-cli(npm install --save-dev webpack webpack-cli) > package-lock.json配置文件及node-modules依赖文件

4. 随意建立文件，使用webpack 文件名.js  >  默认打包到dist文件夹下的main.js

​    \2. 安装js中的依赖lodash   npm install --save lodash

​    \3. 打包npx webpack

​    js文件引入css

​    \1. require ('style-loader!css-loader!./style.css')指定对应css-loader才能正确加载打包,指定对应style-loader可以使处理文件完成后正常引入到html文件里

​    \2. 命令行指定：webpack a.js a.bundle.js --module-bind 'css=style-loader!css-loader' --watch

​    --progress打包进度

​    --progress --display-modules打包进度

​    --progress --display-modules --display-reasons为什么打包，打包的原因

###### 参考文档

[webpack中文网](https://www.webpackjs.com/)

[webpack github](https://github.com/webpack/webpack)

[webpack官网](https://webpack.github.io/)