/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var GestionnaireContact = {
	init: function(nom, prenom){
		this.nom = nom;
		this.prenom = prenom;
	},
	display: function(){
		var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
		return description;
	}
};

// Message de bienvenue
console.log("Bienvenue dans le gestionnaire des contacts !");
console.log("1 : Lister les contacts");
console.log("2 : Ajouter un contact");
console.log("0 : Quitter");

var userOption = ""; // variable des options
contacts = []; // tableau de contact
while(userOption !== '0') {
	userOption = prompt("Choisissez une option");
	if(userOption === '1') { // Lister la liste de contacts
		console.log("Voici la liste de tous vos contacts");
		contacts.forEach(function(contact){
			console.log(contact.display());
		});
		console.log("\n"); // Saut de ligne
		console.log("\n"); // Saut de ligne

		// Les options
		console.log("1 : Lister les contacts");
		console.log("2 : Ajouter un contact");
		console.log("0 : Quitter");
	} else if( userOption === '2'){
		nom = prompt("Entrez le nom du nouveau contact");
		prenom = prompt("Entrez le prénom du nouveau contact");

		contact = Object.create(GestionnaireContact);
		contact.init(nom, prenom);

		contacts.push(contact); // Ajout dans le tableau
		console.log("Le nouveau contact a été ajouté"); // Affiche un message après l'ajout du contact
	}
}