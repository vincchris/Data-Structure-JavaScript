// Problem

// Create an array containing 10 numbers.

// Create a function that iterates through the array and returns the largest number

const numbers = [1, 4, 100, 23, 50, 12, 320, 6, 102, 9]

const FindLargestNumber = (FindOne) => {
  let largest = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    if (FindOne[i] > largest) {
      largest = numbers[i]
    }
  }

  return largest
}

console.log(FindLargestNumber(numbers))