
	function rustique(){
	document.getElementById("name_pizza").innerHTML = "LA <b>RUSTIQUE</b>";
	document.getElementById("presentation").innerHTML = "<p>La pizza <b>La Rustique</b> (ou encore Rustique-style pizza et Rustique-dish pizza en anglais) est une pizza qui a été inventée en 1941 à la Pizzeria La Rustique à Rennes. La pizza La Rustique présente de fortes différences par rapport à ses consœurs car elle se prépare dans un <b>moule creux</b>, et comporte une épaisse garniture. C'est un hybride entre la vieille <b>tradition américaine</b> pour les tartes et les méthodes traditionnelles de fabrication de <b>pizza de Naples</b>. Les ingrédients sont inversés car le fromage se trouve au fond et la sauce tomate sur le dessus. À Rennes, on la trouve sous différentes versions ; <b>croûte mince</b>, <b>croûte épaisse</b>, voire à deux croûtes avec la sauce sur le dessus. C'est la Spécialité de la maison, elle a été créee par <b>les parents du gérant actuel</b> de la Rustique. Cette pizza plait beaucoup pour son <b>originalité</b>, n'hésitez pas à demander aux serveurs sur place plus d'informations sur son histoire, il se feront un plaisir de prendre du temps pour discuter avec vous.</p><div id='buttons'><button onclick='chevre(this);'>Chevres</button><button onclick='champignon(this);'>Champignons</button><button onclick='poivron(this);'>Poivron</button><button onclick='salade(this);'>Salade</button><button onclick='sauce(this);'>Sauce</button><button onclick='bacon(this);'>Bacon</button></div>";
	document.getElementById("rustique").innerHTML = "<img src='../assets/photos/rustique.png' class='choisi'><p>La rustique</p>";
	document.getElementById("enibien").innerHTML = "<img src='../assets/photos/enibien.png' class='nchoisi'><p>L'Enibien</p>";
	document.getElementById("londonienne").innerHTML ="<img src='../assets/photos/londonienne.png' class='nchoisi'><p>La Londonienne</p>";
	chevres();
}
	function enibien(){
	document.getElementById("name_pizza").innerHTML = "L'<b>ENIBIEN</b>";
	document.getElementById("presentation").innerHTML = "<p>Il existe plusieurs versions sur l'origine de la pizza Enibien. Pour certains, celle-ci date de 1796-1810. Elle aurait été décrite, dès 1830, par un certain <b>Riccio</b>, dans le livre Napoli, contorni e dintorni. En 1866, Francesco De Bouchard (it) indique l'existence d'une <b>pizza Enibien, dès 1849</b> : selon lui, elle porterait ce nom en raison de la forme de fleur faite par la mozzarella fondue qui représenterait des <b>pétales</b>. Enfin, la version mythique la plus souvent racontée, indique que le roi Humbert Ier, accompagné de son épouse <b>Enib de Savoie</b> (en italien : Enibia di Savoia), voulant reconquérir les Napolitains à sa cause et les intégrer dans l'unité nationale, se rend à Naples le 11 juin 1889. À cette occasion, le chef pizzaiolo, Raffaele Esposito, pour honorer leur visite, crée la pizza, qu'il baptise le lendemain «Enibien», aux <b>couleurs du drapeau italien</b>. (rouge avec la sauce, verte avec la salade, blanche avec le chevre). </p><div id='buttons'><button onclick='chevre(this);'>Chevres</button><button onclick='oeuf(this);'>Oeufs</button><button onclick='poivron(this);'>Poivron</button><button onclick='salade(this);'>Salade</button><button onclick='sauce(this);'>Sauce</button><button onclick='bacon(this);'>Bacon</button></div>";
	document.getElementById("rustique").innerHTML = "<img src='../assets/photos/rustique.png' class='nchoisi'><p>La rustique</p>";
	document.getElementById("enibien").innerHTML = "<img src='../assets/photos/enibien.png' class='choisi'><p>L'Enibien</p>";
	document.getElementById("londonienne").innerHTML ="<img src='../assets/photos/londonienne.png' class='nchoisi'><p>La Londonienne</p>";
	bacon();
}
	function londonienne(){
	document.getElementById("name_pizza").innerHTML = "LA <b>LONDONIENNE</b>";
	document.getElementById("presentation").innerHTML = "<p>La pizza <b>Lodonian</b> (en français « pizza lodonienne ») est le nom d'une <b>spécialité culinaire traditionnelle de la ville de Londres</b>. La pizza londonian est constituée par deux seules variantes : la pizza <b>londonienne Marinara</b> et la pizza <b>Londonienne Margherita</b>, cette dernière avec une ultérieure variante « Extra ». Depuis le 14 février 2008, la dénomination Pizza Lodonian est protégée au niveau européen par le label spécialité traditionnelle garantie (STG). Nous servons dans le restaurant la <b>Londonniene Margherita</b>. C'est une pizza classique mais qui plait au plus grand nombre, tant aux adultes que aux enfants. Même si elle ressemble à la Margherita, ne vous y méprenez pas, son expérience gustative est totalement différente, essayez-là! </p><div id='buttons'><button onclick='champignon(this);'>Champignons</button><button onclick='poivron(this);'>Poivron</button><button onclick='salade(this);'>Salade</button><button onclick='creme(this);'>Crême</button><button onclick='bacon(this);'>Bacon</button></div>";
	document.getElementById("rustique").innerHTML = "<img src='../assets/photos/rustique.png' class='nchoisi'><p>La rustique</p>";
	document.getElementById("enibien").innerHTML = "<img src='../assets/photos/enibien.png' class='nchoisi'><p>L'Enibien</p>";
	document.getElementById("londonienne").innerHTML ="<img src='../assets/photos/londonienne.png' class='choisi'><p>La Londonienne</p>";
	salade();
}


	function chevre(){
	document.getElementById("name_ingredient").innerHTML = "FROMAGE <b>DE CHEVRES</b>";
	document.getElementById("calories").innerHTML ="<b>Calories:</b> 60 cal/g";
	document.getElementById("allergenes").innerHTML ="<b>Allergènes:</b> Pollen";
	document.getElementById("biologique").innerHTML ="<b>Biologique:</b> Oui";
	document.getElementById("provenance").innerHTML ="<b>Provenance:</b> Espagne";
	document.getElementById("prix").innerHTML ="<b>Prix au kilo:</b> 5e";
	document.getElementById("note").innerHTML ="<b>Note:</b> 4.5/5";
}

	function champignon(){
	document.getElementById("name_ingredient").innerHTML = "LES <b>CHAMPIGNONS</b>";
	document.getElementById("calories").innerHTML ="<b>Calories:</b> 10 cal/g";
	document.getElementById("allergenes").innerHTML ="<b>Allergènes:</b> Aucun";
	document.getElementById("biologique").innerHTML ="<b>Biologique:</b> Oui";
	document.getElementById("provenance").innerHTML ="<b>Provenance:</b> France";
	document.getElementById("prix").innerHTML ="<b>Prix au kilo:</b> 12e";
	document.getElementById("note").innerHTML ="<b>Note:</b> 5/5";
}
	function poivron(){
	document.getElementById("name_ingredient").innerHTML = "LES <b>POIVRONS</b>";
	document.getElementById("calories").innerHTML ="<b>Calories:</b> 25 cal/g";
	document.getElementById("allergenes").innerHTML ="<b>Allergènes:</b> Aucun";
	document.getElementById("biologique").innerHTML ="<b>Biologique:</b> Oui";
	document.getElementById("provenance").innerHTML ="<b>Provenance:</b> France (Plougastel)";
	document.getElementById("prix").innerHTML ="<b>Prix au kilo:</b> 2e";
	document.getElementById("note").innerHTML ="<b>Note:</b> 4.3/5";
}
	function bacon(){
	document.getElementById("name_ingredient").innerHTML = "LE <b>BACON</b>";
	document.getElementById("calories").innerHTML ="<b>Calories:</b> 125 cal/g";
	document.getElementById("allergenes").innerHTML ="<b>Allergènes:</b> Amidon";
	document.getElementById("biologique").innerHTML ="<b>Biologique:</b> Non";
	document.getElementById("provenance").innerHTML ="<b>Provenance:</b> Italie";
	document.getElementById("prix").innerHTML ="<b>Prix au kilo:</b> 8e";
	document.getElementById("note").innerHTML ="<b>Note:</b> 3.5/5";
}
	function salade(){
	document.getElementById("name_ingredient").innerHTML = "LA <b>SALADE</b>";
	document.getElementById("calories").innerHTML ="<b>Calories:</b> 12cal/g";
	document.getElementById("allergenes").innerHTML ="<b>Allergènes:</b> Aucun";
	document.getElementById("biologique").innerHTML ="<b>Biologique:</b> Oui";
	document.getElementById("provenance").innerHTML ="<b>Provenance:</b> France";
	document.getElementById("prix").innerHTML ="<b>Prix au kilo:</b> 50cts";
	document.getElementById("note").innerHTML ="<b>Note:</b> 5/5";
}
	function sauce(){
	document.getElementById("name_ingredient").innerHTML = "SAUCE <b>TOMATE</b>";
	document.getElementById("calories").innerHTML ="<b>Calories:</b> 152 cal/g";
	document.getElementById("allergenes").innerHTML ="<b>Allergènes:</b> Glucide fort";
	document.getElementById("biologique").innerHTML ="<b>Biologique:</b> Oui";
	document.getElementById("provenance").innerHTML ="<b>Provenance:</b> Production Maison";
	document.getElementById("prix").innerHTML ="<b>Prix au kilo:</b> -";
	document.getElementById("note").innerHTML ="<b>Note:</b> -";
}
	function creme(){
	document.getElementById("name_ingredient").innerHTML = "CREME <b>FRAICHE</b>";
	document.getElementById("calories").innerHTML ="<b>Calories:</b> 100 cal/g";
	document.getElementById("allergenes").innerHTML ="<b>Allergènes:</b> Aucun";
	document.getElementById("biologique").innerHTML ="<b>Biologique:</b> Non";
	document.getElementById("provenance").innerHTML ="<b>Provenance:</b> France (Bordeau)";
	document.getElementById("prix").innerHTML ="<b>Prix au kilo:</b> 10e";
	document.getElementById("note").innerHTML ="<b>Note:</b> 4.8/5";
}
	function oeuf(){
	document.getElementById("name_ingredient").innerHTML = "LES <b>OEUFS</b>";
	document.getElementById("calories").innerHTML ="<b>Calories:</b> 25 cal/g";
	document.getElementById("allergenes").innerHTML ="<b>Allergènes:</b> Aucun";
	document.getElementById("biologique").innerHTML ="<b>Biologique:</b> Non";
	document.getElementById("provenance").innerHTML ="<b>Provenance:</b> France (Lille)";
	document.getElementById("prix").innerHTML ="<b>Prix au kilo:</b> 12e";
	document.getElementById("note").innerHTML ="<b>Note:</b> 5/5";
}
