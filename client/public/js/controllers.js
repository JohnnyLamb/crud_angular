app.controller('beerController', function($scope, myFactory) {
  $scope.beers = {};

  //get request
  function getData() {
    myFactory.getBeers().success(function(response){
      $scope.beers = response;
    })
    .error(function(error){
      console.log(error);
    });
  }
  getData();
//post request

  function postData(payload){
    myFactory.postBeer(payload).success(function(response){
      $scope.beers.push(response);
    });
  }

  $scope.addBeer = function(){
      var payload = {
      'name': $scope.name,
      'type': $scope.type,
      'abv': $scope.abv
    };
    postData(payload);
  };


});
