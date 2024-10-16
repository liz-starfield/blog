---
icon: lightbulb
---

# JavaScript


github <br/>
[https://github.com/Asabeneh/30-Days-Of-JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript) <br/>
[https://github.com/biaochenxuying/blog](https://github.com/biaochenxuying/blog) <br/>
[https://github.com/course-dasheng/fe-algorithm](https://github.com/course-dasheng/fe-algorithm) <br/>



1、注释 <br/>

html注释：  <!-- 这是一个注释 --> <br/>
css注释：  /*这是个注释*/ <br/>
javascript注释：行注释// 和块注释/**/ <br/>

2、数据类型 <br/>

不区分整数和浮点数，统一用Number表示 <br/>

3、等于 <br/>

第一种是==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果； <br/>
第二种是===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。 <br/>
_不要_使用==比较，始终坚持使用===比较 <br/>

4、NaN <br/>

这个特殊的Number与所有其他值都不相等，包括它自己 <br/>
```
NaN === NaN; // 返回false <br/>
```
唯一能判断NaN的方法是通过isNaN()函数： <br/>
```
isNaN(NaN); // 返回true <br/>
```

5、浮点数比较 <br/>

浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值： <br/>
```
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true <br/>
```

6、null和undefined <br/>

JavaScript的设计者希望用null表示一个空的值，而undefined表示值未定义。事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该用null。undefined仅仅在判断函数参数是否传递的情况下有用。 <br/>

7、变量 <br/>

动态语言和静态语言：这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错 <br/>
javascript是动态语言，变量都不用申明类型 <br/>

var：申明一般变量。申明在函数内，作用域是函数内部，就算申明在块级内（eg.for循环），作用域也是在函数内部，而不局限于块级内部；申明在函数外，作用域是全局。 <br/>
let：申明块级作用域的变量 <br/>
const：申明常量（是块级作用域的） <br/>

 尽可能避免使用全局变量 <br/>
代码质量可以用全局变量来考量，数量越多越糟。    <br/>

8、字符串 <br/>

普通字符串：单引号'...'或双引号"..." <br/>
多行字符串 ：反引号`...` <br/>
模板字符串（ES6新增）： <br/>
```
var name = '小明'; <br/>
var age = 20; <br/>
var message = `你好, ${name}, 你今年${age}岁了!`; <br/>
alert(message); <br/>
```

9、全局对象 <br/>

JavaScript默认有一个全局对象window，全局作用域的变量（函数也视为变量）都被绑定到window。alert()函数其实也是window的一个属性。 <br/>

10、解构赋值——一次性赋值多个变量 <br/>

11、规范 <br/>

构造函数首字母应当大写，而普通函数首字母应当小写 <br/>

12、方法 <br/>

声明公共方法时使用基于原型的方法，以节约内存和降低实例化的开销。生成私有方法时用在类定义时内部声明的方式，这样其他实例不会访问到这个方法。（在原型里，方法只会创建一次，所有实例共享。在定义类的内部结构时声明，每个类的实例都会有一份该方法的副本。） <br/>
