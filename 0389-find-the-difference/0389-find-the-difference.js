/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    r=0
    for(i=0;i<s.length;i++){
        r=r^s.charCodeAt(i);
    }
      for(i=0;i<t.length;i++){
        r=r^t.charCodeAt(i);
    }
    return String.fromCharCode(r);
};