// Write function avg which calculates average of numbers in given list.



function find_average(array) {
 
    let sum = array.reduce((acc, cur) => {
     return acc + cur
    }, 0);
    return sum / array.length
  }