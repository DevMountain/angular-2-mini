angular.module('myApp').service('productsSrvc', function( $http ) {
  this.getShoeData = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/shoes'
    });
  };

  this.getSockData = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/socks'
    });
  };
});