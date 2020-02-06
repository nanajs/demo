module.exports = {
  "env": { // Environments指定脚本的运行环境，在globals中有定义
    "browser": true,
    "es6": true, // 1. 支持新的 ES6 全局变量
    "node": true
  },
  "extends": [
    "standard"
  ],
  "globals": { // 脚本在执行期间访问的额外的全局变量
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "esprima",
  "parserOptions": { // 解析器选项
    "ecmaVersion": 2018, //2015（6），2016（7），或 2017（8）或 2018（9）
    "sourceType": "module", //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    // 额外的语言特性
    "ecmaFeatures": {
      "globalReturn": true, //允许在全局作用域下使用 return 语句
      "impliedStrict": true, // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
      "jsx": true, //启用 JSX
      "experimentalObjectRestSpread": false //启用实验性的 object rest/spread properties 支持。(重要：这是一个实验性的功能ES9支持,在未来可能会有明显改变。 建议你写的规则 不要 依赖该功能，除非当它发生改变时你愿意承担维护成本。)
    }
  },
  "rules": { // 启用的规则及其各自的错误级别

  }
};