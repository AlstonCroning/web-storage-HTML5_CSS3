
function bringit(){
	document.querySelector('#first').onclick=say;
}

function say(){
	alert('you clicked something!');
}

window.onload=bringit;//when the page loads

/*
//using query selector
	function bringit(){
		document.querySelector('#first').onclick=say;
	}

	function say(){
		alert('you clicked something!');
	}

	window.onload=bringit;//when the page loads
*/