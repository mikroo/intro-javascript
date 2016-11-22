/* Les Trois mousquetaires
*********************** */
// Affichage avec la boucle "for"
var mousquetaires = ["Athos", "Porthos", "Aramis"];
for(var i = 0; i < mousquetaires.length; i++) {
	console.log(mousquetaires[i]);
}
// Ajout d'un element au tableau
mousquetaires.push("Artagnan");
console.log('----------------------');
// Affichage avec forEach
mousquetaires.forEach(function(mousquetaire){
	console.log(mousquetaire);
});

console.log('*************************');
/* Somme des valeurs
*********************** */
var valeurs = [11, 3, 7, 2, 9, 10];
var total = 0;
for (var i = 0; i < valeurs.length; i++) {
	total += valeurs[i];
}
console.log(total);

console.log('*************************');
/* Maximum des valeur
*********************** */
var valeurs = [11, 3, 7, 2, 9, 10];
var max = valeurs[0];

for (var i = 0; i < valeurs.length; i++) {
	if(valeurs[i] > max) {
		max = valeurs[i];
	}
	// valeurs[i];
}
console.log("la valeur la plus grande est : " + max);
console.log('*************************');
/* saisie d'une liste de mots
***************************** */

var prenoms = [];
var userData = "";
while(userData !== "stop") {
	var userData = prompt("Entrez un mot ou tapez stop pour arrêter :");
	if(userData !== "stop") {
		prenoms.push(userData);
	}
}
// Affichage des tous les prénom
prenoms.forEach(function(prenom){
	console.log(prenom);
})

console.log('*************************');
/* Liste de films avec réalisatuer
********************************** */

var Films = {
	init: function (titre, annee, realisateur) {
		this.titre = titre;
		this.annee = annee;
		this.realisateur = realisateur;
	},
	decrire: function(){
		var description = this.titre + " (" + this.annee + ", " + this.realisateur + ")";
		return description;
	}

}
var film1 = Object.create(Films);
film1.init("Le loup de wall Stree", 2013, "Martin Scorsese");

var film2 = Object.create(Films);
film2.init("Vice-Versa", 2015, "Pete Docter");

var film3 = Object.create(Films);
film3.init("Babysitting", 2013, "Philippe Lacheau et Nicolas Benamou");

var listFilms = [];
listFilms.push(film1);
listFilms.push(film2);
listFilms.push(film3);

listFilms.forEach(function(listFilm){
	console.log(listFilm.decrire());
});


console.log('*************************');
/* Gestion d'un chenil
********************** */

var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = " Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = " Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = " Grrr ! Grrr !";
        }
        return aboiement;
    },
    // Description 
    decrire: function(){
		var description = this.nom + " est un " + this.race + " mesurant " + this.taille + this.aboyer();
		return description;
		}






};

console.log("Le chenil héberge 3 chien(s)");

var crokdur = Object.create(Chien);
crokdur.init("crokdur", "mâtin de Naples", 75);

var pupuce = Object.create(Chien);
pupuce.init("pupuce", "bichon", 22);

var medor = Object.create(Chien);
medor.init("medor", "labrador", 58);

var chiens = [];
chiens.push(crokdur);
chiens.push(pupuce);
chiens.push(medor);

chiens.forEach(function(chien){
	console.log(chien.decrire());
});