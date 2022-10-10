function fun(){


}
var fun =function(){



};


fun();

var arr = [33, 22, 55, 11];
arr.sort(function(a, b) {
    return b - a;
});
console.log(arr);	// [55, 33, 22, 11]






//立即执行函数 IIFE
(function () {
    // 函数体语句
})();