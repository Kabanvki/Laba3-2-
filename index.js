//1
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
  }
  
  console.log(reverseNumber(123));

  function removeDuplicates(num) {
    let numArr = num.toString().split('');
    let uniqueArr = [...new Set(numArr)];
    return parseInt(uniqueArr.join(''));
  }
  
  console.log(removeDuplicates(111333456));

  function countDigitOccurrences(num, digit) {
    let numArr = num.toString().split('');
    let count = 0;
    for (let i = 0; i < numArr.length; i++) {
      if (parseInt(numArr[i]) === digit) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countDigitOccurrences(1355567, 5));

  function findLongestSequence(num, digit) {
    let binaryStr = num.toString(2);
    let sequences = binaryStr.split(/[1]+/g);
    if (digit === 0) {
      sequences = binaryStr.split(/[0]+/g);
    }
    let longestSequence = sequences.reduce((a, b) => {
      return a.length > b.length ? a : b;
    });
    return longestSequence.length;
  }
  
  console.log(findLongestSequence(1355567, 1));

  //2
  function findFirstNonRepeatingChar(str) {
    let charCount = {}; // объект для подсчета количества повторений символов
    
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
    
    return null; // Если все символы повторяются
  }
  
  let str = "фывфавыапрс";
  let firstNonRepeatingChar = findFirstNonRepeatingChar(str);
  console.log(firstNonRepeatingChar); // 'п'



  function generateRandomString(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    
    return result;
  }
  
  let length = 5;
  let randomString = generateRandomString(length);
  console.log(randomString); // '2fvg6'



  function getUniqueChars(str) {
    let uniqueChars = [];
    
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (uniqueChars.indexOf(char) === -1) { // Если символ еще не был добавлен
        uniqueChars.push(char);
      }
    }
    
    return uniqueChars.join('');
  }
  
  let string = 'позволяеткопироватьтекстиз';
  let uniqueChars = getUniqueChars(string);
  console.log(uniqueChars);