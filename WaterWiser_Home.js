	var myWaterWiserHomeApp = angular.module("WaterWiserHome",['ngRoute']);
	myWaterWiserHomeApp.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            
            when('/login', {
               templateUrl: 'login.html',
               controller: 'MyWaterCtrl'
            }).
			
			when('/error', {
				templateUrl: 'error.html',
				controller: 'MyWaterCtrl'
			}).
            
            when('/newuser', {
               templateUrl: 'newuser.html',
               controller: 'newuser'
            }).
            
			when('/waterwiser', {
               templateUrl: 'waterwiser.html',
               controller: 'MyWaterWiserCtrl'
            }).
			
            otherwise({
				redirectTo: '/login'
			});
         }]);

	myWaterWiserHomeApp.controller("MyWaterCtrl",function($scope, $location, $rootScope) {
		$scope.submit = function() {
			$scope.user="admin";  //should fetch these values from database
			$scope.pwd="admin";
			//alert("user:"+$scope.user+"\npwd:"+$scope.pwd+"\nuser1:"+$scope.user1+"\npwd1:"+$scope.pwd1)
			if(($scope.user == $scope.user1) && ($scope.pwd == $scope.pwd1))
			{
				$rootScope.loggedInUser = $scope.user1;
				$location.path("/waterwiser");
			}
			else
			{
				$location.path("/error");
			}
  };
});
	myWaterWiserHomeApp.controller("MyWaterWiserCtrl",function($scope,$rootScope,$window){
		$scope.sharedData = $rootScope.loggedInUser;
		$scope.popupHeight = $window.innerHeight - 100;
		$scope.IsVisible = false;
            $scope.ShowHide = function () {
				alert("ok")
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }
});
	myWaterWiserHomeApp.directive('ngTree', function() {
return {
restrict: 'E',
transclude: true,
 
controller: function($scope) {
 
$scope.showHeadings = function(title){
title.active = !title.active;
};
 
$scope.headings = [
{
management: "User Management",
action: [
{state: "New User"},
{state: "Edit User"}
]
},
{
management: "Water Management",
action: [
{state: "New"},
{state: "Edit"}
]
},
{
management: "Chemical Management",
action: [
{state: "New"},
{state: "Edit"}
]
},
{
management: "BioManagement",
action: [
{state: "New"},
{state: "Edit"}
]
}
];
},
templateUrl: 'treeview.html'
};
});

