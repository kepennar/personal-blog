var app = angular.module('personal-blog', [
	'ui.router',
	'ngRoute',
	'ngAnimate',
	'prismic.io',
	'personal-blog.controllers'
]);

app.config(function($stateProvider, $urlRouterProvider, PrismicProvider) {
	'use strict';

	$urlRouterProvider
	.otherwise('/home');

	$stateProvider
	.state('home', {
		url: '/home',
		views: {
			'mainView': { controller: 'AppCtrl'}
		}
	});
	PrismicProvider.setApiEndpoint('https://personal-blog.prismic.io/api');
	PrismicProvider.setAccessToken('');
	PrismicProvider.setClientId('');
	PrismicProvider.setClientSecret('');
	PrismicProvider.setLinkResolver(function(ctx, doc) {
		return 'detail.html?id=' + doc.id + '&slug=' + doc.slug + ctx.maybeRefParam;
	});
});

app.run(function($rootScope) {
	$rootScope.mode = 'dev';
});

