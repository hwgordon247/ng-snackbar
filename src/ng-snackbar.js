angular.module('ngSnackbar', [])
.directive('snackbar', [function () {
    var snackbarTemplate =
        `<div class="snackbar" ng-show="showSnackbar">` +
            `<div class="message" ng-repeat="message in messages track by $index">` +
                `{{message}}` +
                `<button class="dismiss-button" ng-click="dismiss($index)">{{buttonText}}</button>` +
            `</div>` +
        `</div>`

    return {
        restrict: 'AE',
        template: snackbarTemplate,
        controllerAs: 'ctrl',
        controller: snackbarController,
        scope: {
            displayMessage: '=',
            buttonText: '=',
            duration: '='
        }
    };

    function snackbarController($scope) {
        $scope.showSnackbar = false;
        $scope.messages = [];

        var duration = $scope.duration || 10000;

        $scope.displayMessage = function (message) {
            $scope.messages.push(message);
            $scope.toggleShowSnackbar();
            setTimeout(function () {
                $scope.toggleHideSnackbar();
            }, duration);
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
