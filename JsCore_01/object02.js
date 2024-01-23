//non-lateral
//const myobj= new Object()

// const myObject = Object.create(null);
// console.log(myObject)

const bumbleUser={}

bumbleUser.name="ayisha";
bumbleUser.age=23
bumbleUser.email="ayish123@gmail.com"

console.log(bumbleUser)



const regulearFunction={
    name:"Rolax",
    work:{
        drugs:{
            poweder:"white",
            position:{
                level:10
            }
        }
    }
}

console.log(regulearFunction.work.drugs.position.level)

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"a",5:"b",6:"c"}

//const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)

console.log(obj3)

const obj4={...obj1,...obj2}

console.log(obj4)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(bumbleUser)

console.log(Object.keys(bumbleUser))
console.log(Object.values(bumbleUser))
console.log(Object.entries(bumbleUser))

console.log(bumbleUser.hasOwnProperty("name")) //true


const myCourse ={
    name:"Conversation skill",
    prize:"5000",
    valid:"1 year"
}

const {name}=myCourse

console.log(name)

const {prize:$}=myCourse
console.log($)

const {valid:vld}=myCourse
console.log(vld)

[
    {},
    {},
    {}
]