const isPalindrome = (str) => {
	// Remove punctuation, case, and spacing
	const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

	// Check if the cleaned string is equal to its reversed version
	return cleanedStr === cleanedStr.split("").reverse().join("");
};

// Test cases
console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
