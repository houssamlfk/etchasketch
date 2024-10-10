function changeFunction() {
	size = prompt("Give size");
	s = parseInt(size, 10);
	let e = document.getElementById("container");
	let child = e.lastElementChild;
	while (child) {
		e.removeChild(child);
		child = e.lastElementChild;
	}
	for (let i = 0; i < s; i++) {
		let list = document.createElement("div");
		list.id = "row" + i;
		list.style.display = "flex";
		document.getElementById("container").appendChild(list);
		for (let j = 0; j < s; j++) {
			let div = document.createElement("div");
			div.id = "case" + i + "," + j;
			div.style.width = "100px";
			div.style.height = "100px";
			div.style.border = "2px black solid";
			div.addEventListener("mouseover", () => { div.style.backgroundColor = "blue"; });
			document.getElementById("row" + i).appendChild(div);
		}
	}
}
var sizeButton = document.getElementById("size");
sizeButton.addEventListener("click", changeFunction);
