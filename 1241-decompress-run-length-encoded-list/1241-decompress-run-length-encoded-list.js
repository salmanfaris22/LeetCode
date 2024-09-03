/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
      n=[]
    for(i=0;i<nums.length;i++){
       f=nums[i]
       i++
       v=nums[i]
       for(j=0;j<f;j++){
           n.push(v)
       }
     
   
    }
    
    return n
};