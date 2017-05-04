angular.module('ngSnackbar', [])
.directive('snackbar', [function () {
    return {
        restrict: 'AE',
        templateUrl: 'views/directives/snackbar.html',
        controllerAs: 'ctrl',
        controller: snackbarController,
        scope: {
            displayMessage: '='
        }
    };

    function snackbarController($scope) {
        $scope.showSnackbar = false;
        $scope.messages = [];

        $scope.displayMessage = function (message) {
            $scope.messages.push(message);
            $scope.toggleShowSnackbar();
            setTimeout(function () {
                $scope.toggleHideSnackbar();
            }, 10000);
        };

        $scope.toggleShowSnackbar = function () {
            $scope.showSnackbar = true;
        };

        $scope.toggleHideSnackbar = function () {
            $scope.messages.shift();
            if ($scope.messages.length === 0) $scope.showSnackbar = false;
            $scope.$digest();
        };

        $scope.dismiss = function (index) {
            $scope.messages.splice(index, 1);
            if ($scope.messages.length === 0) $scope.showSnackbar = false;
        };
    }
}]);
