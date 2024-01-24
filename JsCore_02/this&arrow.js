const myUser={
    name: "alena",
    age: 21,
    email:"alena@gmail.com",
    greeting:function (){
        console.log(`welcome back ${this.name}`)
        console.log(this) // scope(present) context capture krta hai!!
    }
}

console.log(myUser.greeting())

myUser.name="suresh"
console.log(myUser.greeting())

console.log(this)


function cup(){
    let username="kaka"
    console.log("from function: ",this) //undefiend can't use into the function 
}

cup()


cup = ()=>{
    let username="kaka"
    console.log("from arrow function: ",this) //{} canuse into the function  this value from the outer context where the arrow function is defined. If it's in the global scope, it will refer to the global object; i
    console.log(this)
}

cup()
//2
// const add =(num1, num2)=>{
//     return num1 + num2
// }

//3 
//const add=(num1,num2) => num1+ num2 // not nessacery to mention return

//4
//const add = (num1, num2) =>(num1 + num2) // if using () here is alos not required to use return

//5
const returnobj =()=>({username:"kaka"})// object ko return krne k liye ( ) rap krna hi padega
console.log(returnobj())
//console.log(add(5,10))