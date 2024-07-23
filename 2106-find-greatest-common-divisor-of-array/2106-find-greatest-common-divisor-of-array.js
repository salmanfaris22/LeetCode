/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
     nums=nums.sort((a,b)=> a-b)
    s=nums[0]
    l=nums[nums.length-1]
    k=1
    for(i=1;i<=l;i++){
       
       if(l%i===0 && s%i===0){
           k=i
       }
       
    }
    return k
    
};