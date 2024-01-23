
// object literal
const mySymb=Symbol("key2")
const myFirstObj ={
    name:"jhon",
    age:21,
    email:"jhon@peaky.in",
    'compnay':"peakyBlinders",
    [mySymb]:"key2"
}

// 3 ways to acces

//1
console.log(myFirstObj.name)
//2
console.log(myFirstObj["age"]);
//3
console.log(myFirstObj["compnay"])
//4
console.log(myFirstObj[mySymb])

// changing the key value 

myFirstObj.email="jhon@peaky.com"
 
// for freezing

// Object.freeze(myFirstObj)

myFirstObj.email ="jhonpeaky@blinder.in"

console.log(myFirstObj)

// using symbole

myFirstObj.greeting= function(){
    console.log(`hey mda fka ${this.name}`)
}
console.log(myFirstObj.greeting())


myFirstObj.jhonEmail=function(){
    console.log(`my email is ${this.email}`)
}


console.log(myFirstObj.jhonEmail())
