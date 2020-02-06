### length 

- 返回或者设置一个数组中的元素个数

>  值为 0 到 2<sup>32</sup>-1 的整数
>
>  可以设置length属性的值来截断任何数组，当扩展时，扩展的元素值为undefined

~~~javascript
	var a = [1,2];
    console.log(a.length);//2

    增加length
    var person = ['ss','dd'];
    person.length = 5;
    console.log(person); // ['ss', 'dd']
    console.log(person.length); // 5

    减少length,将对应元素值也删除
    var person = ['ss', 'dd','ff','gg','ee'];
    person.length = 2;
    console.log(person); // ['ss', 'dd']
    console.log(person.length); // 2

    Array.length属性的属性特性
    Writable(true)：如果设置为false，该属性值将不能被修改。
    Configurable(false)：如果设置为false，删除或更改任何属性都将会失败。
    Enumerable(false)：如果设置为 true ，属性可以通过迭代器for或for...in进行迭代。
    var person = ['ss', 'dd','ff','gg','ee'];
    Object.defineProperty(person,"length",{writable:false});
    person.length = 2;
    console.log(person); // ['ss', 'dd','ff','gg','ee']
    console.log(person.length); // 5
    console.log(person[3]); //'gg'
~~~

### prototype

-  表示 Array 构造函数的原型，并允许您向所有Array对象添加新的属性和方法

~~~javascript
Symbol属性 @@unscopable 包含了所有 ES2015 (ES6) 中新定义的且并未被更早的 ECMAScript 标准收纳的属性名
Object.keys(Array.prototype[Symbol.unscopables])
// ["copyWithin", "entries", "fill", "find", "findIndex", "flat", "flatMap", "includes", "keys", "values"]
~~~

### Array.from()

- 从一个类似数组或可迭代对象中创建一个新的，浅拷贝的数组实例。

> Array.from(arrayLike[, mapFn[, thisArg]])
>
> - 参数：
>
>   - arrayLike(不能为undefined、null)
>
>     伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）
>
>     可迭代对象（可以获取对象中的元素,如 Map和 Set 等）
>
>   - mapFn(可选参数)
>
>     如果指定了该参数，新数组中的每个元素会执行该回调函数。
>
>     相当于Array.from(obj).map(mapFn, thisArg)
>
>   - thisArg (可选参数)
>
>   ​        可选参数，执行回调函数 mapFn 时 this 对象。
>
> - 返回值：一个新的数组实例

~~~javascript
Array.from.length === 1

// 参数为string时
Array.from('123'); // ["1", "2", "3"]
// 参数为Set时
Array.from(new Set(['12', 23])) //["12", 23]
// 参数为Map时
let m = new Map([
  [1, 2],
  [2, 4],
  [4, 8]
]);
Array.from(m); // [[1, 2], [2, 4], [4, 8]]

Array.from(['a', 's', 'd'], (v, i) => v + i)
//["a0", "s1", "d2"]

Array.from({
  length: 5
}, (v, i) => v)
// [undefined, undefined, undefined, undefined, undefined]

数组去重
Array.from(new Set(arr))
~~~

 ### Array.isArray()

- 判定一个值是不是Array

> Object.prototype.toString.call(arg) === '[object Array]';
>
> 参数：可选
>
> 返回值：true  |  false

