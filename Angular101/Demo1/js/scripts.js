// Create App as Angular Module
var nekkidApp = angular.module('nekkidApp', []);

// Define our Main Controller
nekkidApp.controller('MovieCtrl', function ($scope) {

	// Initialise our library with a couple of sample movies
	$scope.movies = [
		{
			name: 'Naked Gun',
			actors: 'Leslie Nielsen, Priscilla Presley',
			score: 5
		}
	];

	// Initialise the object that holds our add/edit movie
	// so that we select the 'unrated' value in the score select
	// by default
	$scope.movie = { score: 0 };

	// Save Handler
	$scope.saveMovie = function () {
		$scope.movies.push($scope.movie);
	};

	// Edit Handler
	$scope.editMovie = function (m) {
		$scope.movie = m;
	}

});
