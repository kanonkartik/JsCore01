let n=2

for(let i=0;i<n;i++){
     let row = "      "
    for(let j=0;j<n;j++){
        //process.stdout.write("* ");
        row += j
        for(let k=0;k<n;k++){
            row += k
        }
    }
    console.log(row);  // Move to the next line after each row
}