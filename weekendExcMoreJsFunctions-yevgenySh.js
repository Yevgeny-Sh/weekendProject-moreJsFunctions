function mumbling(string) {
  let newStr = [];
  for (let i = 0; i < string.length; i++) {
    //console.log(string[i].toUpperCase());
    newStr.push(string[i].toUpperCase());

    for (let j = 0; j < i; j++) {
      newStr.push(string[i]);
    }
  }
  return String(newStr);
}

function countDupCaseSensetive(string) {
  let newArr = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j] && !newArr.includes(string[i])) {
        newArr.push(string[i].toLowerCase());
        break;
      }
    }
  }
  //return newArr;
  return newArr.length;
}
function countDupCaseInsensetive(string) {
  let newArr = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (
        string[i].toLowerCase() === string[j].toLowerCase() &&
        !newArr.includes(string[i].toLowerCase())
      ) {
        newArr.push(string[i].toLowerCase());
        break;
      }
    }
  }
  //return newArr;
  return newArr.length;
}

function organizeStrings(str1, str2) {
  let uniqsFromStr1 = [];
  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j < str1.length; j++) {
      if (
        str1[i].toLowerCase() === str1[j].toLowerCase() &&
        !uniqsFromStr1.includes(str1[i])
      ) {
        uniqsFromStr1.push(str1[i].toLowerCase());
        break;
      }
    }
  }
  let uniqsFromStr2 = [];
  for (let i = 0; i < str2.length; i++) {
    for (let j = i + 1; j < str2.length; j++) {
      if (
        str2[i].toLowerCase() === str2[j].toLowerCase() &&
        !uniqsFromStr2.includes(str2[i])
      ) {
        uniqsFromStr2.push(str2[i].toLowerCase());
        break;
      }
    }
  }
  let uniqsConcat = uniqsFromStr1.concat(uniqsFromStr2);
  let resultArray = [];

  for (let i = 0; i < uniqsConcat.length; i++) {
    for (let j = i + 1; j < uniqsConcat.length; j++) {
      if (
        uniqsConcat[i] !== uniqsConcat[j] &&
        !resultArray.includes(uniqsConcat[i])
      ) {
        resultArray.push(uniqsConcat[i].toLowerCase());
        break;
      }
    }
  }

  return String(resultArray.join(``));
}

function isIsogram(string) {
  let newArr = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (
        string[i].toLowerCase() === string[j].toLowerCase() &&
        !newArr.includes(string[i].toLowerCase())
      ) {
        newArr.push(string[i].toLowerCase());
        break;
      }
    }
  }
  console.log(newArr);

  return !(newArr.length > 0);
}

function myFilter(arr, testFunction) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (testFunction(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myForEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

function myMap(arr, func) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}

function findPerimeter(width, length) {
  return width * 2 + length * 2;
}

//console.log(myFilter(arr, (n) => n > 6));
//myForEach(arr, console.log);
//console.log(myMap(arr, (n) => n * 6));