```javascript
// 当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes.
// true
Array.isArray([]);
Array.isArray(Array.prototype);
// false
Array.isArray();
Array.isArray(null);
Array.isArray(undefined);
Array.isArray({});
Array.isArray('');
Array.isArray(123);
```
[严格判定JavaScript对象是否为数组](http://web.mit.edu/jwalden/www/isArray.html)。

### Array.of()

- 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型

> 相当于：Array.prototype.slice.call(arguments);
>
> 参数：随意
>
> 返回值：新的Array实例

```javascript
 Array.of(7);// [7]
 Array.of([],[12]) // [[],[12]]
 Array.of(undefined); // [undefined]
```
### Array.prototype.concat()

- 合并两个或多个数组。不会更改现有数组

> arr.concat(arr1,arr2,arr3……)
>
> 参数：可选
>
> 返回值：一个新的数组

```javascript
//concat方法不会改变this或任何作为参数提供的数组，而是返回一个浅拷贝，它包含与原始数组相结合的相同元素的副本。 原始数组的元素将复制到新数组中，如下所示：
//对象引用（而不是实际对象）：concat将对象引用复制到新数组中。 原始数组和新数组都引用相同的对象。 也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的。 这包括也是数组的数组参数的元素。
//数据类型如字符串，数字和布尔（不是String，Number 和 Boolean 对象）：concat将字符串和数字的值复制到新数组中。
    var person1 = ['n1', 'n2'];
    var person2 = ['n3', 'n2'];
    var person3 = person1.concat(person2);
    person1[0] = 'n0';
    console.log(person1); // ["n0", "n2"]
    console.log(person3); // ["n1", "n2", "n3", "n2"]

    var person1 = ['n1', ['n2']];
    var person2 = ['n3'];
    var person3 = person1.concat(person2);
    person1[1][1] = 'n0';
    console.log(person1); // ["n1", ["n2", "n0"]]
    console.log(person3); // ["n1", ["n2", "n0"], "n3"]

    var person1 = ['n1'];
    var person3 = person1.concat(undefined); // ["n1",undefined]
```
### Array.prototype.copyWithin()

- 浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度

> arr.copyWithin(target[, start[, end]])
>
> 参数：
>
> - target:0 为基底的索引，复制序列到该位置。如果是负数，target 将从末尾开始计算。
>
>   如果 target 大于等于 arr.length，将会不发生拷贝。如果 target 在 start 之后，复制的序列将被修改以符合 arr.length
>
> - start: 0 为基底的索引，开始复制元素的起始位置。如果是负数，start 将从末尾开始计算。
>
>   如果 start 被忽略，copyWithin 将会从0开始复制
>
> - end: 0 为基底的索引，开始复制元素的结束位置。copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。如果是负数， end 将从末尾开始计算
>
>   如果 end 被忽略，copyWithin 方法将会一直复制至数组结尾（默认为 arr.length）
>
> 返回值：改变后的数组

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3, 4); // [4, 2, 3, 4, 5]
```
### Array.prototype.entries()

- 一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对

> arr.entries();

```javascript
var arr = ["a", "b", "c"];
var iterator = arr.entries();
console.log(iterator.next()); //{value: Array(2), done: false}
// 二维数组按行排序，在原数组改动
//  1. 使用entries
function sortArr(arr) {
  var goNext = true;
  var entries = arr.entries();
  while (goNext) {
    var result = entries.next();
    if (result.done !== true) {
      result.value[1].sort((a, b) => a - b);
      goNext = true;
    } else {
      goNext = false;
    }
  }
  return arr;
}
// 1. 使用for……of循环
function sortArr(arr) {
  for (let item of arr) {
    item.sort((a, b) => a - b);
  }
  return arr;
}
```
### Array.prototype.every()

- 测试一个数组内的所有元素是否都能通过某个指定函数的测试

> arr.every(function(val, ind, arr){}，thisArg)
>
> 返回值：Boolean
>
> 碰到第一个不符合的val时，返回false，都符合时返回false;

```javascript
var a = [1, 2, 3].every(function (val, ind, arr) {
  console.log(val, ind, arr);
  return val > 0;
})
console.log(a); //true
```
### Array.prototype.fill()

- 一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

> arr.fill(value,start,end);
>
> 参数：value填充数组元素的值
>
> - start起始索引，默认0；为负数时索引变为length+start;超出length,则不改变
> - end终止索引，默认this.length；为负数时索引变为length+end;超出length,则不改变
> - start没有end大时，不改变
>
> 返回值：修改后的数组

```javascript
[].fill.call({
  length: 3
}, 4); // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```
### Array.prototype.filter()

- 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素

