var barChartData = {
    labels : ["Televisor", "Ordenador", "Smartphone", "Impresora", "Microondas", "Batidora"],
    datasets : [
    	{
    		fillColor : "#6b9dfa",
    		strokeColor : "#ffffff",
    		highlightFill: "#1864f2",
    		highlightStroke: "#ffffff",
    		data : [40, 24, 10, 5, 10, 5]
    	}
    ]

}

function renderChart(cb, val) {
	if (cb.checked) {
		myPie.clear();

		var ctx3 = document.getElementById("chart-area3").getContext("2d");
    	window.myPie = new Chart(ctx3).Bar(barChartData, {responsive:true});

	} else {
		var x = cb.id.split("")[13];
		console.log(x);
		if (x == null) {
			myPie.removeData(0);
		} else {
			myPie.removeData(x-1);
		}
	}
}