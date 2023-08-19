var AmIAfraid = function(day, num){
  switch(true) {
      case day === "Monday" && num === 12:
      case day === "Tuesday" && num > 95:
      case day === "Wednesday" && num === 34:
      case day === "Thursday" && num === 0:
      case day === "Friday" && num % 2 === 0:
      case day === "Saturday" && num === 56:
      case day === "Sunday" && (num === 666 || num === -666):
        return true;
        break;
      default:
        return false;
  }
}