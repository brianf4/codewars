var replaceDots = function(str) {
  return str.split('').map(ele => ele === '.' ? ele.replace('.', '-') : ele).join('')
  
}