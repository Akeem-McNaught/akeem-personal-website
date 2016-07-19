$(document).ready(function(){
 	
 	$("#show,#show1").hide();

	$("#akeem").mouseleave(function(){
					$("#akeem").transition({scale:1,delay:250});
		});
	$("#akeem").mouseenter(function(){
				$("#akeem").transition({scale:0,delay:500});
		$("#show,#show1").show();
	});
});

