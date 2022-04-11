function stringClean(s){
  return s.split('').filter(element => {
    if(isNaN(element) || element == ' '){
      return element
    } 
  }).join('');
}