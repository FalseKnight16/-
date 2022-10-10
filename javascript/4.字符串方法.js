console.log("adfdfadsd".length);
//`charAt()` 方法可以得到指定位置的字符。
"我喜欢JS，我也喜欢NODE".charAt(0);		// "我"
"我喜欢JS，我也喜欢NODE".charAt(5);		// "，"
"我喜欢JS，我也喜欢NODE".charAt(11);	// "O"
"我喜欢JS，我也喜欢NODE".charAt(99);	// ""
"我喜欢JS，我也喜欢NODE".charAt(-1);	// ""






//）`substring(a, b)` 方法得到从 a 开始到 b 结束（不包括 b 处）的子串** `[a, b)`
"我喜欢JS，我也喜欢NODE".substring(3, 5);		// "JS",第一个我是0
"我喜欢JS，我也喜欢NODE".substring(10, 14);		// "NODE"
"我喜欢JS，我也喜欢NODE".substring(10, 99);		// "NODE"
"我喜欢JS，我也喜欢NODE".substring(-1, 4);		// "我喜欢J"
//substring(a, b) 方法如果省略第二个参数，返回的子串会一直到字符串的结尾
"我喜欢JS，我也喜欢NODE".substring(6);		// "我也喜欢NODE"
//substring(a, b) 中，a 可以大于 b，数字顺序将自动调整为小数在前
"我喜欢JS，我也喜欢NODE".substring(3, 5);		// "JS"
"我喜欢JS，我也喜欢NODE".substring(5, 3);		// "JS"








//`substr(a, b)` 中，将得到从 a 开始的长度为 b 的子串
"我喜欢JS，我也喜欢NODE".substr(3, 2);		// "JS"
//substr(a, b) 中，b 可以省略，表示到字符串结尾
"我喜欢JS，我也喜欢NODE".substr(3);		// "JS，我也喜欢NODE"
//substr(a, b) 中，a 可以是负数，表示倒数位置
"我喜欢JS，我也喜欢NODE".substr(-4, 2);		// "NO"
//**（3）`slice(a, b)` 方法得到从 a 开始到 b 结束（不包括 b 处）的子串**









"我喜欢JS，我也喜欢NODE".slice(3, 5);		// "JS"
//slice(a, b) 的参数 a 可以是负数（与 substring(a, b) 的区别）
"我喜欢JS，我也喜欢NODE".slice(-4, -1);		// "NOD"
// (-4, -1)：从 倒数第4位 到 倒数第1位，不包括 倒数第1位
//slice(a, b) 中，参数 a 必须小于参数 b，否则便会返回一个空字符串
"我喜欢JS，我也喜欢NODE".slice(5, 2);		// ""





//- `toUpperCase()` 转为大写
//- `toLowerCase()` 转为小写
//注意：toUpperCase() 和 toLowerCase()，只是返回一个大小写格式，变量本身的值并没有改变。
var str = "I Love You";
console.log(str.toUpperCase());		// "I LOVE YOU"
console.log(str);				   // "I Love You"
str = str.toUpperCase();
console.log(str);				   // "I LOVE YOU"






//`indexOf()` 方法返回某个指定的字符串值在字符串中首次出现的位置
"abcdebb".indexOf("b");		// 1
"abcdebb".indexOf("deb");	// 3
"abcdebb".indexOf("m");		// -1




// trim()、trimStart()、trimEnd() 方法
// 删除首尾空格
console.log("---" + " 123 ".trim() + "---");
// 删除首部空格
console.log("---" + " 123 ".trimStart() + "---");
// 删除尾部空格
console.log("---" + " 123 ".trimEnd() + "---");
/*
---123---
---123 ---
--- 123---
*/




















