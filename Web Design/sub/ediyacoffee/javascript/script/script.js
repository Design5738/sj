$(function(){
/*메인 이미지 슬라이드*/
	$("#mainimg>div:first").show();
	setInterval(function(){
		$("#mainimg>div:first")
			.fadeOut(1000)
			.next("div")
			.fadeIn(1000)
			.end("div")  /*제일 마지막에 변한 아이(
				두번째 div)의 
				앞에 있는 아이(첫번째 div)
				1. first 가 서시히 사라짐
				2. 두번째 div가 서서히 나타남
				*/
			.appendTo("#mainimg");	
	},3000);
});