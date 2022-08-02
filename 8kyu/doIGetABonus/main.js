function bonusTime(salary, bonus) {
  if (bonus === true) {
    salary *= 10;
    return `£${salary.toString()}`
  }else {
    return `£${salary.toString()}`
  }
}