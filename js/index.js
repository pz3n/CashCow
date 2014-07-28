$( document ).ready(function() {
   $(".js-result").hide();
   
   $("#compare").click(function(){
      $(".js-index").hide();
      $(".js-result").show();
      
      var amount;
      if($("#amount").val().empty()){
         amount = "Amount: 0" +" "+$("#currency").val();
      }else{
         amount = "Amount: "+ $("#amount").val() +" "+$("#currency").val();
      }
      var merchant = "Merchant: "+$("#merchant").val()
      var mode = "Mode: "+$("input[name=mode]:checked").val()
      $("#amountResult").text(amount);
      $("#merchantResult").text(merchant);
      $("#modeResult").text(mode);
      
      
   });
   
   $("#back").click(function(){
      $(".js-index").show();
      $(".js-result").hide();
   });
});
