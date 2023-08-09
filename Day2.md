# Summary of what i learned today 🧑‍🏫

# introduction 📢

## Values and Data Types 🚩
data types in javascript are one of two options Primitive  or Non-Primitive 

Primitive :
1. Number
2. String
3. Boolean
4. Undefined
5. Null

Non-Primitive :
1. Object

### Null vs Undefined :
Undefined means the variable has been declared, but its value has not been assigned. Null means an empty value or a blank value.


### String methods :

1. length
2. slice()
3. substring()
4. substr()
5. replace()
6. replaceAll()
7. toUpperCase()
8. toLowerCase()
9. concat()
10. trim()
11. trimStart()
12. trimEnd()
13. padStart()
14. padEnd()
15. charAt()
16. charCodeAt()
17. split()


## Operators in Java-Script:

1. Arithmetic Operators
   1. add (+)
   2. Subtract (-)
   3. Multiply (*)
   4. Divide (/)

2. Comparsion Operators
   1. Greater than (>)
   2. Less than (<)
   3. Greater than or equal to (>=)
   4. Less than or equal to (<=)

3. Equality operators
   1. === / == equals
   2. == / != does not equal
   3. == vs === : this second one is comparing data type also (should be mathced to return true)

## Expressions and Variables:

Expressions is:a valid set of literals, variables, operators, and expressions that evaluate a single value

ways of declaring Variables ( var , let , const )

### Expression VS. Statments: 
#### Expression:
asks Java-Script for a particular value
#### Statment:
A statment tells Java-Script to do somthing



# DELIEVERABLES	💻


## QUESTION #1
Consider the following JavaScript code:
```js
let a = 0;
let b = "0";
let c = false;
let d = "false";

console.log(a == b);
console.log(b === c);
console.log(!!d);
```
What will be the output of each console.log statement? You MUST explain WHY.

## QUESTION #2:
Consider the following JavaScript expression:

```jsconsole.log(4 + 5 * "7");```
What will be the output of this expression? You MUST explain the steps of evaluation taken by JS.

## QUESTION #3:
Evaluate the following expression:

```js let result = 5 + 2 * 3 - 1; ```
What will be the output of this expression? You MUST explain the steps of evaluation taken by JS.

## QUESTION #4:
Consider the following code:
```js
let x = 10;
let y = '10';
console.log(x == y);
console.log(x === y);
```
What will be the output of each console.log statement? You MUST explain WHY.

## QUESTION #5:
Given the code below:
```js
let num = "15";
let isPositive = true;
let result = (num > 10 && isPositive) || num < 0;
console.log(result);
```
What is the value of result? You MUST explain the steps of evaluation taken by JS
