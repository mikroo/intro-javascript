// TODO : ajoutez ici la définition des objets nécessaires
var Compte = {
	init: function (nom, montant) {
		this.nom = nom;
		this.montant = montant;
	}
};
// compte bancaire
var CompteBancaire = Object.create(Compte);
var compte1 = Object.create(CompteBancaire);
compte1.initCB = function(nom, montant) { // init bancaire
	this.init(nom, montant);
};
compte1.debiter = function ( montant ) {
	this.montant = this.montant - montant;
	return this.montant;
};
compte1.decrire = function (){
	var description = "Titulaire : " + this.nom + ", solde : " + this.montant + " euros";
	return description;
}
compte1.initCB("Alex", 100);

// Compte Epargne
var CompteEpargne = Object.create(Compte);
var compte2 = Object.create(CompteEpargne);
compte2.initCE = function (nom, montant, interets) {
	this.init(nom, montant);
	this.interets = interets;
};
compte2.crediter = function (montant) {
	this.montant = this.montant + montant;
	return this.montant;
};
compte2.decrire = function (){
	var description = "Titulaire : " + this.nom + ", solde : " + this.montant + " euros";
	return description;
}
compte2.ajouterInterets = function(){
	this.montant = this.montant + (this.montant * this.interets);
	return this.montant;
};
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