# Summary of what i learned today 🧑‍🏫

# introduction 📢

## Arrays 🚩
an array is an ordered list of values. Each value is called an element specified by an index .
in JavaScript we can store different data types in same array like string number boolean etc..

### JavaScript Array Methods :

1. length : eturns the length/size of an array
2. toString() : converts an array to a string
3. join() : just like the previous one but  in addition you can specify the separator 
4. pop() : removes the last element and return it as value
5. push() : append element at the end of array
6. shift() : removes the first array element
7. unshift() : add element at the start of an array
8. delete() : Array elements can be deleted using the JavaScript operator delete , Using delete leaves undefined holes in the array.
9. concat() : creates a new array by merging it with another one 
10. flat() : attening an array is the process of reducing the dimensionality of an array.
11. splice() : add new items to an array at certin index
12. slice() : emove elements without leaving "holes" in the array
13. sort() : to sort array

### Mutable Vs Immutable :
1. Mutable: data can be edited (e.g. Arrays)
2. Immutable : data cannot be edited (e.g. Strings & other Primitives)
3. Note : when you edit string value you are creating new one and change the refrence of the variable to this new one

## Objects 🚩 :
objects mean a collection of properties 

EX.
```js 
const js ={
  name: "JavaScript",
  abbreviation: "JS",
  isAwesome: true,
  officialSpec: "EcmAscript",
  birthYear: 1995,
  creator: "Brendan Eich"
}:
```

we can access the valuse by two ways
1. dot notation : ex) js.name
2. bracket notation : ex) js[name]

we can store different data types in same obj and we can use arrays and nested obj or mix of them .

# DELIEVERABLES	💻

## #1 : Copy Array Items Using slice() link : https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice

```js
function forecast(arr) {
  // Only change code below this line
  
  return arr.slice(2,4);
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

## #2 : Combine Arrays with the Spread Operator link : https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['is' , 'fun']; // Change this line
  return ["learning" , ...fragment , ...sentence];
}

console.log(spreadOut());
```

