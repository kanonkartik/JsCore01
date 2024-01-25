const { it } = require("node:test")


const lang = ["go", "rust", "cpp" , "phython", "javascript", "ruby"]

const values = lang.forEach((item)=> {
   //console.log(item)
     return item
    
})
console.log(values)//The forEach method in JavaScript does not return a value; it always returns undefined


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const kaTable= myNums.map( (item)=>item *2).map((item)=> item + 1) //.forEach((item)=>{(item.toString )
//     //console.log(item)})
// console.log(kaTable)

//const newNum = myNums.filter((item)=> item> 5)
//console.log(newNum)


// let arr = []
//  myNums.forEach( (item)=>{
    
//     if(item >5){
//           arr.push(item)
//           console.log(item)
//     }
    
// })

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const yourbook =books.filter((item)=>item.publish === 1989)
//   console.log("here's your book: ", yourbook)

// const mybook = books.map( (item)=> item.edition>2004)
// console.log(mybook)


const bucket = books.filter( (item)=>{
return item.genre ==="History" && item.publish >= 1986
})

console.log(bucket)

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const total = shoppingCart.reduce((acc,crr)=> acc + crr.price ,0)

console.log(total)