function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  // const str = "Hello World!";
  // const reversed = "!dlroW olleH";
  // const result = new Algo().reverse(str);
  // expect(result).toEqual(reversed);
  return str.split("").reverse().join("");
  
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
};

module.exports = Algo;
