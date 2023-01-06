// SUBMIT EVENTS
// const form = document.querySelector('.signup-form');
// form.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log(form.username.value);
// })


// REGEX
// ^[a-zA-z]{6,10}$ 6 to 10 letters
// ^.{6}$ at least 6 anything
// Regex101 site - https://regex101.com/ 
// Learn Regex - https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD


// TESTING REGEX
// const username = 'jane';
// const pattern = /^[a-z]{6,}$/;
// //way 1
// let result = pattern.test(username);
// console.log(result);
// //way 2
// result = username.search(pattern);
// console.log(result); //returns idx if match, else -1


// FORM VALIDATION
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;
    if (usernamePattern.test(username)) {
        feedback.textContent = 'valid';
    } else {
        feedback.textContent = 'not valid';
    }
});


// LIVE FEEDBACK
form.username = addEventListener('keyup', e => {
    console.log(e)
        // console.log(e.target.value, form.username.value);
    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'failed');
    }
})