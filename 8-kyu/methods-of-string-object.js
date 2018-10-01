// This time we learn two methods to split or merge string:split() and concat(). also learn a good friend of the split() method: join(). It is an Array method. Their usage:


function splitAndMerge(str,sp){
    return str
      .split(' ')
      .map(word => word.split('').join(sp))
      .join(' ')
  }