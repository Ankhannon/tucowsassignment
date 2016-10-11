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
		lengthreverse += 1;

		var nodes = document.getElementById("list");
		while (nodes.firstChild) {
	  nodes.removeChild(nodes.firstChild);
		};

		data.object_data.sort(function(a, b){
			return b.length - a.length;
		});
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
	else if (lengthreverse % 2 == 1) {
		lengthreverse += 1;

		var nodes = document.getElementById("list");
		while (nodes.firstChild) {
	  nodes.removeChild(nodes.firstChild);
		};

		data.object_data.sort(function(a, b){
			return b.length - a.length;
		});

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

var alphareverse = 2;
document.getElementById("alpha").addEventListener('click', function() {

	var data = JSON.parse(xhr.responseText);

	document.getElementById('length').style.backgroundColor = "white";
	document.getElementById('alpha').style.backgroundColor = "rgb(73, 181, 221)";
	document.getElementById('number').style.backgroundColor = "white";

	if (alphareverse % 2 == 0) {
		alphareverse += 1;

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

var numberreverse = 2;
document.getElementById("number").addEventListener('click', function() {

	var data = JSON.parse(xhr.responseText);

	document.getElementById('length').style.backgroundColor = "white";
	document.getElementById('alpha').style.backgroundColor = "white";
	document.getElementById('number').style.backgroundColor = "rgb(73, 181, 221)";

	var array = [];
	for (var i = 0; i < data.object_data.length; i++) {
		if (data.object_data[i] == "one") {
			array.push("a")
		}
		if (data.object_data[i] == "two") {
			array.push("b")
		}
		if (data.object_data[i] == "three") {
			array.push("c")
		}
		if (data.object_data[i] == "four") {
			array.push("d")
		}
		if (data.object_data[i] == "five") {
			array.push("e")
		}
		if (data.object_data[i] == "six") {
			array.push("f")
		}
		if (data.object_data[i] == "seven") {
			array.push("g")
		}
		if (data.object_data[i] == "eight") {
			array.push("h")
		}
		if (data.object_data[i] == "nine") {
			array.push("i")
		}
		if (data.object_data[i] == "ten") {
			array.push("j")
		}
	}

	if (numberreverse % 2 == 0) {
		numberreverse += 1;

		var nodes = document.getElementById("list");
		while (nodes.firstChild) {
	  nodes.removeChild(nodes.firstChild);
	  };

		array.sort();
		array.reverse();
		console.log(array);

		var newarray = [];
		for (var i = 0; i < array.length; i++) {
			if (array[i] == "a") {
				newarray.push("one")
			}
			if (array[i] == "b") {
				newarray.push("two")
			}
			if (array[i] == "c") {
				newarray.push("three")
			}
			if (array[i] == "d") {
				newarray.push("four")
			}
			if (array[i] == "e") {
				newarray.push("five")
			}
			if (array[i] == "f") {
				newarray.push("six")
			}
			if (array[i] == "g") {
				newarray.push("seven")
			}
			if (array[i] == "h") {
				newarray.push("eight")
			}
			if (array[i] == "i") {
				newarray.push("nine")
			}
			if (array[i] == "j") {
				newarray.push("ten")
			}
		}
		function createList(array) {
			var myList = document.createElement('section');

			for (var n = 0; n < array.length; n++) {
				var number = document.createElement('div');
				number.appendChild(document.createTextNode(array[n]));
				myList.appendChild(number);
			}
			return myList;
		}
		document.getElementById('list').appendChild(createList(newarray));

	}
	else if (numberreverse % 2 == 1) {
		numberreverse += 1;

		var nodes = document.getElementById("list");
		while (nodes.firstChild) {
	  nodes.removeChild(nodes.firstChild);
	  };

		array.sort();
		console.log(array);

		var newarray = [];
		for (var i = 0; i < array.length; i++) {
			if (array[i] == "a") {
				newarray.push("one")
			}
			if (array[i] == "b") {
				newarray.push("two")
			}
			if (array[i] == "c") {
				newarray.push("three")
			}
			if (array[i] == "d") {
				newarray.push("four")
			}
			if (array[i] == "e") {
				newarray.push("five")
			}
			if (array[i] == "f") {
				newarray.push("six")
			}
			if (array[i] == "g") {
				newarray.push("seven")
			}
			if (array[i] == "h") {
				newarray.push("eight")
			}
			if (array[i] == "i") {
				newarray.push("nine")
			}
			if (array[i] == "j") {
				newarray.push("ten")
			}
		}
		function createList(array) {
			var myList = document.createElement('section');

			for (var n = 0; n < array.length; n++) {
				var number = document.createElement('div');
				number.appendChild(document.createTextNode(array[n]));
				myList.appendChild(number);
			}
			return myList;
		}
		document.getElementById('list').appendChild(createList(newarray));

	}

});

xhr.open('GET', "/api/call2");
xhr.send();
