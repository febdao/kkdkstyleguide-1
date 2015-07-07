( function ( $ ) {
  $(document).ready(function(){
    $(".filter .form-select").chosen({
      width: '100%',
    });
    $(".show-code").click(function(){
      $(this).next(".component--source").toggleClass("element-invisible");
    });
    $(".hide-code").click(function(){
      $(this).parent(".component--source").addClass("element-invisible");
    });
  });
} )( jQuery );
