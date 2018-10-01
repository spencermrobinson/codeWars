// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    var arrayX = [];
 var arrayO = [];
 var lower = str.toLowerCase().split('');
 console.log(lower)
 
 for(var i = 0; i < lower.length; i++) {
   if (lower[i] === "x") {
       arrayX.push(lower[i]);
       console.log(arrayX)
   }else if (lower[i] === "o") {
       arrayO.push(lower[i]);
       console.log(arrayO)
   }
 }
 
 if(arrayX.length === arrayO.length) {
     console.log(lower)
     return true;
     
 }else {
   console.log(lower)
     return false;
     }
 }