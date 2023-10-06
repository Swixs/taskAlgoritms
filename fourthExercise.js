function biggest(nums) {
    debugger
    nums.reverse();
    return nums.join('');
};


const nums = [3, 30, 34, 5, 9];

const result = biggest(nums);

console.log(result);