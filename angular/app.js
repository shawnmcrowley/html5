(function() {
    var app = angular.module('store', []);
    <!--Store Controller Logic -->
    app.controller('StoreController',function(){
	  this.products = gems;
        });
        
    <!-- Panel Controller Logic -->
    app.controller('PanelController',function(){
        this.tab = 1;
        
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };       
    });
    <!-- Review Controller -->
    app.controller('ReviewController', function(){
        this.review = {};
        
        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
                };
            });
    
    <!-- Gem Arrays for Display -->

	var gems = [
        {
           name: 'Dodecahedron',
	   price: 5.85,
	   description: 'A beautiful gem, with light and smoky colors.',
           canPurchase: true,
           soldOut: true,
           images:[
               {
               full:'./images/diamond.jpg',
               thumb:'./images/diamond.jpg'
           }   
           ],
           reviews:[
           {
           stars:1,
           body: "This Product is Great",
           author: "tim@hater.com"  
           }
           ]
         
       },
       {
           name:'Pentagonal Gem',
           price: 1.95,
           description:'Pentagaonal Gems with a green hugh.',
           canPurchase: true,
           soldOut: false,
           images: [
               {
               full:'./images/diamond.jpg',
               thumb:'./images/diamond.jpg'
               }
           ],
           reviews:[
           {
           stars:2,
           body: "Great Product",
           author: "joe@thomas.com"
           }
           ]
       }
        ]
})();
