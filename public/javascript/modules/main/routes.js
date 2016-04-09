angular.module("NoteWrangler").config(["$routeProvider", function($routeProvider){

    $routeProvider.when("/", {
        "templateUrl": "/public/templates/modules/notes/index.html"
    })
    .when("/notes", {
        "templateUrl": "/public/templates/modules/notes/index.html",
        "controller": "NotesIndexController",
        "controllerAs": "indexController"
    })
    .when("/users", {
        "templateUrl": "/public/templates/modules/users/index.html"
    })
    .otherwise({"redirectTo": "/"});

}]);
