function multiTable(number) {
    let someString = '' 
     let i = 1
     
     while (i <= 9) {
       someString += `${i} * ${number} = ${i * number}\n`
       i++
     }
     
     someString += `10 * ${number} = ${10 * number}`
   
     return someString
 }