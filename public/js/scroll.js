
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
  /* UPDATE PRICE */
/*
  var precio_actual = 27;
  $('#totalprice').html(precio_actual);

  $("#update").click(function(){
    var unidades = $("#funits").val();
    var precio_actualizado = precio_actual * unidades;
    $('#totalprice').html(precio_actualizado);
    $('#amount').val(precio_actualizado);
    $('#item_number, #fnumero').val(unidades);

    var precio_original_actualizado = precio_original * unidades;
    $('#originalprice').html(precio_original_actualizado);
  });

  $("#sell1, #sell2").click(function () {
    var precioradio = $(this).val();
    if($(this).hasClass('printed')){
      $('#item_number, #fnumero').val($('#funits').val());
      if($('#funits').val()!=1){
        precioradio = $('#totalprice').text();
      }
      $('#totalprice').html(precioradio);
      $('#formubook li.two.checkbox').css('display', 'block');
      $('#fgastosenvio').val('');
    }else if($(this).hasClass('digital')){
      $('#item_number, #fnumero').val('1');
      $('#formubook li.two.checkbox').css('display', 'none');
      $('#fgastosenvio').val('0');
    }
    $('#amount').val(precioradio);
  });

  $("#fshipping1, #fshipping2").click(function () {
    var precioradio = $(this).val();
    $('#fgastosenvio').val(precioradio);
  });
*/
  /* QUESTIONS */
/*
  $('#open_questions').click(function(e) {
    $('#box_questions').fadeIn('fast');
  });

  $('#box_questions .close').click(function (e) {
    $('#box_questions').fadeOut('normal');
  });
*/
  /* AJAX ENVIO */

 /* $("#formubook").submit(function(){
    if(validacampos()){
      var str = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "mailorderbook.php",
        data: str,
          beforeSend: function(objeto){
        $('#note').html("<img src='http://www.awwwards.com/images/loading3.gif' alt='Loading...'/>");
        },
        success: function(msg){
          $("#note").ajaxComplete(function(event, request, settings){
            if(msg != ''){
              // gastos de envio
              var precio = $('#amount').val();
              var envio = $('#fgastosenvio').val();
              var amount = (parseFloat(precio) + parseFloat(envio));
              $('#amount').val(amount);
              // submit
              $("#paypalbook").submit();
            } else {
              $('#note').html("All fields required");
            }

          });
        }
      });
    }

    return false;

  });*/

});

/* VALIDATE */

function validacampos(){

  var correct = true;

  if ($("#fname").val() == ""){
    correct = false;
    $('#note').html("First Name field required");
  }else if ($("#flastname").val() == ""){
    correct = false;
    $('#note').html("Last Name field required");
  }else if ($("#femail").val() == ""){
    correct = false;
    $('#note').html("Email field required");
  }else if ($("#faddress").val() == ""){
    correct = false;
    $('#note').html("Street Address field required");
  }else if ($("#fcity").val() == ""){
    correct = false;
    $('#note').html("City field required");
  }else if ($("#fcp").val() == ""){
    correct = false;
    $('#note').html("Zip / Postal Code field required");
  }else if ($("#fcountry").val() == ""){
    correct = false;
    $('#note').html("Country field required");
  }else if ($("#fgastosenvio").val() == ""){
    correct = false;
    $('#note').html("Shipping Zone field required");
  }

  return correct;
}

if (!$.browser.msie) {

  // CUFON

/*  Cufon.replace('.cufon', {
    hover: {
      color: '#DF6124'
    }
  });*/

}

