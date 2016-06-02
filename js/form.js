var topPx = 575;
var imgId = 6;
var textId = 13;

function validateForm() {
	var tarifa = document.forms['form1']['formtext1'].value;
	var gasto = document.forms['form1']['formtext2'].value;
	if ((tarifa == "") || (gasto == "")) {
		alert("You must fill the empty spaces!");
		document.forms['form1'].action = "form.html";
		return false;
	}
	alert("Form Validated!");
	return true;
}

function changeImg(elem, img) {
	var img = document.getElementById(img);
	img.src = elem.value;
}

function addDispositivo() {
	topPx += 40;
	imgId += 1;
	textId += 2;
	var div1 = '<div id="image'+imgId+'" style="position:absolute; overflow:hidden; left:12px; top:'+topPx+'px; width:41px; height:33px; z-index:24"><img id="img'+imgId+'" src="images/tv.png" alt="" border=0 width=41 height=33></div>';
	var div2 = '<div style="left:123px;top:'+topPx+'px;"><select name="formselect12" onchange="changeImg(this, &apos;img'+imgId+'&apos;);" style="position:absolute;left:123px;top:'+topPx+'px;width:110px;z-index:13"><option value="images/tv.png">Televisor</option><option value="images/nevera.png">Nevera</option><option value="images/microwave.png">Microondas</option><option value="images/lavadora.png">Lavadora</option><option value="images/computer.png">Ordenador</option><option value="images/smartphone.png">Smartphone</option><option value="images/radiador.png">Calefacción</option><option value="images/enchufe.png">Iluminacion</option><option value="images/enchufe.png">Otros...</option></select></div>';
	var div3 = '<div style="left:280px;top:'+topPx+'px;"><input name="formtext'+textId+'" type="text" style="position:absolute;width:110px;left:280px;top:'+topPx+'px;z-index:19"><input name="formtext'+(textId+1)+'" type="text" style="position:absolute;width:110px;left:457px;top:'+topPx+'px;z-index:20"></div>';
	var div4 = '<div style="left:750px;top:'+topPx+'px;"><select name="formselect'+imgId+'" style="position:absolute;left:750px;top:'+topPx+'px;width:110px;z-index:21"><option value="op1">00h - 04h</option><option value="op2">04h - 08h</option><option value="op3">08h - 12h</option><option value="op4">12h - 16h</option><option value="op5">16h - 20h</option><option value="op6">20h - 00h</option></select></div>';	
	
	console.log(div3);
	var container = document.getElementById("container");
	var img = document.createElement("div");
	var sel1 = document.createElement("div");
	var sel2 = document.createElement("div");
	var text = document.createElement("div");

	img.innerHTML += div1;
	text.innerHTML += div3;
	sel1.innerHTML += div2;
	sel2.innerHTML += div4;

	container.appendChild(img);
	container.appendChild(sel1);
	container.appendChild(sel2);
	container.appendChild(text);
}
