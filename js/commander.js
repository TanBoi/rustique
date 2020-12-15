
//var rustique=document.getElementById("rustiqueBtn");
//var londonienne=document.getElementById("londonienneBtn");
//var enibienne=document.getElementById("enibienneBtn");



function addRustique(){
	/*
	var rustique = document.createElement("p");
	rustique.id="rustique";
	rustique.appendChild(document.createTextNode("La Rustique")); 
	document.getElementById("nomPizza").appendChild(rustique); 
	*/
	var rustiqueElt = document.createElement("p"); // Création d'un élément li
	rustiqueElt.id = "rustique"; // Définition de son identifiant
	if ((document.getElementById("quantiteRustique").value)== "0"){
	}
	else{
		rustiqueElt.textContent = "La Rustique"+"  "+" x"+document.getElementById("quantiteRustique").value; // Définition de son contenu textuel
	}

	document.getElementById("rustique").innerHTML=rustiqueElt.textContent; // Insertion du nouvel élément

	console.log("clic enibienne");
}
function addLondonienne(){
	/*
	var rustique = document.createElement("p");
	rustique.id="rustique";
	rustique.appendChild(document.createTextNode("La Rustique")); 
	document.getElementById("nomPizza").appendChild(rustique); 
	*/
	var londonienneElt = document.createElement("p"); // Création d'un élément li
	londonienneElt.id = "londonienne"; // Définition de son identifiant
	if ((document.getElementById("quantiteLondonienne").value)== "0"){
	}
	else{
		londonienneElt.textContent = "La Londonienne"+"  "+" x"+document.getElementById("quantiteLondonienne").value; // Définition de son contenu textuel
	}
	document.getElementById("londonienne").innerHTML=londonienneElt.textContent; // Insertion du nouvel élément

	console.log("clic enibienne");
}
function addEnibienne(){
	/*
	var rustique = document.createElement("p");
	rustique.id="rustique";
	rustique.appendChild(document.createTextNode("La Rustique")); 
	document.getElementById("nomPizza").appendChild(rustique); 
	*/
	var enibienneElt = document.createElement("p"); // Création d'un élément li
	enibienneElt.id = "enibienne"; // Définition de son identifiant
	if ((document.getElementById("quantiteEnibienne").value)== "0"){
	}
	else{
		enibienneElt.textContent = "L'Enibienne"+"  "+" x"+document.getElementById("quantiteEnibienne").value; // Définition de son contenu textuel
	}
	document.getElementById("enibienne").innerHTML=enibienneElt.textContent; // Insertion du nouvel élément

	console.log("clic enibienne");
}

function toPaie(){
	var total=12*document.getElementById("quantiteLondonienne").value+10*document.getElementById("quantiteEnibienne").value+11*document.getElementById("quantiteRustique").value;
	var shopElt = document.createElement("p"); // Création d'un élément li
	shopElt.id = "shopPizza"; // Définition de son identifiant
	shopElt.textContent = "Total à payer: "+" "+total+"€";// Définition de son contenu textuel
	console.log(total);
	
	document.getElementById("payer").innerHTML=shopElt.textContent; // Insertion du nouvel élément
}

