
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
