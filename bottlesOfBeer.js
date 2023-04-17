var nrOfBottles = 99
function bottleKeyword() {
    if (nrOfBottles === 1) {
        return "bottle"
    } else return "bottles"    
}

function beer() {
    console.log(`${nrOfBottles} ${bottleKeyword()} of beer on the wall, ${nrOfBottles} ${bottleKeyword()} of beer`);
    nrOfBottles--
    console.log(`Take one down and pass it around, ${nrOfBottles} ${bottleKeyword()} of beer on the wall`)
}

while (nrOfBottles > 0) {
    beer()    
}

if (nrOfBottles === 0) {
    console.log(`No more bottles of beer on the wall, no more beer on the wall`)
    console.log(`Go to the store and buy some more, buy 99 bottles of beer`)
    // nrOfBottles = 99
}
