//题目：去掉数组中的重复项。
var arr = [1, 1, 1, 2, 2, 3, 3, 3, 2, 1];
var resultArr = [];
for(var key in arr){
if(!resultArr.includes(arr[key])){
    resultArr.push(arr[key]);
}
}
for(var i=0;i<=resultArr.length-1;i++){
    console.log(resultArr[i]);
    
}
