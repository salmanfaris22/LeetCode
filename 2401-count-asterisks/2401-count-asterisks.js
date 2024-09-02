/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    ans=0
    k=1
    for(i of s){
        if(i === "*"){
            ans += k
        }else if(i==="|"){
            k^= 1
        }
    }
    return ans
};