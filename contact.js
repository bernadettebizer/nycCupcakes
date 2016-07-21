

$(document).ready(
	function(){
		$(".contact_column1").hide()
		$(".contact_column2").hide()
	}
);

$("body").on("click", function(){
	$(".contact_column2").fadeIn(1000)
	$(".contact_column1").slideDown(1000)
	$("#contact_click").hide()
});