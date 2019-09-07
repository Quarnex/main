$(".menu-open").click(function() {
	$(".main-menu").toggleClass('active');
	$(".container").toggleClass('cactive');
	$(".open-burger").toggleClass('bactive');
})

// $(document).keydown(function(e) {
// 	if(e.keyCode == 77) {
// 		$(".main-menu").toggleClass('active');
// 		$(".container").toggleClass('cactive');
// 		$(".open-burger").toggleClass('bactive');
// 	}
// })

google.charts.load('current', {'packages':['corechart']});

      google.charts.setOnLoadCallback(drawRecord);
		google.charts.setOnLoadCallback(drawAppeal);

      function drawRecord() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Отклонённых', 1],
          ['Принятых', 2],
          ['В ожидании', 3],
        ]);

        var options = {'title':'Запись на приём',
					   'legend': 'bottom',
					   'colors': ['#ff0000', '#009000', '#adadad'],
                       'width':600,
                       'height':300};

        var chart = new google.visualization.PieChart(document.getElementById('chart_records'));
        chart.draw(data, options);
		document.getElementById('chart_records').getElementsByTagName('text')[0].setAttribute('x', '250');
      }
	function drawAppeal() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Соотвутствуют', 1],
          ['Нарушения', 2],
          ['Заниженная', 3],
        ]);

        var options = {'title':'Мониторинг цен',
					   'legend': 'bottom',
					   'colors': ['#adadad', '#ff0000', '#009000'],
                       'width':600,
                       'height':300};

        var chart = new google.visualization.PieChart(document.getElementById('chart_appeals'));
        chart.draw(data, options);
		document.getElementById('chart_appeals').getElementsByTagName('text')[0].setAttribute('x', '250');
      }
