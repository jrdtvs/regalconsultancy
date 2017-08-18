var app = angular.module('regalConsultancy', ['ui.router', 'oc.lazyLoad', 'ngAnimate']);

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	
	$urlRouterProvider.otherwise('/home');
	
	//state configuration
	$stateProvider.state('home', {
		url: '/home',
		templateUrl : '/templates/home/home.html',
		controller : 'homeCtrl',
		cache: false,
		resolve : {
			loadCtrl : ["$ocLazyLoad", function($ocLazyLoad) {
				return $ocLazyLoad.load('/templates/home/home.js');
			}]
		}
	}).state('about', {
		url: '/about',
		templateUrl : '/templates/about/about.html',
		controller : 'aboutCtrl',
		cache: false,
		resolve : {
			loadCtrl : ["$ocLazyLoad", function($ocLazyLoad) {
				return $ocLazyLoad.load('/templates/about/about.js');
			}]
		}
	}).state('services', {
		url: '/services',
		templateUrl : '/templates/services/services.html',
		controller : 'servicesCtrl',
		cache: false,
		resolve : {
			loadCtrl : ["$ocLazyLoad", function($ocLazyLoad) {
				return $ocLazyLoad.load('/templates/services/services.js');
			}]
		}
	}).state('contact', {
		url: '/contact',
		templateUrl : '/templates/contact/contact.html',
		controller : 'contactCtrl',
		cache: false,
		resolve : {
			loadCtrl : ["$ocLazyLoad", function($ocLazyLoad) {
				return $ocLazyLoad.load('/templates/contact/contact.js');
			}]
		}
	});
}]);

app.controller('AppController', ['$scope', '$state', function($scope, $state) {
	$scope.isOpenMobMenu = false;
	
	$scope.getCurrentStateName = function() {
		return $state.current.name;
	}
	
	$scope.toggleMobileMenu = function() {
		$scope.isOpenMobMenu = !$scope.isOpenMobMenu;
	}
}]);

app.directive('readMoreModal', [function() {
	return {
		restrict: 'A',
		scope: {
			title: '<?',
			desc: '<?'
		},
		link: function(scope, elem, attr) {
			elem.on('click', function(e) {
				angular.element(".modal .modal-title").html(scope.title);
				angular.element(".modal .modal-body").html("Content loading please wait...");
				angular.element(".modal").modal("show");
				angular.element(".modal .modal-body").html(scope.desc);
			});
		}
	};
}]);