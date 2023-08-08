function boredom(staff){
  let num = 0;
  
  for (const name in staff) {
    console.log(staff[name])
    switch (staff[name]) {
      case 'accounts':
        num += 1;
        break;
      case 'finance':
        num += 2;
        break;
      case 'canteen':
        num += 10;
        break;
      case 'regulation':
        num += 3;
        break;
      case 'trading':
        num += 6;
        break;
      case 'change':
        num += 6;
        break;
      case 'IS':
        num += 8;
        break;
      case 'retail':
        num += 5;
        break;
      case 'cleaning':
        num += 4;
        break;
      case 'pissing about':
        num += 25;
        break;
    }
  }

  
  if (num <= 80 ) {
    return 'kill me now'
  }
  
  if (num > 80 && num < 100) {
    return 'i can handle this'
  }
  
  if (num >= 100) {
    return 'party time!!'
  }
  
}