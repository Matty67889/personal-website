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

// Generates a random word from WORDBANK, sets wordToDefine.innerHTML to the word, and returns the word
// Generates a random number between 0 and the WORDBANK.length - 1 and gets the word at that index of WORDBANK.
// Sets wordToDefine.innerHTML to the new word, then returns the word.

// let request = new XMLHttpRequest();
// const url = "https://pokeapi.co/api/v2/pokemon/?limit=100";
//
// let pokemonCounter = 0;
//
// request.open("GET", url, true);
//
// request.onload = function()
// {
//   let data = JSON.parse(this.response);
//   let row = null;
//
//   if (request.status >= 200 && request.status < 400)
//   {
//     data.results.forEach(pokemon =>
//     {
//       // Creates new rows
//       if (pokemonCounter % 4 == 0)
//       {
//         row = document.createElement('div');
//         row.className = "row";
//         $("#pokelist").append(row);
//       }
//
//       // Create a new card
//       let card = document.createElement('div');
//       card.className = "col-3 pokemon";
//
//       let p = document.createElement('p');
//       p.textContent = pokemon.name;
//
//       // Adds the pokemon sprites
//       let sprite = document.createElement("img");
//
//       let pokemonRequest = new XMLHttpRequest();
//       let urlPokeInfo = "https://pokeapi.co/api/v2/pokemon/" + pokemon.name + "/";
//
//       pokemonRequest.open("GET", urlPokeInfo, true);
//
//       pokemonRequest.onload = function()
//       {
//         let pokemonData = JSON.parse(this.response);
//
//         if (pokemonRequest.status >= 200 && pokemonRequest.status < 400)
//         {
//           sprite.setAttribute("src", pokemonData.sprites.front_default);
//
//           card.onclick = function()
//           {
//             sprite.setAttribute("src", pokemonData.sprites.front_shiny);
//           }
//         }
//       };
//
//       pokemonRequest.send();
//
//       // Add the card to the row
//       card.appendChild(p);
//       card.appendChild(sprite);
//       row.appendChild(card);
//       pokemonCounter++;
//     });
//   }
// };
//
// request.send();
//
// function getPokemonInfo(name)
// {
//   let pokemonRequest = new XMLHttpRequest();
//   let urlPokeInfo = "https://pokeapi.co/api/v2/pokemon/" + name + "/";
//   let link = "";
//
//   pokemonRequest.open("GET", urlPokeInfo, true);
//
//   pokemonRequest.onload = function()
//   {
//     let data = JSON.parse(this.response);
//
//     if (pokemonRequest.status >= 200 && pokemonRequest.status < 400)
//     {
//       link = data.sprites.front_default;
//       return link;
//     }
//   };
//
//   console.log(link);
//   pokemonRequest.send();
// }
