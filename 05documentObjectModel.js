// node tree
/*     html
    head   body
   title  h1 div div   */

// grab single element
const para = document.querySelector('p.error'); //first p tag
const para2 = document.querySelector('body > p.error'); //first p tag
console.log(para); // <p class="error">error</p>
console.log(para2); // <p class="error">error</p>

// grab by css selectors
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');
console.log(paras); // NodeList(2) [p, p.hru] - not an array
console.log(paras[1])
paras.forEach(p => {
    console.log(p)
})
console.log(errors); //NodeList(2) [p.error, div.error]
console.log(errors[1])
errors.forEach(p => {
    console.log(p)
})

// grab by ID
const title = document.getElementById('page-title');
console.log(title);

// grab by class name
const errs = document.getElementsByClassName('error');
console.log(errs); // HTMLCollection(2) [p.error, div.error]
console.log(errs[0]); // but for each doesnt work

// grab by tag name
const par = document.getElementsByTagName('p');
console.log(par);
console.log(par[1]);


// replace content
// const p = document.querySelector('p');
// console.log(p.innerText); //property not method
// p.innerText = 'yo';
// p.innerText += 'mama';

const ps = document.querySelectorAll('p');
ps.forEach(p => {
    console.log(p.innerText);
    p.innerText += ' new text';
})

// append to content
const content = document.querySelector('.content');
content.innerHTML += '<h2> new h2 </h2>';
console.log(content.innerHTML);


// add p for each person to content
const people = ['a', 'b', 'c'];
people.forEach(p => {
    content.innerHTML += `<p>${p}</p>`;
});


// set link attribute
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'yahoo.com');

// set style
const msg = document.querySelector('h2');
console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'not test');
msg.setAttribute('style', 'color: green');

const titl = document.querySelector('h1');
console.log(titl.style);
console.log(titl.style.color);
titl.style.margin = '50px'; //appended, not replaced, so better than set attribute
titl.style.fontSize = '60px'; //in css it is font-size
titl.style.margin = ''; //to remove


// add remove classes
// const contnt = document.querySelector('p');
// console.log(contnt.classList);
// contnt.classList.add('error');
// content.classList.remove('error');

const pars = document.querySelectorAll('p');
pars.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    }
    if (p.innerText.includes('success')) { //but innerText cant see hidden text eg span used with display none
        p.classList.add('success');
    }
})

const ttle = document.querySelector('.title');
ttle.classList.toggle('test');
// ttle.classList.toggle('test');


//parent and children
Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
})
title.parentElement
title.nextElementSibling
title.previousElementSibling


//button
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('clicked');
})