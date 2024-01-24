//if
// const isUserLoggedIn = 40

// if (isUserLoggedIn === 40){
//        console.log("yah main agya")
// } else{
//     console.log("ye glt hai")
// }

//< , >, <=, >=, === , == , !=


// const score =200 

// if(score>100){
//     const power ="fly"
//     console.log(`User Power : ${power}`)
// }

//const balance = 2000

//if(balance>500) console.log("test"),console.log("text2") not good prctice


// if(balance<500){
//     console.log("less then")
// }else if(balance<750){
//     console.log("less then 750")
// }else if(balance<900){
//     console.log("less 900")
// }else{
//     console.log("less then 1200")
// }

const isUserLoggedIn = true
const debitCard = true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;
if(isUserLoggedIn && debitCard){
    console.log("allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in ")
}