class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // two pointer solution
        // s index at 0 should match s index at s.length-1
        // s index at 1 should match s index at s.length-2... etc
        const standardised = s.toLowerCase().replace(/[^0-9a-z]/g, "");

        let left = 0;
        let right = standardised.length - 1;

        while (left < right) {
            if (standardised[left] !== standardised[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
