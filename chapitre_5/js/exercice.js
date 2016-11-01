/*
// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

// TODO : faire saisir le prénom et le nom de l'utilisateur
var prenom =  prompt('Entrez votre prénom :'), 
	nom = prompt('Entrez votre nom :');
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat
console.log(direBonjour(prenom, nom));



// Renvoie le carré d'un nombre
function carre(x) {
	// TODO : compléter le code de la fonction
	return x * x; 
}
console.log(carre(0)); // Doit afficher 0
console.log(carre(2)); // Doit afficher 4
console.log(carre(5)); // Doit afficher 25
for( var i = 0; i <= 10; i++ ) {
	console.log(carre(i));
}


// TODO : écrire la fonction min()
function min( nombre_1, nombre_2 ){
	return Math.min(nombre_1,nombre_2);
}
console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1


// TODO : écrire la fonction calculer()
function calculer(nombre_1, operateur, nombre_2) {
	if( operateur == '+') {
		return nombre_1 + nombre_2;
	} else if( operateur == '-') {
		return nombre_1 - nombre_2;
	} else if( operateur == '*') {
		return nombre_1 * nombre_2;
	} else if( operateur == '/') {
		return nombre_1 / nombre_2;
	}
}
console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity
*/

// Formule Aire cercle
function perimetre(rayon) {
	var perimetre = 2 * Math.PI * rayon;
	return "Son périmètre vaut " + perimetre;
}
function aire(rayon) {
	var aire = Math.PI * rayon * rayon;
	return "Son aire vaut " + aire;
}

var rayon = Number(prompt("Entrez le rayon d'un cercle"));
console.log(perimetre(rayon));
console.log(aire(rayon));