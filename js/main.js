jQuery(document).ready(function($){

  console.log($('body').css('display'));

  console.log('Document Ready');

  $('body').fadeIn(1000);

  console.log($('body').css('display'));

  var $lateral_menu_trigger = $('#menu-trigger'),
      $content_wrapper = $('.main-content'),
      $navigation = $('header');

  //open-close lateral menu clicking on the menu icon
  $lateral_menu_trigger.on('click', function(event){
    event.preventDefault();
    $lateral_menu_trigger.toggleClass('is-clicked');
    $navigation.toggleClass('lateral-menu-is-open');
    $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      $('body').toggleClass('overflow-hidden');
    });
    $('#lateral-nav').toggleClass('lateral-menu-is-open');
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

  $('.menu li').children('a').on('click', function(event){
    if( $(event.target).hasClass('work') ) {
      // event.preventDefault();
      if ($(this).hasClass('submenu-open')) {
        event.preventDefault();
        $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200, 'swing');
      } else {
        event.preventDefault();
        $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200, 'swing');
      }
    } else if( !$(event.target).hasClass('work') && $('.work').hasClass('submenu-open')) {
      if( !$(event.target).hasClass('sub-link')) {
        $('.work').toggleClass('submenu-open').next('.sub-menu').slideToggle(200, 'swing');
      }
    }
  });

});
