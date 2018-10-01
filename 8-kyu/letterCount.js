// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// strCount('Hello', 'o') // => 1
// strCount('Hello', 'l') // => 2
// strCount('', 'z') // => 0

function strCount(str, letter){  
     
    var count = 0;
    
     for (i = 0; i < str.length; i++) {
        
        if (str[i] == letter) {
            count++;
        }
   }
   return count
 }