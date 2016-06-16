var app = angular.module('app', ['ngResource', 'ngRoute']);

/**
 * Configuração das Rotas (páginas do sistema)
 */
app.config(['$routeProvider', function($routerProvider){
	$routerProvider
		.when('/', {
			templateUrl: 'app/views/dispositivos_list.html',
			controller: 'DispositivoCtrl',
			method: 'list'
		})

		.when('/dispositivos/new', {
			templateUrl: 'app/views/dispositivos_form.html',
			controller: 'DispositivoCtrl',
			method: 'create'
		})
		
		.when('/dispositivos/:id', {
			templateUrl: 'app/views/dispositivos_show.html',
			controller: 'DispositivoCtrl',
			method: 'show'
		})		
	;
}]);