/*
	A program to detect anagrams

	anagramTest('anagram','nanagram');

	Complexity : O(n)
	*/

function anagramTest(word, testWord) {
    console.time("Start");
    const letterCountOfWord = {};
    const letterCountOfTestWord = {};

    for (let letter of word) {
        letterCountOfWord[letter] = (letterCountOfWord[letter] || 0) + 1;
    }
    for (let letter of testWord) {
        letterCountOfTestWord[letter] = (letterCountOfTestWord[letter] || 0) + 1;
    }
    let isAnagram = true;
    for (let key in letterCountOfTestWord) {
        if (!(letterCountOfWord.hasOwnProperty(key) && (letterCountOfTestWord[key] <= letterCountOfWord[key]))) {
            isAnagram = false;
            break;
        }
    }
    console.log(`${testWord} is anagram of ${word} : ${isAnagram}`);
    console.timeEnd("Start");
}
anagramTest("hello", "ello");