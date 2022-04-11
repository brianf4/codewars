function magNumber(info){
  const [gun, street] = info;
  let magzines = 0;
  switch(gun){
      case('PT92'):
      magzines = Math.ceil((street * 3) / 17);
      break;
      case('M4A1'):
      magzines = Math.ceil((street * 3) / 30);
      break;
      case('M16A2'):
      magzines = Math.ceil((street * 3) / 30);
      break;
      case('PSG1'):
      magzines = Math.ceil((street * 3) / 5);
      break;
  }
  return magzines;
}