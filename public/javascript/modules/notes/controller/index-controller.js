angular.module("NoteWrangler")
.controller("NoteIndexController", ["$scope", "$http", function($scope, $http){
    var controller = this;
    $http({
        "method": "GET",
        "url": "/api/notes"
    })
    .success(function(response){
        controller.notes = response.data;
    });
}]);
