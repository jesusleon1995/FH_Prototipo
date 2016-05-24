var topPx = 575;
var imgId = 6;
var textId = 13;

function validateForm() {
	
}

function changeImg(elem, img) {
	var img = document.getElementById(img);
	img.src = elem.value;
}

function addDispositivo() {
	topPx += 40;
	imgId += 1;
	textId += 2;
	var div1 = '<div id="image'+imgId+'" style="position:absolute; overflow:hidden; left:12px; top:'+topPx+'px; width:41px; height:33px; z-index:24"><img id="img'+imgId+'" src="images/enchufe.png" alt="" border=0 width=41 height=33></div>';
	var div2 = '<div style="left:123px;top:'+topPx+'px;"><select name="formselect12" onchange="changeImg(this, &apos;img'+imgId+'&apos;);" style="position:absolute;left:123px;top:'+topPx+'px;width:110px;z-index:13"><option value="images/nevera.png">Nevera</option><option value="images/tv.png">Televisor</option><option value="images/microwave.png">Microondas</option><option value="images/lavadora.png">Lavadora</option><option value="images/computer.png">Ordenador</option><option value="images/smartphone.png">Smartphone</option><option value="images/radiador.png">Calefacción</option><option value="images/enchufe.png">Iluminacion</option><option value="images/enchufe.png">Otros...</option></select></div>';
	var div3 = '<div style="left:280px;top:'+topPx+'px;"><input name="formtext'+textId+'" type="text" style="position:absolute;width:110px;left:280px;top:'+topPx+'px;z-index:19"><input name="formtext'+(textId+1)+'" type="text" style="position:absolute;width:110px;left:457px;top:'+topPx+'px;z-index:20"></div>';
	var div4 = '';
	var div5 = '';	
	
	console.log(div3);
	var container = document.getElementById("container");
	var img = document.createElement("div");
	var sel1 = document.createElement("div");
	var text = document.createElement("div");

	img.innerHTML += div1;
	sel1.innerHTML += div2;
	text.innerHTML += div3;
	container.appendChild(img);
	container.appendChild(sel1);
	container.appendChild(text);
}
