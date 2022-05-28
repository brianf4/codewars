function areYouPlayingBanjo(name) {
  let yourName = name.toLowerCase().split('')
  
  if (yourName[0] === 'r'){
    return name + " plays banjo" 
  }else {
    return name + " does not play banjo"
  }
}