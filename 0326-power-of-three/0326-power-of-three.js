/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n==1){
        return true
    }
    f=n
    l=0
     for( i=1;i<f;i+=0){
        f=f/3
        l++
     }
     return Math.pow(3,l)==n

}