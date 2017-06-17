// JavaScript Document
$(document).ready(function(){
	$('.navbar').find('li').each(function(i,elem){
		$(elem).click(function(){
			$('.navbar').find('li').removeClass();
			$(this).attr('class','inner');	
		});	
	});	
	
	
	
});