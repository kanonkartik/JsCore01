// const startbtn =document.querySelector("#ready").addEventListener('click',function( gooo){
  
// })

// const gooo = setInterval(()=>{
//     document.querySelector('h1').innerHTML="lo chlne laga"
//     console.log(Date.UTC)
//  },1000)

// const stptbtn =document.querySelector("#stp").addEventListener('click',function(){
//     clearInterval(gooo)
// })

//generate a random color

const randomColor =function(){
    const hex="0123456789ABCDEF"
    let color = '#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]

    }
    return color
}
let stopchanging;
const startchang =function(){
    if(!stopchanging){
        stopchanging= setInterval(changeColor,1000);
    }
function changeColor(){
    document.body.style.backgroundColor=randomColor()
   }
}
const stpchang =function(){
    clearTimeout(stopchanging)
    startchanging=null;
}

document.querySelector("#ready").addEventListener('click',startchang)

document.querySelector("#stp").addEventListener('click',stpchang)


