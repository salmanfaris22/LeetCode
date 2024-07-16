/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
let x=1
  for(i=0;i<nums.length-1;i++){
      if(nums[i] != nums[i+1]){
          nums[x]=nums[i+1]
          x++
      }
  }
  
   return x



};