jQuery(document).ready(function($){
  var $lateral_menu_trigger = $('#menu-trigger'),
    $content_wrapper = $('.main-content'),
    $navigation = $('header');

  //open-close lateral menu clicking on the menu icon
  $lateral_menu_trigger.on('click', function(event){
    event.preventDefault();

    $lateral_menu_trigger.toggleClass('is-clicked');
    $navigation.toggleClass('lateral-menu-is-open');
    $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
      $('body').toggleClass('overflow-hidden');
    });

    $('#lateral-nav').toggleClass('lateral-menu-is-open');

    // if( $('.main-content').css('transform') != 'none') {
    //   if( !$('.main-content').hasClass('lateral-menu-is-open')) {
    //     $('.main-content').css('transform', 'translateX(0px)');
    //   }
    //   else {
    //     $('.main-content').css('transform', 'translateX(260px)');
    //   }
    // }

    $('.slideshow').toggleClass('slideshow-active');

    //check if submenu is open
    if($('#workLink').hasClass('submenu-open')) {
      $('#workLink').removeClass('submenu-open').next('.sub-menu').delay(1200).slideUp(200);
    }
    //check if transitions are not supported - i.e. in IE9
    if($('html').hasClass('no-csstransitions')) {
      $('body').toggleClass('overflow-hidden');
    }
  });


  //close lateral menu clicking outside the menu itself
  // $content_wrapper.on('click', function(event){
  //   if( !$(event.target).is('#menu-trigger, #menu-trigger span') ) {
  //     $lateral_menu_trigger.removeClass('is-clicked');
  //     $navigation.removeClass('lateral-menu-is-open');
  //     $content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
  //       $('body').removeClass('overflow-hidden');
  //     });
  //     $('#lateral-nav').removeClass('lateral-menu-is-open');
  //     //check if submenu is open
  //     if($('#workLink').hasClass('submenu-open')) {
  //       $('#workLink').removeClass('submenu-open').next('.sub-menu').delay(1200).slideUp(200);
  //     }
  //     //check if transitions are not supported
  //     if($('html').hasClass('no-csstransitions')) {
  //       $('body').removeClass('overflow-hidden');
  //     }
  //   }
  // });

  //open (or close) submenu items in the lateral menu. Close all the other open submenu items.
  $('#workLink').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle('300', 'easeInOutCubic');
  });

  $('.item-no-children').children('a').on('click', function(event) {
    if( $('#workLink').hasClass('submenu-open')) {
      $('#workLink').toggleClass('submenu-open').next('.sub-menu').slideToggle('300', 'easeInOutCubic');
    }
  });

});
