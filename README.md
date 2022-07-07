Author: Matthew Mentis-Cort

Date Created: December 24, 2021

Date last updated: July 6, 2022


# Table of Contents
	1. [Introduction](#introduction)
	2. [Style Guide for this Document](#style-guide-for-this-document)
	3. [Website Hierarchy](#website-hierarchy)
	4. [Versions](#versions)


# Introduction {#introduction}
	This ReadMe was started on December 24th, 2021, with the objective of
	documenting the transformation of this website. The plan is to create
	different versions after a major feature for a version is implemented. A new
	version will be created when this feature is done, and work will continue
	from that version. The descriptions of each version will be listed here for
	reference.

	The documentation for the JavaScript files in the website were made using
	a mix of JavaDocs documentation and Python specifications.


# Style Guide for this Document {#style-guide-for-this-document}
	Obey the 80 character rule (don't go over the gray line in Atom for one line
	of text)

	Update the "Date last updated" section when a new entry is added to this
	document

	The ===== sign lines are for separation.


# Website Hierarchy {#website-hierarchy}
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

	Inspiration for the MCDefGame design game from
	[FreeRice's](https://freerice.com/) definition game


# Versions {#versions}
## Version 0.0
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

## Version 0.10
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

## Version 0.11
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

## Version 0.2
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

## Version 0.3
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

## Version 0.4
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

## Version 0.5
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

## Version 0.6
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

## Version 0.7
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

## Version 0.8
	Date Started: June 14, 2022
	Date Finished: July 6, 2022
	Objectives:
	- Choose new font that will work on firefox
	- Create a dark theme for the website
	- Make input start unchecked for navbar (if possible with CSS)
	- Improve About Me page
	  - Figure out how to add resume to about me page (or make a
	  separate page for it)
	    - Maybe have one page where it is an image of resume and a button
	    underneath that you can click to download
	  - Make about me page a thing where you click on an image to show
	  text after an animation?
	    - Make about me page clickable buttons that that displays text in a box and
	      brings the user up to the box as the user clicks on them
	- make scrollbars on projects page look better
	Description:
	Changed font size and styles for 3 main pages (index, about-me, projects.html)
	For mc def game:
	- changed spans to divs for the answer choices to make it easier to edit if
	needed
	- added variables for rules to reduce redundancies
	- changed font and coloring of buttons
	- adjusted size of content on smaller and larger screens to have a minimum
	width and maximum width
	- changed wordbank to give users access to all the words instead of just 4
	- Added a function in mc-def-game to request from FreeDictionaryAPI for
	words, did not incorporate into main code yet
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
				- mc-def-game.js
				- Word.js
				- WordBank.js
				- wordgames.js
		vendors
			- css
				- buttonpack.css
				- columns.css
				- mc-def-game.csss
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

## Version 0.9
	Date Started: July 6, 2022
	Date Finished: July 6, 2022
