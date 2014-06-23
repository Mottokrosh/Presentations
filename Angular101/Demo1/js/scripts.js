// Create App as Angular Module
var nekkidApp = angular.module('nekkidApp', []);

// Define our Main Controller
nekkidApp.controller('MovieCtrl', function ($scope) {

	function resetMovie() {
		$scope.movie = { score: 0 };
	}

	resetMovie();

	// Initialise our library with a couple of sample movies
	$scope.movies = [
		{
			name: 'Naked Gun',
			actors: 'Leslie Nielsen, Priscilla Presley',
			score: 5
		},
		{
			name: 'Xdsadsa',
			actors: 'ssadsda',
			score: 3
		}
	];

	// Sorting
	$scope.predicate = 'name';

	$scope.$watch('predicate', function (newVal, oldVal) {
		console.log(newVal, oldVal);
	});

	// Save Handler
	$scope.saveMovie = function () {
		$scope.movies.push($scope.movie);
		resetMovie();
	};

	// Edit Handler
	$scope.editMovie = function (m) {
		$scope.movie = angular.copy(m);
	}

});
