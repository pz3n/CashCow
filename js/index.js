$( document ).ready(function() {
   $(".js-result").hide();
   
   $("#compare").click(function(){
      $(".js-index").hide();
      $(".js-result").show();
      
      var amount;
      if($("#amount").val()){
         amount = "Amount: 0" +" "+$("#currency").val();
      }else{
         amount = "Amount: "+ $("#amount").val() +" "+$("#currency").val();
      }
      var merchant = "Merchant: "+$("#merchant").val()
      var mode = "Mode: "+$("input[name=mode]:checked").val()
      $("#amountResult").text(amount);
      $("#merchantResult").text(merchant);
      $("#modeResult").text(mode);
      
      var card1Result =  Math.random();
      $("#card1").text(card1Result+" miles*");
      
   });
   
   $("#back").click(function(){
      $(".js-index").show();
      $(".js-result").hide();
   });
});
