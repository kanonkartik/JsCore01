// function add(){
//    let sum = 1 + 2
//      console.log(sum)
// }

// add()

// function sub(num1,num2){
//     console.log(num1-num2)
// }

function sub(num1,num2){
    // let sum = num1 - num2
    return num1 -num2
  
}

const result = sub(10,5) //argument
//console.log(result)


function userLoginMsg(message){
    if(!message){
        console.log("unable to find username")
        return
    }else{
        return `${message} just logged in`
    }
    
}
// let mssg =userLoginMsg("prince")
//console.log(userLoginMsg("mitesh"))
// console.log(mssg)//

//console.log(userLoginMsg()) //undefiendn

function calculateCartPrize(...itemPrize){
    let total= itemPrize.reduce((acc,curr)=>acc +curr ,0)
    return total
    

}

console.log(calculateCartPrize(22,444,777,888,100,200))

let criminal ={
    name:"jhon",
    age:"29",
    reason:"just being popular"
}

function criminalDeails(anyObject){
   console.log(`his name is ${anyObject.name} age: ${anyObject.age} why in jail ${anyObject.reason}`)
}

criminalDeails(criminal)

// array

function newArray(arr){
    return arr[2]
}
console.log(newArray([200 , 300, 400]))