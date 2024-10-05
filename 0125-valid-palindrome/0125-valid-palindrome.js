/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase().split("")
    c=[]
    for(i of s){
       
        if(i!==i.toUpperCase() || i!==i.toLowerCase() ||i===String(Number(i))){
            
            c.push(i)
          
        }
    }
    k=c.join("")
    c=c.reverse().join("")

    return c==k
};