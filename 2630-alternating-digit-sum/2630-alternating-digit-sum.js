/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
     n=n.toString().split("").map((e)=>e*1)
    c=0
    for(i=0;i<n.length;i++){
       if(i%2===0){
           c += n[i]
       }else{
           c+= -n[i]
       }
    }
    return c
};