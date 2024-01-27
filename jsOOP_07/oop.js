const { groupEnd } = require("console")

const User ={
    username:"kaka",
    loginInfo:false,
    email:"kaka@gmail.com",

    getUserDetails:function(){
        console.log(this.username)
        console.log(`user name ${this.username}`)
        console.log(this)
    },
   
}

console.log(User.getUserDetails)
console.log(User.getUserDetails())


function Client(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;

    this.greeting = function () {
        console.log(`Welcome back:>>>>>>>${this.name}`);
    };

    return this;
}

const cli1 = new Client('John Wick', 32, 'john@glock.in');
cli1.greeting(); 

const cli2= new Client('booggymen',32,'jhon@glock.in')
cli2.greeting()

console.log(cli1)
console.log(cli2)



