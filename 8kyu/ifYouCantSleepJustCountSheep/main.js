var countSheep = function (num){
  let saying = ''
  if (num === 0){
    return ''
  }else {
    for (let i = 1; i <= num; i++){
      saying += `${i} sheep...`
    }
  }
  return saying;
}