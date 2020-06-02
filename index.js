$(function(){
  $(".main").ripples({
    dropRadius: 20,
    perturbance: 0,
    resolution: 240,
  });

  $(".top").hide().fadeIn(1500);

  var location = $(".profile").offset().top;
  var location2 = $(".app").offset().top;
  var location3 = $(".contact").offset().top;
  
  var css = {
    'font-weight':'bold',
    'font-size':'20px',
    "border-bottom":"2px solid black",
    "padding":"0 0 5px 20px"
  }
  var cssReset = {
    'font-weight':'',
    'font-size':'',
    "border-bottom":"",
    "padding":""
  }



  $(window).scroll(function(){
    var wintop = $(window).scrollTop();
    if (wintop >= location){
      $(".showbtns").fadeIn("slow");
      $('.profscroll').css(css);
      $(".contactscroll").css(cssReset);
      $(".appscroll").css(cssReset);
    } else {
      $(".showbtns").fadeOut("slow");
      $('.profscroll').css(cssReset);
      $(".contactscroll").css(cssReset);
      $(".appscroll").css(cssReset);
    }
    if (wintop >= location2){
      $('.appscroll').css(css);
      $(".profscroll").css(cssReset);
      $(".contactscroll").css(cssReset);
    }
    if (wintop >= location3){
      $('.contactscroll').css(css);
      $(".profscroll").css(cssReset);
      $(".appscroll").css(cssReset);
    }
  });

  $(".profilebtn").on("click", function(){
    $('html, body').animate({scrollTop:location});
  });

  $(".appbtn").on("click", function(){
    $("html, body").animate({scrollTop:location2});
  });

  $(".contactbtn").on("click", function(){
    $("html, body").animate({scrollTop:location3});
  });

  $(".profscroll").on("click", function(){
    $('html, body').animate({scrollTop:location});
  });

  $(".appscroll").on("click", function(){
    $("html, body").animate({scrollTop:location2});
  })

  $(".contactscroll").on("click", function(){
    $("html, body").animate({scrollTop:location3});
  })

  $(".topscroll").on("click", function(){
    $("html, body").animate({scrollTop:0});
  })

});