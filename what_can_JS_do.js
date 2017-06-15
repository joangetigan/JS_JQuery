function hide_test(){
	document.getElementById('test').style.display = "none";
}
function show_test(){
	document.getElementById('test').style.display = "block";
}
function change_text(){
	document.getElementById('test').innerHTML = "Hello world";
}

function hello(){
	document.getElementById('text').innerHTML = 'Hello'
	document.getElementById('hello').style.display = 'none'
	document.getElementById('world').style.display = 'block'
}
function world(){
	document.getElementById('text').innerHTML = 'World'
	document.getElementById('world').style.display = 'none'
	document.getElementById('hello').style.display = 'block'
}

function height(){
	document.getElementById('dogs').height = 100
}
function image(){
	document.getElementById('dogs').src = "logo.png"
}

function change(){
	document.getElementById('style').style.color = "blue"
}

function hover(){
	document.getElementById('style').style.color = "blue"
}
function leave(){
	document.getElementById('style').style.color = "black"
}

function get_sum(){
	var n1 = document.getElementById('n1').value
	var n2 = document.getElementById('n2').value
	var int_n1 = parseInt(n1)
	var int_n2 = parseInt(n2)
	document.getElementById('as_string').innerHTML = n1 + n2
	document.getElementById('as_int').innerHTML = int_n1 + int_n2
}