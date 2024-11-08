//메뉴
$(function(){
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(600);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(100);
    });
});


//슬라이드
$(function(){
    let currentIndex = 0;

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 3;
        $(".slider").eq(currentIndex).fadeOut();
        $(".slider").eq(nextIndex).fadeIn();
        currentIndex = nextIndex;
    }, 3000);
});

//탭메뉴
$(function(){
    const tabBtn = $(".info-menu > a");     //탭 버튼 설정
    const tabCont = $(".info-cont > div");  //탭 콘텐츠 설정
    tabCont.hide().eq(0).show();        //탭 콘텐츠를 숨기고 첫 번째 콘텐츠만 보여줌
    
    tabBtn.click(function(){      //버튼을 클릭하면
        const index = $(this).index();      //클릭한 버튼의 번호를 저장
    
        $(this).addClass("active").siblings().removeClass("active");    //클릭한 버튼에 클래스를 추가하고 나머지는 제거함
        tabCont.eq(index).show().siblings().hide();             //클릭한 버튼 순서에 맞는 콘텐츠에 클래스를 추가하고 나머지는 숨김
    });
});

//팝업
$(function(){
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });
});