> arr.filter(fn(value,index,arr),thisArg);
>
> 参数：thisArg改变fn中的this指向
>
> 返回值：一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。

```javascript
var a = [1, 2, 3].filter(function (val, ind, arr) {
  console.log(val, ind, arr);
  console.log(this); // [23]
  return val > 0;
}, [23])
```
### Array.prototype.find()

- 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined

> arr.find(fn(el,index,arr),thisArg)

```javascript
var a = [1, 2, 3].find(function (val, ind, arr) {
  return val > 0;
})
console.log(a); // 1
```
### Array.prototype.findIndex()

- 返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1

> arr.findIndex(fn(el,index,arr),thisArg)

```javascript
var a = [1, 2, 3].findIndex(function (val, ind, arr) {
  console.log(val, ind, arr)
  return val > 2;
})
console.log(a); // 2
```
### Array.prototype.flat()

- 会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回

> var newArray = arr.flat(depth)
>
> 参数：可选；结构深度，默认值为 1
>
> 返回值：一个包含将数组与子数组中所有元素的新数组
>
> 注：会移除数组中的空项

```javascript
[1,2,['',3,['',4]]].flat(1);// [1, 2, "", 3, Array(2)]
[,,[,,]].flat();// []
```

### Array.prototype.flatMap()

- 首先使用映射函数映射每个元素，然后将结果压缩成一个新数组

> var new_array = arr.flatMap(fn(currentValue,index.arr) {},thisArg) // 返回新数组的元素
>
> 参数：
>
> - currentValue：当前正在数组中处理的元素
> - index：数组中正在处理的当前元素的索引
> - array：被调用的 `map` 数组
> - thisArg：执行 fn函数时 使用的`this` 值。
>
> 返回值：一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 `depth` 值为1。

~~~javascript
var arr1 = [1, 2, 3, 4];
arr1.flatMap(x => [[x * 2]]); // [[2],[4],[6],[8]]

let arr = ["今天", "!", "早上好"]
arr.flatMap(s => s.split('')); //["今", "天", "!", "早", "上", "好"]
~~~

### Array.prototype.forEach()

- 对数组的每个元素执行一次提供的函数

> arr.forEach(callback(val,index,arr){},thisArg);
>
> 参数：当前值；当前索引；对应数组；改变callback中this指向，没有则指向全局对象
>
> 返回值：undefined
>
> 注：运行中不能终止或者跳出循环

~~~javascript
// 数组中对应位置没项时会跳过执行
[2, 5, , 9].forEach(function(val, index, arr){
    console.log('a[' + index + '] = ' + val);
});
// 在遍历中修改原数组会影响结果输出
var words = ['one', 'two', 'three', 'four']
words.forEach(function (word, ind) {
  console.log(word, ind);// one 0; two 1; four 2
   if (word === 'two') {
     words.shift();
   }
});
~~~

### Array.prototype.includes()

- 判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

> arr.includes(value,fromIndex)
>
> 参数：需要查找的元素值；从哪开始查找
>
> 返回值：true  |  false

~~~javascript
[12,23].includes(12); // true
[12,23].includes(12,2); // 索引值大于数组length时则不遍历，返回false
[12,23].includes(12,-2); // 索引值小于-数组length时则正常遍历
[{}].includes({}); //对象数组不能使用includes方法来检测 返回false
~~~

### Array.prototype.indexOf()

- 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1

> arr.indexOf(searchElement, fromIndex = 0)
>
> 参数：查找元素，从哪开始查找
>
> - 如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。
> - 如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.
>
> 返回值：首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1

~~~javascript
[2, '2', 9].indexOf('2'); // 1
// 找到相同元素所有位置
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
~~~

### Array.prototype.lastIndexOf()

- 返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 `fromIndex` 处开始。

> arr.lastIndexOf(searchElement, fromIndex = arr.length - 1)
>
> 参数：被查找的元素；从此位置开始逆向查找
>
> 返回值：	数组中最后一个元素的索引，如未找到返回-1
>
> `lastIndexOf` 使用严格相等

