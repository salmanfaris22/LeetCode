/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
        c=[]
    for(i=1;i<=n;i++){
       c.push(i+"") 
    } c=c.map((e)=>e*1)
    
    return c.sort()
};