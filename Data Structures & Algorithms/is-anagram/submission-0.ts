class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // if the words aren't the same length they aren't anagrams
        if (s.length !== t.length) {
            return false;
        }

        const tally = new Map<string, number>();

        // count each letter of s: start from 0 if unseen, add 1 each
        // time, key = letter, value = count
        for (const letter of s) {
            tally.set(letter, (tally.get(letter) ?? 0) + 1);
        }

        // cross off each letter of t. If there is nothing left to
        //cross off (0 tallies), t has more of this letter than s,
        // or s never had it
        for (const letter of t) {
            const current = tally.get(letter) ?? 0;
            if (current === 0) {
                return false;
            }
            tally.set(letter, current - 1);
        }
        // lengths match and nothing ran out, so every tally
        // ends at exactly 0
        return true;
    }
}
