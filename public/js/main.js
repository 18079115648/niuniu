require.config({
    waitSeconds: 10000000,
    paths: {
        'angular': '../bower_components/angular/angular.min',
        'angular-route': '../bower_components/angular-route/angular-route.min',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies.min',
        // 'spin': '../bower_components/spin.js/spin.min',
        // 'angular-spinner': '../bower_components/angular-spinner/angular-spinner.min',
        //boot js
        'app': 'app',
        'bootstrap': 'bootstrap',
        'router': 'router',
        //local js
        'directives': 'directives/directives'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        'angular-cookies': {
            deps: ['angular'],
            exports: 'angular-cookies'
        },
        // 'angular-spinner': {
        //     deps: ['angular'],
        //     exports: 'angular-spinner'
        // },
        'directives': {
            deps: ['angular'],
            exports: 'directives'
        }
    },
    deps: ['bootstrap'],
    urlArgs: 'bust=' + (new Date()).getTime(),
    packages: [{
        name: 'moment',
        // This location is relative to baseUrl. Choose bower_components
        // or node_modules, depending on how moment was installed.
        location: '/bower_components/moment/min',
        main: 'moment.min'
    }]
});