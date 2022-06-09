const mapping = {
	"A": ". _", "N": "_ .",
	"B": "_ . . .", "O": "_ _ _",
	"C": "_ . _ .", "P": "._ _ .",
	"D": "_ . .", "Q": "_ _ ._",
	"E": ".", "R": "._.",
	"F": ". . _ .", "S": ". . .",
	"G": "_ _ .", "T": "_",
	"H": ". . . .", "U": ". ._",
	"I": ". .", "V": ". . ._",
	"J": ". _ _ _", "W": "._ _",
	"K": "_ . _", "X": "_ . ._",
	"L": ". _ . .", "Y": "_ ._ _",
	"M": "_ _", "Z": "_ _ . .",



	"1": ". _ _ _ _", "6": "_ . . . .",
	"2": ". . _ _ _", "7": "_ _ . . .",
	"3": ". . . _ _", "8": "_ _ _ . .",
	"4": ". . . . _", "9": "_ _ _ _ .",
	"5": ". . . . .", "0": "_ _ _ _ _"

}
function tomorse() {
	let inp = document.getElementById("txt1").value;
	inp = inp.toUpperCase();
	let arr1 = inp.split("");
	let arr2 = arr1.map(x => {
		if (mapping[x]) {
			return mapping[x];
		}
		else {
			return x;
		}
	})
	let out = arr2.join(" ");
	document.getElementById("txt2").value = out;
}
