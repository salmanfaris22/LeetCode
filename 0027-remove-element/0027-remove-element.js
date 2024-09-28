/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
     k=0
  for(i=0;i<nums.length;i++){
     if (val!=nums[i]){
          nums[k]=nums[i]
          k++
      }
  }
     
  
    return k
};