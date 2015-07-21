(function(){

  angular.module("app").controller("tasksCtrl", function($scope) {


      $scope.tasks = [{name: "Chores!", clicked: false}, {name: "Code!", clicked: false}, {name: "Dance!", clicked: false}]

      
      $scope.listState = "active"

      $scope.displayTasks = []
      if ($scope.listState === "active"){
        for (i = 0; i < $scope.tasks.length; i++){
          var task = $scope.tasks[i];
          if (!task.clicked){
            $scope.displayTasks.push(task)
          };
        };
      } else if ($scope.listState === "inactive"){
        for (i = 0; i < $scope.tasks.length; i++){
          var task = $scope.tasks[i];
          if (task.clicked){
            $scope.displayTasks.push(task)
          };
        };
      } else if ($scope.listState === "all"){
        $scope.displayTasks = $scope.tasks
      };

      $scope.addTask = function(newTask){
        if (newTask){
          var task = {name: newTask, clicked: false}
          $scope.tasks.push(task);
          if ($scope.listState === "active"){
            $scope.displayTasks.push(task);
          };
        $scope.newTask = "";
        }
      };

      $scope.toggleTask = function(task){
        task.clicked = !task.clicked;
        if ($scope.listState === "active" || $scope.listState === "inactive"){
          var index = $scope.displayTasks.indexOf(task)
          $scope.displayTasks.splice(index, 1);
        };
      };

      $scope.allTasks = function(tasks){
        $scope.listState = "all";
        $scope.displayTasks = $scope.tasks;
      }

      $scope.activeTasks = function(tasks){
        $scope.displayTasks = [];
        $scope.listState = "active";
        for (i = 0; i < $scope.tasks.length; i++){
          var task = $scope.tasks[i];
          if (!task.clicked){
            $scope.displayTasks.push(task)
          };
        };
      }

      $scope.inactiveTasks = function(){
        $scope.listState = "inactive";
        $scope.displayTasks = [];
        for (i = 0; i < $scope.tasks.length; i++){
          var task = $scope.tasks[i];
          if (task.clicked){
            $scope.displayTasks.push(task)
          };
        };
      }

      $scope.activeTasksNum = function(){
        activeTasksArray = [];
        for (i = 0; i < $scope.tasks.length; i++){
          var task = $scope.tasks[i];
          if (!task.clicked){
            activeTasksArray.push(task)
          };
        };
        return activeTasksArray.length;
      };

      $scope.clearInactiveTasks = function(){
        for (i = 0; i < $scope.tasks.length; i++){
          var task = $scope.tasks[i];
          if (task.clicked){
            var returnedTask;
            returnedTask = $scope.tasks.splice(i, 1);
            if (returnedTask){
              i--;
            }
          };
          if ($scope.listState === "inactive"){
            $scope.displayTasks.length = 0;
          };
        };

      }

      window.scope = $scope;

  });



}())