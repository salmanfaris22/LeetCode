/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
 s=s.split("")
    c=""
    for(i=0;i<s.length;i++){
        if(s[i]=="i"){
          s=(c.split("").reverse().join("")+s.splice(i+1).join("")).split("")
          i=0
          c=""
        }
        c+=s[i]
    }
    return  s.join("")
};