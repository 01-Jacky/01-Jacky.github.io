var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl : "about.html",
      controller : "aboutController"
    })
    .when("/about", {
      templateUrl : "about.html",
      controller : "aboutController"
    })
    .when("/experience", {
      templateUrl : "experience.html",
      controller : "experienceController"
    })
    .when("/skills", {
      templateUrl : "skills.html",
      controller : "skillsController"
    })
    .when("/projects", {
      templateUrl : "projects.html",
      controller : "projectsController"
    })
    .when("/contact", {
      templateUrl : "contact.html",
      controller : "contactController"
    })
    .otherwise({
      templateUrl : "about.html",
      controller : "aboutController"
    });
});

app.controller('MainPageController', function MainPageController($scope) {
  $scope.msg = "Main Controller data";
});


