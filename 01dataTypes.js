// primitive types (stack, when make copy it makes new copy of value on stack): numbers, strings, booleans, null, undefined, symbols
// reference types (heap with pointer on stack, when make copy it makes new copy of ptr on stack): all objects - literals, arrays, functions, dates

let a = 50;
let b = a;
console.log(a, b); //50, 50
a = 100;
console.log(a, b); //100, 50

const c = { name: 'jane', age: 26 };
const d = c;
console.log(c, d); // both {name: 'jane', age: 26}
c.age = 27; //updates cd as well
console.log(c, d); // both {name: 'jane', age: 27}

// variables: let (can update), const (cannot update)
const firstName = 'jane'

// string 
console.log(firstName.length)
firstName.toUpperCase()
firstName.lastIndexOf('n')
firstName.indexOf('n')
firstName.slice(0, 2) //idxoflastchar-1
firstName.substr(0, 2) //#ofcharstoget
firstName.replace('n', 'w') //replace only first n
firstName.includes('n')

// numbers
let age = 26;
age++
age += 10
const pi = 3.14
console.log(3 + 'pi') //NaN
console.log(`${firstName} is ${age} years old`); //template strings

// boolean
console.log('a' > 'A') //true
    // loose == (diff type can still be equal) vs strict comparison === 
let num = 25;
console.log(num == '25'); //true
console.log(num === '25'); //false

// array
let list = [1, 'hi', 2];
list.length
list.join(',')
list.indexOf(2)
list.concat([3, 4])
list.push(5)
list.pop(5)
list.include(4)

// Undefined vs Null (intentional lack of value)
let count;
console.log(count, count + 3, `count is ${count}`); // undefined NaN 'count is undefined'
count = null;
console.log(count, count + 3, `count is ${count}`); // null 3 'age is null'

// type conversion
let score = '100';
score = Number(score);
console.log(score + 1); //101
console.log(typeof score); //number

// truthy falsy: 0 and '' is false
let res = Boolean(100);
console.log(res, typeof res); //true "boolean"
console.log(Boolean(0), typeof Boolean(0)); //false "boolean"
console.log(Boolean('0'), typeof Boolean('0')); //true "boolean"
console.log(Boolean(''), typeof Boolean('')); //false "boolean"