// Création d'un objet littéral
var stylo = {
	type: 'bille',
	couleur: 'Bleu',
	marque: 'Bic'
};

// Création d'un objet à l'aide d'un constructeur
function MonObjet() {
	// Initialisation de l'objet
}

// Instanciation d'un objet à partir du constructeur
var monObj = new MonObjet();

console.log(stylo.type);
console.log(stylo.couleur);
console.log(stylo.marque);

console.log(stylo['type']);

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

// Modification d'un objet
stylo.couleur = 'Jaune';
console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

// ajouter dynamiquement une nouvelle propriété à un objet
stylo.prix = 2.5; // Ajout de la propriété prix à l'objet stylo

console.log("Il coûte " + stylo.prix + " euros");
