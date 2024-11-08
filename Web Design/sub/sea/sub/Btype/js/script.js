$(function(){
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul").stop().slideDown();
        $("#header .container").addClass("on");
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().slideUp();
        $("#header .container").removeClass("on");
    });
});

//슬라이드
$(function(){
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginLeft: -1200 * currentIndex + "px"});

        if(currentIndex == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft:0}, 0);                
                currentIndex = 0;
            });
        }
    }, 3000);
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


