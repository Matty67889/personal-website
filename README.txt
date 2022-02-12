I don't know what to put in this document anymore because I wanted to put my
comment about using tables here but I decided to put it in each file
Next Steps for Code
Notes:

Author: Matthew Mentis-Cort
Date Created: December 24, 2021
Date last updated: December 28, 2021

Introduction:
This ReadMe was started on December 24th, 2021, with the objective of
documenting the transformation of this website. The plan is to create
different versions after a major feature for a version is implemented. A new
version will be created when this feature is done, and work will continue from
that version. The descriptions of each version will be listed here for
reference.

The documentation for the JavaScript files in the website were made using
a mix of JavaDocs documentation and Python specifications.


Style Guide for this Document:
Obey the 80 character rule (don't go over the gray line in Atom for one line
of text)

Update the "Date last updated" section when a new entry is added to this
document


Website Hierarchy:
Credits for the ideas for the hierarchy goes to this website:
(https://appcropolis.com/blog/web-technology/organize-html-css-javascript-files/)

resources folder: Contains files built specifically for the website.
vendors folder: Contains files that can be used across multiple websites, such
as libraries.
WebDevFiles folder: Contains files that have been created in the
"Web Development" class that was taken by the author.

Inspiration for the MCDefGame design game from FreeRice's definition game
(website: https://freerice.com/)


Versions:

Version 0.0:
Date Started: Whenever I started making this website (which was approximately
2 years ago)
Date Finished: December 24, 2021
Objective: Begin creating the website
Description:
This is the base version of the website. Development focused on
seeing what kind of pages to add to the website, and implementing each one.
Eventually the focus became the function of the "MCDefGame.html" and the
design of the "MCDefGame.html" game page. The last thing that was worked on
was deciding the best way to implement "Words" into the MCDefGame. A method
of creating classes for Words and a WordBank was decided upon, but the method
for creating the class may have been incorrect, so a new method will be
attempted in the next version.

Version 0.10:
Date Started: December 24, 2021
Date Finished: December 28, 2021
Objectives:
	- Change website names
	- Update Plan.txt so there is a coherent plan for each site
	- Get version ready for further documentation
	- See what the purpose of the script.js and style.css files are
	- Organize the website into folders so that the JS files are in one folder
	  and the CSS files are in other folders so that all the HTML files are
		together
	- Add documentation for all files (HTML, JS, CSS) that need it
	- Move all CSS and JS to separate files so that html files only contain
	  HTML?
Description:
This is a more organized version of the base website, with documentation for
the Word.js, WordBank.js, wordgames.js, and MCDefGame.html done. Some functions
were added to the aforementioned files, and some functions were changed to
make the website function more efficiently and to better reflect an Object
Oriented approach. Some function names were also edited to better represent
their purposes. Most of the documentation is also done for the utilities.js
file. Plan.txt was changed to have a plan only for this version of the
website, and this trend will continue for all other versions.

Version 0.11:
Date Started: December 28, 2021
Date Finished: December 28, 2021
Objectives:
	- Change the way that MCDefGame generates definitions to more effectively
		use	the display function
Description:
This version is the same as version 0.10, except the way that the words are
displayed on the screen in MCDefGame.html is different. Instead of
filling the definitions into each span directly, there is an array that
holds the Word objects whose definitions will be used in the quiz, and the
display function displays the definitions based on those definitions. A global
variable for the amount of answer choices was also added to avoid using
"magic numbers" in the code.

Version 0.2:
Date Started: December 28, 2021
Date Finished: [INSERT DATE FINISHED HERE]
Objectives:
	- Finish building a homepage for the website
Description:


Notes:
- Code Conventions: https://www.crockford.com/code.html
- Word API to test: https://dictionaryapi.dev/
- Possible Urban Dictionary API: https://rapidapi.com/community/api/urban-dictionary
- Try Math Jax for Squared Numbers Quiz
- Documentation for coding languages: https://devdocs.io/

Ideas:
- add test cases for each class
- use JSDoc instead of my custom documentation for JS documentation
  (https://jsdoc.app/about-getting-started.html see this and related links for
	information on JSDoc)
- Use KSS for CSS documentation
- Instead of automatically putting definitions into the spans for MCDefGame,
	use make an array that holds random word objects based on the number of
	answer choices the user will have, and choose a random index to have the
	correct definition be

- Definition tester

	Modes:
	- Multple Choice Section
		- Give word then ask user to give definition
		- Give definition and ask user to give word
		- Get 10 random words and let user see definitions

	- Spelling Section
		- Give word then ask user to give definition
		- Give definition and ask user to give word

	- Memory Tester Section
		- Display words and give the user a set amount of time to memorize them
		- Have a text box where the user can input as many words as they can recall, also on a timer
		- As the user gets words correct, the correct words show up on list (toggleable option, by default this option is off)

	Words to add to default WORDBANK:
	- reverie (DONE)
	- pussyfoot (DONE)
	- holistic (DONE)
	- duly (DONE)
	- proselytizing (DONE)
	- collegiate (DONE)
	- uncouth (DONE)
	- cesspool (DONE)
	- impunity (DONE)
	- meta (DONE)
	- whimsical (DONE)
	- taxonomy (DONE)
	- mogul (DONE)
	- equivocate (DONE)
	- moniker (DONE)
	- epiphora (DONE)
	- clandestine  (DONE)
	- scintillating (DONE)
	- vicarious (DONE)
	- apatetic (DONE)
	- fidelity (DONE)
	- assarting (DONE)
	- odius (DONE)
	- vapid (DONE)
	- plasticity (DONE)
	- ensemble (DONE)
	- acumen (DONE)
	- guerilla (DONE)
	- litigates (DONE)
	- esoteric
	- bigot
	- vernacular
	- voir dire
	- sequestered
	- galvanize
	- sandbag
	- heuristic
	- specious
	- epithet
	- frump
	- peccadillos
	- paramount
	- palpable
	- manna
	- pro forma
	- affidavit
	- referendum
	- crescendo
	- immutable
	- hunky-dory
	- semblance
	- monochromatic
	- serif
	- tenure
	- dogma
	- hygiene
	- de facto
	- gung-ho
	- cutting-edge
	- progeny
	- acquiesce
	- indelible
	- loquacious
	- poignant
	- don
	- aphrodisiac
	- portly
	- non sequitur
	- behest
	- smorgasbord
	- breve
	- fubar
	- promiscuous
	- gynecology
	- artifice
	- gamely
	- gregarious
	- gaslighting
	- pensive
	- rehash
	- lethargic
	- appropriation
	- misconstrue
	- hubris
	- ignominious
	- contentious
	- carrion
	- anemic
	- wanton
	- floozy
	- tenacious
	- jaded
	- prima donna
	- carpe diem
	- admonition
	- subterfuge
	- collateral
	- dexterity
	- boudoir
	- bravado
	- geriatric
	- chauvanism
	- innundate - To overwhelm as if with a flood; swamp.
	- apprehensive - Anxious or fearful about the future; uneasy.
	- tawdry - Shameful or indecent.
	- jager secret - The act of revealing information disseminated to a confidant during a period of intoxication.
	- withholding - To refrain from giving or granting: withhold information; withhold judgment.
	- bureaucracy - Administration of a government chiefly through bureaus or departments staffed with nonelected officials.
	- moot - Of no practical importance; irrelevant.
	- taxidermy - The art or operation of preparing, stuffing, and mounting the skins of dead animals for exhibition in a lifelike state.
	- blase - Unconcerned; nonchalant.
	- callous - Emotionally hardened; unfeeling.
	- apathetic - Feeling or showing a lack of interest or concern; indifferent.
	- arrivederci - Till we meet again : goodbye.
	- pretentious
	- audit
	- tacit
	- gigolo - A man who is hired as an escort or a dancing partner for a woman.
	- sabbatical - Relating or appropriate to the Sabbath as the day of rest.
	- aplomb - complete and confident composure or self-assurance : poise.
	- ornery - Mean-spirited, disagreeable, and contrary in disposition; cantankerous.
	- czar - A person having great power or authority.
	- impotent - Incapable of sexual intercourse because of an inability to achieve or sustain an erection.
	- pander - To cater to the lower tastes and desires of others or exploit their weaknesses.
	- rictus - A gaping grimace.
	- gauche - Lacking grace or social polish; awkward or tactless.
	- caveat
	- gyrate
	- impromptu
	- delegate
	- eddies
	- minutia
	- fatuous
	- arcane
	- wench
	- minx
	- lithe
	- supple
	- baroque
	- venerable
	- herald
	- espouseds
	- pedantic
	- extrapolate
	- liaison
	- hedge
	- auxiliary
	- insolence
	- gall
	- lyrical
	- diaspora
	- hearth
	- lexicon
	- emasculates
	- sober
	- carcinogenic
	- celibacy
	- exorbitant
	- faux pas
	- ersatz
	- murk
	- charlatan
	- edification
	- executrix
	- repartee
	- humblebrag
	- stochastic
	- exegesis
	- cognition
	- trow
	- matriculate
	- declamation
	- equivocate
	- ecumenical
	- autochthonous
	- chthonic
	- diatribe
	- ad hoc
	- minuta
	- infinitesimal
	- portmanteau
	- laconic
	- posterity
	- beget
	- indelible
	- solipsism
	- droll
	- impertinent
	- enumeration
	- eisegesis
	- paradigm
	- dreck
	- attainder
	- vice
	- usurp
	- recondite
	- nick
	- valor
	- languid
	- fanual
	- nepotism
	- filibuster
	- codify
	- convoluted
	- admonished
	- zany
	- mar
	- belfry
	- romp
	- maim
	- dupe
	- despot
	- undulation
	- sparling
	- cronyism
	- ninny
	- condole
	- macropterous
	- gangling
	- pilant
	- tout
	- pallid
	- deign
	- austere
	- quadary
	- berth
	- balkanized
	- pejorative
	- hoi polloi
	- bonhomie
	- Autodidact
	- corporeal
	- avant garde
	- tendentious
	- gravitas
	- salient
	- albatross
	- concurrent
	- coy
	- vitae
	- eschatology
	- doyen
	- numismatic
	- hermaphrodite
	- adrogny
	- extemporaneous
	- ad-lib
	- prima facie
	- preclude
	- propriety
	- physiognomy
	- deference
	- wherewithal
	- autodactic
	- impetuous
	- shrewd
	- repatriate
	- abscond
	- cogent
	- hegemony
	- chicanery
	- melifluous
	- penance
	- penchant
	- quid pro quo
	- vainglorious
	- sacreliege
	- upshot
	- clemency
	- modus operendi
	- vitriolic
	- unbidden
	- kaibosh
	- penal
	- whet
	- caustic
	- sangfroid
	- dinky
	- ouroboros
	- esprit de corps
	- inundated
	- punctilious
	- gastronomy
	- Freudian slip
	- fecund
	- bap
	- vitriol
	- sardonic
	- tawdry
	- isthmus
	- insurgent
	- apropos
	- transmorgify
	- impinging
	- arrears
	- zwischenzug
	- pedant
	- distro
	- philanthropy
	- emeritus
	- Umami
	- Listerv
	- Rebuff
	- Maroon
	- Cauterize
	- Amorphous
	- Pigdin
	- Cordon
	- Masticate
	- Surfeit
	- Subterfuge
	- Portent
	- Municipal
	- Intelligentsia
	- Perennial
	- Perdition

	Notes:
	- MAKE ALL THE WORDS INTO "word" OBJECTS WITH A DEFINITION AND A WORD ATTRIBUTE AND PART OF SPEECH
	-FIX THE CSS LINKS ON ALL THE PAGES (Add the slash to close the tag)
	- Use transparent div to overlap over quiz questions to disable them?

	- Add part of speech tester thing? (maybe after construction of final project)
	- Add thing that allows you to make your own quiz? (ADDED)
	- Dropdown box to link to user made definition game and regular definition game (ADDED)
	- Use a table for the quiz container (make a function so that as words are displayed on the screen, they are put into a table)
	- Make a function to do spell checks for defintions and check for spaces (Make a function that allows the user to still get the question right even if they put an extra space
	or a period at the end in certain situations
	- Make the textbox area a nice size
	- Add a max value for the textarea?
	- Maybe get rid of the question that asks the user how many words they want to be displayed?
	- Use IXL as a reference for page layout
	- change "==" to "==="

	- timed game mode
	- hangman
	- flash cards
	- urbn dictionary, spanish, dictionary of oscure sorrows

	- Make a database for the information


Squared numbers Quiz

	- Develop formula to find perfect squares (use patterns in perfect squares
