function twoSum(numbers, target) {
  let map = {};
  
  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i];
    
    if (Object.hasOwn(map, diff)) {
      return [map[diff], i]
    }
    map[numbers[i]] = i
  }
}