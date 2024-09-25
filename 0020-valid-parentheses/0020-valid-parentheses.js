/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
     arr = [];
     str = { '(': ')', '{': '}', '[': ']' };

    for (let x of s) {
        if (str[x]) {
            arr.push(x);
        } else {
            if (arr.length === 0 || str[arr.pop()] !== x) return false;
        }
    }
    return arr.length === 0;


};