// --------First Try--------

var output = [];
var count = 1;

function fizzBuzz() {
    output.push(count)
    var lastIndex = output.length -1;
    var lastNumber = output.length;

    if (lastNumber % 3 === 0 && lastNumber % 5 === 0 ) {
        output.splice(lastIndex, 1);
        output.push("fizzBuzz")
        count++
    } else if (lastNumber % 3 === 0) {
        output.splice(lastIndex, 1);
        output.push("fizz")
        count++
    } else if (lastNumber % 5 === 0) {
        output.splice(lastIndex, 1);
        output.push("buzz")
        count++
    } else {count++}
    console.log(output);
}
// --------First Try--------

// -------Second Try--------
var output = [];
var count = 1;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("fizzBuzz");
    } else if (count % 3 === 0) {
        output.push("fizz");
    } else if (count % 5 === 0) {
        output.push("buzz");
    } else {
        output.push(count);
        
    }
      count++;
      return output;  
}
// -------Second Try--------

// -------Third Try---------
var output = [];
var count = 1;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("Fizz Buzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
        
    }
      count++;
      return output;  
}

while (count < 100) {
    fizzBuzz();   
}
// -------Third Try---------
