app.controller("contactController", function ($scope) {
  // Doing this instead of showing my address in the html
  // Think this could potentially prevent email spam
  $scope.mailto = "mailto:"
  $scope.name = "jackyl8@";
});