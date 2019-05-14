// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let arr = []; // stores every key pressed on the numpad
let num; // stores the arr with no seperators. this will be used for sum

exports.number = (val) => {
    arr.push(val);
    num = arr.join('');
    return num
};

exports.result = () => { return eval(num) };

exports.clear = () => {
    arr = [];
    num = 0;
};

exports.operators = (op) => {

    let last = arr[arr.length -1]; // get the last item in array
    // prevent the user for entering more operators at once
    // is the last item in the array a number?
    if (isNaN(last)) {
        arr.pop(); // not a number.. remove it
    }
 
    arr.push(op); // push the newest operator to the array

    return num + op

};