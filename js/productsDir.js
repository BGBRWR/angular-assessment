angular.module('myApp').directive('productsDir', function() {
  return {
    templateUrl: "./views/product-tmpl.html",
    restrict:'E',
    scope: {

    },
    controller: function($scope, mainService){
      $scope.getProducts = mainService.getProducts();
    },
    link: function(scope, element, attrs){
      scope.getProducts.then(function(res){
          scope.products = res.data;
      });
      scope.show = false;
      scope.showText = true;
      scope.showImage = function() {
        if(scope.showText === false) {
          scope.show = false;
          scope.showText = true;
        }
        else {
          scope.show = true;
          scope.showText = false;
        }
      };
      }

    };

  });
