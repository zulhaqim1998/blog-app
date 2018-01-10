var myBlog = angular.module('myBlog', []);

function mainController($scope, $http){
  $scope.posts = {};
  $scope.newpost = {};

  $http.get('/api/posts')
    .success(function(data){
      $scope.posts = data.reverse();
    })
    .error(function(data){
      console.log('Error: ' + data);
    });

  $scope.createPost = function(){
    $http.post('/api/post', $scope.newpost)
      .success(function(data){
        $scope.newpost = {};
        $scope.posts = data.reverse();
        console.log('Post data successful');
      })
      .error(function(data){
        console.log('Error: ' + data);
      });
  };
}
