// for

 let array = [1,2,3,4,5,6,]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element==5){
        //console.log("hey I'm 5")
    }
    //console.log(element)
}

for (let i = 0; i < array.length; i++) {
    console.log(`Outer loop value ${i}`)
    for (let j = 0; j < array.length; j++) {
       
        //console.log(`${j} and inner loop ${i}`)

        console.log(i + "*" + j + ' =' + i * j)
    }
    
}

// break and continue

for (let i = 1; i <=20; i++) {
    if(i==5){
        console.log("my fav no:",i)
        //break
        continue;
    }
   console.log(`value of i is ${i}`)
    
}