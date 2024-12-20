# Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error: 'Type 'string' is not assignable to type 'number'. This error arises when attempting to perform arithmetic operations on a string and a number.  TypeScript's robust type system prevents such operations to avoid runtime surprises.

## The Bug
The `bug.ts` file contains functions `add` and `subtract` which are designed to work with numbers. However, there's an attempt to call `add` with a string "5" which triggers the type error.

## The Solution
The `bugSolution.ts` file presents a solution where explicit type checking and/or type conversion ensures all inputs are numbers before performing calculations, resolving the type error.

## How to reproduce
1. Clone this repository.
2. Navigate to the repository directory.
3. Compile the `bug.ts` file using the TypeScript compiler (tsc bug.ts).
4. Observe the error message.
5. Compile `bugSolution.ts` to see the corrected version.