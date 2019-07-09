[angular](https://angular.io/)

[angular中文网](https://www.angular.cn/)

### Angular简介

- 一款非常优秀的前端高级JS框架
- 最早由Misko Hevery等人创建
- 2009年被Google公司收购，用于其多款产品
- 目前有一个全职的开发团队继续开发和维护这个库
- 有了这一类框架就可以轻松构建SPA应用程序
- 其核心就是通过指令扩展了HTML，通过表达式绑定数据到HTML

### [版本](https://code.angularjs.org/)https://code.angularjs.org/

- V1.2及以下(不常用)
- V1.3及以上(主流)
- V2.X
- V4.X

a标签的跳转

请求》获取服务器数据（整个完整的页面）》整体渲染

单页面跳转

文件中有js代码，会发送ajax请求》j'son数据，得到返回的数据》渲染

区别：ajax异步，无刷新；没有跳转白屏；减少网络请求

### 值+1

### 指令

- 在angular中以ng-开头的html标签属性，称之为指令
- ng-app:选择angular去管理哪一部分的html代码，管理的是ng-app所在元素的子元素及其本身
  作用：相当于一个入口
- ng-click:注册点击事件
- ng-model：可以指定一个属性值，这个属性就表示当前文本框的value值
- ng-init：可以对数据进行初始化操作，给一个默认值。


### 模块

- 创建模块：var app = angular.module('模块名',[])
- 注意：如果不依赖其他模块，也需要提供一个空的数组
- 需要在ng-app指令的属性值上写我们的模块名

### ViewModel

- $scope实际上就是MVVM中所谓的VM(视图模型)

- 正是因为$scope在angular中大量的使用甚至盖过了C(控制器)的概念，所以很多人把angular称之为MVVM框架

  ​

### 模块的划分方式

- 1.按照项目中的功能
- 2.按照项目中文件的类型
- ​

### 控制器

- 创建控制器：app.controller('控制器的名字',function($scrope){})
- 如果需要改变页面{{test}}的值，就直接改变$scrope.test值就可以
- 注意：要显示数据模型的值，就要在它所在标签或者父标签上加上ng-controller指令
- ng-controller的值就是我们想要显示的数据模型所在控制器的名字:ng-conroller='控制器的名字'

### 传统方式创建控制器

angular会把全局的函数当作控制器（1.2.X)

缺点：容易造成全局污染

### 面向对象的方式创建控制器

~~~
<!-- 这里的obj代表控制器回掉函数new出来的对象 -->
  <div ng-controller="myStrl as obj">
    {{name}} {{obj.name}}
  </div>
  <script src="./lib/angular.js"></script>
  <script>
    var app = angular.module('myApp', []);
    // angular会把这两个参数当作构造函数使用
    app.controller('myStrl', function ($scope) {
      $scope.name = 'obj';
      this.name = 'aa';
    })
  </script>
~~~

### 安全的方式创建控制器

为了避免压缩代码后无法运行

~~~
app.controller('myCtrl',['$scope','$log',function($scope,$log){
      $log.log('log');
      $scope.age = 16;
    }])
~~~



### 双向数据绑定

- 数据模型($scope.属性)的改变，会影响内容的显示（文本框的值）
- 我们改变了文本框的值，对应的数据模型发生了改变。
- 这种相互影响的关系我们就称之为双向数据绑定

### 回顾并总结Angular开发流程

- 1.引入angular.js文件
- 2.在html中加上ng-app指令，告诉angular要管理页面哪一部分代码
- 3.在js中创建模块`angular.module('myApp',[])`,给ng-app指令一个值，这个值就是这个模块的模块名：myApp
- 4.在js中创建控制器`x.controller('控制器名字'，function(){})`，我们需要在页面上加上ng-controller指令，指令的值为控制器的名字`ng-controller='控制器名字'`
- 5.建模：根据页面结构，抽象出具体的js对象
- 6.通过$scope做一些初始化操作
- 7.通过`ng-model,ng-click,{{}}`把$scope的属性在页面展示出来
- 8.在js写一些具体的逻辑

### MVC   思想

- M：Model:存储，获取数据
- V: view视图，把数据呈现给用户
- C：Controller 做一些控制和调度的操作,逻辑

> MVC只是一种思想，约定了我们的代码应该如何取组织
>
> 让我们代码的每一部分都有一个明确的职责
>
> 有利于后期的维护性（并不是提高了代码的执行性能，有可能多行代码放到多个方法中，多个方法再放在多个文件中

### $scope

- 视图和控制器之间的数据桥梁
- 用于在视图和控制器之间传递数据
- 用来暴露数据模型（数据，行为）

view <= $scope作用域 => Controller

### 自定义指令

- 自定义指令无外乎增强了HTML，提供了额外的功能
- 内部指令基本能满足我们的需求
- 少数情况下我们有一些特殊的需求，可以通过自定义指令的方式实现

#### directive

~~~html
<div mybtn></div>
app.directive(‘mybtn',[function(){
return {
//封装的UI
template: <div></div>}
}])
~~~

