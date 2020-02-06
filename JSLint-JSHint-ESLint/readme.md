### Lint

在计算机科学中，lint是一种工具的名称，它用来标记代码中，某些可疑的、不具结构性（可能造成bug）的语句。它是一种静态程序分析工具，最早适用于C语言，在UNIX平台上开发出来。后来它成为通用术语，可用于描述在任何一种编程语言中，用来标记代码中有疑义语句的工具。— by wikipedia

优势
避免低级bug，找出可能发生的语法错误。使用未声明变量、修改 const 变量……

提示删除多余的代码。声明而未使用的变量、重复的 case ……

确保代码遵循最佳实践。可参考 airbnb style、javascript standard

统一团队的代码风格。加不加分号？使用 tab 还是空格？

#### JSLintjs最早的lint工具lint规则不可自定义

JSLint 可以说是最早出现的 JavaScript 的 lint 工具，由 Douglas Crockford (《JavaScript 语言精粹》作者) 开发。从《JavaScript 语言精粹》的笔风就能看出，Douglas 是个眼里容不得瑕疵的人，所以 JSLint 也继承了这个特色，JSLint 的所有规则都是由 Douglas 自己定义的，可以说这是一个极具 Douglas 个人风格的 lint 工具，如果你要使用它，就必须接受它所有规则。值得称赞的是，JSLint 依然在更新，而且也提供了 node 版本：node-jslint。

#### JSHint继承自JSLint增强了可配置性

由于 JSLint 让很多人无法忍受它的规则，感觉受到了压迫，所以 Anton Kovalyov (现在在 Medium 工作) 基于 JSLint 开发了 JSHint。JSHint 在 JSLint 的基础上提供了丰富的配置项，给了开发者极大的自由，JSHint 一开始就保持着开源软件的风格，由社区进行驱动，发展十分迅速。早期 jQuery 也是使用 JSHint 进行代码检查的，不过现在已经转移到 ESLint 了。

#### ESLint

- 可定义的rules
- 完善的插件机制
- 可定位到具体的rules

1. 配置方式

   1.1 使用注释把 lint 规则直接嵌入到源代码中(/* eslint eqeqeq: "error" */)

   1.2  使用配置文件进行 lint 规则配置

ESLint 由 Nicholas C. Zakas (《JavaScript 高级程序设计》作者) 于2013年6月创建，它的出现因为 Zakas 想使用 JSHint 添加一条自定义的规则，但是发现 JSHint 不支持，于是自己开发了一个。

ESLint 号称下一代的 JS Linter 工具，它的灵感来源于 PHP Linter，将源代码解析成 AST，然后检测 AST 来判断代码是否符合规则。ESLint 使用 esprima 将源代码解析吃成 AST，然后你就可以使用任意规则来检测 AST 是否符合预期，这也是 ESLint 高可扩展性的原因。
但是，那个时候 ESLint 并没有大火，因为需要将源代码转成 AST，运行速度上输给了 JSHint ，并且 JSHint 当时已经有完善的生态（编辑器的支持）。真正让 ESLint 大火是因为 ES6 的出现。

ES6 发布后，因为新增了很多语法，JSHint 短期内无法提供支持，而 ESLint 只需要有合适的解析器就能够进行 lint 检查。这时 babel 为 ESLint 提供了支持，开发了 babel-eslint，让ESLint 成为最快支持 ES6 语法的 lint 工具。

#### JSCS

