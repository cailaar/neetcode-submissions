class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // to have space O(1) we don't want to create a new string to standardise,
        // just check and skip over non alphanumeric characters 

        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while(left < right && !this.isAlphanumeric(s[left])){
                left++;
            }
            while(left < right && !this.isAlphanumeric(s[right])){
                right--;
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()){
                return false;
            }
            left++;
            right--;
        } return true;
        
    }
    private isAlphanumeric(char: string): boolean {
        return /[a-z0-9]/i.test(char);
    }
    // another way you could write this function
    //     private isAlphanumeric(char: string): boolean {
    //     const code = char.charCodeAt(0);
    //     return (
    //         (code >= 48 && code <= 57) ||  // 0-9
    //         (code >= 65 && code <= 90) ||  // A-Z
    //         (code >= 97 && code <= 122)||   // a-z
    //     );
    // }
}
