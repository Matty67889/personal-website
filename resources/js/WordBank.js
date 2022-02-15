/**
 * WordBank class.
 *
 * This file contains the WordBank class that is used to create a WordBank
 * object.
 *
 * @author Matthew Mentis-Cort
 * Date last edited: February 14, 2022
 */

/**
 * A class representing a WordBank.
 *
 * A Wordbank is an array of Words.
 *
 * The name and the definiiton of the Word are determined by passing them as
 * a parameter when the user of this class creates a Word object.
 */
class WordBank
{
	#bank = [];

	/**
   * Creates a WordBank using the elements of referenceArr
   *
	 * @param referenceArr the Word object that will be added to the end of
	 *                     #bank.
	 *        Preconiditon: referenceArr must be an array of strings. The
	 *                      strings must be in the format "word;definition".
	 *                      referenceArr must have at least 4 elements.
   */
	constructor(referenceArr)
	{
		this.#bank = [];
		this.createWordCollection(referenceArr);
	}

	// getters
	/**
	 * Returns the Word at the index idx of the bank array for this WordBank.
	 *
	 * @param idx an integer describing the index of the element to be accessed
	 *            from #bank.
	 *
	 * @return a Word object
	 */
	getWord(idx)
	{
		return this.#bank[idx];
	}

	/**
	 * Returns the length of the WordBank.
	 *
	 * @return the length of this WordBank.
	 */
	getLength()
	{
		return this.#bank.length;
	}

	//setters
	/**
	 * Adds the Word word to #bank.
	 *
	 * @param word the Word object that will be added to the end of #bank.
	 */
	addWord(word)
	{
		this.#bank.push(word);
	}

	/**
	 * Populates #bank with Word objects. The amount of Word objects added will
	 * be equal to the length of referenceArr.
	 *
	 * The elements of referenceArr will be used to make Word objects by
	 * splitting them by their semi-colon delimiters. The first string of
	 * a split element will be the word for the Word object. The second string
	 * of a split element will be the definition for the Word object.
	 *
	 * @param referenceArr the Word object that will be added to the end of
	 *                     #bank.
	 *        Preconiditon: referenceArr must be an array of strings. The
	 *                      strings must be in the format "word;definition".
	 *                      referenceArr must have at least 4 elements.
	 */
	createWordCollection(referenceArr)
	{
		for (var i = 0; i < referenceArr.length; i++)
		{
			//console.log(this.referenceWordArray[i]);
			var newWord = new Word(getWordDetail(referenceArr[i], WORD), getWordDetail(referenceArr[i], DEFINITION));
			this.addWord(newWord);
			//console.log(newWordBank.bank);
		}

		// console.log("Filled bank: " + this.#bank);
	}

	// toString method
	/**
	 * Returns the string representation of this WordBank.
	 *
	 * The string representation of a WordBank is printed in the format:
	 * "Length of this WordBank: [WordBankLength]"
	 *
	 * @return the string representation of this WordBank.
	 */
	toString()
	{
		return "Length of this WordBank: " + this.getLength();
	}

	// equals method
	/**
	 * Returns if other and this WordBank object are equal.
	 *
	 * Two WordBank objects are equal if all of the following conditions are met:
	 *   1. Both objects have the same length.
	 *   2. The Words in each WordBank are equal.
	 *
	 * @return true if other and this WordBank object are equal, False otherwise.
	 */
	equals(other)
	{
		if (other === null)
		{
			return false;
		}

		// check for length equality
		if (this.#bank.length === other.#bank.length)
		{
			// check if each Word in this.#bank is equal to at least one Word
			// in other.#bank
			// keeps track of which Words exist in both WordBanks
			pairCounter = 0;

			for (var thisIdx = 0; thisIdx < this.#bank.length; thisIdx++)
			{
				currWord = this.#bank[thisIdx];

				for (var otherIdx = 0; otherIdx < other.#bank.length; otherIdx++)
				{
					// if Word exists in both WordBanks, increment pairCounter and end
					// the inner loop so the next word can be checked
					if (currWord.equals(other.#bank[otherIdx]))
					{
						pairCounter++;
						otherIdx = other.#bank.length;
					}
				}
			}

			// if every Word in each WordBank exists in both WordBanks, return true
			if (pairCounter === this.#bank.length)
			{
				return true;
			}
		}

		return false;
	}
}

// // Precondition: referenceWordArray must have at least 4 values
// function WordBank()
// {
// 	this.referenceWordArray = WORDBANK;
//
// 	this.bank = [];
// 	this.createWordCollection();
// }
//
// /**
//  * Creates a new word collection with the words in the this.referenceWordArray.
//  *
// */
// WordBank.prototype.createWordCollection = function()
// {
// 	//var newWordBank = new WordBank();
//
// 	//console.log(this.referenceWordArray);
// 	//console.log("Word: " + WORD);
// 	//console.log("Definition: " + DEFINITION);
// 	for (var i = 0; i < this.referenceWordArray.length; i++)
// 	{
// 		//console.log(this.referenceWordArray[i]);
// 		var newWord = new Word(getWordDetail(this.referenceWordArray[i], WORD), getWordDetail(this.referenceWordArray[i], DEFINITION));
// 		this.addWord(newWord);
// 		//console.log(newWordBank.bank);
// 	}
//
// 	console.log("Filled bank: " + this.bank);
//
// 	//return newWordBank;
// }
//
// // getters
// WordBank.prototype.getRandomWord = function()
// {
// 	rndNum = getRandomInteger(0, this.bank.length - 1);
// 	return this.bank[rndNum];
// }
//
// // action methods
// WordBank.prototype.addWord = function(word)
// {
// 	this.bank.push(word);
// }
