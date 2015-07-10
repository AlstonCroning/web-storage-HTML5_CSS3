
function bringit(){
	var list = document.querySelectorAll('#first');
	list[1].onclick=say;//single query selects here
/*	
	//all of them selected of the same id name "first"
	for(var i=0; i < list.length; i++){
		list[i].onclick=say;
	}
*/
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