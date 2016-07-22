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
     $scope.reverse = true;
    $scope.postForm = false;
    $scope.commentFormView = false;
    $scope.showComment = false;
    $scope.showCommentToggle = function() {
           $scope.showComment = $scope.showComment === false ? true : false;
       };
    $scope.postData = [{
        'author': 'alex pickens james ya',
        'title': "title",
        'description': " description one ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
        'imageUrl': "https://mscedos.files.wordpress.com/2010/03/03-30-101.jpg",
        'date': "Jul 21, 2016 12:15:07 AM",
        'score': 0,
        upScore: function(){
          this.score +=1;
        },
        downScore : function(){
          this.score -= 1;
        },
        commentCount: 1,
        postComments: [{commentAuthor: "Pete", comment:"this is a comment"}]
      }];

    $scope.formSubmit = () => {
      $scope.postData.push({
          title: $scope.title,
          author: $scope.author,
          imageUrl: $scope.imageUrl,
          description: $scope.postDescription,
          score: 0,
          upScore: function() {
            this.score++;
          },
          downScore: function() {
            this.score--;
          },
          date: new Date(),
          commentCount: 1,
          postComments: [{commentAuthor: "Pete", comment:"this is a comment"}],
          addComment: function(data) {
            this.postComments.push({
              commentAuthor: data.commentAuthor.$viewValue,
              comment: data.comment.$viewValue
            })
            this.commentCount++
          }
      })
      $scope.postForm = false;
    }
  }
]);
