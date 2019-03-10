var mezok, megoldasok, megoldokulcs,eredmeny, utolsoFeladat; // Hibakereses
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

function ertekelFeladat(megoldokulcs,bejelolt) {
	var eredmeny = osszevet(megoldokulcs,bejelolt);
	if (megoldokulcs == bejelolt) {
		eredmeny += beallitas.hibatlanFeladatBonusz;
	}
	return eredmeny;
}
function kiszamol() {
	mezok = document.querySelectorAll("table input");
	utolsoFeladat = document.getElementById("feladat14").value*1;
	megoldasok = new Array();
	megoldokulcs = new Array();
	for(let i = 0;i<mezok.length;i++) {
		if (i % 2 == 0) {
			megoldasok[i/2] = mezok[i].value;
		} else {
			megoldokulcs[(i-1)/2] = mezok[i].value;
		}
	}
	for(let i = 0;i<megoldokulcs.length;i++) {
		megoldokulcs[i] = tombbe(megoldokulcs[i]);
	}
	for(let i = 0;i<megoldasok.length;i++) {
		megoldasok[i] = tombbe(megoldasok[i]);
	}
	for(let i = 0;i<megoldokulcs.length;i++) {
		var eredmeny = new Number();
		eredmeny += ertekelFeladat(megoldokulcs[i],megoldasok[i])
	}
	eredmeny += utolsoFeladat;
	document.querySelector("#eredmeny").value = eredmeny;
}