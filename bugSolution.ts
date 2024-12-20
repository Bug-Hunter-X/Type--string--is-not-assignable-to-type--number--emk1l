function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: string | number, b: string | number): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Both parameters must be numbers or convertible to numbers.');
  }

  return numA + numB;
}

let result = add(5, 3); // result is 8
console.log(result); // Output: 8

result = subtract(10, 5); // result is 5
console.log(result); // Output: 5

result = addSafe("5", 3); // result is 8
console.log(result); // Output: 8

result = addSafe(10, "5"); // result is 15
console.log(result); // Output: 15

//This will throw an error because one of the inputs is not a number or convertible to a number.
//result = addSafe("hello", 3); //Error