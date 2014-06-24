// Create App as Angular Module
var nekkidApp = angular.module('nekkidApp', []);

// Define our Main Controller
nekkidApp.controller('MovieCtrl', function ($scope) {

	// Initialise our library with a couple of sample movies
	$scope.movies = [
		{
			title: 'Naked Gun',
			actors: 'Leslie Nielsen, Priscilla Presley',
			score: 5
		},
		{
			title: 'Xdsadsa',
			actors: 'ssadsda',
			score: 3
		}
	];

	// Sorting
	$scope.predicate = 'title';

	// Handler to reset the movie form
	$scope.resetMovie = function () {
		$scope.movie = { score: 0 };
	};

	// Save Handler
	$scope.saveMovie = function () {
		// Only add if not already present
		if ($scope.movies.indexOf($scope.movie) === -1 ) {
			$scope.movies.push($scope.movie);
		}
		$scope.resetMovie();
	};

	// Edit Handler
	$scope.editMovie = function (m) {
		$scope.movie = m;
	}

	// Delete Handler
	$scope.deleteMovie = function (m) {
		$scope.movies.remove(m);
	}

});

nekkidApp.directive('myStars', function () {
	return {
		restrict: 'E', // (E)lement, (A)ttribute, (C)lass
		scope: {
			movieScore: '=score'
		},
		templateUrl: 'stars.html'
	};
});

// Handy remove-from-array-by-value helper
Array.prototype.remove = function() {
	var what, a = arguments, L = a.length, ax;
	while (L && this.length) {
		what = a[--L];
		while ((ax = this.indexOf(what)) !== -1) {
			this.splice(ax, 1);
		}
	}
	return this;
};