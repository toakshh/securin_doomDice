/**
 * Total possible combination possible in two dice.
 * --------------------------------------------
 * 
 * Each die can have 6 faces and there are 2 dice.
 * So the total possible combination would be the product of max faces each die can have i.e. [6*6]
 * 
 */

export default function maxCombination(die1, die2) {
    return die1.length * die2.length
}