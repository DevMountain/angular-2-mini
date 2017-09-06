<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we'll cover how to use Angular services to separate the management of data from the controller. We'll also cover how to use `$http` to fetch data from a live API. 

Live example: <a href="#">Click Me!</a>

## Step 1

### Summary

In this step, we'll create a service file and move the local user data from the controller into it.

### Instructions

* Create a new javascript file called `service.js` in `js/`.
* Open `js/service.js`.
* Create a new Angular service called `mainService`.
* Open `js/controller.js` and copy the value of `$scope.users` and then delete `$scope.users`.
* In `js/service.js` create a new variable called `data` and paste the value from your clipboard. 
* Open `index.html`.
* Add a new `script` tag for `js/service.js`.

### Solution

<details>

<summary> <code> js/controller.js </code> </summary>

```js
angular.module('userProfiles').controller('MainController', function($scope) {

});
```

</details>

<details>

<summary> <code> js/service.js </code> </summary>

```js
angular.module('userProfiles').service('mainService', function() {
  var data = [
    {
      "id": 0,
      "first_name": "george",
      "last_name": "bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
    {
      "id": 1,
      "first_name": "lucille",
      "last_name": "bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    },
    {
      "id": 2,
      "first_name": "oscar",
      "last_name": "bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    }
  ];
});
```

</details>

<details>

<summary> <code> index.html </code> </summary>

```html
<!DOCTYPE html>
<html ng-app="userProfiles">
  <head>
    <title>User Profiles</title>
  </head>

  <body ng-controller="MainController">
    <div ng-repeat="user in users">
      <h1>{{user.first_name}} {{user.last_name}}</h1>
      <img src="{{user.avatar}}">
      <hr>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js"></script>
    <script src="js/app.js"></script>
    <script src="js/controller.js"></script>
    <script src="js/service.js"></script>
  </body>
</html>
```

</details>

## Step 2

### Summary

In this step, we'll add a method to the service that provides the local user data. We'll then update the controller to use this service method.

### Instructions

* Open `js/service.js`.
* Create a method on the service called `getUsers` that returns `data`.
* Open `js/controller.js`.
* Import the service into the controller.
* Create a new `$scope` variable called `users` that calls the `getUser` method.

### Solution

<details>

<summary> <code> js/service.js </code> </summary>

```js
angular.module('userProfiles').service('mainService', function() {
  var data = [
    {
      "id": 0,
      "first_name": "george",
      "last_name": "bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
    {
      "id": 1,
      "first_name": "lucille",
      "last_name": "bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    },
    {
      "id": 2,
      "first_name": "oscar",
      "last_name": "bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    }
  ];

  this.getUsers = function() {
    return data;
  };
});
```

</details>

<details>

<summary> <code> js/controller.js </code> </summary>

```js
angular.module('userProfiles').controller('MainController', function($scope, mainService) {
  $scope.users = mainService.getUsers();
});
```

</details>

## Step 3

### Summary

In this step, we'll modify the service to use `$http` to get data from a live API. We'll also have to modify our controller to handle the promise of fetching live data.

### Instructions

* Open `js/service.js`.
* Import `$http` into the service.
* Delete the local data variable.
* Modify the `getUsers` method to `return` a `$http` GET call to `https://reqres.in/api/users?page=1`.
* Open `js/controller.js`.
* Delete `$scope.users` and instead call `mainService.getUsers()`.
  * Catch the promise's response and set the value of `response.data.data` to `$scope.users`.

### Solution

<details>

<summary> <code> js/service.js </code> </summary>

```js
angular.module('userProfiles').service('mainService', function( $http ) {
  this.getUsers = function() {
    return $http({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=1'
    });
  };
});
```

</details>

<details>

<summary> <code> js/controller.js </code> </summary>

```js
angular.module('userProfiles').controller('MainController', function($scope, mainService) {
  mainService.getUsers().then( function( response ) {
    console.log( response );
    $scope.users = response.data.data;
  });
});
```

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
 

