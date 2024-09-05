/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
        return sentences.sort((a,b)=>b.split(" ").length - a.split(" ").length)[0].split(" ").length
};