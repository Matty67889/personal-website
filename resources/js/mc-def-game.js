/**
 * Sets the webpage variables to their default values.
 */
function initialize() {
  formOne = document.getElementById("question1");

  wordToDefine = document.getElementById("word");
  wordBankSwitch = document.getElementById("wordbank-switch");
  feedbackMsg = document.getElementById("feedback-msg");
  chosenWordBank = document.getElementById("chosen-wordbank");
  wordCount = document.getElementById("word-count");
  wordGrid = document.getElementById("wordgrid");

  // the number of choices that the user can pick from in the game
  NUM_CHOICES = 4;

  // swtich off doos wordbank
  wordBankSwitch.checked = false;

  // the word bank of words for the game
  doosWordBank = new WordBank(DOOSWORDBANK);
  standardWordBank = new WordBank(WORDBANK);
  currentWordBank = standardWordBank;
  if (wordBankSwitch.checked) {
    currentWordBank = doosWordBank;
  }
  else {
    currentWordBank = standardWordBank;
  }

  // an array of the Word objects that are involved in the current
  // display
  currentWords = [];
  // the Word object that contains the name of the word that the user
  // must define
  targetWord = null;

  // the value of the input tag that has the correct answer choice
  correctAnswerChoice = 0;

  generateNewQuiz();
}

/**
 * Changes the wordBank that words are being generated from when the user
 * clicks a switch on the site.
 *
 * When the user clicks the switch and it becomes toggled to on, the
 * doosWordBank will be used to generate words. When the user clicks the
 * switch and it becomes toggled to off, the standardWordBank will be used
 * to generate words.
 */
function toggleWordBank() {
  if (!wordBankSwitch.checked) {
    currentWordBank = doosWordBank;
  }
  else {
    currentWordBank = standardWordBank;
  }

  generateNewQuiz();
}

/**
 * Returns a random Word from currentWordBank.
 *
 * @return a Word that represents a random Word from currentWordBank.
 */
function generateRandWord() {
  var rndNum =
    generateRandomInteger(0, currentWordBank.getLength() - 1);
  var newWord = currentWordBank.getWord(rndNum);

  return newWord;
}

/**
 * Returns an array of numWords Words from currentWordBank
 *
 * None of the Words in the array will be duplicates.
 *
 * @param numWords the number of Words to include in the array
 *        Precondiiton: numWords must be an int > 0
 * @return an array of Words
 */
function generateUniqueWords(numWords) {
  var words = [];
  var newWord = generateRandWord();

  // for each definition that needs to be added, find a unique
  // definition to add to the array
  for (var wordCounter = 0; wordCounter < numWords; wordCounter++) {
    // keep searching for a new definition until it is not a duplicate
    // of a definition already in the list and it is not the definition
    // of targetWord
    newWord = generateRandWord();
    while (words.indexOf(newWord) > -1) {
      newWord = generateRandWord();
    }

    words.push(newWord);
  }

  return words;
}

/**
 * Creates a new quiz, and displays it.
 *
 * Stops the feedbackMsg from displaying on the screen. Generates a new
 * list of words to use for the quiz, and chooses one to be the target
 * word. Deselects all radio buttons in the form. Displays the new
 * definitions with a call to display.
 */
function generateNewQuiz() {
  // removes the feedback message
  feedbackMsg.style.display = "none";

  // the Words that the user will have to choose from
  currentWords = generateUniqueWords(NUM_CHOICES);

  // chooses a new target word
  // must do +1 here because the values of he inputs in the form go from
  // 1 - 4, inclusive
  correctAnswerChoice = generateRandomInteger(0, NUM_CHOICES - 1) + 1;
  targetWord = currentWords[correctAnswerChoice - 1];

  deselectRadioButtonsInForm(formOne);
  display();
}

/**
 * Checks to see the answer that the user has chosen, and displays the
 * appropriate feedback message for the user.
 *
 * If the user has not made a choice, the message should be:
 * "Please make a choice."
 * If the user has made a choice and it is the correct choice, the
 * message should be:
 * "Correct"
 * If the user has made a choice and it is an incorrect choice, the
 * message should be:
 * "Incorrect"
 */
function checkAnswer() {
  if (!formChoiceSelected()) {
    feedbackMsg.style.color = "#0E34A0";
    feedbackMsg.innerHTML = "Please make a choice.";
  }
  else {
    if (formOne.choices.value == correctAnswerChoice) {
      feedbackMsg.style.color = "green";
      feedbackMsg.innerHTML = "Correct";
    }
    else {
      feedbackMsg.style.color = "red";
      feedbackMsg.innerHTML = "Incorrect";
    }
  }

  feedbackMsg.style.display = "block";
}

/**
 * Populates the spans that holds the definitions with definitions.
 *
 * Iterates through the array the spans in the answer form and
 * populates them with definitions.
 */
function displayDefinitions() {
  for (var i = 0; i < formOne.getElementsByClassName("definition").length; i++) {
    formOne.getElementsByClassName("definition")[i].innerHTML =
      currentWords[i].getDefinition();
  }
}

/**
 * Returns a div with class "wordgrid-item" populated with word ``word`` and
 * its definition, ``definition``.
 *
 * This div will be appended to ``wordGrid``
 * for displaying the grid of words and their definitions.
 */
function createGridBox(word, definition) {
  containerDiv = document.createElement("div");
  containerDiv.className = "wordgrid-item";

  newWord = document.createElement("p");
  newWord.className = "word";
  newWord.innerHTML = word

  newDef = document.createElement("p");
  newDef.className = "def";
  newDef.innerHTML = definition

  containerDiv.appendChild(newWord);
  containerDiv.appendChild(newDef);

  return containerDiv;
}

/**
 * Populates ``wordGrid`` with the divs
 * containing information for the words in ``currentWordBank``.
 *
 * This div will be appended to ``wordGrid``
 * for displaying the grid of words and their definitions.
 */
function generateWordBankGrid() {
  wordGrid.innerHTML = "";

  for (let idx = 0; idx < currentWordBank.getLength(); idx++) {
    word = currentWordBank.getWord(idx).getName();
    def = currentWordBank.getWord(idx).getDefinition();
    wordGrid.appendChild(createGridBox(word, def));
  }
}

/**
 * Sends output to the screen.
 *
 * Displays the target word and the definitions the user can choose
 * from on the screen.
 */
function display() {
  wordToDefine.innerHTML = targetWord.getName();
  displayDefinitions();
  // updates which wordbank words are being generated from in the "Word Bank"
  // section
  if (currentWordBank === standardWordBank) {
    chosenWordBank.innerHTML = "Standard English Word Bank";
  }
  else {
    if (currentWordBank === doosWordBank) {
      chosenWordBank.innerHTML = "Dictionary of Obscure Sorrows Word Bank";
    }
  }

  // updates the count for the current word bank in the "Word Bank" section
  wordCount.innerHTML = currentWordBank.getLength();
  generateWordBankGrid();
}