### Array.prototype.join()

- 将一个数组（或一个[类数组对象](https://developer.mozilla.org/zh-CN//docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符

> arr.join([separator])
>
> 指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果省略()，数组元素用逗号分隔。默认为 ","。如果separator是空字符串("")，则所有元素之间都没有任何字符。
>
> 一个所有数组元素连接的字符串。如果 `arr.length`为0，则返回空字符串。

~~~javascript
[12,23,[12,[23,34]]].join('-'); //"12-23-12,23,34"
[12,23,null,undefined,[],[[]],{},23].join('-'); // "12-23-----[object Object]-23"
~~~

### Array.prototype.keys()

- 返回一个包含数组中每个索引键的`Array Iterator`对象

> arr.keys()
>
> 返回值：一个新的 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array) 迭代器对象

~~~javascript
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
~~~

### Array.prototype.map()

- 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

> var new_array = arr.map(callback(currentValue, index, array) {},thisArg)
>
> 返回值：一个新数组，每个元素都是回调函数的结果

> 使用 map 方法处理数组时，数组元素的范围是在 callback 方法第一次调用之前就已经确定了。在 map 方法执行的过程中：原数组中新增加的元素将不会被 callback 访问到；若已经存在的元素被改变或删除了，则它们的传递到 callback 的值是 map 方法遍历到它们的那一时刻的值；而被删除的元素将不会被访问到。

~~~javascript
var a = Array.prototype.map.call("Hello", function(x) { 
  return x.charCodeAt(0); 
}); // [72, 101, 108, 108, 111]
var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});
["1", "2", "3"].map(parseInt); // [1, NaN, NaN] 传值为当前正在遍历的元素，索引为parseInt的参数
~~~

### Array.prototype.pop()

- 从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

