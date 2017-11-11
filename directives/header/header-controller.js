angular.module('rental').controller('headerCtrl', function($scope){

  

  $(document).ready(function(){
    console.log("ready");
    $(".mobile-open").on("click", function(){
          $(".mobile-nav").css("right", "0");
          $(".mobile-nav").css("visibility", "visible");
          $(".middleNav").css("margin-left", "590px");
          $(".middleNav").css("visibility", "hidden");
    });
    $(".mobile-close").on("click", function(){
          $(".mobile-nav").css("right", "-250px");
          $(".mobile-nav").css("visibility", "hidden");
          $(".middleNav").css("margin-left", "0");
          $(".middleNav").css("visibility", "visible");
    });
  });

})
