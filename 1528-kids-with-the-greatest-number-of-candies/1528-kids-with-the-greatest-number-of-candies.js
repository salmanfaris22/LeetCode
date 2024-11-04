/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
     max = Math.max(...candies);
  result = candies.map(candy => candy + extraCandies >= max);
     return result
};