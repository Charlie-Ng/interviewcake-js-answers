// Write a function reverseWords() that takes a string message and reverses the order of the words in-place.

function reverseWords(sentence) {

	var sentenceAry = sentence.split(' ');
	var tempWord;
	var startIndex = 0;
	var endIndex = sentenceAry.length - 1;

	while(startIndex < endIndex) {

		tempWord = sentenceAry[startIndex];
		sentenceAry[startIndex] = sentenceAry[endIndex];
		sentenceAry[endIndex] = tempWord;

		startIndex++;
		endIndex--;
	}

	return sentenceAry.join(' ');

}

console.log(reverseWords('find you will pain only go you recordings security the into if'));
//if into the security recordings you go only pain will you find

console.log(reverseWords('Write a function reverseWords() that takes a string message and reverses the order of the words in-place'));
//in-place words the of order the reverses and message string a takes that reverseWords() function a Write
