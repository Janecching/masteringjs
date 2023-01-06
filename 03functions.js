// function expression: not hoisted, can only work if before function is used - so this is good
const speak = function(name = 'alex') {
    console.log(`yo ${name}`);
}; // expressions has semicolon

greet(); // hello
speak('jane'); // yo jane
speak(); //yo alex

// function declaration: hoisted to the top by js
function greet() {
    console.log('hello');
}

// return values
const calcArea = function(rad) {
    return 3.14 * rad ** 2;
}
const area = calcArea(5);
console.log(area);

// arrow function
const calcAreaArrow = rad => 3.14 * rad ** 2;
console.log(calcAreaArrow(5));

// functions 
greet()

// methods
const nama = 'jane';
console.log(nama.toUpperCase());

// calbacks (use function as arguments) 
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};
// myFunc(function(value) {
//     console.log(value);
// });  OR
myFunc(value => console.log(value));

// for each (a method that iterate over array)
let list = ['a', 'b', 'c'];
// list.forEach(function(c, idx) {
//     console.log(c, idx);
// });
// list.forEach((c, idx) => console.log(c, idx));
const logChar = (c, idx) => {
    console.log(`${idx} is ${c}`);
}
list.forEach(logChar);

// create list in browser
const ul = document.querySelector('.char');
const people = ['a', 'b', 'c'];
let html = ``;
people.forEach(function(p) {
    html += `<li style="color: purple">${p}</li>`;
});
console.log(html);
ul.innerHTMl = html;