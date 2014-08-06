$( document ).ready(function() {
   $(".js-result").hide();
  
   $("#dateInput").datepicker();
   
   $("#compare").click(function(){
      $(".js-index").hide();
      $(".js-result").show();
      
      var amount;
      var category;
      var date;
      //Get amount
      if($("#amount").val()){
         amount = $("#amount").val();
      }else{
         amount = 0;
      }
      
      //Get category
      for(var i = 0; i < merchants.length ; i++){
         if(merchants[i].name == $("#merchant").val()){
            category = merchants[i].category;
            break;
         }
      }
      
      //Get date in number chain yyyymmdd
      var d = new Date();
      date= d.getFullYear()*10000 + d.getMonth()*100 + d.getDate();
      
      //Set selection info
      var merchant = "Merchant: "+$("#merchant").val()
      var mode = "Mode: "+$("input[name=mode]:checked").val()
      $("#amountResult").text("Amount: "+amount +" "+$("#currency").val());
      $("#merchantResult").text(merchant);
      $("#modeResult").text(mode);
      
      
      //Populate and sort results array
      var cardResults = [];
      var cards = [];
      for(var i = 0; i < promos.length ; i++){
         if(promos[i].category == category && promos[i].start <= date && promos[i].end >= date){
            if($.inArray(promos[i].card, cards) == -1){
               cards.push(promos[i].card); 
               cardResults.push({
                  card: promos[i].card,
                  link: promos[i].link,
                  points: Math.floor(amount*promos[i].rate)
               });
            }
         }
      }
      
      for(var i = 0; i < rates.length ; i++){
         if(rates[i].category == category){
            if($.inArray(rates[i].card, cards) == -1){
               cards.push(rates[i].card); 
               cardResults.push({
                  card: rates[i].card,
                  link: rates[i].link,
                  points: Math.floor(amount*rates[i].rate)
               });
            }
         }
      }
      
      cardResults.sort(function(a, b) { 
          return b.points - a.points;
      })
      
      
      //Load html display
      $("#js-card-result").empty();
      for(var i = 0; i < cardResults.length ; i++){
         var append=""; 
         append += "<div class='highlight'>" ;
         append += cardResults[i].card +": " + cardResults[i].points + " miles";
         append += "<br style='clear:both' />" ;
         append += "<img src=" +cardResults[i].link+" width='125' height='45' style='margin:0;border:0;padding:0;'/>"
         append += "<span class='col-xs-6' style='width:100px'></span>";
         append += "<button class='btn btn-warning'>Use It!</button>";
         append += "</div>" ;
         $("#js-card-result").append(append);
      }
   });

   $("#back").click(function(){
      $(".js-index").show();
      $(".js-result").hide();
   });
});

