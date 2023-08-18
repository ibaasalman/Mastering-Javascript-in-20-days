
# Summary of what i learned today 🧑‍🏫


## JavaScript principles 🚩 :

When JavaScript code runs, it Goes through the code line-by-line and runs/’executes’ each line - known as the thread of execution

Saves ‘data’ like strings and arrays so we can use that data later - in its memory We can even save code (‘functions’)

### Execution context
Created to run the code of a
function - has 2 parts (we’ve
already seen them!)
- Thread of execution
- Memory

### call stack
JavaScript keeps track of what function is currently running (where’s the thread of execution)
- Run a function - add to call stack
- Finish running the function - JS removes it from call stack
- Whatever is top of the call stack that’s the function we’re currently running
  
## Functions & Callbacks 🚩 :

Callbacks and Higher Order Functions simplify our code and keep it DRY (Don't Repeat Yourself)

# DELIEVERABLES	💻

## #1 :  Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
#### link : https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem

```js
const squareList = arr => {
  // Only change code below this line
  return arr.filter(i=>i>0&&Number.isInteger(i)).map(i=>i*i);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

## #2 :  Apply Functional Programming to Convert Strings to URL Slugs
#### link : https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs

```js

```

## #3 :  
#### link : 

```js

```
