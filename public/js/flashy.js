$(document).ready(function(){

	$("#home").transition({transform:'scale(0.8)'});

	$("#resume").mouseleave(function(){
					$("#akeem").transition({x:0});
						$("#resume").transition({transform:'scale(1)'});
			
		});
	$("#resume").mouseenter(function(){
				$("#akeem").transition({x:140,delay:0});
					$("#resume").transition({transform:'scale(0.5)'});
			
	});

	$("#contact").mouseleave(function(){
					$("#akeem").transition({x:0});
						$("#contact").transition({transform:'scale(1)'});
		});
	$("#contact").mouseenter(function(){
				$("#akeem").transition({x:-140,delay:0});
					$("#contact").transition({transform:'scale(0.5)'});
	});

	$("#home").mouseleave(function(){
						$("#home").transition({transform:'scale(0.8)'});
		});
	$("#home").mouseenter(function(){
					$("#home").transition({transform:'scale(0.5)'});

});
});