> arr.pop()
>
> 从数组中删除的元素(当数组为空时返回[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined))
>
> `pop` 方法有意具有通用性。该方法和 [`call()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 或 [`apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 一起使用时，可应用在类似数组的对象上。`pop`方法根据 `length`属性来确定最后一个元素的位置。如果不包含`length`属性或`length`属性不能被转成一个数值，会将`length`置为0，并返回`undefined`。

~~~javascript
let myFish = ["angel", "clown", "mandarin", "surgeon"];
let popped = myFish.pop();
console.log(myFish);  // ["angel", "clown", "mandarin"]
console.log(popped); // surgeon
~~~

### Array.prototype.push()

- 将一个或多个元素添加到数组的末尾，并返回该数组的新长度

> arr.push(element1, ..., elementN)
>
> 参数：被添加到数组末尾的元素
>
> 返回值：新数组的length

~~~javascript
Array.prototype.push.apply(['vegetables'], ['moreVegs']);// 2
~~~

### Array.prototype.reduce()

- 对数组中的每个元素执行一个由您提供的**reducer**函数(升序执行)，将其结果汇总为单个返回值。

> arr.reduce(callback(accumulator, currentValue, index, array), initialValue)
>
> 参数：累计器累计回调的返回值;当前值；当前索引；数组arr；第一次调用时的第一个值，无时默认数组第一个参数
>
> 返回值：函数累计处理的结果

~~~javascript
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 10
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// 每个元素出现次数
var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
~~~

### Array.prototype.reduceRight()

- 接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。

> arr.reduce(callback(accumulator, currentValue, index, array), initialValue)
>
> 参数：累计器累计回调的返回值;当前值；当前索引；数组arr；第一次调用时的第一个值，无时默认数组第一个参数
>
> 返回值：函数累计处理的结果

### Array.prototype.reverse()

- 将数组中元素的位置颠倒,并返回该数组的引用。该方法会改变原数组

> arr.reverse()
>
> `reverse` 方法颠倒数组中元素的位置，并返回该数组的引用

~~~javascript
var sourceArray = ['one', 'two', 'three'];
var reverseArray = sourceArray.reverse();
console.log(sourceArray ) // ['three', 'two', 'one']
console.log(sourceArray === reverseArray); // true
~~~

### Array.prototype.shift()

- 数组中删除**第一个**元素，并返回该元素的值。此方法更改数组的长度

> arr.shift()
>
> 从数组中删除的元素; 如果数组为空则返回[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 。

~~~javascript
var person = ['zs','ls'];
var del = person.shift();
console.log(person); // ['ls']
console.log(del); // 'zs'
~~~

### Array.prototype.slice()

- 返回一个新的数组对象，这一对象是一个由 `begin` 和 `end` 决定的原数组的**浅拷贝**（包括 `begin`，不包括`end`）。原始数组不会被改变

> arr.slice(begin, end)
>
> 参数：begin 默认为0； end默认为0
>
> 返回值：一个含有被提取元素的新数组。
>
> begin  - end <= 0时，返回空数组

### Array.prototype.some()

- 测试是否至少有一个元素可以通过被提供的函数方法。该方法返回一个Boolean类型的值。

> arr.some(callback(element, index, array){}, thisArg)
>
> 如果回调函数返回至少一个数组元素的[truthy]()值，则返回**true**；否则为`false`。

~~~javascript
[2, 5, 8, 1, 4].some(x => x > 10); 
~~~

### Array.prototype.sort() 

- 用[原地算法](https://en.wikipedia.org/wiki/In-place_algorithm)对数组的元素进行排序，并返回数组。排序算法现在是[稳定的](https://zh.wikipedia.org/wiki/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95#.E7.A9.A9.E5.AE.9A.E6.80.A7)。默认排序顺序是根据字符串Unicode码点。

> arr.sort([compareFunction])
>
> 返回值：排序后的数组。请注意，数组已原地排序，并且不进行复制。

~~~javascript
function compare(a, b) {
  if (a < b ) {           // 按某种排序标准进行比较, a 小于 b
    return -1; //小于0， a排在b之前
  }
  if (a > b ) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
[1,2,3].sort(compare); //
~~~

### Array.prototype.splice()

- 通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

> array.splice(start, deleteCount, item1, item2, ...)
>
> 参数：起始位置，删除个数，回填内容
>
> 返回值：由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

### Array.prototype.toLocaleString()

- 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 `toLocaleString` 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。

> arr.toLocaleString(locales,options);
>
> 参数：带有BCP 47语言标记的字符串或字符串数组([`Intl`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl))
>
> options:一个可配置属性的对象,对于数字和日期
>
> 返回值：表示数组元素的字符串

~~~javascript
['ss', 500, , null,undefined,[],[[12]],{}].toLocaleString()
// "ss,500,,,,,12,[object Object]"
~~~

### Array.prototype.toSource()

- 非标准，尽量不要使用(Firefox支持)

> array.toSource()
>
> 返回一个字符串,代表该数组的源代码.

### Array.prototype.toString()

- ​

> arr.toString()
>
> 返回值：一个表示指定的数组及其元素的字符串。

~~~javascript
['ss', 500, , null,undefined,[],[[12]],{}].toString();
// "ss,500,,,,,12,[object Object]"
~~~

### Array.prototype.unshift()

- 将一个或多个元素添加到数组的**开头**，并返回该数组的**新长度(该**方法修改原有数组**)**。

> arr.unshift(element1, ..., elementN)
>
> 要添加到数组开头的多个元素
>
> 返回值：当一个对象调用该方法时，返回其 [`length`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length) 属性值。

~~~javascript
let arr = [1, 2];
let len = arr.unshift(0); // arr [0,1,2] len 3
~~~

### Array.prototype.values()

- **values()** 方法返回一个新的 **Array Iterator** 对象，该对象包含数组每个索引的值

> arr.values()

~~~javascript
let arr = ['w', 'y', 'k', 'o', 'p'];
let eArr = arr.values();
console.log(eArr.next().value); // 'w' 也可以使用for……of……来遍历循环

~~~













