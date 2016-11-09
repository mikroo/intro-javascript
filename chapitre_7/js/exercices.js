/*
// Ajout de l'expérience du personnage 
// TODO : ajoutez ici la définition de l'objet perso
perso = {
	nom: "Aurora",
	sante: 150,
	force: 25,
	xp: 0,
	decrire: function() {
		var description = "Aurora a " + perso.sante + "points de vie, " + perso.force + " en force et " + perso.xp + " points d'expérience";
		return description;
	}
};
console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());
*/
/*
// Modélisation d'un chien
// TODO : ajoutez ici la définition de l'objet chien
var chien = {
	nom: "Crockdur",
	race: "Mâtin de naples",
	taille: 75, // toute taille sont noté en centimètre
	aboyer: function(){
		var aboie = "Grrr ! Grrr !";
		return aboie;
	}
}

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());
*/
/*
// Modélisation d'un cercle
var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle
var cercle = {
	perimetre: function(r){
		// Formule du périmètre  P = 2 × π × r
		var p = 2 * Math.PI * r;
		return p; 
	},
	aire: function(r){
		// Formule d'aire du cercle Aire = r² x π = 
		var a = r * r * Math.PI;
		return a;
	}
}
console.log("Son périmètre vaut " + cercle.perimetre(r));
console.log("Son aire vaut " + cercle.aire(r));
*/
// Modelisation d'un compte bancaire

var compte = {
	titulaire: "Alex",
	solde: 0,
	crediter: function(montant){
		this.solde = this.solde + montant;
	},
	debiter: function(montant){
		this.solde = this.solde - montant;
	},
	decrire: function(){
		var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
		return description;
	}
};

// User data
var crediter = Number(prompt("Entrez le montant à créditer : "));
var debiter = Number(prompt("Entrez le montant à débiter : "));

console.log(compte.decrire());
// Afficher les redultats
compte.crediter(crediter);
compte.debiter(debiter);
console.log(compte.decrire());
