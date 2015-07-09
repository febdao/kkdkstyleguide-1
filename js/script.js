( function ( $ ) {
  $(document).ready(function(){
    $(".show-code").click(function(){
      $(this).next(".component--source").toggleClass("element-invisible");
    });
    $(".hide-code").click(function(){
      $(this).parent(".component--source").addClass("element-invisible");
      $('html, body').animate({
        scrollTop: $(this).parents(".component--item").offset().top
      }, 500);
    });

    $( ".accordion" ).accordion({
      heightStyle: "content",
      collapsible: true
    });
    
    $(".filter .form-select").chosen({
      width: '100%',
    });
    var offset = $(".sticky-header").offset();
    var width_table = $(".sticky-header").width();
    var height_table = $(".sticky-enabled").height();
    var min_sticky = offset.top;
    var max_sticky = offset.top + height_table;
    var offset_left = offset.left;
    $(window).scroll(function(){
      var scroll_top = $(document).scrollTop();
      if(scroll_top >= min_sticky &&  scroll_top <= max_sticky){
        $('.sticky-header').css({"visibility": "visible", "position": "fixed", "left": offset_left, "width": width_table, "top": "0" });
      }
      else {
        $('.sticky-header').css("visibility","hidden");
      }
    });


    // Js slider
    $('.flexslider').flexslider({
      animation: "slide",
      pausePlay: true, //Boolean: Create pause/play dynamic element
      pauseText: 'Pause', //String: Set the text for the "pause" pausePlay item
      playText: 'Play',
    });
    $(".flex-control-paging,.flex-pauseplay").wrapAll("<div class='controls-nav'></div>");
    $(".flex-pauseplay").next().remove();
    $(".flex-pauseplay").next().remove();

    // Js tabs

    $(".horizontal-tabs .horizontal-tab-button").click(function(index){
      var tab_index = $(this).index();
      $(".horizontal-tabs-processed .horizontal-tabs-pane").addClass('horizontal-tab-hidden');
      $(".horizontal-tabs .horizontal-tab-button").removeClass('selected');
      $(this).addClass( "selected" );
      $(".horizontal-tabs-processed .horizontal-tabs-pane").eq( tab_index ).removeClass( "horizontal-tab-hidden" );
      return false;
    });

    $('.list-local-content__wrap').matchHeight();

    //List components
    $(".component--list--item a").click(function(){
      $(".component--list--item a").removeClass("active");
      $(this).addClass("active");
    });
    $(".show-list").click(function(){
      $(".component--list").addClass("active");
      $(".show-list").hide();
      $(".hide-list").addClass("active").show();
    });
    $(".hide-list").click(function(){
      $(".component--list").removeClass("active");
      $(".hide-list").removeClass("active").hide();
      $(".show-list").show();
    });
  });
} )( jQuery );
