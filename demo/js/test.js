var flag = true //定义一个开关
	$("#list-star a").click(function(){
		  	
	var index_c = $(this).text()	
	for (var i = 0;i < index_c ;i++) {
		$(this).eq(i).css("background-position","0px -1px")
	}
		flag = false
	})
	$("#list-star a").mouseenter(function(){
		if(flag){			
		var index_c = $(this).text()
		$("#list-star a").css("background-position","0px -21px")
		for (var i = 0;i < index_c ;i++) {
		
			$("#list-star a").eq(i).css("background-position","0px -1px")
		}	
		}
	})
	


	