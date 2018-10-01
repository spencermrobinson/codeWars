//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

function updateLight(current) {
    let arr = ['green', 'yellow', 'red'];
    let index = arr.findIndex((c)=> c === current);
    if( index < 2){
    return arr[index + 1]
    }else{
      return arr[0]
    }
  
  }