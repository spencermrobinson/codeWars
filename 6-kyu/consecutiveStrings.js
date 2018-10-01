// You are given an array strArr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

const longestConsec = (strArr, numStr) => {
    const arrLen = strArr.length
    if (arrLen === 0 || numStr > arrLen || numStr <= 0) {
      return ""
    }
    const consecStrings = getAllConsecutiveStrings(strArr, numStr, arrLen)
    return getFirstLongestString(consecStrings)
  }
  
  const getAllConsecutiveStrings = (strArr, numStr, arrLen) => {
    const numConsecStr = arrLen - numStr
    const result = []
    let consecStr
    for (let i = 0; i <= numConsecStr; i++) {
      consecStr = ""
      for (let s = i; s < i + numStr; s++) {
        consecStr += strArr[s]
      }
      result.push(consecStr)
    }
    return result
  }
  
  const getFirstLongestString = strArr => {
    let firstlongestString = ""
    let longestLength = 0
    for (let str of strArr) {
      strLen = str.length
      if (strLen > longestLength) {
        firstlongestString = str
        longestLength = strLen
      }
    }
    return firstlongestString
  }