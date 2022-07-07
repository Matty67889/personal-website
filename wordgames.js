const WORD = 0; DEFINITION = 1;
WORDBANK =
[
	"extremity;The outermost or farthest point or portion.",
	"vendetta;A condition of private war in which the nearest of kin execute vengeance on the slayer of a relative, a blood-feud.",
	"concrete;Of or relating to an actual, specific thing or instance.",
	"professional;Conforming to the standards of a profession.",
	"invention;A new device, method, or process developed from study and experimentation.",
	"convention;A formal meeting of members, representatives, or delegates, as of a political party, fraternal society, profession, or industry.",
	"maverick;A person who shows independence of thought and action, especially by refusing to adhere to the policies of a group to which he or she belongs.",
	"conscientious;Thorough and assiduous.",
	"carpophagous;Fruit eating.",
	"affinity;A spontaneous or natural liking or sympathy for someone or something.",
	"abnegation;Self-denial.",
	"erudite;Having or showing great knowledge or learning.",
	"candor;Frankness or sincerity of expression.",
	"aperture;An opening, such as a hole, gap, or slit.",
	"notorious;Known widely and usually unfavorably.",
	"negligible;Not significant or important enough to be worth considering.",
	"trifling;Of little worth or importance.",
	"prophylactic;Acting to defend against or prevent something, especially disease.",
	"reverie;An act or state of absent-minded daydreaming.",
	"pussyfoot;To act or proceed cautiously or timidly to avoid committing oneself.",
	"holistic;Emphasizing the importance of the whole and the interdependence of its parts.",
	"duly;In a proper manner.",
	"proselytize;To convert (a person) from one belief, doctrine, cause, or faith to another.",
	"collegiate;Of, relating to, or held to resemble a college.",
	"uncouth;Awkward or clumsy.",
	"cesspool;A filthy, disgusting, or morally corrupt place.",
	"impunity;Exemption from punishment, penalty, or harm.",
	"meta;Making or showing awareness of reference to oneself or to the activity that is taking place, especially in an ironic or comic way.",
	"whimsical;Playful or fanciful, especially in a humorous way.",
	"taxonomy;The classification and naming of organisms in an ordered system that is intended to indicate natural relationships, especially evolutionary relationships.",
	"mogul;Any great personage.",
	"equivocate;To use equivocal language to deceive someone or avoid committing oneself to a position.",
	"moniker;A personal name or nickname.",
	"clandestine;Kept or done in secret, often to conceal an illicit or improper purpose.",
	"scintillating;Animated, brilliant, or highly skilled.",
	"vicarious;	Experienced or felt by empathy with or imaginary participation in the life of another person.",
	"apatetic;Relating to or characterized by coloration serving as natural camouflage.",
	"fidelity;Faithfulness to obligations, duties, or observances.",
	"assart;To grub up trees and bushes to make land arable.",
	"odius;Deserving or causing hatred.",
	"vapid;Lacking taste, zest, or flavor.",
	"plasticity;Capability of being molded, formed, or modeled.",
	"ensemble;A group of people or things that make up a complete unit.",
	"acumen;Quickness, accuracy, and keenness of judgment or insight.",
	"guerilla;A person who engages in irregular warfare especially as a member of an independent unit carrying out harassment and sabotage.",
	"litigate;To prosecute or defend (a lawsuit or legal action).",
	"apathetic;Feeling or showing a lack of interest or concern."
];

TESTWORDBANK =
[
	"extremity;The outermost or farthest point or portion.",
	"vendetta;A condition of private war in which the nearest of kin execute vengeance on the slayer of a relative; a blood-feud.",
	"concrete;Of or relating to an actual, specific thing or instance.",
	"professional;Conforming to the standards of a profession.",
	"invention;A new device, method, or process developed from study and experimentation.",
	"convention;A formal meeting of members, representatives, or delegates, as of a political party, fraternal society, profession, or industry.",
	"maverick;A person who shows independence of thought and action, especially by refusing to adhere to the policies of a group to which he or she belongs.",
	"conscientious;Thorough and assiduous.",
	"carpophagous;Fruit eating.",
	"affinity;A spontaneous or natural liking or sympathy for someone or something.",
	"abnegation;Self-denial.",
	"erudite;Having or showing great knowledge or learning.",
	"candor;Frankness or sincerity of expression.",
	"aperture;An opening, such as a hole, gap, or slit.",
	"notorious;Known widely and usually unfavorably.",
	"negligible;Not significant or important enough to be worth considering.",
	"trifling;Of little worth or importance."
];

SMALLWORDBANK =
[
	"extremity;The outermost or farthest point or portion.",
	"vendetta;A condition of private war in which the nearest of kin execute vengeance on the slayer of a relative; a blood-feud.",
	"concrete;Of or relating to an actual, specific thing or instance.",
	"professional;Conforming to the standards of a profession.",
]

/**
 * Returns the string at index item when a string delimited by semi-colons
 * is split into an array.
 *
 * To be used with the WORDBANK array to get attributes of words.
 *
 * @param  string the string that is delimited by semi-colons that will be
 *                broken up into an array
 * @param  item   the number that describes the index of the array that will
                  be returned
 * @return        the string at index item
 */
function getWordDetail(string, item)
{
	// INSTEAD OF "string", MAKE IT INDEX?
	var detail = string.split(";")[item];

	return detail;
}

// Finds the index of an item in an array
// Iterates through the array and looks for an index that matches the item, and reports the number of the item.
function findArrayIndex(testArray, item)
{
	for (var i = 0; i < testArray.length; i++)
	{
		console.log(testArray[i] + " i: " + i);
		if (testArray[i] == item)
		{
			return i;
		}
	}
}

/**
 * Returns the definition of the word "word" as recorded on the Free
 * Dictionary API.
 *
 * To be used with the random word generator on mc-def-game.js to generate
 * definitions for words.
 *
 * @param  string a string that represents the name of the word to access
 *                the definition of.
 * @return        the string at index item
 */
// function requestWord(word)
// {
// 	const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
// 	console.log(url);
//
// 	let data = fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Bad response");
//       }
//       return response.json();
//     })
//     .then(data =>
//       console.log(data[0].meanings[0].definitions[0].definition))
//     .catch(err =>
//       console.error(err));
// }
