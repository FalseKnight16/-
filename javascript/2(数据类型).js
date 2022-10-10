//1.typeof
typeof 5;
typeof "朱国彬";
console.log(typeof 5);
console.log(typeof "朱国彬");
console.log("JS 是一个弱类型的语言，变量值是什么类型，那么变量就是什么类型，而不用显式地指出类型");
console.log("基本数据类型:Number,String,Boolean,Undefined,Null");
console.log("--------------------------------------------------------------------------------");
//2.Number
console.log("在 JS 中，所有数字不分大小、不分整浮、不分正负，都是数字类型。");
typeof 925; // number
typeof 0.5; // number
typeof -24; // number
console.log("在表达小数的时候，整数个位的 `0` 可以省略。");
var number1=.5;
var number2=3e8;// 300000000,科学计数法
typeof 3e8;		// number
console.log(number1,number2);
var number3=0b10;//2,二进制
var number4=017;//15，八进制
var number5=0xf;//15，十六进制
console.log("`NaN` 是 “not a number” 的意思，即 “不是一个数”，但它是一个数字类型的值。");
typeof NaN;	// number
/*
- 0 除以 0 的结果是 NaN，事实上，在数学运算中，若结果不能得到数字，其结果往往都是 NaN
- NaN 有一个 “奇怪” 的性质：不自等（这个知识点将在后续课程中讲解）
0 / 0;	// NaN
5 - 3;	// 2
"我" - "你";	// NaN
"我" * "你";	// NaN
"我" / "你";	// NaN
"我" + "你";	// "我你"
NaN == NaN;   // false
再次强调：NaN 是一个值（特殊的值），不是类型。
唯一能判断 `NaN` 的方法是通过 `isNaN()` 函数：
*/
isNaN(NaN); // true
console.log(isNaN(NaN));
console.log("--------------------------------------------------------------------------------");
//3.string字符串类型
typeof "周吉瑞";	// string
typeof '周吉瑞';	// string,字符串可以用单引号或者双引号包裹
console.log("朱"+"国"+"彬"+number2);//字符串的拼接，用+
var string="";//空字符串
number2=number2+"";//数字加字符串转换为了字符串
console.log(typeof(number2));
//4.Boolean(布尔类型)
typeof true;	// boolean
typeof false;	// boolean
//5.undefined类型
typeof undefined;	// undefined
console.log("一个没有赋值的变量的默认值是 `undefined`，而 undefined 的类型也是 undefined")
console.log("在变量声明提升的时候，会出现 undefined，要注意！")
//6.Null类型
console.log("box.onclick = null;//删除点击事件");
typeof null;	// object
//狭义上，null 可以理解为 “空对象”，这样可以合理的解释为什么 null 的类型为 object。
//但是准确的来说，null 不是一个 “对象”，它是一个独立的 “基本数据类型”。
//7.复杂数据类型
//复杂数据类型都是 “引用类型”（type: object）
/*
[1, 2, 3]

{ a: 1, b: 2 }

function() {
}
*/