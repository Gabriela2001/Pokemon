var Pokemon = angular.module("Pokemon", [])

Pokemon.controller("PokemonCtrl", function($http, $scope, $rootScope){
	$scope.Listado = [];

	for(var y=1;y<=750;y++){
		/*llamar api*/
		$http({
			method: "GET",
			url: "https://pokeapi.co/api/v2/pokemon/"+y
		/*Despues de llamar api, almacenar*/
		}).then(function datos (variable){
			/*datos en consola*/
			console.log(variable)
			/*Enviar datos a la lista*/
			$scope.Listado.push(variable)
			/*01000111 01100001 01100010 01110010 01101001 01100101 01101100 01100001*/
		})
		
	}

	
})