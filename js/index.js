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
           link:"http://www.google.com.sg/imgres?imgurl=http%3A%2F%2Fcdn.expatfinder.com%2Fdata%2Fimgs%2Fproduits%2Fresize150%2Fuob-prvi-miles-platinum-card_135723442203228400.jpg&imgrefurl=http%3A%2F%2Fcredit.expatfinder.com%2Fcredit-card-uob-prvi-miles-platinum-card_212_p615&h=116&w=180&tbnid=JxbNJtznQdZ2AM%3A&zoom=1&docid=aZzsmTCjAb-1GM&ei=rPPdU42VHIqjugSfx4CQCw&tbm=isch&ved=0CB8QMygFMAU&iact=rc&uact=3&dur=633&page=1&start=0&ndsp=46",
           rate: 2,
           minimum:5000,
           block: 5000
       },
   
       {
           name: "Prestige MasterCard",
           coy: "Citibank",
           link:"http://www.google.com.sg/imgres?imgurl=http%3A%2F%2F3.bp.blogspot.com%2F-WrHgQkOXJKg%2FUdet6apq_TI%2FAAAAAAAAEAo%2FOiRxQpBZbSM%2Fs1600%2FCitibank%252BPrestige%252BWorld%252BMasterCard%252BElite.jpg&imgrefurl=http%3A%2F%2Fgenerationsxyz.blogspot.com%2F2013%2F10%2Fnew-credit-cards-in-malaysia-2013.html&h=161&w=249&tbnid=qg1L-1g0vAYExM%3A&zoom=1&docid=aMNfUUKSX44rjM&ei=5_PdU-v7BNLJuASJzYCoAg&tbm=isch&ved=0CB0QMygDMAM&iact=rc&uact=3&dur=122&page=1&start=0&ndsp=48",
           rate: 0.4,
           minimum:1250,
           block: 1250
       },
   
       {
           name: "Travel Visa Signature",
           coy: "ANZ",
           link: "http://www.google.com.sg/imgres?imgurl=http%3A%2F%2Fwww.airfares.com.sg%2Fpromotions%2Fcredit-card-deals%2Fanz%2Fimg%2Fr-travelcard.jpg&imgrefurl=http%3A%2F%2Fwww.airfares.com.sg%2Fpromotions%2Fcredit-card-deals%2Fanz%2Findex.htm&h=150&w=230&tbnid=5xkKSHUW01xKGM%3A&zoom=1&docid=R7M7waSl6jMz5M&ei=cPTdU-6YGoKiugSf1IFA&tbm=isch&ved=0CBsQMygBMAE&iact=rc&uact=3&dur=104&page=1&start=0&ndsp=36",
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
      for(var card in cards){
         cardResults.push({
            name: card.name,
            link: card.link,
            points: Math.floor(amount/card.block)*card.rate
         });
      }
      
      cardResults.sort(function(a, b) { 
          return a.points - b.points;
      })
      alert(cardResults.length);
      for(var cardResult in cardResults){
         $("#js-card-result").append(
            '<div class="highlight"><img src="https://ringgitplus.com/img/card-230/uob-preferred-platinum-visa.png" width="125" height="45"><span class="col-xs-6" id="card1" style="width:100px"></span><button class="btn btn-warning">Use It!</button></div>'
         );
      }
      
   });
   
   $("#back").click(function(){
      $(".js-index").show();
      $(".js-result").hide();
   });
});
