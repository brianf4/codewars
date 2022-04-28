function abbrevName(name){
  let initials = '' 
  let nameArr = name.split(' ')
  initials += nameArr[0][0].toUpperCase()
  initials += '.'
  initials += nameArr[1][0].toUpperCase()
  return initials
}