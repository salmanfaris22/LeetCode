/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    
      for(i=0;i<k;i++){
            s=Infinity
            index=0
          for(j=0;j<nums.length;j++){
            if(s>nums[j]){
                s=nums[j]
                index=j
            }
           }
           nums[index]=s*multiplier
      }
    return nums
};