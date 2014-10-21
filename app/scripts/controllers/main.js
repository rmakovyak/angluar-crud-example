'use strict';

/**
 * @ngdoc function
 * @name crudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crudApp
 */
angular.module('crudApp')
  .controller('MainCtrl', function ($scope, jobs) {

    	$scope.getJobs = function() {
            jobs.getJobs( function( data ) {
        		$scope.jobList = data;
        	});
        };

    	$scope.addJob = function ( model ) {
    		jobs.addJob( model, function( data ) {
	    		$scope.getJobs();
	    	});
    	};

        $scope.deleteJob = function ( model ) {
            jobs.deleteJob( model, function( data ) {
                $scope.getJobs();
            });
        };

        $scope.updateJob = function ( model ) {
            jobs.updateJob( model, function( data ) {
                $scope.getJobs();
            });
        };

        $scope.getJobs();
  });
