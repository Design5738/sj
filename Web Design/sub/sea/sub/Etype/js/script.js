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
        $(".sliderWrap").animate({marginLeft: -100 * currentIndex+"%"}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft: 0}, 0);
                currentIndex = 0;
            }, 600);
        }
    }, 3000);
});

//탭메뉴
$(function(){
    const tabBtn = $(".info-menu > a");
    const tabCont = $(".info-cont > div");
    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });
    
});

