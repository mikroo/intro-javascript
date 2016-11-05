/*
// Obtenir la longueur d'une chaîne
console.log("ABC".length); // Affiche 3
console.log("Je suis une chaîne".length); // Affiche 18
var mot = "Kangourou";
var longueMot = mot.length; // longueMot contient la valeur 9
console.log(longueMot);

// Convertir une chaîne en minuscules ou en majuscules
var motInitial = "Bora-Bora";
var motEnMinuscules = motInitial.toLowerCase();
console.log(motEnMinuscules); // Affiche "bora-bora"
var motEnMajuscules = motInitial.toUpperCase();
console.log(motEnMajuscules); // Affiche "BORA-BORA"

// Comparer deux chaînes
var chaine = "azerty";
console.log(chaine === "azerty") // Affiche true
console.log(chaine === "qw  erty") // Affiche false

console.log("Azerty" === "azerty") // Affiche false
 
var valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter"); // Affiche false à cause du Q majuscule
console.log(valeurSaisie.toLowerCase() === "quitter"); // Affiche true


// Accéder à un caractère d'une chaîne
var sport = "Tennis-ballon"; // 13 caractères
// console.log(sport.charAt(0)); // Affiche "T"
console.log(sport[0]); // Affiche "T"
console.log(sport.charAt(6)); // Affiche "-"
console.log(sport[6]); // Affiche "-"

var longueurSport = sport.length;
// console.log(sport[lon])
console.log(sport[longueurSport - 1]); // Affiche "n"
console.log(sport[longueurSport]); // Affiche undefined : longueur dépassé !
*/

// Parcourir une chaîne caractère par caractère
var prenom = "Chancy";
for(var i = 0; i < prenom.length; i++) {
	console.log(prenom[i]);
}

