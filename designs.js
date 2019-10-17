/*global $, document, location*/
var mainTable = document.getElementById("pixelCanvas");

function makeGrid(height, width) {
	"use strict";
    for (var i = 0; i < height; i++) {
        var tableRow = document.createElement("tr");

        for (var j = 0; j < width; j++) {
            var tableCell = document.createElement("td");
            tableRow.appendChild(tableCell);
        }
        mainTable.appendChild(tableRow);
    }
}

var funcWork = document.getElementById("sizePicker");
funcWork.addEventListener("submit", function (e) {
	e.preventDefault;
	mainTable.innerHTML = "";
	var tableHeight = document.getElementById("inputHeight").value;
	var tableWidth = document.getElementById("inputWidth").value;
	makeGrid(tableHeight,tableWidth);
})

$("table").mouseenter(function () {
	"use strict";
	$("#colorForm").submit;
	var mainColor = document.getElementById("colorPicker").value;
	$("table td").click(function () {
		$(this).css("backgroundColor", mainColor);
	});
});

$("#resetbutton").click(function () {
	location.reload(true);
});


