

$(function () {
   
    $(".nav-toggle").click(function(){
        $(".sidebar-menus").toggleClass("open");
        $(".overlay-common").addClass("show");
    });
    $(".overlay-common").click(function(){
        $(".sidebar-menus").removeClass("open");
        $(".overlay-common").removeClass("show");
    });
 });