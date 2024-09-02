/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
     s=s.split("")
    k=[]
    for(i=0;i<indices.length;i++){
        k[indices[i]]=s[i]
    }
    return k.join("")
};