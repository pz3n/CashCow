$( document ).ready(function() {
   $(".js-result").hide();
   
   $("#compare").click(function(){
      $(".js-index").hide();
      $(".js-result").show();
      
      var amount = $("#amount").val() +" "+$("#currency").val();
      window.alert(amount);
      $("#amountResult").val(amount) ;
   });
   
   $("#back").click(function(){
      $(".js-index").show();
      $(".js-result").hide();
   });
});
