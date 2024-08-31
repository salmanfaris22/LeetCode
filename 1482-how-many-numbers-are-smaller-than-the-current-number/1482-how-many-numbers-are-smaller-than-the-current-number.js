/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    f=[]
for(i=0;i<nums.length;i++){
    s=0
   for(j=0;j<=nums.length;j++){
       if(nums[i]>nums[j]){
           s++
       }
   } 
   f.push(s)
}
  return f
};