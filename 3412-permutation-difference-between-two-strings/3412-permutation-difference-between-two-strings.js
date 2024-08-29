/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
       sum=0
  for(i in s){
      for( j in t){
          if(s[i]==t[j]){
              sum+= Math.abs(i-j)
          }
      }
  }
    return sum
};