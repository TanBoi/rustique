function edit_adresse(){
	var adresse = prompt("Entrez votre nouvelle adresse :","12 Rue de la Pizza");
	if (adresse != null) {
		document.getElementById("adresse").innerHTML = adresse;
	  }
}

function edit_name(){
	var name_client = prompt('Entrez votre nouveau nom :',"Dupont Jaques");
	if (name_client != null) {
		document.getElementById("name").innerHTML = name_client;
	  }
}

function edit_email(){
	var email = prompt('Entrez votre nouvelle adresse mail :',"adresse.example@pizza.fr");
	if (email != null) {
		document.getElementById("email").innerHTML = email;
	  }
}

function edit_password(){
	var password = prompt('Entrez votre nouveau mot de passe :',"**********");
	if (password != null) {
		document.getElementById("password").innerHTML = password;
	  }
}

function use_points(){
	document.getElementById('points').innerHTML = "30" + " Points";
}

function laisser_avis(){
	var avis = prompt('Laisser nous savoir comment était votre experience avec cetter commande :');
	if (avis != null) {
		alert('Votre avis à bien été pris en compte.')
	}
}