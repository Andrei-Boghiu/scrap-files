// --------First Try--------
function isLeap(year) {
        if ( year % 4 === 0) {
        
        if (year % 100 === 0 && year % 400 !== 0){
            console.log("Not leap year.")
            } else {if (year % 100 === 0 && year % 400 === 0){
            console.log("Leap year.")
            } else {
                console.log("Leap year.")
                }
                   }  
                        
        } else {
        console.log("Not leap year.")
        }
}
// --------First Try--------

// -------Second Try--------
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0){
            if (year % 400 === 0) {
                return "Leap year."
            } else {
                return "Not leap year."
            }
        } else {
            return "Leap year."
        }
    } else {
        return "Not leap year."
    }
}
// -------Second Try--------

// ----SALT-----------SALT-----------SALT-----------
function isLeapYear(year) {
  if (year % 4 !== 0) {
    return "Not leap year.";
  } else if (year % 100 !== 0) {
    return "Leap year.";
  } else if (year % 400 !== 0) {
    return "Not leap year.";
  } else {
    return "Leap year.";
  }
}
// ----SALT-----------SALT-----------SALT-----------
function isLeapYear(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? "Leap year." : "Not leap year.";
}
// ----SALT-----------SALT-----------SALT-----------
