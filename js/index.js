$( document ).ready(function() {
   $(".js-result").hide();
  
   $("#dateInput").datepicker();
   
   var cards = [
      {
           name: "World MasterCard",
           coy: "Maybank",
           link:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR10QHSEk1HjEQdG1ZhKJNztSrPzz4iCBYqv-93Hxh-HaRd3dWw",
           rate: 0.4,
           minimum:2500,
           block: 2500
       },
   
       {
           name: "PRVI Miles",
           coy: "UOB",
           link:"http://t1.gstatic.com/images?q=tbn:ANd9GcTeyZ78NP7AQ2MjBEVAfOWqOsrFYiUNEJsE2m0KMihykjk7covD",
           rate: 2,
           minimum:5000,
           block: 5000
       },
   
       {
           name: "Prestige MasterCard",
           coy: "Citibank",
           link:"http://3.bp.blogspot.com/-WrHgQkOXJKg/Udet6apq_TI/AAAAAAAAEAo/OiRxQpBZbSM/s1600/Citibank+Prestige+World+MasterCard+Elite.jpg",
           rate: 0.4,
           minimum:1250,
           block: 1250
       },
   
       {
           name: "Travel Visa Signature",
           coy: "ANZ",
           link: "http://www.airfares.com.sg/promotions/credit-card-deals/anz/img/r-travelcard.jpg",
           rate: 1,
           minimum:2000,
           block: 2000
       }
   ]
   
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
      $("#amountResult").text("Amount: "+amount +" "+$("#currency").val());
      $("#merchantResult").text(merchant);
      $("#modeResult").text(mode);
      
      var card1Result =  Math.floor(Math.random()*15*amount);
      var card2Result =  Math.floor(Math.random()*card1Result);
      var card3Result =  Math.floor(Math.random()*card2Result);
      $("#card1").text(card1Result+" miles*");
      $("#card2").text(card2Result+" miles*");
      $("#card3").text(card3Result+" miles*");
      
      var cardResults = [];
      alert(cards.length);
      for(var card in cards){
         cardResults.push({
            name: card.name.toString(),
            link: card.link.toString(),
            points: Math.floor(amount/card.block)*card.rate
         });
      }
      
      cardResults.sort(function(a, b) { 
          return a.points - b.points;
      })
      alert(cardResults[0].name);
      
      alert(cardResults[0].link);
      $("#js-card-result").remove();
      for(var cardResult in cardResults){
         var append= "<div class='highlight'><img src=" +cardResult.link().toString()+" width='125' height='45'/><span class='col-xs-6' style='width:100px'></span><button class='btn btn-warning'>Use It!</button></div>";
         $("#js-card-result").append(append);
      }
      
       
   });

   
   
   
   
   $("#back").click(function(){
      $(".js-index").show();
      $(".js-result").hide();
   });
});

