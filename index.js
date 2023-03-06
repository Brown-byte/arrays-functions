//QUESTION 1//

//Mutating Array Methods: These methods modify the original array and return the modified array.
//Example methods: push(), pop(), shift(), unshift(), splice()//

//Non-Mutating Array Methods: These methods do not modify the original array and return a new array as the result.//
//Example methods: concat(), slice(), join(), map(), filter()//


//QUESTION 2//
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

//Adding Kotlin to the end of array//
languages.push('Kotlin');

//Adding Java after Ruby//
let rubyIndex = languages.indexOf ('Ruby');
languages.splice(rubyIndex+1, 0, 'Java');

//Removing the first item from the array//
languages.shift();

//Adding Scala and Swift to thr beginning of the array//
languages.unshift('Scala', 'Swift');

//Replacing PHP with Go and Rust//
let phpIndex = languages.indexOf('PHP');
languages.splice(phpIndex, 1, 'Go', 'Rust');

//Answer: ['Scala', 'Swift', 'JavaScript', 'Ruby', 'Java', 'Go', 'Rust', 'Python', 'Kotlin']//



//QUESTION 3//
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
        //Answer: ['apple', 'mango', 'orange']//


        
//QUESTION 4//
function max(numbers) {
    let maxVal = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > maxVal) {
        maxVal = numbers[i];
      }
    }
    return maxVal;
  }

  //Example//
const numbers = [3, 8, 15, -5];
const maximum = max(numbers); // maximum is 15
console.log(maximum);
  
  

//QUESTION 5//
function valTimesIndex(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
      result.push(numbers[i] * i);
    }
    return result;
  }

  //Examples//
  const numbers1 = [5, 6, 7];
const result1 = valTimesIndex(numbers1); // result1 is [0, 6, 14]
console.log(result1);

const numbers2 = [10, 20, 30];
const result2 = valTimesIndex(numbers2); // result2 is [0, 20, 60]
console.log(result2);
  
  