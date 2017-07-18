require.config({
    baseUrl: "./",
    paths: {
        "jquery": "lib/jquery/jquery-3.2.1.all",
        "angular": "lib/angular/angular",
        "uiRouter": "lib/angular/angular-ui-router",
        "animate": "lib/angular/angular-animate",
        "bootStrap": "lib/bootstrap/js/bootstrap"
    },
    shim: {
        "bootStrap": {
            deps: ['jquery']
        },
        "uiRouter": {
            deps: ["angular"]
        },
        "animate": {
            deps: ["angular"]
        },
    }
});
require(["jquery", "angular", "uiRouter", "animate", "bootStrap"], function (){
    console.log(arguments);
});