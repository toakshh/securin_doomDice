import partA_1 from "./partA_1.js"
import partA_2 from "./partA_2.js"
import sumProbability from "./partA_3.js";
import unDoomedDice from "./partB.js";

const runAllAnswers = () => {

    // partA1
    const die1 = [1, 2, 3, 4, 5, 6];
    const die2 = [1, 2, 3, 4, 5, 6];
    console.log("Total number of combination possible in 2 dice are")
    console.log(partA_1(die1, die2))

    // partA2
    console.log("Distribution of all possible combinations with 2 dice are ")
    console.log(partA_2(die1, die2))

    // partA3
    console.log("Probability of sum of possible outcomes")
    console.log(sumProbability(die1, die2))

    // partB
    console.log('unDoomedDice')
    console.log(unDoomedDice(die1, die2))

}


runAllAnswers()