### 常量

####  Math.abs(num)

- 返回数字的绝对值

>  取值[Number.MIN_VALUE,Number.MAX_VALUE]

   ~~~javascript
Math.abs(-1); // 1
Math.abs('-1'); // 1
Math.abs(true); // 1
Math.abs(false); // 0
Math.abs(''); // 0
Math.abs(null); // 0
   ~~~

####  Math.acos(num)

- 返回一个数的反余弦值（单位为弧度）

> 返回一个0到pi（弧度）的数值

>  参数取值范围为[-1，1]

> 超出取值范围显示NaN

  ~~~javascript
Math.acos(true) === Math.acos(1)
Math.acos(false) === Math.acos(0) === Math.acos('')=== Math.acos(null)
  ~~~

#### Math.acosh()

- 返回一个数字的反双曲余弦值

>  参数取值范围为[1，Number.MAX_VALUE]

> 不在取值范围显示NaN

  ~~~javascript
undefined、空、非数字字符串返回NaN
Math.abs(undefined); // NaN
Math.abs(); // NaN
Math.abs('s'); // NaN
Math.abs()、Math.acos()、Math.acosh()
  ~~~

#### Math.E

- 欧拉常数，也是自然对数的底数, 约等于 2.718(2.718281828459045)

#### Math.LN2

- 2的自然对数, 约等于0.693(0.6931471805599453)

#### Math.LN10

- 10的自然对数, 约等于 2.303(2.302585092994046)

#### Math.LOG2E

- 以2为底E的对数, 约等于 1.443(1.4426950408889634)

#### Math.LOG10E

- 以10为底E的对数, 约等于 0.434(0.4342944819032518)

#### Math.PI

- 圆周率，一个圆的周长和直径之比，约等于 3.14159(3.141592653589793)

#### Math.SQRT1_2

- 1/2的平方根, 约等于 0.707(0.7071067811865476)

#### Math.SQRT2

- 2的平方根,约等于 1.414(1.4142135623730951)

​