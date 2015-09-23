app.factory('myFactory', ['$http', function($http){
  var object = {};
  object.getBeers = function() {
    return $http.get('api/v1/beers');
  };

  //post request
  object.postBeer = function(payload){
    return $http.post('api/v1/beers', payload);
  };
  return object;
}]);









