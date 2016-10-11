"use strict"

import './ajax';

/**
 * you can import other files that you have created, no other libraries should be included into this project.
 * The code below can be modified/replaced to complete the assignment
 **/

var xhr = new XMLHttpRequest();


xhr.addEventListener('load', function() {
	var data = JSON.parse(this.responseText);

	function createList(array) {
		var myList = document.createElement('section');

		for (var n = 0; n < array.length; n++) {
			var number = document.createElement('div');
			number.appendChild(document.createTextNode(array[n]));
			myList.appendChild(number);
		}
		return myList;
	}
	document.getElementById('list').appendChild(createList(data.object_data));

});

var lengthreverse = 2;
document.getElementById("length").addEventListener('click', function() {

	var data = JSON.parse(xhr.responseText);

	document.getElementById('length').style.backgroundColor = "rgb(73, 181, 221)";
	document.getElementById('alpha').style.backgroundColor = "white";
	document.getElementById('number').style.backgroundColor = "white";

	if (lengthreverse % 2 == 0) {
		lengthreverse += 1
	}
	var nodes = document.getElementById("list");
	while (nodes.firstChild) {
  nodes.removeChild(nodes.firstChild);
	};

});

var alphareverse = 2;
document.getElementById("alpha").addEventListener('click', function() {

	var data = JSON.parse(xhr.responseText);

	document.getElementById('length').style.backgroundColor = "white";
	document.getElementById('alpha').style.backgroundColor = "rgb(73, 181, 221)";
	document.getElementById('number').style.backgroundColor = "white";

	if (alphareverse % 2 == 0) {
		alphareverse += 1;
		console.log('alpha reversed')

		var nodes = document.getElementById("list");
		while (nodes.firstChild) {
	  nodes.removeChild(nodes.firstChild);
	  }

		data.object_data.sort();
		data.object_data.reverse();

		function createList(array) {
			var myList = document.createElement('section');

			for (var n = 0; n < array.length; n++) {
				var number = document.createElement('div');
				number.appendChild(document.createTextNode(array[n]));
				myList.appendChild(number);
			}
			return myList;
		}
		document.getElementById('list').appendChild(createList(data.object_data));
	}
	else if (alphareverse % 2 == 1){
		alphareverse += 1;
		console.log('alpha not reversed')

		var nodes = document.getElementById("list");
		while (nodes.firstChild) {
	  nodes.removeChild(nodes.firstChild);
	  }

		data.object_data.sort();

		function createList(array) {
			var myList = document.createElement('section');

			for (var n = 0; n < array.length; n++) {
				var number = document.createElement('div');
				number.appendChild(document.createTextNode(array[n]));
				myList.appendChild(number);
			}
			return myList;
		}
		document.getElementById('list').appendChild(createList(data.object_data));
	}

});

document.getElementById("number").addEventListener('click', function() {

	var data = JSON.parse(xhr.responseText);

	document.getElementById('length').style.backgroundColor = "white";
	document.getElementById('alpha').style.backgroundColor = "white";
	document.getElementById('number').style.backgroundColor = "rgb(73, 181, 221)";

	var nodes = document.getElementById("list");
	while (nodes.firstChild) {
  nodes.removeChild(nodes.firstChild);
  }

});

xhr.open('GET', "/api/call2");
xhr.send();
