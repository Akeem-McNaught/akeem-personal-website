$(document).ready(function(){

	$("#akeem").fadeTo('slow',.25);
	$("#akeem").mouseleave(function(){
		$("#akeem").fadeTo('slow',.25);
		});
	$("#akeem").mouseenter(function(){
		$("#akeem").fadeTo('fast',1.00);
	});
});

