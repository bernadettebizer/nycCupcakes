$(document).ready(
	function(){
		$(".clicker1").hide()
		$(".clicker2").hide()
		$(".clicker3").hide()
	}
);

var action1=1

$("#image1").on("click", function(){
	if(action1===1){
		$(".clicker1").slideDown(1000)
		action1=2
	}
	else {
		$(".clicker1").slideUp(1000)
		action1=1
	}
});

var action2=1

$("#image2").on("click", function(){
	if(action2===1){
		$(".clicker2").slideDown(1000)
		action2=2
	}
	else {
		$(".clicker2").slideUp(1000)
		action2=1
	}
});

var action3=1

$("#image3").on("click", function(){
	if(action3===1){
		$(".clicker3").slideDown(1000)
		action3=2
	}
	else {
		$(".clicker3").slideUp(1000)
		action3=1
	}
});

