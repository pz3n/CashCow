$( document ).ready(function() {
   $(".js-result").hide();
  
   $("#dateInput").datepicker();
   
   $("#compare").click(function(){
      $(".js-index").hide();
      $(".js-result").show();
      
      var amount;
      if($("#amount").val()){
         amount = $("#amount").val();
      }else{
         amount = 0;
      }
      var merchant = "Merchant: "+$("#merchant").val()
      var mode = "Mode: "+$("input[name=mode]:checked").val()
      $("#amountResult").text("Amount: 0" +" "+$("#currency").val());
      $("#merchantResult").text(merchant);
      $("#modeResult").text(mode);
      
      var card1Result =  Math.floor(Math.random()*15*amount);
      var card2Result =  Math.floor(Math.random()*card1Result);
      var card3Result =  Math.floor(Math.random()*card2Result);
      $("#card1").text(card1Result+" miles*");
      $("#card2").text(card2Result+" miles*");
      $("#card3").text(card3Result+" miles*");
      
   });
   
   $("#back").click(function(){
      $(".js-index").show();
      $(".js-result").hide();
   });
});
