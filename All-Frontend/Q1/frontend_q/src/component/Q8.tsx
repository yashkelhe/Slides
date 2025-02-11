// Write a function that takes an array of multiple functions and executes them one by one, in a left-to-right manner

export default function executeFunctions(functions: (() => void)[]) {
  for (const func of functions) {
    func();
  }
}

// Example Usage:
const func1 = () => console.log("Function 1 executed");
const func2 = () => console.log("Function 2 executed");
const func3 = () => console.log("Function 3 executed");

executeFunctions([func1, func2, func3]);
