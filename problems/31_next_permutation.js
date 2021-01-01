var nextPermutation = function(nums) {
  if (nums.length == 1) return nums;
  var sorted = [...nums].sort((a, b) => a - b);

  for (var i = nums.length - 1; i > 0; --i) {
    if (nums[i] > nums[i-1]) {
      var tmp = nums[i];
      nums[i] = nums[i-1];
      nums[i-1] = tmp;
      return nums;
    }
  }
  nums.sort((a, b) => a - b);
  return nums;
};

console.log(nextPermutation([1,3,2]))
