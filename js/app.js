var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  // Routes for creating Single Page Applications
  $routeProvider
    .when("/", {
      templateUrl : "experience.html",
    })
    .when("/about", {
      templateUrl : "about.html",
    })
    .when("/experience", {
      templateUrl : "experience.html",
      controller : "experienceController"
    })
    .when("/skills", {
      templateUrl : "skills.html",
    })
    // .when("/projects", {
    //   templateUrl : "projects.html",
    // })
    .when("/contact", {
      templateUrl : "contact.html",
      controller : "contactController"
    })
    .when("/users", {
      templateUrl : "users.html",
    })
    .otherwise({
      templateUrl : "about.html",
      controller : "aboutController"
    });
});

app.controller('MainPageController', function MainPageController($scope) {
  $scope.msg = "Main Controller data";
    
  $scope.mailto = "mailto:";
  $scope.name = "jackyl8@";

  // For displaying the hamburger menu when screen size gets to mobile size
  $scope.displayDropdown = function() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
});