第一个参数：指令的名字,必须是驼峰命名法

第二个参数：和控制器第二个参数类似

tool.oschina.net/jscompress压缩代码网站

### 自定义指令

- 自定义指令无外乎增强了HTML，提供了额外的功能
- 内部指令基本能满足我们的需求
- 少数情况下我们有一些特殊的需要，可以通过自定义指令的方式实现

#### 创建自定义指令

- *注意：名字要符合驼峰命名法*

自定义指令中回调里返回的对象的属性

template:需要提供一个html字都串，最终会被添加到当前页面使用了自定义指令的

templateUrl:需要提供一个html文件路径，angular会发送请求，请求对应的文件，把文件的内容作为模板插入到自定义指令中间

也可以提供一个script标签的id,angular会把script标签中的内容作为模板插入到自定义指令中间，注意，要改变script标签的type=text,ng-template

restrict:也需要提供一个字符串，限制之定义指令的使用形式

- A : Attribute  表示只能以属性的形式使用
- C : Class  表示只能以类样式名的形式使用
- E : Element  表示只能以自定义标签的形式使用
- ACE : 如果希望多种方式合适，就把对应值组合在一起

replace : 需要提供一个布尔值，为true时，模板会被用来替换自定义指令所在标签  *否则是插入到自定义指令中间*

transclude: 需要一个布尔值，为true时会将自定义标签中的内容插入到模板中 **拥有ng-transclude指令的标签中间**

scope:需要一个对象：可以用来获取自定义指令的属性值，

给当前对象添加一个属性，属性值以@开头，后面跟上自定义指令的属性值，然后就可以在模板中使用{{}}来得到对应的属性值
scope:{tmp:'@mystyle'}  {{tmp}}    //scope:{mystyle:'@'} {{mystyle}}

- link:需要一个function，这是在angular解析到相应指令时就会执行一次
  - scope : 类似于$scope,只不过scope的属性只能在模板中使用
  - element：自定义指令所在标签对应的对象（jqLite)
  - attributes  :包含了自定义指令所在标签的必有属性


##### $watch

```
 // $watch可以监视数据模型的变化
        //第一个参数：数据模型对应的名字，（字符串形式）
        // 第二个参数，相应的数据模型发生变化就会调用这个函数
        //默认会直接执行一次回掉函数
        $scope.value = 'name';
        $scope.$watch('value', function (now, old, scope) {
          //第一个参数是变化后的值
          //第二个参数是变化前的值
          $scope.blur = function () {
            if (now !== old) {
              console.log('different');
            }
          }
        });
        //也能够监视$scope.属性方法中的返回值
        //$watch监视的是$scope中的属性，如果是一个普通变量是无法监视的
```

