function bmi(weight, height) {
    let calculateBMI = weight / (height ** 2)
    
    if (calculateBMI <= 18.5){
      return 'Underweight'
    }else if (calculateBMI <= 25){
      return 'Normal'
    } else if (calculateBMI <= 30){
      return 'Overweight'
    }else if(calculateBMI > 30){
      return 'Obese'
    }
  }