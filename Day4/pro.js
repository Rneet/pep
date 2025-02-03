// 1. Debounce Function: Implement a debounce function that limits the frequency of a function's execution when called repeatedly within a specified time frame. This is useful in scenarios like resizing or scrolling events.

let timer;

function debounce() {
    clearTimeout(timer); 
    timer = setTimeout(() => {
        console.log('Data Fetched');
    }, 1000);
}

function simulateInput(inputValue) {
    console.log('User typed:', inputValue);
    debounce(); 
}

simulateInput('a');
setTimeout(() => simulateInput('a'), 300); 
setTimeout(() => simulateInput('b'), 600); 
setTimeout(() => simulateInput('c'), 1200); 


// 2. Longest Substring Without Repeating Characters: Find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
    const charSet = new Set();
    let leftPointer = 0;
    let maxLength = 0;

    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        const currentChar = s[rightPointer];

        while (charSet.has(currentChar)) {
            charSet.delete(s[leftPointer++]);
        }

        charSet.add(currentChar);
        maxLength = Math.max(maxLength, rightPointer - leftPointer + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abc"));
console.log(lengthOfLongestSubstring("cdd"));    
console.log(lengthOfLongestSubstring("omp"));  


// 3. Group Anagrams: Given an array of strings, group them into anagrams.