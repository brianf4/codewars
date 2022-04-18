function shortcut(string){
  const volwes = ['e','u','i','o','a']
  return string.split('').filter(s => !volwes.includes(s)).join('');
}