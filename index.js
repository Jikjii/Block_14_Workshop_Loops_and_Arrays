// ONLY ODDS

// const array = [2, 4, 6, 8, 10, 11, 12] 

// const odd = [];

// for (let i = 0; i < array.length; i++) {
//     const num = array[i];

//     if (num % 2 === 1) {
//         odd.push(num);
//     }
// }

// console.log(odd)

// VOWEL VERSUS CONSONANT
const word = "hello"
const vowels = ['a', 'e', 'i', 'o', 'u']

let vowelCount = 0;




for (let i = 0; i < word.length; i++) {
    console.log(word[i]) // h in hello
    // console.log(vowels.length)
    for (let index = 0; index < vowels.length; index++) {
        if (word[i] === vowels[index]) {
            console.log(word[i] + " and " + vowels[index] + " match")
            vowelCount++
        } else {
            // console.log(word[i] + " and " + vowels[index] + " dont match")
        }
    }
}

let consonantsCount = word.length - vowelCount;

console.log(word + " has " + consonantsCount + " consonants and " + vowelCount + " vowels")


// REVERSE ARRAY

// const array = [1, -1, 2, -3, 5, -8, 13]

// const reverseArray = []

// for (let index = array.length - 1; index >= 0; index--) {
//     const val = array[index]

//     reverseArray.push(val)
// }

// console.log(reverseArray)


// FIZZBUZZ

// for (let i = 0; i < 100; i++) {
//     if (i % 15 == 0)  {
//         console.log("FizzBuzz")
//     } else if (i % 3 == 0) {
//         console.log("Fizz")
//     } else if (i % 5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }