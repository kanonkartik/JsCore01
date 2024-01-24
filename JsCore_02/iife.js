// imediately invoked function expression  //gobal scope k polution se problem hoti hai
//iski jarurat eliye padti hai kyun ki humko global ka polution se bachna hota hai...

// function light(){
//     console.log("DB CONNECTED")
// }
// light()




//invoked()

(function light(){
    //named IIFE
    console.log("DB CONNECTED VERRY FAST")
})();//imp

(()=>{
    console.log("data base connected fast2")
})();

((name)=>{
    console.log(`connected ${name}`)
})("Aws")