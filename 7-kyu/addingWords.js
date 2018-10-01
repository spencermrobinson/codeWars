// This is the first part of this kata series. Second part is here and third part is here

// Add two English words together!

// Implement a class Arith (struct struct Arith{value : &'static str,} in Rust) such that



let map = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
        "nine", "ten", "eleven","twelve", "thirteen","fourteen","fifteen","sixteen",
        "seventeen","eighteen","nineteen","twenty"];

class Arith{
    constructor(word) {
        this.val = map.indexOf(word);
    }
    add(word) {
        return map[map.indexOf(word) + this.val]
    }
}