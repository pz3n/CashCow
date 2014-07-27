$( document ).ready(function() {
   $(".js-result").hide();
   
   $("#compare").click(function(){
      $(".js-index").hide();
      $(".js-result").show();
   });
   
   $("#compare").click(function(){
      $(".js-index").show();
      $(".js-result").hide();
   });
});
