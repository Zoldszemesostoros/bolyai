var mezok, bejeloltek, megoldokulcs, utolsoFeladat, eredmeny; // Hibakereses
var abc = "ABCDE";
function tombbe(mit) {
	var eredmeny = [false,false,false,false,false];
	for (let i=0;i<5;i++) {
		var char = mit.charAt(i)
		if (abc.indexOf(char) > -1 && char != "") {
			eredmeny[abc.indexOf(char)] = true;
		} 
	}
	return eredmeny;
}
function osszevet(megoldas, bejelolt){
	var eredmeny = new Number()
	for(let i = 0;i<megoldas.length;i++) {
		if (megoldas[i] && bejelolt[i]) {
			eredmeny += beallitas.helyesBejelol;
		}
		if (megoldas[i] && !bejelolt[i]) {
			eredmeny += beallitas.rosszUres;
		}
		if (!megoldas[i] && bejelolt[i]) {
			eredmeny += beallitas.rosszBejelol;
		}
		if (!megoldas[i] && !bejelolt[i]) {
			eredmeny += beallitas.helyesUres;
		}
	}
	return eredmeny;
}

function kiszamol() {
	mezok = document.querySelectorAll("table input");
	utolsoFeladat = document.getElementById("feladat14").value*1;
	bejeloltek = new Array();
	megoldokulcs = new Array();
	for(let i = 0;i<mezok.length;i++) {
		if (i % 2 == 0) {
			bejeloltek[i/2] = tombbe(mezok[i].value.toUpperCase());
		} else {
			megoldokulcs[(i-1)/2] = tombbe(mezok[i].value.toUpperCase());
		}
	}
	for(var i = 0, eredmeny = 0 ;i<megoldokulcs.length;i++) {
		eredmeny += osszevet(megoldokulcs[i],bejeloltek[i]);
		for (y=0,hibatlan=true;y<5;y++)  {
			if (megoldokulcs[i][y] != bejeloltek[i][y]) {
				hibatlan = false;
			}
		}
		if (hibatlan) {eredmeny += beallitas.hibatlanFeladatBonusz;}
	}
	eredmeny += utolsoFeladat;
	document.querySelector("#eredmeny").innerHTML = eredmeny;
}