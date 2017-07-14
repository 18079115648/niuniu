define(['app'], function (app) {

    return app.run(['$rootScope', '$http', '$location', '$interval',
            function ($rootScope, $http, $location, $interval) {

                $rootScope.spinnerToggle = false;
                // $rootScope.navbartoggleFunction = function () {
                //     if (document.body.scrollWidth < 768) {
                //         $rootScope.navbartoggle = !$rootScope.navbartoggle;
                //     }
                // };


                $rootScope.$on('$routeChangeStart', function (scope, next, current) {
                    if ($location.path() === '/login' || $location.path() === '/splash') {
                        $rootScope.navbar_display = false;
                        $rootScope.heardbar_display = false;
                        //remove profile if you logout otherwise will error
                        $rootScope.profile = '';
                    } else {
                        $rootScope.navbar_display = true;
                        $rootScope.heardbar_display = true;
                    }
                });
            }
        ])
        .config(['$routeProvider', '$controllerProvider', function ($routeProvider, $controllerProvider) {
            
            $routeProvider.when('/options', {
                    templateUrl: 'view/home.html',
                    controller: 'HomeCtrl',
                    resolve: {
                        load: function ($q) {
                            var deferred = $q.defer();
                            require(['controller/homeController'], function (controller) {
                                $controllerProvider.register('HomeCtrl', controller);
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                }).otherwise('/options');
        }]);
});