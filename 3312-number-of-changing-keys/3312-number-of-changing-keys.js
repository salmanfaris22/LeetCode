/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    s=s.toLowerCase()
    f=0
    for(i=0;i<s.length;i++){
        if(s[i]!=s[i+1]){
            f++
        }
    }
    return f-1
};