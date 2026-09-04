var firstStableIndex = function(nums, k) {
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {

        max = Math.max(max, nums[i]);

        const remaining = nums.slice(i);
        const min = Math.min(...remaining);

        if (max - min <= k) {
            return i;
        }
    }

    return -1;
};