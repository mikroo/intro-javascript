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

// Nombre entrer par l'utilisateur
var userNumber = Number(prompt('Deviner un nombre'));

// comparer les nombres si ils sont trop petit ou trop grand
if( userNumber == solution ) {
	console.log(' Bravo ! La solution était ' + solution);
} else if ( userNumber > solution ) {
	console.log( userNumber + ' est trop grand.');
} else if ( userNumber < solution ) {
	console.log( userNumber + ' est trop petit.');
}