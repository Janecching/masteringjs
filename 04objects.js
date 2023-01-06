// object literals
let user = {
    name: 'jane',
    age: 26,
    hobbies: ['modeling', 'modelling'],
    fav: [
        { food: 'burger', type: 'junk' },
        { food: 'pizza', type: 'junk' }
    ],
    action: function() {
        console.log('run');
    },
    logHobFav() { // use this way to write fn in objects
        console.log(this)
        this.hobbies.forEach(hobby => {
            console.log(hobby);
        })
        this.fav.forEach(f => {
            console.log(f.food, f.type);
        })
    },
    logWindow: () => { // this in arrow refers to window
        console.log(this)
    }
};

console.log(user)
console.log(typeof user)
console.log(user.age)
user.age = 27
user['name'] = 'alex'
console.log(user.name)
console.log(user['age'])
console.log(user.hobbies[1])
user.action();
console.log(this);
user.logHobFav();
user.logWindow();


// Math object
console.log('///////////////////////')
console.log(Math);
console.log(Math.PI);
const area = 7.7;
console.log(Math.round(area)); //8
console.log(Math.floor(area)); //7
console.log(Math.ceil(area)); //8
console.log(Math.trunc(area)); //7
const random = Math.random();
console.log(Math.round(random * 100)) //1-100