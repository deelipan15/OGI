$(document).ready(function(){ 
// change of styles while reaching navbar    
  var scroll_start = 0;
  var fromtop = 50;
  function headernavigation() { 
    scroll_start = $(this).scrollTop();
    if(scroll_start > $('.about_us').offset().top-fromtop) {
      $('.header_navigation').addClass('styles_change');
    } else {
      $('.header_navigation').removeClass('styles_change');
    }
    
    // fading out
    var fade = $(this).scrollTop();
   $('.fadeout_black').css({ 'opacity' : (fade/690 - 0) });
  }

  $(window).on('scroll resize', headernavigation);

// navigation responsive bar control
  $('.navigation_control').click(function(){
    $(this).parent('.header_navigation').toggleClass('navbar_opened');
  });

// carousel
  setInterval(function(){
    $(".carousel ul").animate({marginLeft:'-100%'},1000,function(){
      $(this).find("li:last").after($(this).find("li:first"));
      $(this).css({marginLeft:'0%'});
    })
  },5000);

// carousel controls
  $('.next').click(function() {
      $(".carousel ul").animate({marginRight:'100%',opacity:'0.5'},300,function(){
      $(this).find("li:last").after($(this).find("li:first"));
      $(this).css({marginLeft:'0%',opacity:'1'});
    })
  });
  $('.prev').click(function() {
      $(".carousel ul").animate({marginRight:'-100%',opacity:'0.5'},300,function(){
      $(this).find("li:first").before($(this).find("li:last"));
      $(this).css({marginRight:'0%',opacity:'1'});
    })
  });

// animation
  var animation_elements = $('.animation_slideup');

  function check_visible() {
    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each(animation_elements, function() {
      var element = $(this);
      var element_height = element.outerHeight();
      var element_top_position = element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        element.addClass('slideup');
      }
    });
  }
  $(window).on('scroll resize', check_visible);

// scroll to id
  $('a').on('click', function(e) {
    var target = $(this.getAttribute('href'));
    if( target.length !="") {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top-fromtop
        }, 500);
    }
  });

// Timeline change
  $('.timeline_lists ul li a').click(function(){
    $(this).parent('li').addClass('active').siblings().removeClass('active');
  });
  $('.started a').click(function(){
    $('.timeline_details').hide();
    $('.started_details').show();
  });
  $('.important_date_one a').click(function(){
    $('.timeline_details').hide();
    $('.date_one_details').show();
  });
  $('.important_date_two a').click(function(){
    $('.timeline_details').hide();
    $('.date_two_details').show();
  });
  $('.current_time a').click(function(){
    $('.timeline_details').hide();
    $('.current_details').show();
  });

// Contact input changes
  $('.inputname').click(function(){
    $(this).attr('placeholder','');
    $('.name').css('display','block');
    $('.bordername').addClass('bordertransform');
  });
  $('.inputemail').click(function(){
    $(this).attr('placeholder','');
    $('.email').css('display','block');
    $('.bordermail').addClass('bordertransform');
  });
  $('.inputmessage').click(function(){
    $(this).attr('placeholder','');
    $('.message').css('display','block');
    $('.bordermessage').addClass('bordertransform');
  });
  $(window).click(function(a){
    var inputnamevalue= $('.inputname').val();
    var inputemailvalue= $('.inputemail').val();
    var inputmessagevalue= $('.inputmessage').val();
    if(a.target.className != 'inputname' && inputnamevalue == ''){
      $('.inputname').attr('placeholder','Name');
      $('.name').css('display','none');
      $('.bordername').removeClass('bordertransform');
    }
    if(a.target.className != 'inputemail' && inputemailvalue == ''){
      $('.inputemail').attr('placeholder','Email');
      $('.email').css('display','none');
      $('.bordermail').removeClass('bordertransform');
    }
    if(a.target.className != 'inputmessage' && inputmessagevalue == ''){
      $('.inputmessage').attr('placeholder','Message');
      $('.message').css('display','none');
      $('.bordermessage').removeClass('bordertransform');
    }
  });
});