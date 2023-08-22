
# Summary of what i learned today 🧑‍🏫


## Closures 🚩 :

- Closure is the most esoteric of JavaScript concepts
- Enables powerful pro-level functions
- Many JavaScript design patterns including the module pattern use closure
- Build iterators, handle partial application and maintain state in an
asynchronous world
  
### Functions with memories
- When our functions get called, we create a live store of data (local memory/variable environment/state) for that function’s execution context.
- When the function finishes executing, its local memory is deleted (except the returned value)
- But what if our functions could hold on to live data between executions?
- This would let our function definitions have an associated cache/persistent memory
- But it all starts with us returning a function from another function

### Closure gives our functions persistent memories and entirely new toolkit for writing professional code

- Helper functions: Everyday professional helper functions like ‘once’ and ‘memoize’
- Iterators and generators: Which use lexical scoping and closure to achieve the most contemporary patterns for handling data in JavaScript
- Module pattern: Preserve state for the life of an application without polluting the global namespace
- Asynchronous JavaScript: Callbacks and Promises rely on closure to persist state in an asynchronous environment

# DELIEVERABLES	💻

## #1: Write a closure named createCounter that takes an initial value start and returns a function. The returned function, when invoked, should increment the counter by 1 and return the updated value
```js
function createCounter(start) {
  let counter = start; // Initialize the counter with the provided initial value

  // Define and return the inner function
  return function() {
    counter++; // Increment the counter by 1
    return counter; // Return the updated value
  };
}
```
## #2:Write a closure named calculateAverage that takes an array of numbers, nums, and returns a function. The returned function, when invoked, should calculate and return the average of the numbers in the array.

```js
function calculateAverage(nums) {
  // Ensure nums is not empty to avoid division by zero
  if (nums.length === 0) {
    return function() {
      return 0; // Return 0 if array is empty
    };
  }

  // Define and return the inner function
  return function() {
    const sum = nums.reduce((acc, num) => acc + num, 0); // Calculate the sum of the numbers
    return sum / nums.length; // Calculate and return the average
  };
}

```
## #3: Write a closure named powerOf that takes a base number base and returns a function. The returned function, when invoked with an exponent exp, should calculate and return the result of base raised to the power of exp.

```js
function powerOf(base) {
  return function(exp) {
    return Math.pow(base, exp); // Calculate and return the result of base raised to the power of exp
  };
}
```
## #4: Write a closure named compose that takes multiple functions as arguments and returns a new function. The returned function should apply the provided functions in reverse order, passing the result of each function as an argument to the next function.
```js
function compose(...functions) {
  return function(input) {
    let result = input;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
}
```
