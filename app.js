// Total word count of the submitted text
// Unique word count of the submitted text
// Average word length in characters of the submitted text
// Average sentence length in characters of the submitted text.

// The program should print each of these metrics in the appropriate area in the results section.

function arrOfWords(str) {
	var str = str.split(' ');
	return str;
}


function uniqueWordCount(arrWords) {
	var wordObj = {};

	arrWords.forEach(function(word){
		wordObj[word] === undefined ? wordObj[word] = 1 : wordObj[word]++;
	});

	return Object.keys(wordObj).length;
}

function avgWordLength(arrWords) {
	var acc = 0;
	arrWords.forEach(function(item){
		acc += item.length;
	});

	console.log('word length sum: ' + acc);

	return (acc / arrWords.length).toFixed(2);
}

function avgSentenceLength(str) {
	var str = str.replace(/\s/g, '');
	str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	var sentence = str.split('.');
	var sentenceLength = sentence.length;

	var acc = 0;
	sentence.forEach(function(item){
		acc += item.length;
	});

	return (acc / sentenceLength).toFixed(2);
}

$(function(){
	$('#user-text').on('click', function(e) {
		e.preventDefault()
		var input = $(this).val();
		var arrWords = arrOfWords(input);
		console.log(arrWords);
		$('.js-wordCount').text(arrWords.length);
		$('.js-unqiueWordCount').text(uniqueWordCount(arrWords));
		$('.js-avgWordLength').text(avgWordLength(arrWords));
		$('.js-avgSentenceLength').text(avgSentenceLength(input));
	});



});

