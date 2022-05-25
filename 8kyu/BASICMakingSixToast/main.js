function sixToast(num) {
  switch(true){
      case num > 6:
      return num - 6
      break;
      case num < 6:
      return 6 - num
      break;
      default:
      return 0
  }
}