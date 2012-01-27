
  /* GOT TO TOP */

$(function(){
  $.fn.scrollToTop=function(){
    $(this).hide();

    if($(window).scrollTop()!="0"){
      $(this).fadeIn("slow");
    }

    var scrollDiv=$(this);

    $(window).scroll(function(){
      if($(window).scrollTop()=="0"){
        $(scrollDiv).fadeOut("slow");
      }else{
        $(scrollDiv).fadeIn("slow");
      }
    });

    $(this).click(function(){
      $("html, body").animate({scrollTop:0}, "slow");
      return false;
    });
  }
});

$(function() {
  $("#toTop").scrollToTop();
});

/*function calc_marginizq(){
  var marginizqact = $('#pics ul').css('margin-left');
  marginizqact = marginizqact.split('px');
  marginizqact = marginizqact[0];
  marginizqact = Math.ceil(marginizqact);
  return marginizqact;
}*/

$(document).ready(function(){

  $(".scroll").click(function(event){

    //get the full url - like mysitecom/index.htm#home
    var full_url = this.href;

    //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
    var parts = full_url.split("#");
    var trgt = parts[1];

    //get the top offset of the target anchor
    var target_top = $("#"+trgt).offset().top;

    //goto that anchor by setting the body scroll top to anchor top
    $('html, body').animate({scrollTop:target_top+40}, 400);
    $('html, body').animate({scrollTop:target_top-40}, 500);
    //prevent the default action for the click event // event.preventDefault
    return false;
  });

  /* MENU ACTIVE */

/*  $("#header .menu li a").click(function () {
    $('#header .menu li a').removeClass('active');
    $(this).addClass('active');
   // Cufon.replace('.menu.cufon', {
    //  color: '#fff'
    //});
  });*/

  /* PICS */
/*
  var ancho_pantalla = $(window).width();
  var margenizq = 938 - ((ancho_pantalla - 938) / 2);

  $('#pics ul').css('margin-left', '-'+margenizq+'px');

  $(".btpic").click(function () {

    var marginizqact = calc_marginizq();
    var button = $(this).attr('dir');
    var active = parseInt($(this).text());
    var numerolis = $("#pics ul li").size();
    //alert(active+' - '+numerolis);

    $('#pics li img').css('opacity', 0.5);

    if(button == 'next'){
      active = active+1;
      $('#pics ul').animate({
        marginLeft: marginizqact-938+'px'
        }, 500, function() {
        // Animation complete.
        $('#pics li#pic_'+active).find('img').animate({
          opacity: 1
        }, 300);
      });
    }else if(button == 'prev'){
      active = active-1;
      $('#pics ul').animate({
        marginLeft: marginizqact+938+'px'
        }, 500, function() {
        // Animation complete.
        $('#pics li#pic_'+active).find('img').animate({
          opacity: 1
        }, 300);
      });
    }

    if(active==1){
      $(".btpic.prev_pic").hide();
    }else if(active==numerolis){
      $(".btpic.next_pic").hide();
    }else{
      $(".btpic").show();
    }

    $(".btpic").html(""+parseInt(active)+"");

  });
*/


});

