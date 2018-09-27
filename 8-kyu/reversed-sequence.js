// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

//The idea with solving this problem is to iterate through the numbers leading up to the number and the number and push them into an empty array.  I started the iteration at 1 because I did not want to return anything lower than 1. I then returned arr.reverse() which reversed the order of the arr to decrease.  

const reverseSeq = n => {
    let arr = [];
    for(let i = 1; i < n + 1; i++){
      arr.push(i);
    }
    return arr.reverse();
  };