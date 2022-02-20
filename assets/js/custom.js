

$(function () {
   
    $(".sidebar .down").click(function(){
        $(this).parent().toggleClass("open");
        $(this).parent().siblings().removeClass("open");
    });
    $(".nav-toggle").click(function(){
        $("body").toggleClass("sidebar-collapsed");
    });
    $(".list-expand-yk .item .head").click(function(){
    	$(this).parents(".item").toggleClass("active");
    });
 });