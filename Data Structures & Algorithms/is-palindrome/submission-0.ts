class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const standardised = s.toLowerCase().replace(/[^0-9a-z]/g, "");
        const reversed = standardised.split("").reverse().join("");

        if (standardised === reversed) {
            return true;
        }
        return false;
    }
}
