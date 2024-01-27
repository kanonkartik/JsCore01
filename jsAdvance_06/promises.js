// const { rejects } = require("assert");
// const { resolve } = require("path");

const { error } = require("console")

// const firstPromise= new Promise((resolve,rejects)=>{

//     setTimeout(()=>{
//         resolve()
//         console.log("db connected")
//     },5000)
// }).then(()=>{console.log("from then")})


// new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res({name:'kaka',email:"kaka@gmil.com"})
//             console.log("hey your work has done")
//         },1000)
// }).then((user)=>{
//   console.log(user)  // content is passed from promise to then
// })

// new Promise((res, rej) => {
//     const err = true;
//     setTimeout(() => {
//         if (!err) {
//             rej();
//             console.log("prisma is  not connected");
//         } else {
//             res({ name: "kuku", email: "kuku@gmail.com" });
//         }
//     }, 3000);
// })
//     .then((user) => {
//         console.log(user.name);
//         return user.name;
//     })
//     .then((name) => {
//         console.log(name);
//         return name;
//     })
//     .catch((err) => console.log(err)).finally(()=>{console.log("finnaly")})


///////////////////////////////////////////

// const mygithubAPI= async function(){
//     const res = await fetch('https://api.github.com/users/kanonkartik/repos')
//     const data= await res.json()
//     console.log(data)
// }

// mygithubAPI()


 fetch('https://api.github.com/users/kanonkartik').then(async(res)=>await res.json()).then((data)=>console.log(data)).catch((error) => console.error('Error fetching data:', error)); 

// fetch ('https://api.github.com/users/kanonkartik')
// .then(async(res)=>{
//   await res.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })

// fetch('https://api.github.com/users/kanonkartik')
//     .then(async (res) => await res.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error('Error fetching data:', error));
