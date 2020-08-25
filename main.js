// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Validate a credit card
const validateCred = (array) => {
  let sum = 0;
  for (let i = array.length - 1; i >= 0; i--) { 
    let newValue = array[i]
    if ((array.length - 1 - i) % 2 === 1) {
      newValue *= 2;
      if (newValue > 9) {
        newValue -= 9;
      };
    };
    sum += newValue; 
  };
  return sum % 10 === 0;
};

console.log(validateCred(valid2));

// Another version of validateCred:
let lastNumber;
let sum2;

const validateCred2 = (array2) => {
  lastNumber = array2[array2.length - 1];
  sum2 = 0;
  for (let j = array2.length - 2; j >= 0; j--) { 
    let newerValue = array2[j]
    if ((array2.length - 2 - j) % 2 === 0) {
      newerValue *= 2;
      if (newerValue > 9) {
        newerValue -= 9;
      };
    };
    sum2 += newerValue; 
  };
  sum2 += lastNumber;
  return sum2 % 10 === 0;
};

console.log(validateCred2(valid1));

// Find invalid Cards and put them in one array
const findInvalidCards = (nestedArray) => {
  const invalid = [];
  for (let k = 0; k < nestedArray.length; k++) {
    let currCard = nestedArray[k];
    if (!validateCred(currCard)) {
      invalid.push(currCard.join(""));
    };
  };
  return invalid;
};

console.log(findInvalidCards(batch).join("; "));

// Find companies that sent invalid Cards and put them in one array
const idInvalidCardCompanies = (invalidCards) => {
  const companies = [];
  for (let l = 0; l < invalidCards.length; l++) {
    switch (invalidCards[l] [0]) {
      case 3 :
        if ((companies.indexOf('Amex (American Express)')) === -1) {
          companies.push('Amex (American Express)');
        };
        break;
      case 4 : 
        if ((companies.indexOf('Visa')) === -1) {
          companies.push('Visa');
        };
        break;
      case 5 :
        if ((companies.indexOf('Mastercard')) === -1) {
          companies.push('Mastercard');
        };
        break;
      case 6 :
        if ((companies.indexOf('Discover')) === -1) {
          companies.push('Discover');
        };
        break;
      default :
        console.log('Company not found');
    };
  };
  return companies;
};

console.log(idInvalidCardCompanies(batch).join(", "));

// Convert card number into array and validate it:
let newArray = [];

const convertString = (number) => {
  const string = String(number);
  // another version:
  // newArray = string.split("").map(Number);*/
  newArray = string.split("");
  for(let m = 0; m < newArray.length; m++) {
    newArray[m] = parseInt(newArray[m], 10);
  }
  return validateCred(newArray);
}

console.log(convertString(4929877169217099));

// Convert a invalid card number into a valid one:
let invalidArray = [];
let lastNumber2;
let sum3;

const createValidNumber = (nextArray) => {
  sum3 = 0;
  for (let n = nextArray.length - 2; n >= 0; n--) { 
    let anotherValue = nextArray[n]
    if ((nextArray.length - 2 - n) % 2 === 0) {
      anotherValue *= 2;
      if (anotherValue > 9) {
        anotherValue -= 9;
      };
    };
    sum3 += anotherValue; 
  };
  // to check for remainder without last number:     
  // return sum3 % 10;
  if (sum3 % 10 === 0) {
    lastNumber2 = 0;
  } else {
    lastNumber2 = 10 - (sum3 % 10);
  }
  sum3 += lastNumber2;
  // to check if card number with changed last digit is valid:
  // return sum3 % 10 === 0;
  nextArray[nextArray.length - 1] = lastNumber2;
  for (let o = 0; o < nextArray.length; o++) {
      let newestValue = nextArray[o];
      invalidArray.push(newestValue);
  };
  return invalidArray.join("");
};

console.log(createValidNumber(mystery4));
