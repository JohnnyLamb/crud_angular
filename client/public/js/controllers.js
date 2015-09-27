app.controller('beerController', function($scope, HTTPFactory, $http) {
  $scope.beers = {};


  //get request
  function getData() {
    console.log('hit');
    HTTPFactory.getBeers().then(function(response) {
      console.log(response.data.name);
      $scope.beers = response.data;
    });
  }

  function getBeer() {
    console.log('hit');
    HTTPFactory.getBeer().then(function(response) {
      console.log(response.data.name);
      $scope.beer = response.data;
    });
  }
  getData();
  //post request
  function postData(payload) {
    HTTPFactory.postBeer(payload).then(function(response) {
      $scope.beers.push(response.data);
    });
  }
  $scope.addBeer = function() {
    var payload = {
      'name': $scope.name,
      'type': $scope.type,
      'abv': $scope.abv
    };
    postData(payload);
  };
  $scope.editBeer = function(id) {
    var update = $scope.beer;
    $scope.findBeer= 'api/v1/beer/' + id;
    HTTPFactory.getBeer($scope.findBeer,update).then(function(response) {
      getData();
    });

  };
  // putBeer = function(update) {
  //   HTTPFactory.editBeer(update).then(function(response) {
  //     $scope.beers.push(response.data);
  //   });
  // };
  $scope.deleteBeer = function(id) {
    HTTPFactory.deleteBeer(id).then(function(response) {
      getData();
    });
  };
});
