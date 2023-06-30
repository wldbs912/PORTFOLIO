$(function(){
    // 인터파크
    $("#interpark_box").mouseenter(function(){
        $("#interpark > li").stop().animate({marginTop:"-1080px"},2500)
    }).mouseleave(function(){
        $("#interpark > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // shoopen
    $("#shoopen_box").mouseenter(function(){
        $("#shoopen > li").stop().animate({marginTop:"-1670px"},4000)
    }).mouseleave(function(){
        $("#shoopen > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // exhibiz
    $("#exhibiz_box").mouseenter(function(){
        $("#exhibiz > li").stop().animate({marginTop:"-3170px"},5000)
    }).mouseleave(function(){
        $("#exhibiz > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // banchan
    $("#banchan_box").mouseenter(function(){
        $("#banchan > li").stop().animate({marginTop:"-2458px"},4000)
    }).mouseleave(function(){
        $("#banchan > li").stop().animate({marginTop:"0px"},3000)
    })
})