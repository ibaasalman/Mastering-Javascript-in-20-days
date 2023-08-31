

# Summary of what i learned today 🧑‍🏫


##  🚩 :


### Introduction 

```javaScript
let x = 2;
++x;  // 3 (i.e. this means x = x +1)

let y = "2";
++y; // should be 21 But it's 3 because in JS it's all time case to Number => Number (getValue)
```

### Types

* Primitive Types.
* Abstract Operations. 
* Coercion. 
* Equality. 
* TypeScript, Flow, etc.


> Everything inside JS is ***NOT*** an object >>> Everything ***can behave as*** an object.


#### Primitive Types:

- undefined.
- string.
- number.
- boolean.
- object.
- symbol: in ES6 used for auto private keys.
- bigInt (future): let x = 34n.

#### **NOTES**: 
* `functions` & `arrays` are a ***subtype*** of a *object type*.
* Those types are **NOT** objects:
    * undefined 
    * string 
    * number 
    * boolean 
    * symbol 
    * null 
    * bigint (future)

* Those types **ARE** objects:  
    * object
    * function 
    * array

* In JavaScript, `variables` ***don't*** have types,`values` ***do***.

#### NOTES: 
1. `typeof` operator always return string " ", ex:("undefined", "object", "string", ..)
2. function & arrays are not types of the top level they are subtypes of object, but when using `typeof array` = *object* while `typeof function` = *function*.
3. `typeof null` = *objec*t >>> it is a *bug* in JS.


#### BigInt: 
var n = 42n 
Or 
BigInt(42)
typeof(v) // bigint

#### **undefined** vs. **undeclared** vs. **uninitialized (aka TDZ)** :
* `undefined`: We can have a variable that's been initialized that is undefined (doesn't hold a value at this moment)
* `undeclared`: We can have a variable that was never even created.
* `uninitialized`: We can have a variable that's never been initialized.

### NaN & isNaN:  
- NaN ("not a number") is Special Value and it is the only value that is ***not equal*** to itself (let say a is NAN, then a===a will return false)
- *Type of Nan*: NaN type is number (***invalid number***), becuase it cmoes from numeric operations
- isNan is a method that return if it's not number is a NAN or not 


the isNaN utility coerces values to numbers before it checks for them to be NaN. So, it's gonna coerce the string `my son's age` to a number and guess what number it's gonna coerce it to? The NaN value, so of course it's gonna back true.
-> With ES6, we got a better utility, the `Number.isNan` utility. And that `Number.isNan` tells us defiantly for sure it's the NaN value or it's not. In other words ***it doesn't do any coercion*** for us.





### Type Check Excersie
```javaScript
// TODO: define polyfill for `Object.is(..)`

if (!Object.is || true){   // to disaple the built in method & build my own
    Object.is = function ObjectIs(x,y){
        const xNegZero = isItNegZero(x)
        const yNegZero = isItNegZero(y)

        if (yNegZero || xNegZero ){
            return yNegZero && xNegZero
        }else if (isItNane(x) && isItNane(y)){
            return true
        }else {
            return x===y
        }

        function isItNegZero(v){
            return v===0 && (1/v)=== -Infinity
        }

        function isItNane(v){
            return v !==v
        }
    }
} 
```

#### Fundamental Objects
- aka: Built-In Objects.
- aka: Native Functions.



### Coercion 
aka: ***type conversion***.

### Abstract Operations: **ToPrimitive**

#### ToString: `.toString()`
It takes any value and gives us the representation of that value in string form. And almost every value that you can imagine has at least some kind of representation in string form.


```javaScript
String([]) // "" 
String([1,2,3]) // "1,2,3" 
String([null,undefined]) //"," 
String([[[],[],[]],[]]) //",,,"
String([,,,,]) // ",,,"
```

##### For the Object: we can override the toString() to return what we need as shown below. The useful thing here is JSON.strigfay()

####  ToNumber: we can do it by `Number(x)` 
Anytime we need to do something numeric and we don't have a number, we're gonna invoke the ToNumber abstract operation

#### ToBoolean: we can do it by `Boolean(x)` and return if the value is `Falsy` or `Truthy`
Anytime you have any value that is not a Boolean, and it's used in a place that needs a Boolean, this operation occurs. Exactly the same as the other ones







# DELIEVERABLES	💻

## #1:

```js

```
