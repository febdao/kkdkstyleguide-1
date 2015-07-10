function getInternetExplorerVersion()
  // Returns the version of Internet Explorer or a -1
  // (indicating the use of another browser).
  {
    var rv = -1; // Default value assumes failure.
    var ua = navigator.userAgent;

    // If user agent string contains "MSIE x.y", assume
    // Internet Explorer and use "x.y" to determine the
    // version.

    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
    return rv;

  }
( function ( $ ) {
  $(document).ready(function(){
    var menu_section = $('.sec-menu .sec-inner');
    var main_menu = $('#main-menu', menu_section);
    var ie_version = getInternetExplorerVersion();

    if (main_menu.length) {
      menu_section.prepend('<div id="main-menu-trigger" class="mobile-trigger menu-main-trigger ic-list"></div>');
    }

    $('.mobile-trigger', menu_section).click(function(){
       var active_elm_id = this.id.slice(0, -8);
       if (active_elm_id == 'main-menu') {
         main_menu.toggleClass('active');
       }

       $('.mobile-trigger').not($(this)).removeClass('active');
       $(this).toggleClass('active');

       if (ie_version != -1) {
          // IE8: ui does not repaint when css class changes
          setTimeout(function(){document.getElementsByTagName('body')[0].className+='';},200);
       }
     });

    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
      ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
      if( $(this).scrollTop() > offset_opacity ) {
        $back_to_top.addClass('cd-fade-out');
      }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
      event.preventDefault();
      $('body,html').animate({
        scrollTop: 0 ,
        }, scroll_top_duration
      );
    });

  });
} )( jQuery );
