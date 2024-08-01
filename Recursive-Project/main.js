//DECISION MAKING AND RECURSIVE FUNCTION
// TICKET PRICING
/* 
    INSTRUCTION : 
    Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:
    1. Children (age <= 12): $10
    2. Teenagers (age 13-17): $15
    3 . Adults (age >= 18): $20
*/
// Solution
function ticketPrice(age) {
    switch (true) {
        case age <= 12:
            console.log("Price: $10");
            break;
        case age >= 13 || age <= 17:
            console.log("Price: $15");
            break;
        default:
            console.log("Price: $20");
            break;

    }
}
// QUESTION TWO
// INSTRUCTION
/* 
    Power Function: Write a recursive function to calculate the result of raising a number to a given power.
 */
// SOLUTION
const pow = (number, exponential) => {
    if (exponential === 0) return 1;
    return pow(number , exponential - 1) * number

}
console.log(pow(2, 3))