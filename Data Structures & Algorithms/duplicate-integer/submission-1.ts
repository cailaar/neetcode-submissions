class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        const unique = new Set<number>(nums);
        return unique.size != nums.length;
    }
}

