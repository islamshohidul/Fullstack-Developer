function getFibonacciValues  (x) {
    const values = [];

    if (x >= 1) {
        values.push(1);
    }
    
    if (x >= 2) {
        values.push(1);
    }
    
    for (let i = 2; i < x; ++i) {
        values.push(values[i - 2] + values[i -1]);
    }

    return values;
}
console.log(getFibonacciValues(6).join(', '));

