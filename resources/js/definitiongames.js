/* Notes */
 // badNumbersDefinition in initialize for each page?
 // create a variable for the word the user has to name the definition of and have it be a consistent value so the functions can just change that value instead of changing the innerHTML of wordToDefine?
 // Fix bug with checkAnswer function where it goes on forever if user gets all the questions incorrect

/* Functions */

/* Start Game */
// Hides Start Warning
// Calls createQuiz function with number of words user chooses as parameter
// Clears the list of words that the user has already guessed
// Generates a new Word for the user to guess
function startGame(wordBank)
{
	// Fix this to make it take a number as a parameter
	numWordsToMemorize = wordsToMemorizeForm.definitionamnt.value;

	// Checks to see if user selected an amount of words for the game
	if (numWordsToMemorize == "")
	{
		startDefinitionWarning.style.display = "block";
	}
	else
	{
		startDefinitionWarning.style.display = "none";

		createQuizDefinition(wordBank, numWordsToMemorize);

		newBadNumbersDefinition = [];

		rndWordNum = getRandomInteger(0, (badNumbersDefinition.length - 1));

		finishedWordsList.innerHTML = "";

		wordToDefine.innerHTML = getWordDetail(wordBank[badNumbersDefinition[rndWordNum]], WORD);

		quizContainer.style.display = "block";
		wordAmountPicker.style.display = "none";
	}
}

function createQuizDefinition(wordBank, numWords)
{
	badNumbersDefinition = [];

	definitionQuiz.innerHTML = "";

	console.log("Definition Game Stuff");
	console.log("");

	for (var i = 0; i < numWords; i++)
	{
		// Makes it so that if the length of the wordBank is less than the amount of words that were requested to be displayed, the system displays all the words it can and then ends the loop
		if (badNumbersDefinition.length == wordBank.length)
		{
			i = numWords;
		}
		else
		{
			var num = getRandomInteger(0, (wordBank.length - 1));

			console.log((i+1) + ". " + getWordDetail(wordBank[num], WORD));

			// Makes it so that the same word is not displayed more than once
			if (badNumbersDefinition.length > 0)
			{
				for (var b = 0; b < badNumbersDefinition.length; b++)
				{
					if (num == badNumbersDefinition[b])
					{
						console.log("Num: " + num + " Array Number: " + badNumbersDefinition[b]);

						var num = getRandomInteger(0, (wordBank.length - 1));

						b = -1;
					}
				}
			}

			badNumbersDefinition.push(num);
			console.log(badNumbersDefinition);
			console.log("");

			definitionQuiz.innerHTML += getWordDetail(wordBank[num], WORD) + "- " + getWordDetail(wordBank[num], DEFINITION) + "<br /> <br />";
		}
	}
}

function checkAnswer(wordBank)
{
	if (definitionAnswerForm.useranswer.value == getWordDetail(wordBank[badNumbersDefinition[rndWordNum]], DEFINITION))
	{
		console.log("correct");
		finishedWordsList.innerHTML += getWordDetail(wordBank[badNumbersDefinition[rndWordNum]], WORD) + "- " + "correct" + "<br />";
	}
	else
	{
		console.log("incorrect");
		finishedWordsList.innerHTML += getWordDetail(wordBank[badNumbersDefinition[rndWordNum]], WORD) + "- " + "incorrect" + "<br />";
	}

	newBadNumbersDefinition.push(rndWordNum);

	console.log(newBadNumbersDefinition);
	console.log(wordBank.length);

	if (newBadNumbersDefinition.length == numWordsToMemorize)
	{
		console.log("You got all the words!");
	}
	else
	{
		createNewWord(wordBank);
	}
}

// This is an infinite loop, fix
function createNewWord(wordBank)
{
	console.log("Definition Game Create New Word Stuff:");
	console.log("");

	console.log(newBadNumbersDefinition);

	rndWordNum = getRandomInteger(0, (badNumbersDefinition.length - 1));

	if (newBadNumbersDefinition.length > 0)
	{
		//Make this into a while loop (while rndWordNum ==  newBadNumbersDefinition[b])
		for (var b = 0; b < newBadNumbersDefinition.length; b++)
		{
			if (rndWordNum == newBadNumbersDefinition[b])
			{
				console.log("Random Word Num: " + rndWordNum + " Array Number: " + newBadNumbersDefinition[b] + " WORDBANK Number: " + badNumbersDefinition[newBadNumbersDefinition[b]]);

				rndWordNum = getRandomInteger(0, (badNumbersDefinition.length - 1));

				b = -1;
			}
		}
	}

	wordToDefine.innerHTML = getWordDetail(wordBank[badNumbersDefinition[rndWordNum]], WORD);
}
