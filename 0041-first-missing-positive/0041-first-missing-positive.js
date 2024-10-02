/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
   nums=nums.sort((a,b)=>a-b).filter((e)=>e>0)
    nums=[...new Set(nums)]
    for(i=0;i<nums.length;i++){
        if(nums[i]!=i+1){
            return i+1
        }
    }
    
    
    return ++i

};