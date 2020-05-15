$(".aprt-color").each(function(){
  if($(this).css("background-color") === "rgb(255, 255, 255)" || $(this).css("background-color") === "rgb(255, 138, 128)"){
    $(this).parent("li").parent("ul").next().remove();
  }
  if($(this).css("background-color") === "rgb(255, 255, 141)"){
    $(this).parent("li").parent("ul").parent(".top-line").parent(".aprt-box").find("#status").html("Забронировано");
  } else if ($(this).css("background-color") === "rgb(204, 255, 144)") {
    $(this).parent("li").parent("ul").parent(".top-line").parent(".aprt-box").find("#status").html("Свободно");
  }
});

$(".top-line .material-icons").click(function(){
  $(this).parent().next().slideToggle();
  if (!$(this).hasClass('arr-rotate') && !$(this).hasClass('arr-unrotate')) {
    $(this).addClass('arr-rotate');
    $(this).parent(".top-line").css("max-height", $(this).prev().innerHeight());
  } else if ($(this).hasClass('arr-unrotate')) {
    $(this).removeClass('arr-unrotate').addClass("arr-rotate");
    $(this).parent(".top-line").css("max-height", $(this).prev().innerHeight());
  } else {
    $(this).removeClass('arr-rotate').addClass("arr-unrotate");
    $(this).parent(".top-line").removeAttr("style");
  }
  return false;
});
