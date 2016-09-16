angular.module('myApp').service('mainService', function($http){
  this.getProducts = function() {
    return $http({
      method: "GET",
      url: "http://practiceapi.devmounta.in/products"
    });
  };
  this.test = function() {
    return "hello";
  };
  this.getProduct = function(id) {
    return $http({
      method: "GET",
      url: "http://practiceapi.devmounta.in/products/" + id
    });
  };});
