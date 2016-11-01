/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var userNumber = "",
	repetition = 0,
	nombreRepetition = 6;

/* Tant que le nombre entrer par l'utilisateur est différent de la variable solution
 * On continue de demander à l'utilisateur de devinner le nombre de la variable 50.
 * Et l'utilisateur à droit de deviner 6 fois seulement
 */
// console.log(solution);
while( userNumber !== solution && repetition < nombreRepetition ) {
	userNumber = Number(prompt("Deviner un nombre"));
	repetition++;

	// Comparer si le nombre choisi par l'utilisateur est plus petit ou plus grand
	if( userNumber == solution ) {
	console.log(' Bravo ! La solution était ' + solution);
	} else if ( userNumber > solution ) {
		console.log( userNumber + ' est trop grand.');
	} else if ( userNumber < solution ) {
		console.log( userNumber + ' est trop petit.');
	} 
}

// vérifier si le nombre entrer par l'utilisateur est different de la variable solution
if ( userNumber != solution ) {
		console.log('Perdu... La solution était ' + solution);
	}
