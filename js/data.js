$( document ).ready(function() {
  
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
           minimum:2500
       }
   ]
   
   var rates = [
      {
           card: "World MasterCard",
           coy: "Maybank",
           link:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR10QHSEk1HjEQdG1ZhKJNztSrPzz4iCBYqv-93Hxh-HaRd3dWw",
           category: "Groceries",
           rate: 0.4,
           minimum:2500
       },
   
       {
           card: "PRVI Miles",
           coy: "UOB",
           link:"http://t1.gstatic.com/images?q=tbn:ANd9GcTeyZ78NP7AQ2MjBEVAfOWqOsrFYiUNEJsE2m0KMihykjk7covD",
           category: "Groceries",
           rate: 2,
           minimum:5000
       },
   
       {
           card: "Prestige MasterCard",
           coy: "Citibank",
           link:"http://3.bp.blogspot.com/-WrHgQkOXJKg/Udet6apq_TI/AAAAAAAAEAo/OiRxQpBZbSM/s1600/Citibank+Prestige+World+MasterCard+Elite.jpg",
           category: "Groceries",
           rate: 0.4,
           minimum:1250
       },
   
       {
           card: "Travel Visa Signature",
           coy: "ANZ",
           link: "http://www.airfares.com.sg/promotions/credit-card-deals/anz/img/r-travelcard.jpg",
           category: "Dining",
           rate: 1,
           minimum:2000
       }
   ]
   
}
