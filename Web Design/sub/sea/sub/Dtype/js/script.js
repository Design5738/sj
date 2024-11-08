//메뉴
$(function(){
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });
});

//슬라이드
$(function(){
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginTop:-400*currentIndex+"px"});

        if(currentIndex == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginTop:0}, 0);
                currentIndex = 0;
            });
            
        }
    }, 3000);
});

//탭메뉴
$(function(){
    let tabBtn = $(".info-menu > a");
    let tabCont = $(".info-cont > div");
    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
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