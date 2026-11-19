class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buy = prices[0];
        let best = 0;

        for (let i = 1; i < prices.length; i++) {
            const profit = prices[i] - buy;

            best = Math.max(best, profit);
            buy = Math.min(buy, prices[i]);
        }
        return best;
    }
}
