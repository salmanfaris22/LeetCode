/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
        c=[]
    for(i=1;i<=n;i++){
       c[i-1]=i 
    } 
    
    return c.sort()
};