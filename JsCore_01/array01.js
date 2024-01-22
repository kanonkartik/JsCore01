let myarray=[1,2,3,4,5,6,6,7,8,9,10]
console.log(myarray.pop())
let index=(myarray.findIndex(item =>item === 9))
console.log(index)

let filter =(myarray.filter(item=>item===6))
console.log(filter)

let arrA=["A","B","D","E","F","G"]

let slice=console.log(arrA.slice(1,4))
console.log("A :", arrA)


let arrB=["A","B","D","E","F","G"]
console.log("B :", arrA)
let splice=console.log(arrB.splice(0,4))
console.log(arrB);

let mapResult = myarray.map(item => item * 2);

console.log("mapResult:", mapResult);

let forEachresult= myarray.forEach(item=>{
    console.log(item)
})
let myarrayA=[1,2,3,4,5,6,6,7,8,9,10]
myarrayA.forEach((item,index,array)=>{
    array[index]=item *5
})
console.log(myarrayA)

console.log(myarrayA.join("NaN"))

console.log(arrA.push(myarrayA))

console.log("HERE IT IS",arrA)