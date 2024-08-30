/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
   let d = [...new Set(nums)] 
d.sort((a, b) => b - a);
     if (d.length >= 3) {
        return d[2];
    } else {
        return d[0]; 
    }
};