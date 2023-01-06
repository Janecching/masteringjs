// for loop: hi*5
console.log('///////// for loop /////////')
for (let i = 0; i < 5; i++) {
    console.log('hi')
}

// while loop: hey*5
console.log('///////// while loop /////////')
let i = 0;
while (i < 5) {
    console.log('hey')
    i++;
}

// do while (run at least once): hello*5
console.log('///////// do while /////////')
i = 0;
do {
    console.log('hello')
    i++;
} while (i < 5);

// if else
console.log('///////// if else /////////')
const age = 26;
if (age > 26) {
    console.log('you old');
} else if (age == 26) {
    console.log('perfect age')
} else {
    console.log('you young')
}

// logical operators
console.log('///////// logical operators /////////')
console.log(true && false) //false
console.log(true || false) //true
console.log(!true) //false

// break and continue: dont print 0, stop at 2
console.log('///////// break and continue /////////')
const score = [0, 1, 2, 3];
for (let i = 0; i < score.length; i++) {
    if (score[i] === 0) {
        continue;
    }
    console.log(score[i])
    if (score[i] === 2) {
        console.log('nice');
        break;
    }
}

// switch statement
console.log('///////// switch statement /////////')
const grade = 'B';
switch (grade) {
    case 'A':
        console.log('you smart');
        break;
    case 'B':
        console.log('you smarter');
        break;
    default:
        console.log('you smartest');
        break;
}

// variables & block scope
console.log('///////// variables & block scope /////////')
let num = 1; // global scope, all let can be changed to const, res will be the same
if (true) {
    num = 2;
    console.log('inside: ', num); //2
}
console.log('outside: ', num); //2

if (true) {
    let num = 3; // local scope
    let name = 'jane';
    console.log('inside: ', num, name); //3, jane
    if (true) {
        let num = 4;
        console.log('inside second: ', num, name); //4, jane
        var test = 'var'; // var doesnt have scope
    }
}
console.log('outside: ', num, name, test); //2