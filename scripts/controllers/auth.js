'user strict';

app.controller('AuthController', function($scope, $location, Auth, toaster) {

    $scope.register = function(user) {
        Auth.register(user).then(function() {
            toaster.pop('success', "Registration was successful!");
            $location.path('/');
        }, function(err) {
            toaster.pop('error', "Oops, something went wrong!");
        });
    };

    $scope.login = function(user) {

        Auth.login(user)
            .then(function() {
                toaster.pop('success', "Logged in successfully");
                $location.path('/');
            }, function(err) {
                toaster.pop('error', "Oops, something went wrong!");
            });
    };

    $scope.changePassword = function(user) {

        Auth.changePassword(user)
            .then(function() {

                //Reset form
                $scope.user.email = '';
                $scope.user.oldPass = '';
                $scope.user.newPass = '';

                toaster.pop('success', "Password was successfully changed!");
            }, function(err) {
                toaster.pop('error', "Oops, something went wrong!");
            });
    };

});