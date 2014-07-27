$( document ).ready(function() {
   $(".js-result").hide();
   
   $("#compare").click(function(){
      $(".js-index").hide();
      $(".js-result").show();
      
      var amount = $("#amount").val() +" "+$("#currency").val();
      $("#amountResult").text(amount);
      $("#merchantResult").text($("#merchant").val());
      $("#modeResult").text($("#mode").val());
      
   });
   
   $("#back").click(function(){
      $(".js-index").show();
      $(".js-result").hide();
   });
});
