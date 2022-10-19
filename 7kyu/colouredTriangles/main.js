function triangle(row) {

    if (row.length <= 1)
      return row;
  
    let res = '';
  
    for (let i = 0; i < row.length - 1; i++)
  
      res += row[i] === row[i + 1]
           ? row[i]
           : 'RGB'.replace(row[i], '').replace(row[i + 1], '');
  
    return triangle(res);
  
  }




  // ***MY ATTEMPT***

//   function triangle(row) {
//     let arrOfCombination = [ ['BG', 'R'], ['RG', 'B'], ['BR', 'G'] ]
//     let newRowOfCombination = row
                          
//     for (let i = 0; i < newRowOfCombination.length; i++) {
//       newRowOfCombination = ''
//        let pairOfLetters = row[i] + row[i + 1]
//        if (pairOfLetters[0] === pairOfLetters[1]) {
//          newRowOfCombination += pairOfLetters[0]
//        }
      
//        arrOfCombination.forEach((ele) =>  ele[0] === pairOfLetters || ele[0].split('').reverse().join('') === pairOfLetters ?  newRowOfCombination += ele[1] : 0)
//        console.log(newRowOfCombination)
//     }
     
    
    
//   }
  
  //Be given the first row
  //   R R G B R G B B
  //    R B R G B R B
  //grab the first two letters
  //does the element's index 0 contain that combination?
  //print that element's index 1
  // create that new row 
  // at the end of that row, make emtpy str
  // repeat that loop with that new row