const arr = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

function printForecast(arrTemp) {
  let message = [];

  for (let i = 0; i < arrTemp.length; i++) {
    const day = i + 1 > 1 ? "days" : "day";
    message.push(`... ${arrTemp[i]}°C in ${i + 1} ${day}`);
  }

  return console.log(message.toString().replaceAll(",", ""));
}

printForecast(arr2);
printForecast(arr);
