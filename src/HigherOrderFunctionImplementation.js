"use strict"
/*
Map function:A map is a built-in function of Arrays in javascript which helps us iterate over each individual element of the
 array and returns a brand new array. It takes an call back function as input and the call back function takes value,index and
 array itself as an argument. Its implementation is below:
*/

Array.prototype.myMap = function (callBack) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callBack(this[index], index, this));
    }
    return resultArray;
}

const sample = [1, 2, 3];
const resultSample = sample.myMap(function (val, index, array) {
    console.log('val :', val, 'index:', index, 'array:', array);
    return val * 2;
});
console.log(resultSample);

/*
Filter function:A filter is a built-in function of Arrays in javascript which creates a shallow copy of a portion of a given
 array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
 It takes an call back function as input and the call back function takes value,index and
 array itself as an argument. Its implementation is below:
*/
Array.prototype.myFilter = function (callBack) {
    const filteredArray = [];
    for (let index = 0; index < this.length; index++) {
        if (callBack(this[index], index, this) === true) {
            filteredArray.push(this[index]);
        }
    }
    return filteredArray;
}
let sample1 = ['alampana', 'shenshah', 'foo',];
let sample2 = [1, 2, 3, 4, 6];
const resultArray = sample1.myFilter(function (val, index, array) {
    console.log('val', val, 'idx', index, 'array', array);
    return val.length > 4;
});
console.log(resultArray);

/*
Reduce function:A reduce is a built-in function of Arrays in javascript which iterates over an array and returns a single 
value as an input. It takes an call back function and initial value as input and the call back function takes previousValue ,
currentValue,index and array itself as an argument. Its implementation is below:
*/
Array.prototype.myReducer = function (callBack, initialValue) {
    let accumulator = (initialValue === undefined) ? 0 : initialValue;
    for (let index = 0; index < this.length; index++) {
        accumulator = callBack(accumulator, this[index], index, this);
    }
    return accumulator;
}
let sample3 = [1, 2, 3, 4];
let result = sample3.myReducer(function (previousVal, val, index, array) {
    console.log('previousVal', previousVal, 'currentVal', val);
    return previousVal * val;
}, 1)
console.log(result);
/*
ForEach function:A forEach is a built-in function of Arrays in javascript which iterates over an array and applies a function
over every element of an array. It takes an call back function and and the call back function takes value,index and
 array itself as an argument. Its implementation is below:
*/
Array.prototype.myForEach = function (callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this);
    }
}
let sample4 = ['a', 'b', 'c'];
let resultOutput = [];
sample4.myForEach(function (val, index, array) {
    console.log('val:', val);
    resultOutput.push(val);
})
console.log(resultOutput);
let users = ['Sam', 'Bobby', 'Nilli'];
users.myForEach((user) => {
    console.log(user);
    if (user === 'Bobby') {
        users.shift();
    }
});
console.log(users);
