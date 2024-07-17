const palindromes = function (string) {
  let stringArray = string.toLowerCase().split("");
  //console.log(stringArray);
  let filteredArray = stringArray.filter((char) => {
    return char.match(/[a-z0-9]/i);
  });
  //console.log(filteredArray);
  let reversedArray = filteredArray.slice().reverse();
  //console.log(reversedArray);
  let palindrome = true;
  for (let i = 0; i < filteredArray.length; i++) {
    if (filteredArray[i] !== reversedArray[i]) {
      palindrome = false;
    }
  }
  return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
