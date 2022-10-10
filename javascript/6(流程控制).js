var o = {
    name: "Jerry",
    age: 20,
    city: "Beijing"
};

for (var key in o) {
    console.log(key + ": " + o[key]);
}
/*
"name: Jerry"
"age: 20"
"city: Beijing"
*/




//要过滤掉对象继承的属性，用 `hasOwnProperty()` 来实现：
var o = {
    name: "Jerry",
    age: 20,
    city: "Beijing"
};

for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key + ": " + o[key]);
    }
}
/*
"name: Jerry"
"age: 20"
"city: Beijing"
*/




//由于数组也是对象，而它的每个元素的索引被视为对象的属性，因此，`for ... in` 循环可以直接循环出数组的索引：
var a = ['A', 'B', 'C'];

for (var i in a) {
    console.log(i + ": " + a[i]);
}
/*
0: A
1: B
2: C
*/






//`label` 是一个标签，可以使用 `break` 或 `continue` 使程序跳转到这个标签处执行（执行：`break` 或 `continue`），从而改变程序的执行流程
// 注意：label 不是一个特定的关键字，可以随便取名
label: for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i + j === 6) {
            console.log("j=" + j);
            break label;
        }
    }
    console.log("i=" + i);
}
/*
j=6
*/
// label + break 配合可以用在循环外
label: {
    if (1 > 0) {
        console.log("1");
        break label;
    }
    console.log("2");
}
/*
1
*/