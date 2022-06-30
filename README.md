Author: Matthew Mentis-Cort

Date Created: December 24, 2021

Date last updated: June 2, 2022


# Table of Contents
	1. Introduction
	2. Style Guide for this Document
	3. Website Hierarchy
	4. Versions
	5. RoadMap
	6. Other Notes


# Introduction
	This ReadMe was started on December 24th, 2021, with the objective of
	documenting the transformation of this website. The plan is to create
	different versions after a major feature for a version is implemented. A new
	version will be created when this feature is done, and work will continue
	from that version. The descriptions of each version will be listed here for
	reference.

	The documentation for the JavaScript files in the website were made using
	a mix of JavaDocs documentation and Python specifications.


# Style Guide for this Document
	Obey the 80 character rule (don't go over the gray line in Atom for one line
	of text)

	Update the "Date last updated" section when a new entry is added to this
	document

	The ===== sign lines are for separation.


# Website Hierarchy
	Credits for the ideas for the hierarchy goes to this [website](https://appcropolis.com/blog/web-technology/organize-html-css-javascript-files/)

	Hierarchy:
		Folders
		resources
			- css
				- definitiongames.css
				- index.css
			- images
				- header-image.png
			- js
				- definitiongames.js
				- Word.js
				- WordBank.js
				- wordgames.js
		vendors
			- css
				- buttonpack.css
				- column.css
				- navbarpack.css
			- js
				- utilities.js
		WebDevFiles
			(these files can be found on the flash drive)

		HTML files
		- DefaultDefinitionGame.html
		- DefinitionGameHomepage.html
		- index.html
		- MCDefGame.html
		- MemoryGame.html
		- SquareNumbers.html
		- UserMadeDefinitionGames.html
		- WebDevProjects.html

		TXT files
		- Plan.txt
		- README.txt

	resources folder: Contains files built specifically for the website.
	vendors folder: Contains files that can be used across multiple websites, such
	as libraries.
	WebDevFiles folder: Contains files that have been created in the
	"Web Development" class that was taken by the author.

	Inspiration for the MCDefGame design game from [FreeRice's](https://freerice.com/) definition game


# 4. Versions
	Version 0.0:
	Date Started: Whenever I started making this website (which was approximately
	2 years ago from the creation of this README)
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
	Hierarchy:
		Folders files
		WebDevFiles
			(These files can be found on the flash drive)

		HTML files
		- Basic HTML Template for Website.html
		- Basic HTML Template.html
		- DefaultDefinitionGame.html
		- DefinitionGameHomepage.html
		- index.html
		- MCDefGame.html
		- MemoryGame.html
		- SquareNumbers.html
		- UserMadeDefinitionGames.html
		- WebDevProjects.html

		CSS files
		- buttonpack.css
		- columns.css
		- definitiongames.css
		- navbarpack.css
		- style.css

		JS files
		- definitiongames.js
		- script.js
		- utilities.js
		- Word.js
		- WordBank.js
		- wordgames.js

		TXT files
		- Plan.txt
		- README.txt

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
	Hierarchy:
		Folders
		resources
			- css
				- definitiongames.css
				- index.css
			- images
			- js
				- definitiongames.js
				- Word.js
				- WordBank.js
				- wordgames.js
		vendors
			- css
				- buttonpack.css
				- column.css
				- navbarpack.css
			- js
				- utilities.js
		WebDevFiles
			(these files can be found on the flash drive)

		HTML files
		- DefaultDefinitionGame.html
		- DefinitionGameHomepage.html
		- index.html
		- MCDefGame.html
		- MemoryGame.html
		- SquareNumbers.html
		- UserMadeDefinitionGames.html
		- WebDevProjects.html

		TXT files
		- Plan.txt
		- README.txt

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
	Hierarchy:
		Folders
		resources
			- css
				- definitiongames.css
				index.css
			- images
			- js
				- definitiongames.js
				- Word.js
				- WordBank.js
				- wordgames.js
		vendors
			- css
				- buttonpack.css
				- column.css
				- navbarpack.css
			- js
				- utilities.js
		WebDevFiles
			(these files can be found on the flash drive)

		HTML files
		- DefaultDefinitionGame.html
		- DefinitionGameHomepage.html
		- index.html
		- MCDefGame.html
		- MemoryGame.html
		- SquareNumbers.html
		- UserMadeDefinitionGames.html
		- WebDevProjects.html

		TXT files
		- Plan.txt
		- README.txt

	Version 0.2:
	Date Started: December 28, 2021
	Date Finished: February 12, 2022
	Objectives:
		- Finish building a homepage for the website
	Description:
	February 12, 2022 marks the day I realized that the Titans and the Fire
	Nation attacked. My files for the website were deleted. Luckily, I had some
	of the files open in Atom Editor, so I was able to recover some of the
	documented versions. However, I lost the image for my homepage, and the
	following files:
	 	- definitiongames.css
		- definitiongames.js
		- Word.js
		- WordBank.js
		- wordgames.js
	The aforementioned files were restored from a previous version of the
	website that I had on my other laptop. My plan is to remake the files
	similar to how I had them before using this README as a guide to what I
	did. The hierarchy of the files in the computer were changed to have the
	previous versions and the actual websites separated, so that if the current
	website gets deleted, the previous versions hopefully won't be deleted as
	well like they were this time. A GitHub has been started for this website
	as a backup for files.
	Two new files were added are included in the hierarchy of this version,
	responsive-layout.css, responsive-navbar.css. These files were created
	while working on this version of the website, but the unexpected deletion of
	the files caused a setback. Both files were created with the aim of
	making the website more responsive. So far, they have only been implemented
	on the homepage. The navbarpack.css and buttonpack.css files were also
	changed before the deletion of the files, adding documentation and code
	that made it more useful for use in all projects. They will be worked on
	after the website has been updated to what it was before.
	Hierarchy:
		Folders
		resources
			- css
				- definitiongames.css
				- index.css
			- images
			- js
				- definitiongames.js
				- Word.js
				- WordBank.js
				- wordgames.js
		vendors
			- css
				- buttonpack.css
				- column.css
				- navbarpack.css
				- responsive-layout.css
				- responsive-navbar.css
			- js
				- utilities.js
		WebDevFiles

		HTML files
		- DefaultDefinitionGame.html
		- DefinitionGameHomepage.html
		- index.html
		- MCDefGame.html
		- MemoryGame.html
		- SquareNumbers.html
		- UserMadeDefinitionGames.html
		- WebDevProjects.html

		TXT files
		- Plan.txt
		- README.txt

	Version 0.3:
	Date Started: February 12, 2022
	Date Finished: February 14, 2022
	Objectives: Restore the website's files to their former glory.
	- Remake the following files using the README as a guide to what they
	  were previously:
			- definitiongames.css
			- definitiongames.js
			- Word.js
			- WordBank.js
			- wordgames.js
	- Add the image for the website back
	- Add hierarchies for each version on this page
	- Restore functionality of the MCDefGame page
	Description:
	The functionality for the MCDefGame page has been returned. The buttons are
	not the way they were before, but that can be fixed in a later iteration.
	The only files that needed to be edited were the Word.js, WordBank.js, and
	wordagames.js files.  The definitiongames.css and definitiongames.js
	files did not seem to have been edited before the wipe. Development will
	switch focus to the homepage and implementing responsive design again.
	A more current version of this site will be uploaded to GitHub.
	Hierarchy:
		Folders
		resources
			- css
				- definitiongames.css
				- index.css
			- images
			- js
				- definitiongames.js
				- Word.js
				- WordBank.js
				- wordgames.js
		vendors
			- css
				- buttonpack.css
				- column.css
				- navbarpack.css
				- responsive-layout.css
				- responsive-navbar.css
			- js
				- utilities.js
		WebDevFiles

		HTML files
		- DefaultDefinitionGame.html
		- DefinitionGameHomepage.html
		- index.html
		- MCDefGame.html
		- MemoryGame.html
		- SquareNumbers.html
		- UserMadeDefinitionGames.html
		- WebDevProjects.html

		TXT files
		- Plan.txt
		- README.txt

	Version 0.4:
	Date Started: February 15, 2022
	Date Finished: February 19, 2022
	Objectives: Finish documentation for CSS files (responsive-navbar.css,
		navbarpack.css)
	Description:
	Finished documentation responsive-navbar.css, navbarpack.css.
	Changed README.txt to README.md. Made some formatting changes to the html
	in index.html.
	Hierarchy:
		Folders
		resources
			- css
				- definitiongames.css
				- index.css
			- images
			- js
				- definitiongames.js
				- Word.js
				- WordBank.js
				- wordgames.js
		vendors
			- css
				- buttonpack.css
				- column.css
				- navbarpack.css
				- responsive-layout.css
				- responsive-navbar.css
			- js
				- utilities.js
		WebDevFiles

		HTML files
		- DefaultDefinitionGame.html
		- DefinitionGameHomepage.html
		- index.html
		- MCDefGame.html
		- MemoryGame.html
		- SquareNumbers.html
		- UserMadeDefinitionGames.html
		- WebDevProjects.html

		TXT files
		- Plan.txt

		Markdown files
		- README.md

	Version 0.5:
	Date Started: February 19, 2022
	Date Finished: June 1, 2022
	Objectives:
	- Create About Me page
	- Make Homepage look better
		- Restore image for homepage
	Description:
	Created about me page by creating about-me.html and about-me.css.
	Added pictures back to index.html and added pictures to about-me.html. Updated README.md to use Markdown file syntax. Changed Basic HTML Template.html to website-template.html and updated contents to more accurately reflect a template for the website.
	Hierarchy:
		Folders
		resources
			- css
				- about-me.css
				- definitiongames.css
				- index.css
			- data
			- images
				- compsci-img.jpg
				- dq9-img.jpg
				- header-img.jpg
				- psychology-img.jpg
				- read-write-img.jpg
			- js
				- definitiongames.js
				- Word.js
				- WordBank.js
				- wordgames.js
		vendors
			- css
				- buttonpack.css
				- columns.css
				- navbarpack.css
				- responsive-layout.css
				- responsive-navbar.css
			- js
				- utilities.js
		WebDevFiles

		HTML files
		- about-me.html
		- DefaultDefinitionGame.html
		- DefinitionGameHomepage.html
		- index.html
		- MCDefGame.html
		- MemoryGame.html
		- SquareNumbers.html
		- UserMadeDefinitionGames.html
		- WebDevProjects.html

		TXT files
		- Plan.txt

		Markdown files
		- README.md

	Version 0.6:
	Date Started: June 2, 2022
	Date Finished: June 14, 2022
	Objectives:
	- Make Projects page and make cards to hold the projects
	- Improve footer
	- Find a way to implement resume
	Description:
	Created Projects page and created cards to hold the links
	to the projects. Made a global CSS sheet for footer styles. Improved website-template.html to include the global footer CSS sheet. Added additional hierarchy to support the pictures needed for the Projects page.
	Hierarchy:
		Folders
		resources
			- css
				- about-me.css
				- definitiongames.css
				- index.css
				- footer.css
				- projects.css
			- data
			- images
				- projects
					- SIP
						- definition.jpg
						- memory.jpg
						- squared.png
						- words.jpg
					- web-dev
						- animal-quiz.jpg
						- crossing.jpg
						- dice-roller.png
						- haunted-house.jpg
				    - hot-cold.jpg
				- compsci-img.jpg
				- dq9-img.jpg
				- header-img.jpg
				- psychology-img.jpg
				- read-write-img.jpg
			- js
				- definitiongames.js
				- Word.js
				- WordBank.js
				- wordgames.js
		vendors
			- css
				- buttonpack.css
				- columns.css
				- navbarpack.css
				- responsive-layout.css
				- responsive-navbar.css
			- js
				- utilities.js
		webdev-files

		HTML files
		- about-me.html
		- DefaultDefinitionGame.html
		- DefinitionGameHomepage.html
		- index.html
		- MCDefGame.html
		- MemoryGame.html
		- projects.html
		- SquareNumbers.html
		- UserMadeDefinitionGames.html
		- WebDevProjects.html

		TXT files
		- Plan.txt

		Markdown files
		- README.md

	Version 0.7:
	Date Started: June 14, 2022
	Date Finished: June 30, 2022
	Objectives:
	- Create a dark theme for the website
	  - first make the website black and white to see it in its base version
	- Skip to main content button
	- Fix navbar on smaller devices
	- Improve Projects
	  - Add spacing between game cards on projects tab on smaller devices
	  - improve the box shadow on the project cards
	  - make whole card clickable?
	  - fix the transition when the games move to a smaller screen
	- Table of contents for css files of about-me, projects page, and footer.css
	Description:
	Added major quality of life changes to the website.

	- Reduced site to black and white color scheme (using global-styles.css)
		- Made it much easier to reduce the website to a black and white version which will make it easier in the future to add different themes
		- Also allowed certain styles that was used on all pages to be added to just one place instead of every html page, such as the padding for main content, and the content skippers
	- Improved user navigation (navbar, content skippers)
		- Added buttons to skip content before navigation bar, for accessibility purposes
		- Fixed the issue where when a link was clicked on the vertical navbar that appears on smaller screens, the navbar would disappear and the user would navigate to the desired page
		- Improved icon that user clicks on to open vertical navbar and added animation when user opens and closes vertical navbar
	- Improved index.html
		- Removed short story on index.html and made header picture a background-image instead of an img tag.
		- Added buttons to header for navigation to other pages
		- Improved the styling of the buttons on the home page
	- Improved about-me.html
		- Vertically aligned text on about me page
	- Improved projects.html
		- Made entire card clickable for projects instead of just the description
	- Improved organization of css files
		- Added table of contents for responsive-navbars.css, about-me.css, projects.css, footer.css
		Hierarchy:
			Folders
			resources
				- css
					- about-me.css
					- definitiongames.css
					- global-styles.css
					- index.css
					- footer.css
					- projects.css
				- data
				- images
					- projects
						- SIP
							- definition.jpg
							- memory.jpg
							- squared.png
							- words.jpg
						- web-dev
							- animal-quiz.jpg
							- crossing.jpg
							- dice-roller.png
							- haunted-house.jpg
					    - hot-cold.jpg
					- about-me-header.jpg
					- compsci-img.jpg
					- dq9-img.jpg
					- home-header-img.jpg
					- psychology-img.jpg
					- read-write-img.jpg
				- js
					- definitiongames.js
					- Word.js
					- WordBank.js
					- wordgames.js
			vendors
				- css
					- buttonpack.css
					- columns.css
					- navbarpack.css
					- responsive-layout.css
					- responsive-navbar.css
				- js
					- utilities.js
			webdev-files

			HTML files
			- about-me.html
			- DefaultDefinitionGame.html
			- DefinitionGameHomepage.html
			- index.html
			- MCDefGame.html
			- MemoryGame.html
			- projects.html
			- SquareNumbers.html
			- UserMadeDefinitionGames.html
			- WebDevProjects.html

			TXT files
			- Plan.txt

			Markdown files
			- README.md

# 5. RoadMap
- Finish documentation for old and new files
- Do About Me page
- Upload resume to website (with options to print)
- Relink web development projects to the main site
	- Possibly make another site for the projects

# 6. Other Notes
Notes:
- [Code Conventions](https://www.crockford.com/code.html)
- [Word API to test](https://dictionaryapi.dev/)
- [Possible Urban Dictionary API](https://rapidapi.com/community/api/urban-dictionary)
- Try Math Jax for Squared Numbers Quiz
- [Documentation for coding languages](https://devdocs.io/)

Ideas:
- add test cases for each class
- use JSDoc instead of my custom documentation for JS documentation
  (https://jsdoc.app/about-getting-started.html see this and related links for information on JSDoc)
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
	- curmudgeon
	- copacetic
	- notwithstanding
	- chitin
	- sternite
	- entropy
	- ontologically
	- idiosyncrasy
	- pasty
	- nomophobia

	Notes:
	- MAKE ALL THE WORDS INTO "word" OBJECTS WITH A DEFINITION AND A WORD ATTRIBUTE AND PART OF SPEECH
	- FIX THE CSS LINKS ON ALL THE PAGES (Add the slash to close the tag)
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
