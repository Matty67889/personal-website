/**
 * Word class.
 *
 * This file contains the Word class that is used to create a Word object.
 *
 * @author Matthew Mentis-Cort
 * Date last edited: February 14, 2022
 */

/**
 * A class representing a Word.
 *
 * A Word is an object with a name, definiton, and an ID.
 *
 * The ID is a unique identifier for a given word. ID's are determined by
 * the order that the Word object was created. The first Word object
 * created will have an ID of 0, the second will have an ID of 1, and so one.
 *
 * The name and the definiiton of the Word are determined by passing them as
 * a parameter when the user of this class creates a Word object.
 */
class Word
{
	static currID = 0;

	#wordID = 0;
	#name = "";
	#definition = "";

	/**
   * Creates a Word object with name name, definition definition, and ID
	 * currID. Increments currID by 1.
   *
   * @param name       a string that represents the name of this Word.
   * @param definition a string that represents the definition of this Word.
   */
	constructor(name, definition)
	{
		this.#wordID = Word.currID;
		this.#name = name;
		this.#definition = definition;

		Word.currID++;
	}

	// Getters
	/**
	 * Returns the ID of this Word.
	 *
	 * @return the ID of this Word.
	 */
	getID()
	{
		return this.#wordID;
	}

	/**
	 * Returns the name of this Word.
	 *
	 * @return the name of this Word.
	 */
	getName()
	{
		return this.#name;
	}

	/**
	 * Returns the defiition of this Word.
	 *
	 * @return the definition of this Word.
	 */
	getDefinition()
	{
		return this.#definition;
	}

	// toString method
	/**
	 * Returns the string representation of this Word.
	 *
	 * The string representation of a Word is printed in the format:
	 * "ID: [wordID], name: [wordname], definition: "[worddefinition]"
	 *
	 * @return the string representation of this Word.
	 */
	toString()
	{
		return "ID: " + this.#wordID + ", name: " + this.#name +
			", definition: " + this.#definition;
	}

	// equals method
	/**
	 * Returns if other and this Word object are equal.
	 *
	 * Two Word objects are equal if both Word objects have the same name and
	 * the same definition.
	 *
	 * @return true if other and this Word object are equal, False otherwise.
	 */
	equals(other)
	{
		if (other === null)
		{
			return false;
		}

		if (this.#name === other.#name && this.#definition === this.#definition)
		{
			return true;
		}

		return false;
	}
}
