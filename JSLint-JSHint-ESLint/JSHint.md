[JSHint GitHub](https://github.com/jshint/jshint)

### [JSHint Options](https://jshint.com/docs/options/)

#### 增强参数(Enforcing Options)

本类参数设为true，JSHint会产生更多告警

##### bitwise

禁用位运算符(如^，|，&)
位运算符在JS中很少使用，性能也较差，出现&也很可能是想写&&。

##### camelcase

警告此选项已被废弃，并将在JSHint的下一个主要版本中删除。JSHint将其范围限制在代码正确性问题上。如果希望强制执行与代码样式相关的规则，请查看JSCS项目。

此选项允许您强制所有变量名使用驼峰命名(camelCase)或全大写下划线命名(UPPER_CASE)
这是条最佳实践，关键不在于采用什么样的命名规则(比如纯小写配下划线)，而在于要有规则，在代码中看到不同的命名规则会让人头痛不已。

##### curly

if和while等语句中使用{}来明确代码块

```javascript
while (day)
  shuffle();
sleep();
```

虽然缩进表示两条语句都在循环中，但事实却是只有一句循环。

##### enforceall

警告此选项已被弃用，将在JSHint的下一个主要版本中删除。 
如果不自动选择用户使用新功能，则无法维护该选项。在JSHint的次要版本之间进行升级时，这可能会导致意外的警告/错误。
此选项是JSHint版本2.6.3中提供的最严格的JSHint配置的简写。它启用所有强制执行选项并禁用该版本中定义的所有放宽选项。

##### eqeqeq

使用===和!==替代==和!=
==和!=比较时会对前后元素进行自动转义，作为读者，需要动脑筋想这里可能有什么样的转义规则，加重负担；作为作者，其实很可能是不确定这段代码运行时是怎么样的，想要偷懒。
如果为真，JSHint会看你在代码中是否都用了===或者是!==，而不是使用==和!=。 我们建议你在比较0，''(空字符)，undefined，null，false和true的时候使用===和!===。

##### es3

警告此选项已被弃用，将在JSHint的下一个主要版本中删除。 请用esversion: 3代替。
此选项告诉JSHint您的代码需要遵守ECMAScript 3规范。如果您需要在旧版浏览器（例如Internet Explorer 6/7/8/9）和其他旧版JavaScript环境中执行程序，请使用此选项。

##### Es5

警告此选项已被弃用，将在JSHint的下一个主要版本中删除。 请用esversion: 5代替。
此选项启用ECMAScript 5.1规范中首先定义的语法。这包括允许保留关键字作为对象属性。

##### esversion

此选项用于指定代码必须遵守的ECMAScript版本。它可以采用以下值之一：

- 3 - 如果您需要程序在较旧的浏览器中可执行 - 例如Internet Explorer 6/7/8/9和其他旧版JavaScript环境
- 5- 启用ECMAScript 5.1规范中首先定义的语法。这包括允许保留关键字作为对象属性。
- 6- 告诉JSHint您的代码使用ECMAScript 6特定语法。请注意，并非所有浏览器都实现它们
- 7- 启用ECMAScript 7引入的语言功能。值得注意的补充：指数运算符。
- 8- 启用ECMAScript 8引入的语言功能。值得注意的补充：异步函数，共享内存和原子
- 9- 启用ECMAScript 9引入的语言功能。值得注意的补充：异步迭代，休息/传播属性和各种RegExp扩展

##### forin

在for in循环中使用Object.prototype.hasOwnProperty()来过滤原型链中的属性

```javascript
for (key in obj) {
	if (obj.hasOwnProperty(key)) {
		// We are sure that obj[key] belongs to the object and was not inherieted.
	}
}
```

for in遍历对象属性的时候，包括继承自原型链的属性，hasOwnProperty可以来判断一个属性是否是对象本身的属性而不是继承得来的。

##### freeze

禁止复写原生对象(如Array, Date)的原型

```javascript
/* jshint freeze:true */
Array.prototype.count = function (value) { return 4; };
// -> Warning: Extending prototype of native object: 'Array'.
```

为原生对象添加属性确实看上去很方便，但也带来了潜在的问题，一是如果项目中有多处为同一个对象添加了同样的属性（或函数），则很可能产生冲突；二是如果某段逻辑依赖于对象属性遍历，则可能产生错误。

##### futurehostile

此选项启用有关使用未来版本的JavaScript中定义的标识符的警告。虽然覆盖它们对于未实现它们的上下文没有任何影响，但在将代码库迁移到该语言的较新版本时，这种做法可能会导致问题。

##### globals

此选项可用于指定源代码中未正式定义的全局变量的白名单。当与undef选项结合使用时，这最有用，以便禁止针对项目特定全局变量的警告。
设置条目以true启用对该变量的读写。将其设置为false将触发JSHint将该变量视为只读。
另请参阅“环境”选项：一组选项，用作启用常见JavaScript环境中定义的全局变量的简写。
要globals在单个文件中进行配置，请参阅内联配置。

##### Immed

警告此选项已被弃用，将在JSHint的下一个主要版本中删除。 
JSHint将其范围限制为代码正确性问题。如果要强制执行与代码样式相关的规则，请查看JSCS项目。
此选项禁止使用立即函数调用，而不将它们包装在括号中。包装括号可以帮助读者理解表达式是函数的结果，而不是函数本身。

```javascript
匿名函数调用必须
(function() {
// body
}());
而不是
(function() {
// body
})();
```

这是为了表明，表达式的值是函数的结果，而不是函数本身。

##### indent

代码缩进宽度（空格数）
前面几个项目我比较喜欢4，新项目我又在尝试2。关键不在于是几，而在于大家都要设成一样的。

##### latedef

变量定义前禁止使用
JS的变量是“函数级作用域”，而不是通常所见的“块级作用域”，简单说

```javascript
function sum(numbers) {
for (var i = 0, n = numbers.length; i < n; i++) {
var sum = sum + numbers[i];
}
  return sum;
}
相当于
function sum(numbers) {
var i, n, sum;
  for (i = 0, n = numbers.length; i < n; i++) {
     sum = sum + numbers[i];
  }
  return sum;
}
```

这个行为叫做“变量声明提升”，为了不产生混淆，这条规则建议函数都使用第二种写法。

##### leanswitch

 	此选项禁止在switch陈述中使用不必要的条款，例如

```
switch (x) {
  case 1:
  default:
    z();
}
```

虽然这些条款在技术上是有效的，但它们不会影响程序行为并且可能表示错误的重构。

##### maxcomplexity

此选项可让您控制整个代码中的圈复杂度。Cyclomatic复杂度通过程序的源代码测量线性独立路径的数量。阅读更多关于维基百科的圈复杂度。

##### maxdepth

此选项可让您控制嵌套的嵌套方式：
// jshint maxdepth:2
function main(meaning) {
  var day = true;
  if (meaning === 42) {

    while (day) {
      shuffle();
      if (tired) { // JSHint: Blocks are nested too deeply (3).
          sleep();
      }
    }
  }
}

##### maxerr

JSHint中断扫描前允许的最大错误数
因为最终我们需要清零JSHint报错的，所以这个值用在对已有项目的扫描中。
设定错误的阈值，超过这个阈值jshint不再向下检查，提示错误太多。默认值为50。

##### Maxlen

警告此选项已被弃用，将在JSHint的下一个主要版本中删除。 JSHint将其范围限制为代码正确性问题。如果要强制执行与代码样式相关的规则，请查看JSCS项目。
一行中最大字符数
这个是为了减轻代码阅读的困难，简单说就是不要折行。
上面四个参数最终都是为了减小代码的复杂程度，简单轻巧的代码片段更容易阅读和维护。

##### maxparams

函数可以接受的最大参数数量
函数参数数量应该控制在3个以内，超出则可能造成使用困难，比如需要记忆参数顺序，难以设定默认值等。另外，在JS中可以很方便的使用参数对象来封装多个参数。

##### maxstatements

此选项允许您设置每个函数允许的最大语句数：
// jshint maxstatements:4
function main() {
  var i = 0;
  var j = 0;
  // Function declarations count as one statement. Their bodies
  // don't get taken into account for the outer function.
  function inner() {

    var i2 = 1;
    var j2 = 1;
    return i2 + j2;
  }
  j = i + j;
  return j; // JSHint: Too many statements per function. (5)
}

##### Newcap

警告此选项已被弃用，将在JSHint的下一个主要版本中删除。
构造函数名首字母必须大写
这条最佳实践是为了方便区分构造函数和普通函数，这样在直接调用大写字母开头的函数时，使用者就会想想是不是自己写错了。
不通过new而直接调用构造函数，会使得构造函数中的this指向global对象，从而产生错误。
PS. 有些高手可以通过在构造函数中判断this的指向来判断是否重新new自身，从而让构造函数也能直接调用产生新对象。但这有些高深，加重开发人员和使用人员的负担，也不利于统一编码风格。

##### noarg

禁止使用arguments.caller和arguments.callee
一方面这两个属性不是所有的浏览器都支持，另一方面这两个属性的使用会导致JS引擎很难优化代码，在未来的JS规范中会被去掉，所以不建议使用。

##### nocomma

此选项禁止使用逗号运算符。如果误用，逗号运算符可能会隐藏语句的值并促使错误的代码。

##### Noempty

警告此选项已被弃用，将在JSHint的下一个主要版本中删除。
禁止出现空的代码块
空的代码块并不是有害的，但是出现的话我们需要考虑下为什么。

##### nonbsp

禁止"non-breaking whitespace"
这是Mac键盘在某种情况下可以键入的字符，据说会破坏非UTF8编码的页面。

##### nonew

禁止使用构造器
new MyConstructor();
构造一个对象，却不给它赋值到某个变量，只是利用构造函数中的逻辑。这个行为完全可以用一个普通函数来完成，不应该借助构造器。

##### noreturnawait

异步函数解析其返回值。在大多数情况下，这使得返回AwaitExpression（本身就是Promise实例）的结果是不必要的。为清楚起见，通常最好直接返回异步操作的结果。值得注意的例外是在tryTryStatement 的子句中 - 更多信息，请参阅“await vs return vs return await”：
https://jakearchibald.com/2017/await-vs-return-vs-return-await/

##### predef

此选项允许您控制JSHint认为在环境中隐式定义的变量。使用字符串值数组配置它。使用连字符（ - ）字符前缀变量名称将从预定义变量的集合中删除该名称。
JSHint会将以这种方式声明的变量视为只读。
此选项不能在线指定; 它只能通过JavaScript API或外部配置文件使用

##### quotmark

警告此选项已被弃用，将在JSHint的下一个主要版本中删除。 
JSHint将其范围限制为代码正确性问题。如果要强制执行与代码样式相关的规则，请查看JSCS项目。
此选项强制使用整个代码中使用的引号的一致性。它接受三个值：true如果您不想强制执行某个特定样式但希望保持一致性，"single"如果您只想允许单引号，"double"只想允许双引号。

##### regexpu

此选项为不包含“u”标志的正则表达式启用警告。“u”标志扩展了对Unicode的支持，并且还支持更严格的解析规则。即使JSHint在不支持“u”标志的JavaScript引擎中执行，JSHint也会强制执行这些规则。

##### shadow

禁止在内部函数中重复声明全局变量

- "inner" - 仅检查在同一范围内定义的变量
- "outer" -  检查外部作用域中定义的变量
- false - 与inner相同
- true - 允许变量shadow

function test() {
var x = 10;
  if (true) {

      var x = 20;
  }
  return x;
}
基于“函数作用域”，多次定义变量和单次定义是没有区别的，但是会造成阅读障碍。

##### singleGroups

如果不严格要求，此选项禁止使用分组操作员。这种用法通常反映了对一元运算符的误解，例如：
// jshint singleGroups: true
delete(obj.attr); // Warning: Unnecessary grouping operator.

##### strict

强制使用ES5的严格模式； 严格模式 是一种选择加入受限制的JavaScript变体的方法。
Strict Mode是对JS用法的一些限制，过滤掉了容易出错的特性和不容易优化的特性。
"global" - 在全局必须有个指令 "use strict";
"implied" - lint the code as if there is the "use strict"; directive
false - disable warnings about strict mode
true - there must be a "use strict"; directive at function level;
通过在函数开头处加入'use strict';来触发严格模式，不要在文件头部加入，因为在JS链接的时候很可能就失效了。

##### trailingcomma

当逗号未放置在数组或对象文字中的最后一个元素之后时，此选项会发出警告。由于旧版本的IE中存在错误，过去的逗号曾经不鼓励，但是因为ES5它们的语义是标准化的。（参见 ＃11.1.4和 ＃11.1.5。）现在，它们有助于防止 严格使用分号有助于防止出现相同的视觉模糊。
例如，这段代码可能在上周二有效：
[

    b + c
].forEach(print);
但是如果向数组添加一个元素并忘记补偿丢失的逗号，则不会抛出语法错误，并且linter无法确定这是错误还是故意的函数调用。
[
    b + c
    (d + e)
].forEach(print);
如果总是使用逗号追加列表项，则不会出现这种歧义：
[
    b + c,
].forEach(print);
[
    b + c,
    (d + e),
].forEach(print);

##### undef

禁止使用不在全局变量列表中的未定义的变量
function test() {
var myVar = 'Hello, World';
console.log(myvar); // Oops, typoed here. JSHint with undef will complain
}
如果本地作用域里的变量没有使用var来声明，则会被放到全局作用域下面，众所周知，全局变量时罪恶的源泉。
JSHint会要求所有的非全局变量，在使用前都被声明。 如果你不在一个本地作用域内使用var的方式来声明变量，Javascript会把它放到全局作用域下面。这样会很容易引起错误

##### Unused

当您定义并且从不使用变量时，此选项会发出警告。它对于一般代码清理非常有用，尤其是在除了使用之外 undef。除此之外，此选项将警告您通过该global指令声明的未使用的全局变量。
设置true为时，used参数后面的未使用参数不会产生警告。此选项可以设置为vars仅检查变量，而不是函数参数，或strict检查所有变量和参数

禁止定义变量却不使用
function test(a, b) {
var c, d = 2;
return a + d;
}
test(1, 2);
// Line 1: 'b' was defined but never used.
// Line 2: 'c' was defined but never used.
这种变量通常是写作过程中遗留下来的垃圾，需要及时清理掉。

##### varstmt

设置为true时，禁止使用VariableStatements。例如：
// jshint varstmt: true
var a; // Warning: `var` declarations are forbidden. Use `let` or `const` instead.
松弛参数(Relaxing Options)
本类参数设为true，JSHint会产生更少告警。

##### asi

允许省略分号
JavaScript的语法允许自动补全分号，但是这一特性也会造成难以定位的错误，所以建议写代码时不要省略分号。
JSHint会无视没有加分号的行尾， 自动补全分号一直是Javascript很有争议的一个语法特性。默认，JSHint会要求你在每个语句后面加上分号，但是如果你认为自己理解了asi(automatic semicolon insertion)，你可以抛弃JSHint对分号的检查。

##### boss

允许在if，for，while语句中使用赋值
在条件语句中使用赋值经常是笔误if (a = 10) {}，但是牛人(boss)可以把这个特性用的很好，我们作为普通人就算了。
此选项禁止在预期进行比较时使用分配的警告。通常，代码就像if (a = 10) {}拼写错误一样。但是，在这样的情况下它可能很有用：
但是开启这个选项的化，JSHint就不会检查判断条件中的赋值 ，
for (var i = 0, person; person = people[i]; i++) {}
您可以通过用括号括起赋值来逐个使用此错误，例如：
for (var i = 0, person; (person = people[i]); i++) {}

##### debug

此选项禁止对debugger代码中的语句发出警告。debugger语句在产品代码中应该去掉。
elision
此选项告诉JSHint您的代码使用ES3数组省略元素或空元素（例如，[1, , , 4, , , 7]）。

##### eqnull

允许==null
==null通常用来比较=== null || === undefined；当时用==，null和undefined都会转化为false

##### esnext

允许ECMAScript 6规约
目前ES6的特性不是所有的浏览器都支持。
警告此选项已被弃用，将在JSHint的下一个主要版本中删除。 
请esversion: 6改用。
此选项告诉JSHint您的代码使用ECMAScript 6特定语法。请注意，并非所有浏览器都实现这些功能
更多信息：
ECMAScript规范6

##### evil

允许使用eval
eval有“注入攻击”的危险，另一方面也不利于JS引擎优化代码，所以尽量不要使用。
此选项禁止有关使用的警告eval。eval不鼓励使用它， 因为它可以使您的代码容易受到各种注入攻击，并且这使得JavaScript解释器很难进行某些优化。

##### expr

允许应该出现赋值或函数调用的地方使用表达式
此选项禁止显示有关表达式使用的警告，通常您希望看到分配或函数调用。大多数时候，这样的代码是一个错字。但是，规范并不禁止这样做，这就是为什么这个警告是可选的。
funcscope
允许在控制体内定义变量而在外部使用
function test() {
if (true) {
var x = 0;
}
  x += 1; // Default: 'x' used out of scope.

          // No warning when funcscope:true
}
虽然“变量声明提升”使得上面的代码可以运行通过，但是读者还是会感到头晕。

##### globalstrict

在strict中解释了，'use strict';放在全局域可能造成JS文件链接错误。
警告此选项已被弃用，将在JSHint的下一个主要版本中删除。 使用strict: "global"。
此选项禁止有关使用全局严格模式的警告。全局严格模式可以破坏第三方小部件，因此不建议这样做。
有关严格模式的详细信息，请参阅strict选项。

##### Iterator

此选项会禁止有关__iterator__属性的警告。并非所有浏览器都支持此属性，因此请谨慎使用。
lastsemic
允许单行控制块省略分号
var name = (function() { return 'Anton' }());
这是一个非常小众的用例，只有在使用自动JavaScript代码生成器时才有用。

##### laxbreak

允许不安全的行中断(与laxcomma配合使用)
警告此选项已被弃用，将在JSHint的下一个主要版本中删除。 
JSHint将其范围限制为代码正确性问题。如果要强制执行与代码样式相关的规则，请查看JSCS项目。
此选项可以抑制代码中可能存在不安全断行的大多数警告。它不会禁止有关逗号优先编码样式的警告。要压制你必须使用的那些laxcomma（见下文）

##### laxcomma

警告此选项已被弃用，将在JSHint的下一个主要版本中删除。 
JSHint将其范围限制为代码正确性问题。如果要强制执行与代码样式相关的规则，请查看JSCS项目。
此选项禁止有关逗号优先编码样式的警告：
var obj = {
name: 'Anton'
, handle: 'valueof'
, role: 'SW Engineer'
};

##### loopfunc

此选项禁止有关循环内部函数的警告。在循环内定义函数可能会导致如下错误：
在循环中定义函数经常会导致错误：
var nums = [];
for (var i = 0; i < 10; i++) {
nums[i] = function (j) {
return i + j;
};
}
nums0; // Prints 12 instead of 2
错误的根源在于function(j)中的i是对循环中的i的引用，而不是赋值。所以在最终函数执行时，i的值是10。
修改的方法是使用闭包：
var nums = [];
for (var i = 0; i < 10; i++) {
(function (i) {
nums[i] = function (j) {
return i + j;
};
}(i));
}

##### moz

警告此选项已被弃用，将在JSHint的下一个主要版本中删除。 
JSHint将其范围限制为代码正确性问题。如果要强制执行与代码样式相关的规则，请查看JSCS项目。
此选项禁止有关多行字符串的警告。多线字符串在JavaScript中可能是危险的，因为如果你不小心在转义字符（\）和新行之间放置了一个空格，那么所有地狱都会破裂。
请注意，即使此选项允许正确的多行字符串，它仍然会警告没有转义字符的多行字符串或转义字符和空格之间的任何内容。
// jshint multistr:true
var text = "Hello\
World"; // All good.
text = "Hello
World"; // Warning, no escape character.
text = "Hello\
World"; // Warning, there is a space after \

##### notypeof

允许非法的typeof操作
此选项可抑制有关无效typeof运算符值的警告。该运算符只有一组有限的可能返回值。默认情况下，JSHint会在您将结果与无效值（通常可能是拼写错误）进行比较时发出警告。
// 'fuction' instead of 'function'
if (typeof a == "fuction") { // Invalid typeof value 'fuction'
  // ...
}
除非您完全确定不需要这些检查，否则请勿使用此选项。

##### noyield

此选项禁止生成器函数的警告，其中没有 yield语句。

##### plusplus

禁止使用++和--
不是很赞成把这个选项打成true，不过乱用自增/自减确实也会带来阅读上的障碍。

此选项禁止使用一元递增和递减运算符。有些人认为++并且--降低了编码风格的质量，并且有一些编程语言 - 比如Python - 完全没有这些操作符。

##### proto

此选项会禁止有关__proto__属性的警告。
不是所有的浏览器都支持__proto__.

##### scripturl

此选项禁止显示有关使用以脚本为目标的URL的警告，例如javascript:...。
sub
允许person['name']
JSHint推荐使用person.name代替person['name']

警告此选项已被弃用，将在JSHint的下一个主要版本中删除。 
JSHint将其范围限制为代码正确性问题。如果要强制执行与代码样式相关的规则，请查看JSCS项目。
此选项可抑制有关使用[]符号的警告，因为它可以用点表示法表示：person['name']vs person.name.

##### supernew

允许new function() {...}和new Object;
此选项可以抑制有关“奇怪”结构的警告，例如 new function () { ... }和new Object;。这种结构有时用于在JavaScript中生成单例：
var singleton = new function() {
  var privateVar;
  this.publicMethod  = function () {}
  this.publicMethod2 = function () {}
};

##### validthis

允许严格模式下在非构造函数中使用this
当代码以严格模式运行并且您this在非构造函数中使用时，此选项会禁止有关可能的严格违规的警告。您应该只在函数范围内使用此选项 - 当您肯定您this在严格模式下使用时有效（例如，如果您使用函数调用函数 Function.call）。
注意：此选项只能在函数范围内使用。如果您尝试全局设置此选项，JSHint将失败并显示错误。

##### withstmt

此选项禁止有关使用该with语句的警告。with语句的语义可能导致开发人员之间的混淆和全局变量的意外定义。
更多信息：
声明被认为是有害的

#### 环境参数(Enviroments)

预定义一些全局变量，如node等，没什么好理解的。

##### browser

此选项定义了现代浏览器暴露全局：从好老一路document，并navigator到HTML5 FileReader在浏览器世界和其他新的发展。
注意：此选项不会公开类似alert或的 变量console。有关devel更多信息，请参阅选项

##### browserify

此选项定义使用Browserify工具构建项目时可用的全局变量。

##### couch

此选项定义CouchDB公开的全局变量 。CouchDB是一个面向文档的数据库，可以使用JavaScript以MapReduce方式查询和索引。

##### devel

该选项定义通常用于记录，旧的调试全局：console，alert，等；它通常是一个好主意，不把它们运生产，因为，例如，console.log在Internet Explorer的旧版休息。

##### dojo

此选项定义Dojo Toolkit公开的全局变量。

##### jasmine

此选项定义Jasmine单元测试框架公开的全局变量。

##### jquery

此选项定义jQuery JavaScript库公开的全局变量。

##### mocha

此选项定义由Mocha单元测试框架的“BDD”和“TDD”UI公开的全局变量 。

##### module

此选项通知JSHint输入代码描述ECMAScript 6模块。所有模块代码都被解释为严格模式代码。

##### mootools

此选项定义MooTools JavaScript框架公开的全局变量 

##### node

当您的代码在Node运行时环境中运行时，此选项定义可用的全局变量。Node.js是一个服务器端JavaScript环境，它使用异步事件驱动模型。此选项还会跳过一些在浏览器环境中有意义但在Node中没有意义的警告，例如文件级use strict编译指示和console.log语句。

##### nonstandard

此选项定义非标准但广泛采用的全局变量，例如 escape和unescape。

##### phantom

当您的内核在PhantomJS运行时环境中运行时，此选项定义可用的全局变量。PhantomJS 是一个带有JavaScript API的无头WebKit脚本。它具有对各种Web标准的快速和本机支持：DOM处理，CSS选择器，JSON，Canvas和SVG。

##### prototypejs

此选项定义Prototype JavaScript框架公开的全局变量 。

##### qunit

此选项定义由QUnit单元测试框架公开的全局变量。
rhino
当您的代码在Rhino运行时环境中运行时，此选项定义可用的全局变量。Rhino 是一个完全用Java编写的JavaScript的开源实现。

##### shelljs

此选项定义ShellJS库公开的全局变量。
typed
此选项为类型化数组构造函数定义全局变量。
更多信息：
JavaScript类型数组

##### worker

当您的代码在Web Worker中运行时，此选项定义可用的全局变量。Web Workers为Web内容提供了一种在后台线程中运行脚本的简单方法。

##### wsh

当您的代码作为Windows脚本宿主的脚本运行时，此选项定义可用的全局变量。

##### yui

此选项定义由YUI JavaScript框架公开的全局变量。

##### quotemark


统一使用单引号或双引号

这个最佳实践要求代码风格统一，我比较喜欢统一成单引号。

这是为什么规定最佳实践的一个好例子，在写到字符串的时候我们就不用考虑使用单引号好还是用双引号好，就都用单引号，这在一定程度上也减轻了我们的思考负担。



##### trailing


禁止行尾空格



##### maxdepth


代码块中可以嵌入{}的最大深度



##### maxstatement

- 函数中最大语句数

##### maxcomplexity

- 函数的最大圈复杂度

##### multistr

- 允许多行字符串



##### smarttabs

- 允许混合tab和space排版
- SmartTabs方法使用tab进行缩进，使用空格进行代码对齐。比较高级的用法，有兴趣的话可以尝试下。


