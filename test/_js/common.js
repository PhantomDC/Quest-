$(document).ready(function(){

	var r = ".rating";
	var ri = " .rating__item";

	$(".rating__item").on("hover",function(){
		var index = $(this).index();
		active_items(index);

	});

	$(".rating").on("mouseleave",function(){
		unhover();
		
	});

	$(".rating__item").on("click",function(){
		var mark = $(this).index();

		localStorage.setItem("score",mark);

	})

});

var active_items = function(index){


	if(index === undefined){
		index = localStorage.getItem("score");
	}

	$(".rating__item_active").removeClass("rating__item_active");

	for(var i = 0; i <= index; i++){

		$(".rating .rating__item:eq("+i+")").addClass("rating__item_active");

	}

}

var unhover = function(){
	var checkScore = localStorage.getItem("score");

	if(!checkScore){
		$(".rating__item").removeClass("rating__item_active");
	}
	else{
		active_items();
	}
}