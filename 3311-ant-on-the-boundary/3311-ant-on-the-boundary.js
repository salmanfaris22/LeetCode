/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
        f=0
    nums.reduce((acc,e)=>{
  t=acc+e
        if(t==0){
            f++
        }
        return t
              
    })
    return f
};