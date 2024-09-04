/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    x=[...new Set(sentence)]

    return x.length==26 ? true:false
};