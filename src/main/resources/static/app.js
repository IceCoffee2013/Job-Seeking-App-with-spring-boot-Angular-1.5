'use strict';
var foundITApp = angular.module('foundITApp',
    [
        'ngRoute',
        'ngResource',
        'toaster',
        'ngStorage'
    ]
);

function LodashFactory($window) {
    if(!$window._){
        // If lodash is not available you can now provide a
        // mock service, try to load it from somewhere else,
        // redirect the user to a dedicated error page, ...
    }
    return $window._;
}

// Define dependencies
LodashFactory.$inject = ['$window'];

// Register factory
foundITApp.factory('_', LodashFactory);