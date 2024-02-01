import sumProbability from "./partA_3.js";

export default function unDoomedDice(die1, die2) {
    // restricting for die1 couldn't have more than 4 ticks
    const New_Die_A = die1.map((spots) => (spots > 4 ? 4 : spots));
    // intializing dieB 
    const New_Die_B = die2;

    // checking for probablitiy of sum of earilier and current dice
    const originalProbability = sumProbability(die1, die2);
    const newDiceProbability = sumProbability(New_Die_A, die2);

    // if the probability is same then return the dice
    if (areArraysEqual(originalProbability, newDiceProbability)) {
        return { New_Die_A, New_Die_B };
    }

}


// helper function to check if two arrays are equal
function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
}



