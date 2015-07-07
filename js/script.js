( function ( $ ) {
  $(document).ready(function(){
    $(".filter .form-select").chosen({
      width: '100%',
    });

    $('.pane-menu-block-front-page-menu').attr('class','reg-inner-regions');

    $( ".accordion" ).accordion({
      heightStyle: "content",
      collapsible: true
    });
  });
} )( jQuery );
