function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;
    let words = 0;
    let vowels = 0;

    // Define a set of vowel characters
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    
    // Process each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        length++; // Increment length for each character
        
        if (vowelSet.has(char.toLowerCase())) {
            vowels++; // Increment vowels if the character is a vowel
        }
        
        if (char === ' ' && i > 0 && sentence[i - 1] !== ' ') {
            words++; // Increment words count when encountering a space
        }
    }
    
    // Final adjustment for the last word and the period
    if (length > 0 && sentence[sentence.length - 1] === '.') {
        words++; // Add one last word count if the sentence is not empty
    }
    
    // Output results
    console.log(`Length of the sentence: ${length}`);
    console.log(`Number of words: ${words}`);
    console.log(`Number of vowels: ${vowels}`);
}

// Example usage
const sentence = "Hello world.";
analyzeSentence(sentence);