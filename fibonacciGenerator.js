// --------First Try--------
function fibonacciGenerator (n) {
    output = [];
    
    for (var i = 0; i <= (n - 1); i++) {
        if (output.length === 0) {
            output.push(i)
        } else if (output.length === 1) {
            output.push(i)
        } else if (output.length >= 2) {
            var lastIndex = output.length -1
            var previousToLast = output.length -2
            var addition = output[lastIndex] + output[previousToLast]
            output.push(addition)
        }
    }
    return output
}
// --------First Try--------
