define(['app'], function () {
    return function ($rootScope, $scope, $http, $location, $interval) {

        $scope.showAlertModal = false;
        $scope.showStartGame = false;


        $scope.showModal = function(){
            $scope.showAlertModal = true;
            $rootScope.spinnerToggle = true;
        };

        $scope.hideModal = function(){
            $scope.showAlertModal = false;
            $rootScope.spinnerToggle = false;
        };

        $scope.alertModalConfirm = function(){
            $scope.showAlertModal = false;
            $rootScope.spinnerToggle = false;
            $scope.showStartGame = true;
        }

        $scope.startGame = function(){
            console.log('Start Game!');
            var startGameNum = 3;
            $scope.showStartGame = false;
            var startGameInterval = $interval(function(){
                $scope.startGameNum = startGameNum
                console.log($scope.startGameNum);

                --startGameNum;
                if($scope.startGameNum === 0){
                    $interval.cancel(startGameInterval);
                }
                
            }, 1000);
        }
    };
});