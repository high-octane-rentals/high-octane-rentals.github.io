angular.module('rental').controller('landingCtrl', function($scope){

  $(document).ready(function(){
    $(this).scrollTop(0);
  });

  // var myIndex = 0;
  // carousel();
  //
  // function carousel() {
  //     var i;
  //     var x = document.getElementsByClassName("mySlides");
  //     for (i = 0; i < x.length; i++) {
  //        x[i].style.display = "none";
  //     }
  //     myIndex++;
  //     if (myIndex > x.length) {myIndex = 1}
  //     x[myIndex-1].style.display = "block";
  //     setTimeout(carousel, 5000); // Change image every 2 seconds
  // }

  var slideIndex = 0;
  showDivs(slideIndex);

  $scope.switch = function(n) {
    showDivs(slideIndex = n);
    console.log("clicked");
  };

  $scope.reset = function() {
  	console.log("reset me");
      clearTimeout(window.myTimer);
      window.myTimer = setTimeout(carousel, 5000);
  };

  function currentDiv(n) {
    showDivs(slideIndex = n);
    console.log("switching");
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" opacity-off", "");
    }
    x[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " opacity-off";
  }

  carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1}
      x[slideIndex-1].style.display = "block";
      console.log("current = "+ slideIndex);
      currentDiv(slideIndex);
      console.log("inside carousel");
      window.myTimer = setTimeout(carousel, 5000);
  }


})
