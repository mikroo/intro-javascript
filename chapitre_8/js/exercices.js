/*
// TODO : ajoutez ici la définition de l'objet Chien
var Chien = {
	init: function(nom, race, taille){
		this.nom = nom;
		this.race = race;
		this.taille = taille;
	}
}    
var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
crokdur.aboyer = function(){
	var aboie = "Grrr ! Grrr !";
	return aboie;
}
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
pupuce.aboyer = function(){
	var aboie = "Kaii ! Kaii !";
	return aboie;
}
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());
*/
// TODO : ajoutez ici la définition des objets nécessaires
var Compte = {
	initCB: function(nom, montant, interer){
		this.nom = nom;
		this.montant = montant;
		this.interer = interer;
	},

}


var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());