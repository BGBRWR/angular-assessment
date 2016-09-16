angular.module('myApp').controller('productCtrl', function($scope, mainService, $stateParams){

  var idOfState = $stateParams.id;
  $scope.getProduct = mainService.getProduct(idOfState).then(function(res){
    $scope.productDet = res.data;
  });
  // for(var i = 0; i < mainService.travelInfo.length; i++) {
  //   if(mainService.travelInfo[i].id == idOfState) {
  //     $scope.image = mainService.travelInfo[i].image;
  //     $scope.cityName = mainService.travelInfo[i].city;
  //   }
  // }
});
