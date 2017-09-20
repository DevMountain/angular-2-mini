angular.module('myApp', ['ui.router']).config( function( $stateProvider, $urlRouterProvider ) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('products', {
      url: '/products/:id',
      templateUrl: 'js/products/productsTmpl.html',
      controller: 'productsCtrl'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'js/settings/settingsTmpl.html',
      controller: 'settingsCtrl'
    });

  $urlRouterProvider
    .otherwise('/');
});