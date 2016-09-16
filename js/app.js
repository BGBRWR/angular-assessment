angular.module('myApp', ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl:"../views/home.html"
    })
    .state("blog", {
      url: "/blog",
      templateUrl:"../views/blog.html"
    })
    .state("about", {
      url: "/about",
      templateUrl:"../views/about.html"
    })
    .state("shop", {
      url: "/shop",
      templateUrl:"../views/shop.html"
    })
    .state("product", {
      url: "/product/:id",
      templateUrl:"../views/product-details.html",
      controller: "productCtrl"
    })


  $urlRouterProvider.otherwise("/");
})
