var twoSum = function(nums, target) {
  let numObj = {};
  
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        //1) 6 - 1 = 5
        //2) 6 - 2 = 4
        //3) 6 - 7 = 1
        console.log(i)
        //1) does numObj[5] exist? no.
        //2) does numObj[4] exist? no.
        //3) does numObj[1] exist? yes.
        if (numObj[complement] !== undefined) {
          console.log(numObj, numObj[complement])
          return [numObj[complement], i];
        //so return [0, 3]
        }
        //1) so set numObj = {'1': 0}
        //2) so set numObj = {'5': 1}
        numObj[nums[i]] = i;
        //1) i++ i = 1
        //2) i++ i = 2
    
  }

};

//console.log(twoSum([2,7,11,15],9))
console.log(twoSum([1,2,7,4], 6))
//console.log(twoSum([3,2,4],6))

//console.log(twoSum([3,3],6))

