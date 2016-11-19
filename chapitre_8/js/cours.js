/*
var perso = {
	nom: "Aurora",
	sante: 150,
	force: 25,
	xp: 0,

	// Renvoie la description du personnage
	decrire: function(){
		var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience";
		return description;
	}
};

// console.log(perso.nom);

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());




// -----------------------------
var perso2 = {
	nom:"Glacius",
	sante: 130,
	force: 30,
	xp: 0,
	// Renvoie la description du personnage
	decrire: function(){
		var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience";
		return description;
	}
};

console.log(perso2.decrire());

// Objets et prototypes en javascript
var unObjet = {
	a: 2
};

// Crée unAutreObjet avec unObjet comme prototype
var unAutreObjet = Object.create(unObjet);

 console.log(unAutreObjet.a); // Affiche 2

 // Crée encoreUnObjet avec unAutreObjet comme prototype
 var encoreUnObjet = Object.create(unAutreObjet);

 console.log(encoreUnObjet.a) // Affiche 2
 console.log(encoreUnObjet.b) // Affiche undefined
*/
/*
 // ---------------------------------
 // Création des personnages

 var Personnage = {
 	nom: "",
 	sante: 0,
 	force: 0,
 	xp: 0,

 	// Renvoie la description du personnage
 	decrire: function() {
 		var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience";
 		return description;
 	}
 };

 var perso1 = Object.create(Personnage);
 perso1.nom = "Aurora";
 perso1.sante = 150;
 perso1.force = 25;

 var perso2 = Object.create(Personnage);
 perso2.nom = "Glacius";
 perso2.sante = 130;
 perso2.force = 35;

console.log(perso1.decrire());
console.log(perso2.decrire());
*/
/*
// Initialisation des personnages
var Personnage = {
	// Initialise le personnage
	init: function(nom, sante, force) {
		this.nom = nom;
		this.sante = sante;
		this.force = force;
		this.xp = 0;
	},
	// Renvoie la description du personnage
	decrire: function () {
		var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience";
		return description
	}
};

var perso1 = Object.create(Personnage);
perso1.init("Aurora", 150, 25);

var perso2 = Object.create(Personnage);
perso2.init("Glacius", 130, 30);

console.log(perso1.decrire());
console.log(perso2.decrire());
*/

	// Des adversaires pour nos héros
	var Personnage = {
		// initialise le personnage
		initPerso: function (nom, sante, force) {
			this.nom = nom;
			this.sante = sante;
			this.force = force;
		}
	};

	var Joueur = Object.create(Personnage);
	// Initialise le joueur
	Joueur.initJoueur = function (nom, sante, force) {
		this.initPerso(nom, sante, force);
		this.xp = 0; // L'expérience du joueur est toujours initialisée à 0
	};

	// Renvoie la description du joueur
	Joueur.decrire = function () {
		var description = this.nom + " a " + this.sante + " points de vie, " +
	        this.force + " en force et " + this.xp + " points d'expérience";
	    return description;
	};

	var Adversaire = Object.create(Personnage);
	// Initialise l'adversaire
	Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
		this.initPerso(nom, sante, force);
		this.race = race;
		this.valeur = valeur;
	};

	var joueur1 = Object.create(Joueur);
	joueur1.initJoueur("Aurora", 150, 25);

	var joueur2 = Object.create(Joueur);
	joueur2.initJoueur("Glacius", 130, 30);

	console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
	console.log(joueur1.decrire());
	console.log(joueur2.decrire());

	var monstre = Object.create(Adversaire);
	monstre.initAdversaire("ZogZog", 40, 20, "orc", 10);

	console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);