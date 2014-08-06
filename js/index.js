$( document ).ready(function() {
   $(".js-result").hide();
  
   $("#dateInput").datepicker();
   
   var merchants = [
      {
           name: "NTUC FairPrice",
           category: "Groceries"
       },
   
       {
           name: "Golden Peony",
           category: "Dining"
       },
   
       {
           name: "Man Fu Yuan",
           category: "Dining"
       }
   ]
   
   var promos = [
      {
           card: "World MasterCard",
           coy: "Maybank",
           link:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR10QHSEk1HjEQdG1ZhKJNztSrPzz4iCBYqv-93Hxh-HaRd3dWw",
           category: "Groceries",
           rate: 40,
           start: 20140806,
           end: 20140825,
           minimum:2500,
           online: true
       }
   ]
   
   var rates = [
      {
           card: "World MasterCard",
           coy: "Maybank",
           link:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR10QHSEk1HjEQdG1ZhKJNztSrPzz4iCBYqv-93Hxh-HaRd3dWw",
           category: "Groceries",
           rate: 0.4,
           minimum:2500,
           online: true
       },
       
       {
           card: "World MasterCard",
           coy: "Maybank",
           link:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR10QHSEk1HjEQdG1ZhKJNztSrPzz4iCBYqv-93Hxh-HaRd3dWw",
           category: "Groceries",
           rate: 0.5,
           minimum:2500,
           online: false
       },
       
       {
           card: "World MasterCard",
           coy: "Maybank",
           link:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR10QHSEk1HjEQdG1ZhKJNztSrPzz4iCBYqv-93Hxh-HaRd3dWw",
           category: "All",
           rate: 0.4,
           minimum:2500,
           online: false
       },
   
       {
           card: "PRVI Miles",
           coy: "UOB",
           link:"http://t1.gstatic.com/images?q=tbn:ANd9GcTeyZ78NP7AQ2MjBEVAfOWqOsrFYiUNEJsE2m0KMihykjk7covD",
           category: "Groceries",
           rate: 2,
           minimum:5000,
           online: false
       },
   
       {
           card: "Prestige MasterCard",
           coy: "Citibank",
           link:"http://3.bp.blogspot.com/-WrHgQkOXJKg/Udet6apq_TI/AAAAAAAAEAo/OiRxQpBZbSM/s1600/Citibank+Prestige+World+MasterCard+Elite.jpg",
           category: "Groceries",
           rate: 0.4,
           minimum:1250,
           online: false
       },
   
       {
           card: "Travel Visa Signature",
           coy: "ANZ",
           link: "http://www.airfares.com.sg/promotions/credit-card-deals/anz/img/r-travelcard.jpg",
           category: "Dining",
           rate: 1,
           minimum:2000,
           online: false
       }
   ]
   
   
   $("#compare").click(function(){
      $(".js-index").hide();
      $(".js-result").show();
      
      var amount;
      var category;
      var date;
      var online=false;
      //Get amount
      if($("#amount").val()){
         amount = $("#amount").val();
      }else{
         amount = 0;
      }
      
      //Get online
      if($("input[name=mode]:checked").val()=="Online"){
         online = true;
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
      var merchant = "Merchant: "+$("#merchant").val();
      var mode = "Mode: "+$("input[name=mode]:checked").val();
      $("#amountResult").text("Amount: "+amount +" "+$("#currency").val());
      $("#merchantResult").text(merchant);
      $("#modeResult").text(mode);
      
      
      //Populate and sort results array
      var cardResults = [];
      var cards = [];
      for(var i = 0; i < promos.length ; i++){
         if((promos[i].category == category || promos[i].category == "All")&& promos[i].start <= date && promos[i].end >= date && promos[i].online==online){
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
         if((rates[i].category == category || rates[i].category == "All") && rates[i].online==online){
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

