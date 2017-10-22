angular.module('rental').directive('header', function(){


  return {
    templateUrl:'directives/header/header.html',
    restrict: 'E',
    controller:'headerCtrl',
    scope:{
      
    }
  }

})
