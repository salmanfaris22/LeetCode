/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
     nums=nums.sort((a,b)=>a-b)
     
     for(i=0;i<nums.length;i++){
         temp=nums[i]
         nums[i]=nums[i+1]
         nums[i+1]=temp
         i++
     }
    return nums
};