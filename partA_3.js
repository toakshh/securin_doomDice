
export default function sumProbability(die1, die2) {
    /**
     * probability of sum of all possible combinations
     * 1+1=2
     * 1+2=3
     * 2+1=3...6+6=12
     * 
     */
    let totalCombination = [];
    for (let i = 1; i <= die1.length; i++) {
        for (let j = 1; j <= die2.length; j++) {
            let sum = i + j;
            totalCombination.push(sum)
        }
    }
    // to find the frequency of each sum, we will create an object and track the value
    const frequency = {}
    totalCombination.map(item => frequency[item] = (frequency[item] || 0) + 1)


    // to find the probability of each  possible combination we would need to divide the favorable outcome by total outcome.
    // 
    const totalOutcomes = die1.length * die2.length
    const probabilities = {};
    for (const [sum, freq] of Object.entries(frequency)) {
        probabilities[sum] = `${freq} / ${totalOutcomes}`
    }

    return probabilities;

}