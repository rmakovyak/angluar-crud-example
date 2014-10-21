'use strict';

/**
 * @ngdoc service
 * @name crudApp.jobs
 * @description
 * # jobs
 * Service in the crudApp.
 */
angular.module('crudApp')
	.service('jobs', function( $http ) {
		this.getJobs = function( callback, errorCallback ) {
			$http.get('http://127.0.0.1:8080/jobs').success(callback).error(errorCallback);
		},

		this.addJob = function( data, callback, errorCallback ) {
			$http.post('http://127.0.0.1:8080/jobs', data).success(callback).error(errorCallback);
		},

		this.deleteJob = function( data, callback, errorCallback ) {
			$http.delete('http://127.0.0.1:8080/jobs/' + data._id).success(callback).error(errorCallback);
		},

		this.updateJob = function( data, callback, errorCallback ) {
			$http.put('http://127.0.0.1:8080/jobs/' + data._id, data).success(callback).error(errorCallback);
		}
	});
