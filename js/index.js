$( document ).ready(function() {
   $(".js-result").hide();
   
   $("#compare").click(function(){
      $(".js-index").hide();
      $(".js-result").show();
      
      var amount = $("#amount").value() +" "+$("#currency").value();
      $("#amountResult").value() = amount;
   });
   
   $("#back").click(function(){
      $(".js-index").show();
      $(".js-result").hide();
   });
});
