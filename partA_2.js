export default function allPossibleCombination(die1, die2) {
    /**
     * list of all possible combination when rolling 2 dice 
     * possible combinations would be as follow
     * 1-1
     * 1-2
     * 1-3
     * .
     * .
     * 2-3
     * 2-4
     * .
     * .
     * 6-5
     * 6-6
     */
    let totalCombination = [];

    /**
     * the maximum length of each die could be 6.
     * so in order to get all possible combination we need to run nested loop untill max length of each die.
     */
    for (let i = 1; i <= die1.length; i++) {
        for (let j = 1; j <= die2.length; j++) {
            totalCombination.push([i, j])
        }
    }
    return totalCombination
}