/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    

    return [...new Set(sentence)].length==26 ? true:false
};