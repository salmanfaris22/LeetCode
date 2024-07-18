/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
num = BigInt(num.join(''));
num = num + BigInt(k);
return num.toString().split('').map(Number);
};