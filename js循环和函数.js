// while语句 - 前测试循环  当***什么时候（条件）
// if （条件语句）执行一次  while （条件语句）执行多次l
let i = 1;
if (i < 10) {
    console.log(`if语句执行了: ${i}次`);
}
// 注意：循环变量要能更新，否则会形成死循环，导致程序崩溃
while (i < 10) {
    console.log(`while语句执行了: ${i}次`);
    i++;
}

let j = 1;
do {
    console.log(`do语句执行了: ${j}次`);
    j++;
} while (j < 10);

// 循环语句——for语句
for (let k = 0; k < 10; k++) {
    console.log(`K: ${k}`);
}

let l = 0;
while (l < 10) {
    console.log(`L: ${l}`);
    l++;
}

// alert("测试20261028")
// 最基本的定义函数的语法有两种
// 1. [函数声明]
function add(a, b) {
    console.log(a, b);
    let c = a + b;
    return c;
    // console.log("console.log function add");
    // return "return function add";
}
add(1,2)
console.log(add(1,2));
console.log(typeof(add));

// 2. [函数表达式]
let add2 = function() {
    console.log("console.log function add2");
    return "return function add2";
}
add2()
console.log(add2());
console.log(typeof(add2));

// 特殊的对象arguments 参数
let drive = function(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments);
    return "drive";
}
let result = drive("奔驰","奥迪",  "宝马");
let result2 = drive();
console.log(result);
console.log(result2);

// 【箭头】函数  匿名函数  隐函数  快捷函数  简化版的函数表达式
let compare = (a,b) => {return a > b;}
console.log(compare(1,2));
console.log(compare(2,1));

let compare2 = function (a,b)  {return a < b;}
console.log(compare2(1,2));
console.log(compare2(2,1));