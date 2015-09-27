app.factory('HTTPFactory', ['$http', function($http){
  var object = {};
  object.getBeers = function() {
    return $http.get('api/v1/beers');
  };
   object.getBeer = function() {
    return $http.get('api/v1/beer');
  };
  //post request
  object.postBeer = function(payload){
    return $http.post('api/v1/beers', payload);
  };

  object.deleteBeer = function(id){
    return $http.delete('api/v1/beer/'+id);
  };

  object.putBeer = function(id){
    return $http.put('api/v1/beer/'+id);
  };

  return object;
}]);
