(function($) {
  $(document).ready(function() {
    //Active for main menu
    var pageType = $(".pagetype").data("page");
    $("."+pageType).addClass("active");

    //Show/hide code
    $(".show-code").click(function() {
      $(this).next(".component--source").toggleClass("element-invisible");
    });
    $(".hide-code").click(function() {
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

    function func_resize(){
    var width = window.innerWidth || document.documentElement.clientWidth;
    // Tabs Js
    if(width < 768) {
      //$(".wrap-tabs").addClass("rps");
      $(".horizontal-tabs .horizontal-tab-button").each(function(index){
        var tab_index = $(this).index();
        var tab_content = $(".horizontal-tabs-processed .horizontal-tabs-pane");
        if ($(this).children(".horizontal-tabs-pane").length == 0){
          var tab_clone = tab_content.eq( tab_index).clone();
          tab_clone.appendTo(this);
        }
      });
      $(".horizontal-tabs .horizontal-tabs-panes").hide();
      $(".horizontal-tabs .horizontal-tab-button").click(function(index){
        $(".horizontal-tabs .horizontal-tab-button").removeClass( "selected" );
        $(".horizontal-tabs .horizontal-tabs-pane").addClass('horizontal-tab-hidden');
        $(this).addClass( "selected" );
        $(this).children(".horizontal-tabs-pane").removeClass( "horizontal-tab-hidden" );
        return false;
      });
    }
    else if(width >= 768){
      $(".horizontal-tabs .horizontal-tabs-panes").show();
      $(".horizontal-tabs-list .horizontal-tab-button > .horizontal-tabs-pane").remove();
      $(".horizontal-tabs-list .horizontal-tab-button").removeClass("selected");
      $(".horizontal-tabs-processed .horizontal-tabs-pane").addClass('horizontal-tab-hidden');
      $(".horizontal-tabs-processed .horizontal-tabs-pane").eq(0).removeClass( "horizontal-tab-hidden" );
      $(".horizontal-tabs-list .horizontal-tab-button").eq(0).addClass("selected");

      // Js tabs
      $(".horizontal-tabs .horizontal-tab-button").click(function(index){
        var tab_index = $(this).index();
        $(".horizontal-tabs-processed .horizontal-tabs-pane").addClass('horizontal-tab-hidden');
        $(".horizontal-tabs .horizontal-tab-button").removeClass('selected');
        $(this).addClass( "selected" );
        $(".horizontal-tabs-processed .horizontal-tabs-pane").eq( tab_index ).removeClass( "horizontal-tab-hidden" );
        return false;
      });
    }
  }

  func_resize();
  $( window ).resize(function() {
    func_resize();
  });

  });
} )( jQuery );
