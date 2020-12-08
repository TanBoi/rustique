
	function rustique(){
	document.getElementById("name_pizza").innerHTML = "La Rustique";
	document.getElementById("name_ingredient").innerHTML = "Lardons";
	document.getElementById("presentation").innerHTML = "<p>DESCRIPTION ENIBIEN</p><button onclick='chevre(this);'>Chevres</button><button onclick='champignon(this);'>Champignons</button><button onclick='poivron(this);'>Poivron</button><button onclick='salade(this);'>Salade</button><button onclick='sauce(this);'>Sauce</button><button onclick='bacon(this);'>Bacon</button>";
}
	function enibien(){
	document.getElementById("name_pizza").innerHTML = "L'Enibien";
	document.getElementById("name_ingredient").innerHTML = "Oeufs";
	document.getElementById("presentation").innerHTML = "<p>DESCRIPTION ENIBIEN</p><button onclick='chevre(this);'>Chevres</button><button onclick='oeuf(this);'>Oeufs</button><button onclick='poivron(this);'>Poivron</button><button onclick='salade(this);'>Salade</button><button onclick='sauce(this);'>Sauce</button><button onclick='bacon(this);'>Bacon</button>";
}
	function londonienne(){
	document.getElementById("name_pizza").innerHTML = "La Londonienne";
	document.getElementById("name_ingredient").innerHTML = "Salade";
	document.getElementById("presentation").innerHTML = "<p>DESCRIPTION LONDONIENNE</p><button onclick='champignon(this);'>Champignons</button><button onclick='poivron(this);'>Poivron</button><button onclick='salade(this);'>Salade</button><button onclick='creme(this);'>Crême</button><button onclick='bacon(this);'>Bacon</button>";
}


	function chevre(){
	document.getElementById("name_ingredient").innerHTML = "Fromage de chèvre";
	document.getElementById("description_ingredient").innerHTML = "Description";
}
	function champignon(){
	document.getElementById("name_ingredient").innerHTML = "Les champignons";
	document.getElementById("description_ingredient").innerHTML = "Description";
}
	function poivron(){
	document.getElementById("name_ingredient").innerHTML = "Les poivrons";
	document.getElementById("description_ingredient").innerHTML = "Description";
}
	function bacon(){
	document.getElementById("name_ingredient").innerHTML = "Le Bacon";
	document.getElementById("description_ingredient").innerHTML = "Description";
}
	function salade(){
	document.getElementById("name_ingredient").innerHTML = "La Salade";
	document.getElementById("description_ingredient").innerHTML = "Description";
}
	function sauce(){
	document.getElementById("name_ingredient").innerHTML = "Sauce tomate";
	document.getElementById("description_ingredient").innerHTML = "Description";
}
	function creme(){
	document.getElementById("name_ingredient").innerHTML = "Crême fraiche";
	document.getElementById("description_ingredient").innerHTML = "Description";
}
	function oeuf(){
	document.getElementById("name_ingredient").innerHTML = "Les Oeufs";
	document.getElementById("description_ingredient").innerHTML = "Description";
}
