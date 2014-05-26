angular.module('portail-qualif.controllers', [])
	.controller('AppCtrl', ['Prismic', function(Prismic) {
		'use strict';
	    var self = this;
	    Prismic.all().then(function(data) {
	        self.data = data;
	    });
	}]);