//DispositivoService
app.factory('DispositivoService', function($resource) {
	return $resource('http://localhost:3000/api/v1/dispositivos/:id', {}, {
		power: {
			method: 'put',
			url: 'http://localhost:3000/api/v1/dispositivos/:id/power',
			params: { id: "@id" }
		}
	});
});

//DispositivoController
app.controller('DispositivoCtrl', function($scope, $routeParams, $route, $location, DispositivoService) {
	
	$scope.list = function() {
		$scope.dispositivos = DispositivoService.query();	
	}
	
	$scope.show = function() {
		$scope.dispositivo = DispositivoService.get({"id": $routeParams.id});
	}
	
	$scope.create = function() {
		$scope.dispositivo = {};
	}	
	
	$scope.edit = function() {
		$scope.dispositivo = DispositivoService.get({"id": $routeParams.id});
	}	
	
	$scope.save = function() {
		DispositivoService.save($scope.dispositivo, function(dispositivo){
			if(dispositivo) {
				$location.path('/');
			}
    	});
	}

    $scope.power = function(dispositivo) {
    	DispositivoService.power(dispositivo, function(){
    		$scope.dispositivo = DispositivoService.query();
    		$location.path('/');
    	});
    }	
	
	//Chama o método definido na rota
	if($route.current.method){ 
		$scope[$route.current.method]();
	}
});
