/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
      c=""
    s=s.split("")
    for(i=0;i<s.length;i++){
        if(s[i].toUpperCase()!=s[i] ||s[i].toLowerCase()!=s[i] ){
            c+=s[i]
        }
    }
     c=c.split("").reverse().join("")
     
    j=0
     for(i=0;i<s.length;i++){
        if(s[i].toUpperCase()!=s[i] ||s[i].toLowerCase()!=s[i] ){
           s[i]=c[j]
           j++
        }
    }
    
   
    return s.join("")
};