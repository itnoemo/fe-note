// 题目1
async function async1 () {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
​
async function async2 () {
    console.log('async2');
}
​
console.log('script start');
​
setTimeout(function () {
    console.log('setTimeout');
}, 0);
​
async1() 
​
new Promise (function (resolve) {
    console.log('promise1');
    resolve();
}).then (function () {
    console.log('promise2');
})
​
console.log('script end');
/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout


主线程: 
微任务:  promise2
其他任务: setTimeout
*/
// --------------------

console.log('1');
 
setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})
 
setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})

/*
1
7
6
8
2
4
3
5
9
11
10
12
*/