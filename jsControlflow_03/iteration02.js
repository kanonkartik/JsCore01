// for of

const { it } = require("node:test")

// ['','','']
// [{},{},{}]


const arr=[1,2,3,4,5]

for(const num of arr){
    console.log(num)
}

const greetings = "Hello World!"
for(const greet of greetings){
    if(greet== " "){
        console.log("SPACE")
        continue
    }
    console.log(`each char is ${greet}`)
}

// MAPS

const map =new Map()
map.set("IN","india")
map.set("UN","United State of America")
map.set("Fr", "France")


console.log(map)

for (const [key , value] of map){
    console.log(key, ":-", value)
}


// const myObj ={
//     'game': "NFS",
//     'game1': 'spiderman'
// }

// for (const [key , value] of myObj){
//     console.log(key, ":-", value)
// }
//not iterable



//0BJECT 

const myObj ={
    js: "javascript",
    cpp : "C++",
    rb : "RUBY",
    swift: "swift by apple"
}


for (const key  in myObj) {
   console.log(`${key} shortcut is for ${myObj[key]}`)
}


const programming = ['js','rb','py','java','cpp']

for (const key in programming){
    console.log(key,":-",programming[key])
}

// for(const key in map){
//     console.log(key)
// } not possible

//forEach LOOP


const conding = ['js','rb','py','java','cpp']

conding.forEach( (item)=>{
    const yo = item.slice(0,1)
    console.log(yo)
})

function printMe(item){
    console.log(item)
}

//conding.forEach(printMe)

conding.forEach((item , index , arr)=>{
    console.log(item, index ,arr)
})


const myCoding =[
    {
        languageName:"javascript",
        languageFileNmae:'js'
    },
    {
        
        languageName:"java",
        languageFileNmae:'ja'
    },
    {
        languageName:"rust",
        languageFileNmae:'rt'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})