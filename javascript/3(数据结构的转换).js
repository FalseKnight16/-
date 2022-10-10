//1.Number()
Number('123');			 // 123
Number('123.45');		 // 123.45
Number('-123');			 // -123
Number('-123.45');		 // -123.45
// 字符串中不支持有非数值字符
Number('123年');	    	// NaN
Number('2e3');			// 2000
Number('');				// 0
// 字符串不支持是数学表达式
Number('1+1');			// NaN
// 除了字符串外，还可以直接放一个表达式
Number(1+1);			// 2
Number(true);			// 1
Number(false);			// 0
Number(undefined);		// NaN
Number(null);			// 0
//2.parseInt(),`parseInt()` 函数的功能是将 `字符串` 或 `浮点数` 转为 `整数`。
parseInt('3.14');		  // 3,自动截掉第一个非数字字符之后的所有字符
parseInt('-3.14');		  // -3
parseInt('3周吉瑞.14');	// 3
parseInt(3.14);		  	  // 3
parseInt(-3.14);		  // -3
parseInt('3.14是圆周率');	// 3
parseInt('圆周率是3.14');	// NaN,如果字符串以非数字开头，则转为 NaN
parseInt('一二三');		 // NaN
parseInt('3.99');		  // 3,没有四舍五入
//`parseFloat()` 函数的功能是将字符串转为浮点数。
parseFloat('3.14');		// 3.14
parseFloat(3.14);		// 3.14

parseFloat('3.14是圆周率');		// 3.14
parseFloat('3.14.15');		   // 3.14

parseFloat('3.99');			// 3.99
parseFloat('-3.99');		// -3.99
console.log(parseFloat("阿萨法33.33"));
//由于 String() 属于内置构造函数，所以 String() 的首字母 S 要大写。
String(123);		// '123'
String(123.4);		// '123.4'
String(2e3);		// '2000'
String(NaN);		// 'NaN'
String(Infinity);	// 'Infinity'
String(0xf);		// '15'
String(true);		// 'true'
String(false);		// 'false'
//`toString()` 是几乎所有值都有的方法，功能是将值转为字符串。
//纯数字不能直接 “打点” 调用 toString() 方法，要把纯数字用 `()` 包裹起来，此时 JS 会提升该数字为一个对象（包装为对象）
var str1=(6).toString();
console.log(str1);

// /Boolean(123);			// true
Boolean(0);				// false
Boolean(NaN);			// false
Boolean(Infinity);		// true
Boolean(-Infinity);		// true
//空字符串变为 `false`，其他都转为 `true`。
Boolean('');				// false
Boolean('abc');				// true
Boolean('false');			// true
//undefined和null——>布尔值
Boolean(undefined);				// false
Boolean(null);					// false