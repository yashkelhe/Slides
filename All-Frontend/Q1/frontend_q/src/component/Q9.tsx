const func1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 1 executed");
      resolve("Result from Function 1");
    }, 1000);
  });
};

const func2 = (prevResult: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 2 executed, received:", prevResult);
      resolve("Result from Function 2");
    }, 1000);
  });
};

const func3 = (prevResult: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 3 executed, received:", prevResult);
      resolve("Result from Function 3");
    }, 1000);
  });
};

/**
 * Function to execute an array of promise-based functions sequentially.
 * @param {Function[]} functions - An array of functions that return promises.
 * @returns {Promise} Resolves after all functions are executed in order.
 */
const executeFunctionsSequentially = (
  functions: ((arg?: any) => Promise<any>)[]
) => {
  return functions.reduce((prevPromise, currFunc) => {
    return prevPromise.then(currFunc);
  }, Promise.resolve());
};

// Call the function with an array of promise-based functions
executeFunctionsSequentially([func1, func2, func3])
  .then(() => console.log("All functions executed sequentially"))
  .catch((error) => console.error("Error occurred:", error));

//   Each function (func1, func2, func3) returns a Promise that resolves after a timeout.
// Each function takes an argument (result from the previous function).
// We use reduce() to execute the functions sequentially:
// prevPromise.then(currFunc): Each function executes after the previous one completes.
// The final .then() executes when all functions have finished.
