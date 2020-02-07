### 基本知识

JSON是一种数据格式，并不从属于JS，其他语言也有用到

~~~json
{
    "personName":"xiaoxiao" 
}
// 简单值： 字符串/布尔值/数字/null(不能是undefined)
~~~

表示一组无序的键值对

- JSON无声明变量，即没有变量的概念，结尾无分号
- 同一个JSON体中绝对不能出现两个同名属性
- 属性名任何时候都要加双引号
- 不存在注释

不支持JSON解析的浏览器，可以使用shim：https://github.com/douglascrockford/JSON-js。

### JSON方法

#### stringify()序列化为 JSON 字符串

~~~javascript
var b = {
  title: '名字',
  age:12,
  name: null,
  hobit: undefined,
  bolean: true,
  fn: function(){return this.a}
}
JSON.stringify(b)
"{"title":"名字","age":12,"name":null,"bolean":true}"
// 在序列化 JavaScript 对象时，所有函数及原型成员都会被有意忽略，不体现在结果中。此外，值为undefined 的任何属性也都会被跳过。结果中最终都是值为有效 JSON 数据类型的实例属性
// 参数1：JSON体；参数二：过滤的参数(属性或函数)；参数三：字符串缩进(缩进可替换为字符串)，最大缩进空格数为 10，所有大于 10 的值都会自动转换为 10。
~~~

##### toJSON方法



#### parse()解析为原生 JavaScript 值

~~~javascript
JSON.parse("{\"title\":\"名字\",\"age\":12,\"name\":null}")
// {title: "名字", age: 12, name: null}
// 不是有效的JSON则会抛出语法错误
// 经常使用try {JSON.parse()} catch(err){}
// 参数1：反序列化参数；参数2：过滤函数，或还原函数
~~~



