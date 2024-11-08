$(function(){
    $(".img > div:first").show();
    setInterval(function(){
        $(".img > div:first")
           .fadeOut(1000)
           .next("div")
           .fadeIn(1000)
           .end("div")
           .appendTo(".img");
    }, 3000);
});