// Information sur le mot
/*	Le mot "naconda" contient 8 caractère(s)
 *	Il s'écrit en minuscules anacoda
 *	Il s'écrit en majuscule ANACONDA
 */
 var userData = prompt("Ecrivez un mot pour obtenir ses information");
 var consonnes = userData.length - compterNbVoyelles(userData);

 // Comptage du nombre de voyelles
 function compterNbVoyelles(userData) {
 	var nombreVoyelle = 0;
 	for( var i = 0; i < userData.length; i++ ) {
 		var lettre = userData[i];
 		if( (lettre === 'a') || (lettre === 'e') || (lettre === 'i') || (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
 			nombreVoyelle++;
 		}
 	}
 	return nombreVoyelle;
 }

 // Inversion du mot
 function inverser(userData) {
 	var motInverse = "";
 	for(var i = 0; i < userData.length; i++) {
 		var motInverse = userData[i] + motInverse;
 	}
 	return motInverse;
  }

 // Affichage du text
 console.log("Le mot " + userData + "contient " + userData.length + " caractère(s)");
 console.log("Il s'écrit en minuscules " + userData.toLowerCase());
 console.log("Il s'écrit en majuscule " + userData.toUpperCase());
 console.log("Il contient " + compterNbVoyelles(userData) + " voyelle(s) et " + consonnes + " consonne(s)");
 console.log("Il s'ecrit à l'envers " + inverser(userData));
 // Palindrome
if(userData.toLowerCase() === inverser(userData)) {
	console.log("C'est un mot palindrome");
} else {
	console.log("Ce n'est pas un palindrome");
}
console.log("Il s'écrit en leet speak " + convertirEnLeetSpeak(userData));


// Conversion en "leet speak"
function trouverLettreLeet(lettre){
	switch(lettre) {
	case 'a':
		lettre = '/\\';
		break;
	case 'b':
		lettre = 'B'	
		break;
	case 'c':
		lettre = '(';
		break;
	case 'd':
		lettre = '[)';
		break;
	case 'e':
		lettre = '3';
		break;
	case 'f':
		lettre = 'ƒ';
		break;
	case 'g':
		lettre = '6';
		break;
	case 'h':
		lettre = '|-|';
		break;
	case 'i':
		lettre = '!';
		break;
	case 'j':
		lettre = '_/';
		break;
	case 'k':
		lettre = '!';
		break;
	case 'i':
		lettre = '|<';
		break;
	case 'l':
		lettre = '|_';
		break;
	case 'm':
		lettre = '/v\\';
		break;
	case 'n':
		lettre = '|\\|';
		break;
	case 'o':
		lettre = '0';
		break;
	case 'p':
		lettre = '¶';
		break;
	case 'q':
		lettre = '0_';
		break;
	case 'r':
		lettre = '.-';
		break;
	case 's':
		lettre = '5';
		break;
	case 't':
		lettre = "†";
		break;
	case 'u':
		lettre = '|_|';
		break;
	case 'v':
		lettre = '|/';
		break;
	case 'w':
		lettre = '|vv|';
		break;
	case 'x':
		lettre = '><';
		break;
	case 'y':
		lettre = "'/";
		break;
	case 'z':
		lettre = '7_';
		break;


		// chiffres
	case '0':
		lettre = 'o';
		break;
	case '1':
		lettre = 'i';
		break;
	case '2':
		lettre = 'D';
		break;
	case '3':
		lettre = 'B';
		break;
	case '4':
		lettre = 'A';
		break;
	case '5':
		lettre = 'S';
		break;
	case '6':
		lettre = 'b';
		break;
	case '7':
		lettre = 'Z';
		break;
	case '8':
		lettre = '8';
		break;
	case '9':
		lettre = '';
		break;
	case '.':
		lettre = '_';
		break;
	case '-':
		lettre = '_';
		break;
	default:
		lettre = "Entrer une seul lettre";
	}

	return lettre;
}
function convertirEnLeetSpeak(userData){
	var leetSpeak = "";
		userData = userData.toLowerCase();
	// decortiquer userData lettre par lettre
	for(var i = 0; i < userData.length; i++){
		// Convertir en lettre leet avec la fonction trouverLettreLeet
		var lettreLeet = trouverLettreLeet(userData[i]);
		leetSpeak = leetSpeak + lettreLeet;
	}
	// text saisi par l'utilisateur en leet
	return leetSpeak;
}
// - Été- Kayak- Pop- Réifier- Ressasser- Rêver- Selles- Sèves- Sexes- Tôt