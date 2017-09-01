(function (){
    'use strict';
    angular.module('LunchCheck', [])
        .controller('MainController', MainController);

    MainController.$inject=['$scope'];

    function MainController ($scope) {
        $scope.foodName=''
        $scope.LunchCheckController = function(){
            var names=$scope.foodName;
            var name=names.split(",");
            console.log(name.length);
            if(names==""){
                $scope.message="Please enter data first";
                $scope.messageStyle={
                    "color": "red"
                }
                $scope.boxStyle={
                    "border": "red 2px solid"
                }
            }
            else if (name.length>0 && name.length<=3) {
                $scope.message="Enjoy!";
                $scope.messageStyle={
                    "color": "green"
                }
                $scope.boxStyle={
                    "border": "green 2px solid"
                }
            }

            else{
                $scope.message="Too much!";
                $scope.messageStyle={
                    "color": "red"
                }
                $scope.boxStyle={
                    "border": "green 2px solid"
                }
            }
        }
    }

})();