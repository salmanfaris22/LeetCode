/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if(s=="Infinity" || s=="-Infinity" || s=="+Infinity"){
        return false
    }
    return s==Number(s)
};