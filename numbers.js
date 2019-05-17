let arr = []; // stores every key pressed on the numpad
let num; // stores the arr with no seperators. this will be used for sum

// Push number to display
exports.push = (val) => {
    update(val);
    return num
};

exports.result = () => { return eval(num) };

exports.clear = () => {
    arr = [];
    num = 0;
    return num
};

exports.operators = (op) => {

    let last = arr[arr.length -1]; // get the last item in array
    // prevent the user for entering more operators at once
    // is the last item in the array a number?
    if (isNaN(last)) {
        arr.pop(); // not a number.. remove it
    }
 
    update(op); // push the newest operator to the array
    
    return num

};

function update(input) {
    if (input === -1) { arr.pop() }
    else { arr.push(input); }
    num = arr.join('');
}