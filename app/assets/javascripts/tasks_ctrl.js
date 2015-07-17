(function(){

  angular.module("app").controller("tasksCtrl", function($scope) {

      $scope.task1 = "Chores!";
      $scope.task2 = "Code!"; 
      $scope.task3 = "Dance!";

      window.scope = $scope;

  });



}())