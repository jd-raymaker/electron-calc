// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let arr = [];
let int;

exports.number = (val) => {
    arr.push(val);
    int = arr.join('');
    return int
};

exports.result = () => {
    return eval(int)
};

exports.clear = () => {
    arr = [];
    int = 0;
};

exports.operators = (op) => {
    arr.push(op);
    return int + op
};