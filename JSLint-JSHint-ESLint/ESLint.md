[ESLint中文文档](https://eslint.bootcss.com/)

五种引用方法

~~~xml
npm init -y
npm install eslint -g
eslint --init // 初始化eslint文件
~~~

1. js文件`.eslintrc.js`

   ~~~javascript
   module.exports = {
       "env": {
           "browser": true,
           "es6": true,
           "node": true
       },
       "extends": [
           "standard"
       ],
       "globals": {
           "Atomics": "readonly",
           "SharedArrayBuffer": "readonly"
       },
       "parserOptions": {
           "ecmaVersion": 2018,
           "sourceType": "module"
       },
       "rules": {
       }
   };
   ~~~

2. JSON文件

   ~~~json
   {
       "env": {
           "browser": true,
           "es6": true
       },
       "extends": [
           "eslint:recommended",
           "plugin:react/recommended"
       ],
       "globals": {
           "Atomics": "readonly",
           "SharedArrayBuffer": "readonly"
       },
       "parserOptions": {
           "ecmaFeatures": {{
       "env": {
           "browser": true,
           "es6": true
       },
       "extends": [
           "standard"
       ],
       "globals": {
           "Atomics": "readonly",
           "SharedArrayBuffer": "readonly"
       },
       "parserOptions": {
           "ecmaVersion": 2018,
           "sourceType": "module"
       },
       "rules": {
       }
   }
   ~~~

3. XML文件

   ~~~xml
   env:
     browser: true
     es6: true
   extends: 'eslint:recommended'
   globals:
     Atomics: readonly
     SharedArrayBuffer: readonly
   parserOptions:
     ecmaVersion: 2018
     sourceType: module
   rules: {}
   ~~~

4. 配置webpack.json文件

   ~~~
   "eslintConfig": {
           "plugins": ["example"],
           "env": {
               "example/custom": true
           }
       }
   ~~~

5. 单个js文件内配置

### 安装报错：

`SyntaxError: Invalid regular expression flags /^(?:[^\\]|\\.)*?\\([0-3][0-7]{1,2}|[4-7][0-7]|0(?=[89])|[1-7])/su`  

解决方法：

node更新最新版本

