// let a =0
// const b= 1  // global scope
// var c= 3

// if(true){
//     let a =0
//     const b= 1   // block scope (we can't acces let const from global scope )
//     //var c= 3  // not good for healt
    
// }
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

//console.log(a, b, c) // a , b is not defiend (for a good reason)

//console.log(c)

// windows scope is diff and code environment if diff


function one1(){
    let nameofgf="sneha"

    function two2(){
        console.log(nameofgf)
        let nameofgf02 ="mahi"
    }
    two2()
      //1console.log(nameofgf02)
}
one1()

//2console.log(nameofgf)


// child can accesh parent variable , but parent can't

if (true) {
    const username = "nobita"
    if (username === "nobita") {
        const website = " youtube"
        //console.log(username + website);
    }
     //console.log(website);
}

// console.log(username);

// ++++++++++++++++++ Intresting +++++++++++++++++++

console.log(addOne(9))
function addOne(sum){
    return sum + 1

    //he addOne function appears to be working properly because function declarations in JavaScript are hoisted. Hoisting means that the entire function, including its body, is moved to the top of the scope during the compilation phase. This allows you to call the function before its actual declaration in the code.
}
//two(9)//Cannot access 'two' before initialization
const two = function(sum){
    return sum + 2
}

console.log(two(2))