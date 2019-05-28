var p = angular.module("p",[])
p.controller("PokeCtrl",function($scope,$rootScope,$http){

	$scope.Pokedex={},
	$http({
		method:"GET",
		url:"https://pokeapi.co/api/v2/"
	}).then(function Datos(x){
		console.log(x);
	})
})
