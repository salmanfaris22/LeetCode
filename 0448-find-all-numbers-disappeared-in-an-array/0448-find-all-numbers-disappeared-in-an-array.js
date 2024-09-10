var findDisappearedNumbers = function(nums) {
  const n = nums.length;
  const numSet = new Set(nums);
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (!numSet.has(i)) {
      result.push(i);
    }
  }

  return result;
};
