define(['app'], function () {
    return function ($rootScope, $scope, $http, $location, $interval) {

        $scope.showAlertModal = false;
        $scope.showStartGame = false;
        $scope.qiangZhuangStart = false;
        $scope.isZhuang = false;
        $scope.showQiangZhuangInterval = false;
        $scope.showPukeBackGround = false;
        $scope.showZhaoNiuInterval = false;
        $scope.showNiuInterval = false;
        $scope.kaiPai = false;

        $scope.showStep = 0;

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
                    $scope.qiangZhuangStart = true;
                    $scope.qiangZhuangInterval();
                    $interval.cancel(startGameInterval);
                }
            }, 1000);
        }

        $scope.qiangZhuangInterval = function(){
            var qiangZhuangNum = 5;

            $scope.showPukeBackGround = true;
            $scope.showQiangZhuangInterval = true;
            
            $scope.qzInterval = $interval(function(){
                // debugger;
                $scope.showQiangZhuangIntervalNum = qiangZhuangNum
                console.log($scope.showQiangZhuangIntervalNum);
                --qiangZhuangNum;
                if($scope.showQiangZhuangIntervalNum === 0){
                    $scope.showQiangZhuangInterval = false;
                    $scope.isZhuang = true;
                    $interval.cancel($scope.qzInterval);
                    $scope.xiaZhuInterval();
                }
            }, 1000);
        }

        $scope.qiangZhuang = function(){
            $scope.isZhuang = true;
            $scope.showQiangZhuangInterval = false;
            $interval.cancel($scope.qzInterval);
            $scope.xiaZhuInterval();
        }

        $scope.buQiangZhuang = function(){
            $scope.isZhuang = true;
            $scope.showQiangZhuangInterval = false;
            $interval.cancel($scope.qzInterval);
            $scope.xiaZhuInterval();
        }

        $scope.xiaZhuInterval = function(){
            var xiaZhuNum = 5;

            $scope.showXiaZhuInterval = true;
            
            $scope.xzInterval = $interval(function(){
                // debugger;
                $scope.showXiaZhuIntervalNum = xiaZhuNum
                console.log($scope.showXiaZhuIntervalNum);
                --xiaZhuNum;
                if($scope.showXiaZhuIntervalNum === 0){
                    $scope.showXiaZhuInterval = false;
                    $scope.showZhaoNiuInterval = true;
                    $scope.showStep = 1;
                    $interval.cancel($scope.xzInterval);
                    $scope.niuInterval();
                }
            }, 1000);
        }

        $scope.xiaZhu = function(params){
            console.log('下注：' + params);
            $scope.showXiaZhuInterval = false;
            $scope.showZhaoNiuInterval = true;
            $scope.showStep = 1;
            $interval.cancel($scope.xzInterval);
            $scope.niuInterval();
        }

        $scope.niuInterval = function(){
            var niuNum = 5;

            $scope.showNiuInterval = true;
            
            $scope.nInterval = $interval(function(){

                $scope.showNiuIntervalNum = niuNum
                console.log($scope.showNiuIntervalNum);
                --niuNum;
                if($scope.showNiuIntervalNum === 0){
                    $scope.showNiuInterval = false;
                    $scope.showZhaoNiuInterval = false;
                    $scope.showStep = 2;
                    $scope.kaiPai = true;
                    $interval.cancel($scope.nInterval);
                }
            }, 1000);
        }

        $scope.emojiIconClick = function(){

        }
    };
});