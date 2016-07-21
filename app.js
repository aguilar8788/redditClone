var app = angular.module('redditClone', []);
//
// app.config(function($routeProvider, $locationProvider) {
//   $routeProvider
//     .when('/index/', {
//       templateUrl: "/index.html",
//       controller: 'indexController'
//     })
//     .when('/')
// })

app.controller('indexController', [
  '$scope',
  function indexController($scope) {
    $scope.message = 'Home page';
    $scope.postForm = false;
    $scope.postData = [];
    $scope.formSubmit = (data) => {
      $scope.postData.push({
          title: $scope.title,
          author: $scope.author,
          imageUrl: $scope.imageUrl,
          description: $scope.description
      })
      $scope.postForm = false;
    }
  }
]);
